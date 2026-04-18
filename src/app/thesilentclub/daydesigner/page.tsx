"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ACTIVITY_PERIOD } from "./activityPeriods";
import { ALL_ACTIVITY_NAMES, CATS, dayNames, fmtDate, Mode, monthNames, Product, ProductId, PRODUCTS, RULES, shortMonths, SLOTS } from "./content";
import { fetchAiScheduleOrFallback, type SlotMeta } from "./suggestScheduleClient";
import { DayDesignerStyles } from "./components/DayDesignerStyles";
import { DesignerHeader } from "./components/DesignerHeader";
import { InviteModal } from "./components/InviteModal";
import { runAiDragGhostAnimation, runGhostBetweenSlots } from "./aiDragAnimation";

const TABLE_TUTORIAL_STORAGE_KEY = "epicentre_daydesigner_table_tutorial_v1";

/** Activities used for the automated table tutorial (restored when the guide closes). */
const TABLE_TUTORIAL_ACTIVITIES = ["Writing", "Reading", "Journalling", "Thinking"] as const;

const TABLE_TUTORIAL_COPY = {
  run: {
    title: "Table guide",
    body: "Each activity drops in once, moves once, then a cursor clicks each × to clear—no need to tap anything.",
  },
} as const;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function TheSilentClubDayDesigner9Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [mode, setMode] = useState<Mode>("manual");
  const [calY, setCalY] = useState(new Date().getFullYear());
  const [calM, setCalM] = useState(new Date().getMonth());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [arrivalDate, setArrivalDate] = useState<string | null>(null);
  const [aiAnswers, setAiAnswers] = useState<Record<string, boolean>>({});
  const [aiContextActivities, setAiContextActivities] = useState("");
  const [aiContextStructure, setAiContextStructure] = useState("");
  const [aiContextArrival, setAiContextArrival] = useState("");

  const [selectedAct, setSelectedAct] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2 | 3>(1);
  const [modalCalY, setModalCalY] = useState(new Date().getFullYear());
  const [modalCalM, setModalCalM] = useState(new Date().getMonth());
  const [modalDate, setModalDate] = useState("");
  const [modalTime, setModalTime] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalQ1, setModalQ1] = useState("");
  const [modalQ2, setModalQ2] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const [aiAutoPlacing, setAiAutoPlacing] = useState(false);
  const [aiDropFlashKey, setAiDropFlashKey] = useState<string | null>(null);
  const [aiPlayId, setAiPlayId] = useState(0);
  const [aiSuggestLoading, setAiSuggestLoading] = useState(false);
  const [aiQuestionIndex, setAiQuestionIndex] = useState(0);
  const [aiResultSource, setAiResultSource] = useState<"cohere" | "fallback" | null>(null);
  const [aiResultNote, setAiResultNote] = useState<string>("");
  /** 0 = add demo, 1 = move demo, 2 = × highlight — advanced automatically in one sequence. */
  const [tableTutorialStep, setTableTutorialStep] = useState<number | null>(null);
  /** Fake mouse for the remove-phase demo (fixed px, viewport coords). */
  const [tutorialFakeCursor, setTutorialFakeCursor] = useState<{ x: number; y: number; clicking: boolean } | null>(null);
  /** Slot whose × is pulsing while the fake cursor “clicks” it. */
  const [tutorialPingRemoveKey, setTutorialPingRemoveKey] = useState<string | null>(null);
  /** Bumped whenever the tutorial opens so the runner effect does not cancel mid-sequence. */
  const [tutorialRunKey, setTutorialRunKey] = useState(0);
  const aiQueueRef = useRef<{ key: string; activity: string }[] | null>(null);
  const dragPreviewRef = useRef<HTMLDivElement | null>(null);
  const schedulePreTutorialRef = useRef<Record<string, string> | null>(null);
  const tutorialAutoOpenedRef = useRef(false);
  const tableTutorialStepForRunnerRef = useRef(tableTutorialStep);
  tableTutorialStepForRunnerRef.current = tableTutorialStep;

  const dismissTableTutorial = () => {
    try {
      window.localStorage.setItem(TABLE_TUTORIAL_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    if (schedulePreTutorialRef.current) {
      setSchedule(schedulePreTutorialRef.current);
      schedulePreTutorialRef.current = null;
    }
    setTutorialFakeCursor(null);
    setTutorialPingRemoveKey(null);
    setTableTutorialStep(null);
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAct(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    if (step !== 3) {
      aiQueueRef.current = null;
      setAiAutoPlacing(false);
      setAiDropFlashKey(null);
      document.querySelectorAll(".ai-drag-ghost").forEach((el) => el.remove());
    }
  }, [step]);

  useEffect(() => {
    if (step !== 2 || mode !== "ai") setAiQuestionIndex(0);
  }, [step, mode]);

  useEffect(() => {
    if (step !== 3) {
      tutorialAutoOpenedRef.current = false;
      return;
    }
    if (aiAutoPlacing) return;
    try {
      if (window.localStorage.getItem(TABLE_TUTORIAL_STORAGE_KEY)) return;
    } catch {
      return;
    }
    if (tutorialAutoOpenedRef.current) return;
    tutorialAutoOpenedRef.current = true;
    schedulePreTutorialRef.current = { ...schedule };
    setTutorialRunKey((k) => k + 1);
    setTableTutorialStep(0);
  }, [step, aiAutoPlacing, schedule]);

  const openTableTutorial = () => {
    schedulePreTutorialRef.current = { ...schedule };
    setTutorialFakeCursor(null);
    setTutorialPingRemoveKey(null);
    setTutorialRunKey((k) => k + 1);
    setTableTutorialStep(0);
  };

  useEffect(() => {
    if (step !== 3 || aiPlayId === 0) return;
    const queue = aiQueueRef.current;
    if (!queue?.length) return;
    aiQueueRef.current = null;
    let cancelled = false;
    (async () => {
      setAiAutoPlacing(true);
      for (const p of queue) {
        if (cancelled) break;
        await runAiDragGhostAnimation(p.activity, p.key);
        if (cancelled) break;
        setSchedule((prev) => ({ ...prev, [p.key]: p.activity }));
        setAiDropFlashKey(p.key);
        window.setTimeout(() => {
          setAiDropFlashKey((cur) => (cur === p.key ? null : cur));
        }, 400);
      }
      if (!cancelled) setAiAutoPlacing(false);
    })();
    return () => {
      cancelled = true;
      document.querySelectorAll(".ai-drag-ghost").forEach((el) => el.remove());
    };
  }, [step, aiPlayId]);

  const isSelectable = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (d < today || !product) return false;
    const dow = d.getDay();
    if (product.id === "residency") return dow === 5 || dow === 6 || dow === 0;
    if (product.id === "solitude") return dow >= 1 && dow <= 5;
    return true;
  };

  const isValidStart = (d: Date) => {
    if (!product) return false;
    if (product.id === "residency") return d.getDay() === 5;
    if (product.id === "solitude") return d.getDay() === 1;
    return true;
  };

  const calendarCells = useMemo(() => {
    const firstDay = new Date(calY, calM, 1).getDay();
    const daysInMonth = new Date(calY, calM + 1, 0).getDate();
    return { firstDay, daysInMonth };
  }, [calM, calY]);

  const canStep1Continue = Boolean(product && arrivalDate);
  const dayCycleLimitReached =
    product?.id === "silence" && Object.keys(schedule).length >= 2 && tableTutorialStep === null;
  const dayCycleSelectedPeriod = useMemo(() => {
    if (product?.id !== "silence") return null;
    for (const key of Object.keys(schedule)) {
      const sid = key.split("_")[1];
      const slot = SLOTS.find((s) => s.id === sid);
      if (slot && !slot.fixed) return slot.period;
    }
    return null;
  }, [product?.id, schedule]);

  const days = useMemo(() => {
    const n = product?.days ?? 1;
    const start = arrivalDate ? new Date(`${arrivalDate}T12:00:00`) : new Date();
    return Array.from({ length: n }, (_, i) => {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      return d;
    });
  }, [arrivalDate, product]);

  const selectProduct = (p: Product) => {
    setProduct(p);
    setSelectedDates([]);
    setArrivalDate(null);
    const t = new Date();
    setCalY(t.getFullYear());
    setCalM(t.getMonth());
  };

  const clickDate = (date: Date) => {
    if (!product) return;
    const range = Array.from({ length: product.days }, (_, i) => {
      const d = new Date(date);
      d.setDate(d.getDate() + i);
      return d;
    });
    setSelectedDates(range);
    setArrivalDate(date.toISOString().split("T")[0]);
  };

  const slotLocked = (di: number, sid: string) => {
    const slot = SLOTS.find((s) => s.id === sid);
    if (!slot) return false;
    if (slot.fixed) return true;
    if (product?.id === "silence") return false;
    const si = SLOTS.findIndex((s) => s.id === sid);
    // On arrival day: lock slots before check-in (s7 = 13:00, index 6)
    const checkInIndex = SLOTS.findIndex((s) => s.id === "s7");
    if (di === 0 && si < checkInIndex) return true;
    // On departure day (multi-day): lock slots after check-out (s4 = 09:30, index 3)
    const checkOutIndex = SLOTS.findIndex((s) => s.id === "s4");
    if ((product?.days ?? 1) > 1 && di === (product?.days ?? 1) - 1 && si > checkOutIndex) return true;
    return false;
  };

  const tableTutorialActive = tableTutorialStep !== null;
  const scheduleRefForTutorial = useRef(schedule);
  scheduleRefForTutorial.current = schedule;

  /** Empty interactive slot keys in grid order (for tutorial placement targets). */
  const getTutorialEmptySlotKeys = (sched: Record<string, string>): string[] => {
    if (!product) return [];
    const keys: string[] = [];
    for (let di = 0; di < days.length; di++) {
      for (const slot of SLOTS) {
        const key = `${di}_${slot.id}`;
        const showCheckBlocks = product.id !== "silence";
        const isCI = showCheckBlocks && di === 0 && slot.id === "s7";
        const isCO = showCheckBlocks && di === days.length - 1 && slot.id === "s4" && days.length > 1;
        if (isCI || isCO || slot.fixed) continue;
        const locked = slotLocked(di, slot.id);
        const periodLocked =
          product.id === "silence" &&
          Boolean(dayCycleSelectedPeriod) &&
          !slot.fixed &&
          slot.period !== dayCycleSelectedPeriod;
        if (locked || periodLocked) continue;
        if (!sched[key]) keys.push(key);
      }
    }
    return keys;
  };

  /** Silence day-cycle allows at most 2 activities in-app; tutorial uses 2 chips + 4 slots. Others use 4 + 8 slots. */
  const tutorialChipCount = product?.id === "silence" ? 2 : 4;

  /** One continuous run: N auto “drops”, loop ghosts, N auto moves, loop move ghosts, highlight N ×, then dismiss. */
  useEffect(() => {
    if (step !== 3 || aiAutoPlacing) return;
    if (tableTutorialStepForRunnerRef.current !== 0) return;
    let cancelled = false;
    const n = tutorialChipCount;
    const acts = TABLE_TUTORIAL_ACTIVITIES.slice(0, n) as unknown as readonly string[];

    const run = async () => {
      const sched = scheduleRefForTutorial.current;
      const empties = getTutorialEmptySlotKeys(sched);
      if (empties.length < 2 * n) {
        schedulePreTutorialRef.current = null;
        setTableTutorialStep(null);
        return;
      }
      const sources = empties.slice(0, n);
      const targets = empties.slice(n, 2 * n);

      for (let i = 0; i < n; i++) {
        await runAiDragGhostAnimation(acts[i], sources[i]);
        if (cancelled) return;
        const a = acts[i];
        const sk = sources[i];
        setSchedule((prev) => (prev[sk] === a ? prev : { ...prev, [sk]: a }));
        await sleep(280);
      }

      if (cancelled) return;
      setTableTutorialStep(1);

      for (let i = 0; i < n; i++) {
        await runGhostBetweenSlots(sources[i], targets[i], acts[i]);
        if (cancelled) return;
        const a = acts[i];
        const from = sources[i];
        const to = targets[i];
        setSchedule((prev) => {
          const next = { ...prev };
          if (next[from] !== a) return prev;
          delete next[from];
          next[to] = a;
          return next;
        });
        await sleep(300);
      }

      if (cancelled) return;
      setTableTutorialStep(2);
      await sleep(350);

      const startX = typeof window !== "undefined" ? window.innerWidth - 56 : 200;
      const startY = typeof window !== "undefined" ? window.innerHeight * 0.42 : 200;
      setTutorialFakeCursor({ x: startX, y: startY, clicking: false });
      await sleep(120);

      for (let i = 0; i < n; i++) {
        if (cancelled) break;
        const slotKey = targets[i];
        const el = document.querySelector<HTMLElement>(`[data-ai-slot="${slotKey}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
          await sleep(280);
        }
        const el2 = document.querySelector<HTMLElement>(`[data-ai-slot="${slotKey}"]`);
        if (!el2) continue;
        const r = el2.getBoundingClientRect();
        const tx = r.left + 6;
        const ty = r.top + 5;
        setTutorialFakeCursor({ x: tx, y: ty, clicking: false });
        await sleep(460);
        if (cancelled) break;
        setTutorialPingRemoveKey(slotKey);
        setTutorialFakeCursor({ x: tx, y: ty, clicking: true });
        await sleep(130);
        setSchedule((prev) => {
          if (!prev[slotKey]) return prev;
          const next = { ...prev };
          delete next[slotKey];
          return next;
        });
        setTutorialPingRemoveKey(null);
        setTutorialFakeCursor({ x: tx, y: ty, clicking: false });
        await sleep(260);
      }

      setTutorialFakeCursor(null);
      if (cancelled) return;
      await sleep(400);
      dismissTableTutorial();
    };

    void run();

    return () => {
      cancelled = true;
    };
    // tableTutorialStep intentionally omitted so mid-sequence updates do not cancel the async run.
  }, [step, aiAutoPlacing, tutorialRunKey, tutorialChipCount, dayCycleSelectedPeriod, days.length, product?.id]);

  // Helper: find icon and color for a placed activity
  const getActMeta = (name: string): { icon: string; color: string } => {
    for (const cat of Object.values(CATS)) {
      const item = cat.items.find((i) => i.name === name);
      if (item) return { icon: item.icon, color: cat.color };
    }
    return { icon: "circle", color: "var(--gold)" };
  };

  const ACTIVITY_HINTS: Record<string, string> = {
    Writing: "Focused writing session in silence.",
    Reading: "Deep reading without interruptions.",
    Journalling: "Private reflection and thought capture.",
    Thinking: "Unstructured time to think clearly.",
    "Idea Sketching": "Map ideas and concepts visually.",
    "Long Walks": "Slow walking to reset mental pace.",
    "Bird Watching": "Observe birds quietly around the estate.",
    "Forest Safari": "Guided nature exploration on-site.",
    Sunrise: "Start the day with stillness and light.",
    "Boat Rides": "Quiet ride time on the water.",
    Kayaking: "Solo or slow-paced movement session.",
    "Star Gazing": "Night sky observation in silence.",
    Gym: "Strength and movement session.",
    Running: "Cardio session to energize body and mind.",
    Cycling: "Steady outdoor movement.",
    Swimming: "Calm, low-impact body reset.",
    Recovery: "Restorative time for body and nervous system.",
    Stretching: "Mobility and breath-led release.",
    Drawing: "Freehand creative expression.",
    Sketching: "Quick visual ideation practice.",
    Photography: "Capture details with full attention.",
    "Zen Garden": "Hands-on mindful arrangement practice.",
    "Farm Work": "Grounding physical work with nature.",
    "Plant Obs.": "Observe plants and patterns slowly.",
    "Board Games": "Light, low-stimulation social play.",
    Cooking: "Intentional meal prep activity.",
    "Lawn Games": "Gentle movement in open space.",
    Conversations: "Intentional human connection window.",
    "Shared Dinner": "Meal with quiet shared presence.",
    Letters: "Write letters you normally postpone.",
    "Silence Block": "Protected no-input silent block.",
    "Dark Room": "Low-stimulation darkness reset.",
    "Digital Fast": "Time away from devices and signals.",
    "Anon. Presence": "Be around others without interaction.",
    "Horizon Gazing": "Look far, soften focus, decompress.",
    "Long Bath": "Warm water recovery and calm.",
  };

  const getActivityHint = (name: string) => ACTIVITY_HINTS[name] ?? "A curated activity for your day cycle.";

  const placeActivity = (key: string, activity: string) => {
    setSchedule((prev) => {
      if (product?.id === "silence" && !prev[key]) {
        const totalPlaced = Object.keys(prev).length;
        if (totalPlaced >= 2) return prev;
        const sid = key.split("_")[1];
        const targetSlot = SLOTS.find((s) => s.id === sid);
        if (!targetSlot || targetSlot.fixed) return prev;
        const existingPeriods = new Set(
          Object.keys(prev)
            .map((k) => {
              const existingSid = k.split("_")[1];
              return SLOTS.find((s) => s.id === existingSid && !s.fixed)?.period ?? null;
            })
            .filter((p): p is string => Boolean(p)),
        );
        if (existingPeriods.size > 0 && !existingPeriods.has(targetSlot.period)) return prev;
      }
      return { ...prev, [key]: activity };
    });
  };

  const handleDropToSlot = (e: React.DragEvent<HTMLDivElement>, key: string) => {
    e.preventDefault();
    const dragged = e.dataTransfer.getData("text/plain");
    const sourceKey = e.dataTransfer.getData("application/x-tsc-source-key");
    const activity = dragged || selectedAct;
    if (!activity) return;
    if (sourceKey && sourceKey !== key) {
      setSchedule((prev) => {
        const sourceValue = prev[sourceKey];
        if (!sourceValue) return prev;
        const next = { ...prev };
        const targetValue = next[key];
        next[key] = sourceValue;
        if (targetValue) next[sourceKey] = targetValue;
        else delete next[sourceKey];
        return next;
      });
    } else {
      placeActivity(key, activity);
    }
    setSelectedAct(null);
  };

  const clearDragPreview = () => {
    if (dragPreviewRef.current) {
      dragPreviewRef.current.remove();
      dragPreviewRef.current = null;
    }
  };

  const setSlotDragPreview = (e: React.DragEvent, activity: string) => {
    clearDragPreview();
    const meta = getActMeta(activity);
    const preview = document.createElement("div");
    preview.style.position = "fixed";
    preview.style.top = "-9999px";
    preview.style.left = "-9999px";
    preview.style.display = "flex";
    preview.style.alignItems = "center";
    preview.style.gap = "6px";
    preview.style.padding = "6px 10px";
    preview.style.border = "1px solid #5a3e28";
    preview.style.background = "#1c1410";
    preview.style.color = meta.color;
    preview.style.fontSize = ".72rem";
    preview.style.lineHeight = "1";
    preview.style.whiteSpace = "nowrap";
    preview.style.maxWidth = "220px";
    preview.style.borderRadius = "6px";
    preview.style.boxShadow = "0 8px 24px rgba(0,0,0,.45)";
    preview.innerHTML = `<span class="material-symbols-outlined" style="font-size:13px;line-height:1;color:${meta.color}">${meta.icon}</span><span style="overflow:hidden;text-overflow:ellipsis">${activity}</span>`;
    document.body.appendChild(preview);
    dragPreviewRef.current = preview;
    e.dataTransfer.setDragImage(preview, 14, 14);
  };

  // Deterministic schedule builder — no AI needed.
  // Nested lookup: [intent][body][arrival] → base activity list
  // Q3 (peak time) reorders slots so preferred period fills first
  // Q4 (explicit picks) are injected at the front
  // Q5 (density) controls how many slots per day get filled
  const SCHEDULE_LOOKUP: Record<string, Record<string, Record<string, string[]>>> = {
    "Finish something I've started": {
      "Physically active": {
        "Still carrying the noise of the week":   ["Long Bath", "Running", "Writing", "Journalling", "Reading"],
        "Somewhere in between":                   ["Running", "Writing", "Journalling", "Thinking", "Reading"],
        "Already quiet, ready to go deep":        ["Writing", "Journalling", "Thinking", "Running", "Idea Sketching"],
      },
      "Rested and still": {
        "Still carrying the noise of the week":   ["Long Bath", "Horizon Gazing", "Writing", "Journalling", "Silence Block"],
        "Somewhere in between":                   ["Writing", "Journalling", "Reading", "Thinking", "Silence Block"],
        "Already quiet, ready to go deep":        ["Writing", "Thinking", "Journalling", "Idea Sketching", "Reading"],
      },
      "A mix of both": {
        "Still carrying the noise of the week":   ["Long Bath", "Long Walks", "Writing", "Journalling", "Reading"],
        "Somewhere in between":                   ["Long Walks", "Writing", "Journalling", "Thinking", "Reading"],
        "Already quiet, ready to go deep":        ["Writing", "Journalling", "Long Walks", "Idea Sketching", "Thinking"],
      },
    },
    "Think without interruption": {
      "Physically active": {
        "Still carrying the noise of the week":   ["Long Bath", "Running", "Thinking", "Long Walks", "Journalling"],
        "Somewhere in between":                   ["Running", "Thinking", "Long Walks", "Journalling", "Idea Sketching"],
        "Already quiet, ready to go deep":        ["Thinking", "Running", "Long Walks", "Journalling", "Idea Sketching"],
      },
      "Rested and still": {
        "Still carrying the noise of the week":   ["Horizon Gazing", "Silence Block", "Thinking", "Journalling", "Long Walks"],
        "Somewhere in between":                   ["Thinking", "Journalling", "Silence Block", "Long Walks", "Reading"],
        "Already quiet, ready to go deep":        ["Thinking", "Silence Block", "Journalling", "Idea Sketching", "Long Walks"],
      },
      "A mix of both": {
        "Still carrying the noise of the week":   ["Long Bath", "Long Walks", "Thinking", "Journalling", "Silence Block"],
        "Somewhere in between":                   ["Long Walks", "Thinking", "Journalling", "Idea Sketching", "Reading"],
        "Already quiet, ready to go deep":        ["Thinking", "Long Walks", "Journalling", "Idea Sketching", "Silence Block"],
      },
    },
    "Rest and recover": {
      "Physically active": {
        "Still carrying the noise of the week":   ["Long Bath", "Recovery", "Stretching", "Long Walks", "Bird Watching"],
        "Somewhere in between":                   ["Recovery", "Stretching", "Long Walks", "Bird Watching", "Sunrise"],
        "Already quiet, ready to go deep":        ["Stretching", "Recovery", "Long Walks", "Bird Watching", "Horizon Gazing"],
      },
      "Rested and still": {
        "Still carrying the noise of the week":   ["Long Bath", "Horizon Gazing", "Silence Block", "Dark Room", "Recovery"],
        "Somewhere in between":                   ["Horizon Gazing", "Silence Block", "Recovery", "Long Walks", "Bird Watching"],
        "Already quiet, ready to go deep":        ["Silence Block", "Horizon Gazing", "Recovery", "Star Gazing", "Long Walks"],
      },
      "A mix of both": {
        "Still carrying the noise of the week":   ["Long Bath", "Recovery", "Long Walks", "Bird Watching", "Horizon Gazing"],
        "Somewhere in between":                   ["Recovery", "Long Walks", "Bird Watching", "Stretching", "Horizon Gazing"],
        "Already quiet, ready to go deep":        ["Long Walks", "Recovery", "Bird Watching", "Star Gazing", "Silence Block"],
      },
    },
    "I don't know yet": {
      "Physically active": {
        "Still carrying the noise of the week":   ["Long Bath", "Long Walks", "Running", "Bird Watching", "Journalling"],
        "Somewhere in between":                   ["Long Walks", "Running", "Bird Watching", "Reading", "Journalling"],
        "Already quiet, ready to go deep":        ["Long Walks", "Bird Watching", "Running", "Journalling", "Star Gazing"],
      },
      "Rested and still": {
        "Still carrying the noise of the week":   ["Long Bath", "Horizon Gazing", "Reading", "Journalling", "Silence Block"],
        "Somewhere in between":                   ["Reading", "Journalling", "Long Walks", "Bird Watching", "Horizon Gazing"],
        "Already quiet, ready to go deep":        ["Reading", "Journalling", "Bird Watching", "Star Gazing", "Silence Block"],
      },
      "A mix of both": {
        "Still carrying the noise of the week":   ["Long Bath", "Long Walks", "Reading", "Bird Watching", "Journalling"],
        "Somewhere in between":                   ["Long Walks", "Reading", "Bird Watching", "Journalling", "Sunrise"],
        "Already quiet, ready to go deep":        ["Long Walks", "Bird Watching", "Reading", "Journalling", "Star Gazing"],
      },
    },
  };

  // Slot ordering by preferred peak time (Q3) — reorder free slots so preferred period comes first
  const PEAK_PERIOD_ORDER: Record<string, string[]> = {
    "Early morning":  ["Dawn", "Morning", "Afternoon", "Evening", "Night"],
    "Late morning":   ["Morning", "Dawn", "Afternoon", "Evening", "Night"],
    "Afternoon":      ["Afternoon", "Morning", "Evening", "Dawn", "Night"],
    "Evening":        ["Evening", "Night", "Afternoon", "Morning", "Dawn"],
  };

  /** Rule-based schedule (used as fallback and as baseline for Cohere). */
  const computeHeuristicPlacementOrder = (): { key: string; activity: string }[] => {
    const a = aiAnswers;

    const intent = ["Finish something I've started", "Think without interruption", "Rest and recover", "I don't know yet"]
      .find((k) => a[k]) ?? "I don't know yet";

    const body = ["Physically active", "Rested and still", "A mix of both"]
      .find((k) => a[k]) ?? "A mix of both";

    const arrivalText = aiContextArrival.trim().toLowerCase();
    const arrival = arrivalText.includes("noise") || arrivalText.includes("overwhelm") || arrivalText.includes("drained")
      ? "Still carrying the noise of the week"
      : arrivalText.includes("quiet") || arrivalText.includes("deep") || arrivalText.includes("ready")
        ? "Already quiet, ready to go deep"
        : "Somewhere in between";

    const structureText = aiContextStructure.trim().toLowerCase();
    const density = structureText.includes("most") || structureText.includes("full") || structureText.includes("structured")
      ? 3
      : structureText.includes("empty") || structureText.includes("minimal") || structureText.includes("light")
        ? 1
        : 2;

    const peakTime = ["Early morning", "Late morning", "Afternoon", "Evening"]
      .find((k) => a[k]) ?? "Late morning";
    const periodOrder = PEAK_PERIOD_ORDER[peakTime];

    let baseActs: string[] = SCHEDULE_LOOKUP[intent]?.[body]?.[arrival]
      ?? ["Reading", "Journalling", "Long Walks", "Bird Watching", "Thinking"];

    const explicitText = aiContextActivities.trim().toLowerCase();
    const explicit = ALL_ACTIVITY_NAMES.filter((name) => explicitText.includes(name.toLowerCase()));
    if (explicit.length) {
      baseActs = [...explicit, ...baseActs.filter((x) => !explicit.includes(x))];
    }

    const freeSlots = SLOTS.filter((s) => !s.fixed);
    const sortedFree = [...freeSlots].sort((sa, sb) => {
      const ai = periodOrder.indexOf(sa.period);
      const bi = periodOrder.indexOf(sb.period);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    const next: Record<string, string> = {};
    const placementOrder: { key: string; activity: string }[] = [];
    let totalPlaced = 0;
    let silencePeriod =
      product?.id === "silence"
        ? Object.keys(next)
            .map((k) => {
              const sid = k.split("_")[1];
              return SLOTS.find((s) => s.id === sid && !s.fixed)?.period ?? null;
            })
            .find((p): p is string => Boolean(p)) ?? null
        : null;

    let actCursor = 0;

    days.forEach((_, di) => {
      let placed = 0;
      sortedFree.forEach((slot) => {
        if (placed >= density || slotLocked(di, slot.id)) return;
        if (product?.id === "silence" && totalPlaced >= 2) return;
        if (product?.id === "silence") {
          if (!silencePeriod) silencePeriod = slot.period;
          if (slot.period !== silencePeriod) return;
        }
        const key = `${di}_${slot.id}`;
        if (!next[key]) {
          let actToPlace: string | null = null;
          for (let attempt = 0; attempt < baseActs.length; attempt++) {
            const candidate = baseActs[(actCursor + attempt) % baseActs.length];
            const allowed = ACTIVITY_PERIOD[candidate];
            if (!allowed || allowed.includes(slot.period)) {
              actToPlace = candidate;
              actCursor = (actCursor + attempt + 1) % baseActs.length;
              break;
            }
          }
          if (!actToPlace) return;
          next[key] = actToPlace;
          placementOrder.push({ key, activity: actToPlace });
          placed += 1;
          totalPlaced += 1;
        }
      });
    });

    return placementOrder;
  };

  const handleS2 = async () => {
    if (mode === "manual") {
      setStep(3);
      return;
    }
    if (!product) return;

    setAiSuggestLoading(true);
    setAiResultSource(null);
    setAiResultNote("");
    try {
      const fallback = computeHeuristicPlacementOrder();
      const slotMeta: SlotMeta[] = fallback.map(({ key }) => {
        const sid = key.split("_")[1];
        const slot = SLOTS.find((s) => s.id === sid);
        return { key, period: slot?.period ?? "", time: slot?.t ?? "" };
      });
      const aiResult = await fetchAiScheduleOrFallback(
        fallback,
        product,
        aiAnswers,
        { q4: aiContextActivities, q5: aiContextStructure, q6: aiContextArrival },
        slotMeta,
      );
      const placementOrder = aiResult.placements;
      setAiResultSource(aiResult.source);
      setAiResultNote(aiResult.note || "");

      setSchedule({});
      setStep(3);
      setAiDropFlashKey(null);

      if (placementOrder.length === 0) {
        setAiAutoPlacing(false);
        return;
      }

      aiQueueRef.current = placementOrder;
      setAiPlayId((n) => n + 1);
    } finally {
      setAiSuggestLoading(false);
    }
  };

  const prevMonth = () => {
    if (calM === 0) { setCalY(calY - 1); setCalM(11); } else { setCalM(calM - 1); }
  };
  const nextMonth = () => {
    if (calM === 11) { setCalY(calY + 1); setCalM(0); } else { setCalM(calM + 1); }
  };
  const downloadPlan = () => {
    const lines: string[] = [];
    lines.push("The Silent Club - Day Designer");
    lines.push("");
    lines.push(`Plan: ${product ? `${product.name} (${product.cycle})` : "Not selected"}`);
    lines.push(`Mode: ${mode === "ai" ? "AI" : "Selfdesign"}`);
    lines.push("");
    lines.push("Schedule:");
    if (!days.length) {
      lines.push("- No dates selected.");
    } else {
      days.forEach((d, di) => {
        lines.push(`${dayNames[d.getDay()]}, ${d.getDate()} ${shortMonths[d.getMonth()]}`);
        SLOTS.forEach((slot) => {
          const key = `${di}_${slot.id}`;
          const value = slot.fixed || schedule[key];
          if (value) lines.push(`  ${slot.t} - ${value}`);
        });
      });
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `day-designer-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const stepClass = (n: number) => `step ${step === n ? "active" : ""} ${n < step ? "done" : ""}`;
  const stepOneLabel = useMemo(() => {
    if (!product || selectedDates.length === 0) return "Choose your stay";
    const firstDate = fmtDate(selectedDates[0]);
    const lastDate = fmtDate(selectedDates[selectedDates.length - 1]);
    const dateLabel = selectedDates.length === 1 ? firstDate : `${firstDate} to ${lastDate}`;
    return `Choose your stay: ${product.name} ${dateLabel}`;
  }, [product, selectedDates]);
  const stepTwoLabel = useMemo(() => {
    if (mode === "ai") return "How to design: AI";
    return "How to design: Selfdesign";
  }, [mode]);

  /** Option-only groups (labels are numbered in `aiQuestionFlow` in display order 01–06). */
  const aiOptionGroups = [
    ["Finish something I've started", "Think without interruption", "Rest and recover", "I don't know yet"],
    ["Physically active", "Rested and still", "A mix of both"],
    ["Early morning", "Late morning", "Afternoon", "Evening"],
  ] as const;
  const aiQuestionFlow = [
    { type: "option" as const, groupIndex: 0, title: "01: What are you coming here to do?" },
    { type: "text" as const, key: "activities" as const, title: "02: Any activities you already want?", placeholder: "Example: Writing, Long Walks, Bird Watching" },
    { type: "option" as const, groupIndex: 1, title: "03: How do you want your body to feel each day?" },
    { type: "text" as const, key: "structure" as const, title: "04: How structured should your days feel?", placeholder: "Example: Keep it light, just a few anchors each day." },
    { type: "option" as const, groupIndex: 2, title: "05: When does your thinking feel sharpest?" },
    { type: "text" as const, key: "arrival" as const, title: "06: How are you arriving?", placeholder: "Example: Carrying a lot of noise and decision fatigue." },
  ];
  const aiQuestionsTotal = aiQuestionFlow.length;
  const currentFlowQuestion = aiQuestionFlow[aiQuestionIndex];
  const currentOptionGroup =
    currentFlowQuestion?.type === "option" ? aiOptionGroups[currentFlowQuestion.groupIndex] : null;
  const aiCurrentQuestionAnswered =
    currentFlowQuestion?.type === "option"
      ? Boolean(currentOptionGroup && currentOptionGroup.some((opt) => aiAnswers[opt]))
      : currentFlowQuestion?.key === "activities"
        ? aiContextActivities.trim().length > 0
        : currentFlowQuestion?.key === "structure"
          ? aiContextStructure.trim().length > 0
          : aiContextArrival.trim().length > 0;

  const selectSingleInGroup = (groupOpts: readonly string[], selected: string) => {
    setAiAnswers((prev) => {
      const next = { ...prev };
      groupOpts.forEach((opt) => {
        next[opt] = opt === selected;
      });
      return next;
    });
  };

  return (
    <main>
      <DayDesignerStyles />
      <DesignerHeader
        stepClass={stepClass}
        onBackToSite={() => router.push("/thesilentclub/home")}
        stepOneLabel={stepOneLabel}
        stepTwoLabel={stepTwoLabel}
      />

      {step === 1 && (
        <div className="p-inner">
          <div className="p-inner-content">
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300 }}>Which experience are you considering?</h2>
          <p style={{ color: "var(--text-3)", fontStyle: "italic", marginBottom: 12 }}>Select a product, then choose your arrival date.</p>
          <div className="p-grid">
            {PRODUCTS.map((p) => (
              <div key={p.id} className={`pc ${product?.id === p.id ? "sel" : ""}`} onClick={() => selectProduct(p)}>
                <div style={{ fontSize: "1.6rem", color: "var(--rule-2)", fontFamily: "var(--serif)" }}>{p.count}</div>
                <div style={{ fontSize: "1.15rem", fontFamily: "var(--serif)" }}>{p.name}</div>
                <div style={{ fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-dim)", marginTop: 4 }}>{p.cycle}</div>
                <div style={{ fontSize: ".85rem", color: "var(--text-3)", marginTop: 4 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {product && (
            <div className="cal-wrap">
              <div className="cal-box">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <button className="btn-g" onClick={prevMonth}>‹</button>
                  <div style={{ fontSize: ".82rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-2)" }}>{monthNames[calM]} {calY}</div>
                  <button className="btn-g" onClick={nextMonth}>›</button>
                </div>
                <div style={{ fontSize: ".82rem", color: "var(--gold)", textAlign: "center", marginBottom: 12, fontStyle: "italic", fontFamily: "var(--serif)" }}>{RULES[product.id]}</div>
                <div className="cal-days-hdr">{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => <div key={d} className="cal-dh">{d}</div>)}</div>
                <div className="cal-days">
                  {Array.from({ length: calendarCells.firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                  {Array.from({ length: calendarCells.daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const date = new Date(calY, calM, day);
                    const selectable = isSelectable(date);
                    const validStart = isValidStart(date);
                    const inRange = selectedDates.some((sd) => sd.toDateString() === date.toDateString());
                    const isStart = selectedDates.length > 0 && selectedDates[0].toDateString() === date.toDateString();
                    const isEnd = selectedDates.length > 0 && selectedDates[selectedDates.length - 1].toDateString() === date.toDateString();
                    const style: React.CSSProperties = { textAlign: "center", padding: "9px 3px", fontSize: ".9rem", borderRadius: 2, cursor: selectable && validStart ? "pointer" : "default", color: "var(--text-3)" };
                    if (!selectable) style.color = "var(--rule-2)";
                    else if (inRange) { style.background = isStart || isEnd ? "var(--gold-dim)" : "rgba(197,160,101,.15)"; style.color = isStart || isEnd ? "var(--bg)" : "var(--gold-pale)"; }
                    else if (validStart) style.color = "var(--gold-pale)";
                    return <div key={day} style={style} onClick={() => selectable && validStart && clickDate(date)}>{day}</div>;
                  })}
                </div>
              </div>
              <div>
                <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>Selected dates</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{selectedDates.map((d) => <div key={d.toISOString()} style={{ padding: "7px 12px", border: "1px solid var(--rule-2)", fontSize: ".82rem", color: "var(--gold-dim)" }}>{fmtDate(d)}</div>)}</div>
              </div>
            </div>
          )}
          </div>
          <div className="p-inner-footer">
            <button className="btn" disabled={!canStep1Continue} style={{ width: "100%" }} onClick={() => setStep(2)}>Continue →</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="p-inner">
          <h2 style={{ fontSize: "1.1rem", color: "var(--text-2)", marginBottom: 6 }}>How would you like to design your stay?</h2>
          <p style={{ fontSize: ".9rem", color: "var(--text-3)", marginBottom: 16 }}>Let AI suggest a rhythm, or start with a blank schedule.</p>
          <div className="c-grid">
            <div className={`cc ${mode === "ai" ? "sel" : ""}`} onClick={() => setMode("ai")}><div style={{ position: "absolute", top: 14, right: 14, fontSize: ".7rem", border: "1px solid var(--rule-2)", padding: "3px 9px" }}>Recommended</div><div style={{ fontSize: "1.2rem" }}>◎</div><div style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", marginTop: 6 }}>Let AI suggest my days</div><div style={{ fontSize: ".88rem", color: "var(--text-3)", marginTop: 4 }}>Answer 6 quick questions. We pre-fill a suggested schedule. Override anything.</div></div>
            <div className={`cc ${mode === "manual" ? "sel" : ""}`} onClick={() => setMode("manual")}><div style={{ fontSize: "1.2rem" }}>◻</div><div style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", marginTop: 6 }}>I'll design it myself</div><div style={{ fontSize: ".88rem", color: "var(--text-3)", marginTop: 4 }}>Start with a blank grid. Pick activities and place them. Or leave everything empty.</div></div>
          </div>
          {mode === "ai" && (
            <div style={{ border: "1px solid var(--rule)", background: "var(--bg-2)", padding: 20, marginTop: 16, minHeight: 200, maxHeight: 200, overflow: "auto", display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: 12, fontSize: ".62rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-3)", flexShrink: 0 }}>
                Question {aiQuestionIndex + 1} of {aiQuestionsTotal}
              </div>
              <div style={{ flex: 1 }}>
              {currentFlowQuestion?.type === "option" ? (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                    {currentFlowQuestion.title}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {(currentOptionGroup ?? []).map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`ai-opt ${aiAnswers[opt] ? "on" : ""}`}
                        onClick={() => selectSingleInGroup(currentOptionGroup!, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : currentFlowQuestion?.key === "activities" ? (
                <div style={{ marginBottom: 4 }}>
                  <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                    {currentFlowQuestion.title}
                  </div>
                  <textarea
                    value={aiContextActivities}
                    onChange={(e) => setAiContextActivities(e.target.value)}
                    placeholder={currentFlowQuestion.placeholder}
                    rows={3}
                    style={{ width: "100%", minHeight: 100, maxHeight: 120, background: "var(--bg-3)", border: "1px solid var(--rule-2)", color: "var(--gold-pale)", padding: "10px 12px", resize: "none", outline: "none", fontFamily: "var(--sans)", fontSize: ".88rem", lineHeight: 1.5 }}
                  />
                </div>
              ) : currentFlowQuestion?.key === "structure" ? (
                <div style={{ marginBottom: 4 }}>
                  <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                    {currentFlowQuestion.title}
                  </div>
                  <textarea
                    value={aiContextStructure}
                    onChange={(e) => setAiContextStructure(e.target.value)}
                    placeholder={currentFlowQuestion.placeholder}
                    rows={3}
                    style={{ width: "100%", minHeight: 100, maxHeight: 120, background: "var(--bg-3)", border: "1px solid var(--rule-2)", color: "var(--gold-pale)", padding: "10px 12px", resize: "none", outline: "none", fontFamily: "var(--sans)", fontSize: ".88rem", lineHeight: 1.5 }}
                  />
                </div>
              ) : currentFlowQuestion ? (
                <div style={{ marginBottom: 4 }}>
                  <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                    {currentFlowQuestion.title}
                  </div>
                  <textarea
                    value={aiContextArrival}
                    onChange={(e) => setAiContextArrival(e.target.value)}
                    placeholder={currentFlowQuestion.placeholder}
                    rows={3}
                    style={{ width: "100%", minHeight: 100, maxHeight: 120, background: "var(--bg-3)", border: "1px solid var(--rule-2)", color: "var(--gold-pale)", padding: "10px 12px", resize: "none", outline: "none", fontFamily: "var(--sans)", fontSize: ".88rem", lineHeight: 1.5 }}
                  />
                </div>
              ) : null}
              </div>
            </div>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button
              className="btn-g"
              onClick={() => {
                if (mode === "ai" && aiQuestionIndex > 0) {
                  setAiQuestionIndex((n) => n - 1);
                  return;
                }
                setStep(1);
              }}
            >
              {mode === "ai" && aiQuestionIndex > 0 ? "← Previous" : "← Back"}
            </button>
            <button
              className="btn"
              type="button"
              disabled={aiSuggestLoading || (mode === "ai" && !aiCurrentQuestionAnswered)}
              onClick={() => {
                if (mode === "ai" && aiQuestionIndex < aiQuestionsTotal - 1) {
                  setAiQuestionIndex((n) => n + 1);
                  return;
                }
                void handleS2();
              }}
            >
              {aiSuggestLoading ? "Shaping your stay…" : mode === "ai" && aiQuestionIndex < aiQuestionsTotal - 1 ? "Next →" : "Shape my Stay →"}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="s3">
          {tableTutorialActive && (
            <div
              className="table-tutorial-scrim"
              aria-hidden
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(15, 11, 8, 0.78)",
                pointerEvents: "auto",
              }}
            />
          )}
          {tutorialFakeCursor && (
            <div
              className={`table-tutorial-fake-cursor ${tutorialFakeCursor.clicking ? "is-down" : ""}`}
              style={{
                position: "fixed",
                left: tutorialFakeCursor.x,
                top: tutorialFakeCursor.y,
                pointerEvents: "none",
                zIndex: 10160,
                transition:
                  "left 0.42s cubic-bezier(0.22, 1, 0.36, 1), top 0.42s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden
            >
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: "var(--gold-pale)", textShadow: "0 2px 14px rgba(0,0,0,.75)" }}>
                near_me
              </span>
            </div>
          )}
          {aiResultSource && (
            <div style={{ position: "fixed", top: 72, right: 24, zIndex: tableTutorialActive ? 108 : 45, fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", color: aiResultSource === "cohere" ? "#c5a065" : "#b09070" }}>
              AI Source: {aiResultSource === "cohere" ? "Cohere" : "Fallback"}
              {aiResultSource === "fallback" && aiResultNote && (
                <span style={{ display: "block", marginTop: 4, fontSize: ".58rem", letterSpacing: ".08em", textTransform: "none", color: "#7a6048" }}>
                  {aiResultNote}
                </span>
              )}
            </div>
          )}
          {aiAutoPlacing && (
            <div
              style={{
                position: "fixed",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 40,
                fontSize: ".72rem",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                pointerEvents: "none",
              }}
            >
              Placing your schedule…
            </div>
          )}
          <div
            className={`pal ${tableTutorialStep === 0 ? "table-tutorial-spotlight-pal" : ""}`}
            style={{
              position: tableTutorialActive ? "relative" : undefined,
              zIndex: tableTutorialActive ? (tableTutorialStep === 0 ? 110 : 40) : undefined,
              isolation: tableTutorialActive && tableTutorialStep === 0 ? "isolate" : undefined,
              pointerEvents: aiAutoPlacing ? "none" : "auto",
              opacity: aiAutoPlacing ? 0.7 : 1,
              transition: "opacity .3s",
            }}
          >
            <div className="pal-cats">
              {Object.entries(CATS).map(([cat, catData]) => (
                <div key={cat} className="pal-cat">
                  <div className="pal-cat-n" style={{ color: catData.color, borderBottom: `1px solid ${catData.color}22` }}>{cat}</div>
                  <div className="pal-items">
                    {catData.items.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        data-ai-pill={item.name}
                        title={getActivityHint(item.name)}
                        draggable={!dayCycleLimitReached}
                        onDragStart={(e) => {
                          if (dayCycleLimitReached) {
                            e.preventDefault();
                            return;
                          }
                          e.dataTransfer.setData("text/plain", item.name);
                          setSlotDragPreview(e, item.name);
                        }}
                        onDragEnd={clearDragPreview}
                        className={`pill ${selectedAct === item.name ? "active" : ""}`}
                        style={{
                          ...(selectedAct === item.name ? { borderColor: catData.color, color: catData.color, background: catData.bg } : {}),
                          ...(dayCycleLimitReached ? { opacity: 0.45, cursor: "not-allowed" } : {}),
                        }}
                        onClick={() => {
                          if (dayCycleLimitReached) return;
                          setSelectedAct((prev) => (prev === item.name ? null : item.name));
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "13px", color: catData.color, verticalAlign: "middle", marginRight: 4 }}>{item.icon}</span>
                        <span className="pill-label" data-tip={getActivityHint(item.name)}>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tl-wrap ${tableTutorialStep === 1 || tableTutorialStep === 2 ? "table-tutorial-spotlight-tl" : ""}`}
            style={{
              position: tableTutorialActive ? "relative" : undefined,
              zIndex: tableTutorialActive ? (tableTutorialStep === 1 || tableTutorialStep === 2 ? 110 : 40) : undefined,
              isolation:
                tableTutorialActive && (tableTutorialStep === 1 || tableTutorialStep === 2) ? "isolate" : undefined,
              pointerEvents: aiAutoPlacing ? "none" : "auto",
            }}
          >
            <div className="tl-scroll">
            <div style={{ minWidth: "max-content", margin: "0 4vw", paddingBottom: 8 }}>
              {(() => {
                const cols = `repeat(${SLOTS.length}, minmax(52px, 1fr))`;
                const periods: { name: string; count: number }[] = [];
                let current = "";
                let count = 0;
                SLOTS.forEach((s) => {
                  if (s.period !== current) {
                    if (current) periods.push({ name: current, count });
                    current = s.period;
                    count = 1;
                  } else {
                    count += 1;
                  }
                });
                if (current) periods.push({ name: current, count });
                return (
                  <>
              {/* Period header row */}
              <div style={{ display: "flex", marginBottom: 0 }}>
                <div className="date-col" />
                <div style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: cols,
                  gap: 0,
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                  background: "var(--bg-3)",
                }}>
                  {periods.map((p) => (
                    <div
                      key={`period-${p.name}`}
                      style={{
                        gridColumn: `span ${p.count}`,
                        textAlign: "center",
                        fontSize: ".72rem",
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "var(--gold-pale)",
                        padding: "7px 0",
                        borderRight: "1px solid var(--rule)",
                      }}
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* Time header row */}
              <div style={{ display: "flex", marginBottom: 8 }}>
                <div className="date-col" />
                <div style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: cols,
                  gap: 0,
                  borderBottom: "1px solid var(--rule)",
                  background: "var(--bg-2)",
                }}>
                  {SLOTS.map((s) => (
                    <div
                      key={`t-${s.id}`}
                      style={{
                        textAlign: "center",
                        fontSize: ".72rem",
                        color: s.fixed ? "var(--gold-dim)" : "var(--text-2)",
                        padding: "6px 2px",
                        borderRight: "1px solid var(--rule)",
                        background: s.fixed ? "rgba(197,160,101,.06)" : "transparent",
                        fontWeight: 700,
                      }}
                    >
                      {s.t}
                    </div>
                  ))}
                </div>
              </div>
              {/* Day rows */}
              {days.map((d, di) => (
                <div key={d.toISOString()} style={{ display: "flex", alignItems: "stretch", marginBottom: 6 }}>
                  {/* Date label column */}
                  <div className="date-col">
                    <div className="date-label">
                      <div style={{ color: "var(--gold-dim)", fontWeight: 700 }}>{dayNames[d.getDay()]}</div>
                      <div style={{ fontWeight: 700 }}>{d.getDate()} {shortMonths[d.getMonth()]}</div>
                    </div>
                  </div>
                  {/* Arrow slots */}
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: cols, gap: 6, pointerEvents: dayCycleLimitReached ? "none" : "auto", opacity: dayCycleLimitReached ? 0.7 : 1 }}>
                  {SLOTS.map((slot) => {
                    const key = `${di}_${slot.id}`;
                    const showCheckBlocks = product?.id !== "silence";
                    const isCI = showCheckBlocks && di === 0 && slot.id === "s7";
                    const isCO = showCheckBlocks && di === days.length - 1 && slot.id === "s4" && days.length > 1;
                    const locked = slotLocked(di, slot.id);
                    const periodLockedByDayCycle =
                      product?.id === "silence" &&
                      Boolean(dayCycleSelectedPeriod) &&
                      !slot.fixed &&
                      slot.period !== dayCycleSelectedPeriod;
                    if (isCI) {
                      return (
                        <div key={slot.id} className="arrow-slot arrow-checkin">
                          <span style={{ textAlign: "center", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.2, fontWeight: 600, fontFamily: "var(--sans)" }}>
                            Check-in
                            <br />
                            <span style={{ fontSize: ".64rem", fontWeight: 700, letterSpacing: ".06em" }}>1:00 pm</span>
                          </span>
                        </div>
                      );
                    }
                    if (isCO) {
                      return (
                        <div key={slot.id} className="arrow-slot arrow-checkout">
                          <span style={{ textAlign: "center", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.2, fontWeight: 600, fontFamily: "var(--sans)" }}>
                            Check-out
                            <br />
                            <span style={{ fontSize: ".64rem", fontWeight: 700, letterSpacing: ".06em" }}>11:00 am</span>
                          </span>
                        </div>
                      );
                    }
                    if (slot.fixed) return (
                      <div key={slot.id} className="arrow-slot arrow-fixed">
                        <span style={{ fontSize: ".72rem", textAlign: "center", fontWeight: 700 }}>{slot.fixed}</span>
                      </div>
                    );
                    if (locked || periodLockedByDayCycle) return <div key={slot.id} className="arrow-slot arrow-locked" />;
                    return (
                      <div
                        key={slot.id}
                        data-ai-slot={key}
                        className={`arrow-slot ${schedule[key] ? "arrow-filled" : "arrow-empty"} ${aiDropFlashKey === key ? "ai-drop-flash" : ""}`}
                        draggable={Boolean(schedule[key])}
                        onDragStart={(e) => {
                          if (!schedule[key]) return;
                          e.dataTransfer.setData("text/plain", schedule[key]);
                          e.dataTransfer.setData("application/x-tsc-source-key", key);
                          e.dataTransfer.effectAllowed = "move";
                          setSlotDragPreview(e, schedule[key]);
                          setSelectedAct(null);
                        }}
                        onDragEnd={clearDragPreview}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.currentTarget.classList.add("drag-over")}
                        onDragLeave={(e) => e.currentTarget.classList.remove("drag-over")}
                        onDrop={(e) => {
                          e.currentTarget.classList.remove("drag-over");
                          handleDropToSlot(e, key);
                          clearDragPreview();
                        }}
                        onClick={() => {
                          if (schedule[key]) {
                            setSchedule((prev) => {
                              const n = { ...prev };
                              delete n[key];
                              return n;
                            });
                          } else if (selectedAct) {
                            placeActivity(key, selectedAct);
                            setSelectedAct(null);
                          }
                        }}
                      >
                        {schedule[key] && (
                          <div style={{ height: "100%", width: "100%", display: "grid", gridTemplateRows: "auto 1fr", padding: "3px 2px" }}>
                            <span
                              className={
                                tableTutorialStep === 2 && tutorialPingRemoveKey === key
                                  ? "table-tutorial-cross-glow"
                                  : undefined
                              }
                              style={{ fontSize: ".76rem", fontWeight: 700, color: "#b09070", lineHeight: 1, textAlign: "left", justifySelf: "start" }}
                            >
                              ×
                            </span>
                            {(() => {
                              const meta = getActMeta(schedule[key]);
                              return (
                                <div style={{ textAlign: "center", alignSelf: "center" }}>
                                  <span className="material-symbols-outlined" style={{ fontSize: "14px", color: meta.color, display: "block", textAlign: "center" }}>{meta.icon}</span>
                                  <span style={{ fontSize: ".65rem", color: meta.color, textAlign: "center", lineHeight: 1.2, display: "block" }}>{schedule[key]}</span>
                                </div>
                              );
                            })()}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  </div>
                </div>
              ))}
                  </>
                );
              })()}
            </div>
            </div>
          </div>

          {tableTutorialStep !== null && (
            <div
              className="table-tutorial-bar"
              style={{
                position: "relative",
                flexShrink: 0,
                borderTop: "1px solid var(--rule)",
                background: "var(--bg-2)",
                padding: "14px 4vw 16px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                zIndex: 120,
                boxShadow: "0 -8px 32px rgba(0,0,0,.45)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                  <div style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: 6 }}>
                    Table guide ·{" "}
                    {tableTutorialStep === 0 ? "Adding" : tableTutorialStep === 1 ? "Moving" : "Remove"}
                  </div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 400, color: "var(--gold-pale)", marginBottom: 6, lineHeight: 1.25 }}>
                    {TABLE_TUTORIAL_COPY.run.title}
                  </div>
                  <p style={{ margin: 0, fontSize: ".84rem", lineHeight: 1.5, color: "var(--text-2)", maxWidth: "56ch" }}>
                    {TABLE_TUTORIAL_COPY.run.body}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <button type="button" className="btn-g" onClick={dismissTableTutorial}>
                    Skip
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", opacity: 0.85 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    aria-hidden
                    style={{
                      width: i === tableTutorialStep ? 22 : 7,
                      height: 7,
                      borderRadius: 999,
                      background: i === tableTutorialStep ? "var(--gold)" : "var(--rule-2)",
                      transition: "width .2s ease, background .2s",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div
            className="cta-bar"
            style={{
              position: "relative",
              zIndex: tableTutorialActive ? 40 : undefined,
              opacity: aiAutoPlacing ? 0.55 : tableTutorialActive ? 0.45 : 1,
              pointerEvents: aiAutoPlacing ? "none" : "auto",
              transition: "opacity .25s",
            }}
          >
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--text-3)" }}>If this made sense, <em style={{ color: "var(--gold-pale)", fontStyle: "normal" }}>you already know what to do.</em></div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <button
                className="btn-g"
                onClick={() => {
                  aiQueueRef.current = null;
                  setAiAutoPlacing(false);
                  setAiDropFlashKey(null);
                  document.querySelectorAll(".ai-drag-ghost").forEach((el) => el.remove());
                  setStep(2);
                }}
              >
                ← Redesign
              </button>
              <button type="button" className="btn-g" onClick={openTableTutorial} aria-label="Show table guide">
                Table guide
              </button>
              <button
                className="btn-g"
                onClick={downloadPlan}
                aria-label="Download plan"
                title="Download plan"
                style={{ width: 44, padding: 0, display: "grid", placeItems: "center" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  setModalSubmitted(false);
                  setModalStep(1);
                  const now = new Date();
                  setModalCalY(now.getFullYear());
                  setModalCalM(now.getMonth());
                  setShowModal(true);
                }}
              >
                Request Invite →
              </button>
            </div>
          </div>
        </div>
      )}

      <InviteModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalStep={modalStep}
        setModalStep={setModalStep}
        modalCalY={modalCalY}
        setModalCalY={setModalCalY}
        modalCalM={modalCalM}
        setModalCalM={setModalCalM}
        modalDate={modalDate}
        setModalDate={setModalDate}
        modalTime={modalTime}
        setModalTime={setModalTime}
        modalSubmitted={modalSubmitted}
        setModalSubmitted={setModalSubmitted}
        modalName={modalName}
        setModalName={setModalName}
        modalEmail={modalEmail}
        setModalEmail={setModalEmail}
        modalPhone={modalPhone}
        setModalPhone={setModalPhone}
        modalQ1={modalQ1}
        setModalQ1={setModalQ1}
        modalQ2={modalQ2}
        setModalQ2={setModalQ2}
        cycleLabel={product ? `${product.name} · ${product.cycle}` : "Day Designer"}
      />
    </main>
  );
}
