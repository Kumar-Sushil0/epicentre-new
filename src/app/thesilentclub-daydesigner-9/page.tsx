"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type ProductId = "silence" | "residency" | "solitude" | "creation";
type Mode = "manual" | "ai";

type Product = {
  id: ProductId;
  count: string;
  name: string;
  cycle: string;
  desc: string;
  days: number;
};

type Slot = {
  id: string;
  t: string;
  period: string;
  fixed?: string;
  ftype?: "meal" | "voice";
};

const PRODUCTS: Product[] = [
  { id: "silence", count: "—", name: "Silence", cycle: "Day Cycle · 4 Hours", desc: "Any 4 hours. Any day.", days: 1 },
  { id: "residency", count: "3", name: "Residency", cycle: "Weekend · 2N / 3D", desc: "A structured weekend.", days: 3 },
  { id: "solitude", count: "5", name: "Solitude", cycle: "Weekday · 4N / 5D", desc: "Five days of genuine solitude.", days: 5 },
  { id: "creation", count: "1", name: "Creation", cycle: "Full Estate · Up to 7D", desc: "Full estate. Your terms.", days: 7 },
];

const RULES: Record<ProductId, string> = {
  silence: "Available any day",
  residency: "Available weekends only (Fri – Sun)",
  solitude: "Available weekdays only (Mon – Fri)",
  creation: "Available any day",
};

const SLOTS: Slot[] = [
  { id: "s1", t: "06:00", period: "Dawn" },
  { id: "s2", t: "07:30", period: "Dawn" },
  { id: "s3", t: "09:00", period: "Morning", fixed: "Breakfast", ftype: "meal" },
  { id: "s4", t: "09:30", period: "Morning" },
  { id: "s5", t: "11:00", period: "Morning" },
  { id: "s6", t: "12:30", period: "Afternoon", fixed: "Lunch", ftype: "meal" },
  { id: "s7", t: "13:00", period: "Afternoon" },
  { id: "s8", t: "14:30", period: "Afternoon" },
  { id: "s9", t: "16:00", period: "Evening", fixed: "High Tea", ftype: "meal" },
  { id: "s10", t: "16:30", period: "Evening" },
  { id: "s11", t: "18:00", period: "Evening" },
  { id: "s12", t: "19:30", period: "Night", fixed: "Dinner", ftype: "meal" },
  { id: "s13", t: "20:00", period: "Night" },
  { id: "s14", t: "21:30", period: "Night", fixed: "Voice Window", ftype: "voice" },
];

type CatItem = { name: string; icon: string };
type Cat = { color: string; bg: string; items: CatItem[] };

const CATS: Record<string, Cat> = {
  "Deep Work": {
    color: "#a5b4fc", bg: "rgba(99,102,241,.12)",
    items: [
      { name: "Writing", icon: "edit_note" },
      { name: "Reading", icon: "menu_book" },
      { name: "Journalling", icon: "book" },
      { name: "Thinking", icon: "psychology" },
      { name: "Idea Sketching", icon: "draw" },
      { name: "Long Walks", icon: "directions_walk" },
    ],
  },
  "Quiet Exploration": {
    color: "#6ee7b7", bg: "rgba(16,185,129,.12)",
    items: [
      { name: "Bird Watching", icon: "flutter" },
      { name: "Forest Safari", icon: "forest" },
      { name: "Sunrise", icon: "wb_twilight" },
      { name: "Boat Rides", icon: "sailing" },
      { name: "Kayaking", icon: "kayaking" },
      { name: "Star Gazing", icon: "nightlight" },
    ],
  },
  "Body Reset": {
    color: "#7dd3fc", bg: "rgba(14,165,233,.12)",
    items: [
      { name: "Gym", icon: "fitness_center" },
      { name: "Running", icon: "directions_run" },
      { name: "Cycling", icon: "pedal_bike" },
      { name: "Swimming", icon: "pool" },
      { name: "Recovery", icon: "self_improvement" },
      { name: "Stretching", icon: "accessibility_new" },
    ],
  },
  "Creative": {
    color: "#fcd34d", bg: "rgba(245,158,11,.12)",
    items: [
      { name: "Drawing", icon: "brush" },
      { name: "Sketching", icon: "ink_pen" },
      { name: "Photography", icon: "photo_camera" },
      { name: "Zen Garden", icon: "spa" },
      { name: "Farm Work", icon: "agriculture" },
      { name: "Plant Obs.", icon: "local_florist" },
    ],
  },
  "Gentle Social": {
    color: "#fca5a5", bg: "rgba(239,68,68,.12)",
    items: [
      { name: "Board Games", icon: "casino" },
      { name: "Cooking", icon: "cooking" },
      { name: "Lawn Games", icon: "sports_cricket" },
      { name: "Conversations", icon: "forum" },
      { name: "Shared Dinner", icon: "dinner_dining" },
      { name: "Letters", icon: "mail" },
    ],
  },
  "Subtraction": {
    color: "#c4b5fd", bg: "rgba(139,92,246,.12)",
    items: [
      { name: "Silence Block", icon: "hearing_disabled" },
      { name: "Dark Room", icon: "visibility_off" },
      { name: "Digital Fast", icon: "phonelink_off" },
      { name: "Anon. Presence", icon: "person_off" },
      { name: "Horizon Gazing", icon: "landscape" },
      { name: "Long Bath", icon: "water" },
    ],
  },
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fmtDate = (d: Date) => `${String(d.getDate()).padStart(2, "0")} ${shortMonths[d.getMonth()]} ${d.getFullYear()}`;

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
  const [showAiLoading, setShowAiLoading] = useState(false);
  const [selectedAct, setSelectedAct] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2 | 3>(1);
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalQ1, setModalQ1] = useState("");
  const [modalQ2, setModalQ2] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAct(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

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
    const si = SLOTS.findIndex((s) => s.id === sid);
    // On arrival day: lock slots before check-in (s7 = 13:00, index 6)
    const checkInIndex = SLOTS.findIndex((s) => s.id === "s7");
    if (di === 0 && si < checkInIndex) return true;
    // On departure day (multi-day): lock slots after check-out (s4 = 09:30, index 3)
    const checkOutIndex = SLOTS.findIndex((s) => s.id === "s4");
    if ((product?.days ?? 1) > 1 && di === (product?.days ?? 1) - 1 && si > checkOutIndex) return true;
    return false;
  };

  // Helper: find icon and color for a placed activity
  const getActMeta = (name: string): { icon: string; color: string } => {
    for (const cat of Object.values(CATS)) {
      const item = cat.items.find((i) => i.name === name);
      if (item) return { icon: item.icon, color: cat.color };
    }
    return { icon: "circle", color: "var(--gold)" };
  };

  const placeActivity = (key: string, activity: string) => {
    setSchedule((prev) => ({ ...prev, [key]: activity }));
  };

  const handleDropToSlot = (e: React.DragEvent<HTMLDivElement>, key: string) => {
    e.preventDefault();
    const dragged = e.dataTransfer.getData("text/plain");
    const activity = dragged || selectedAct;
    if (!activity) return;
    placeActivity(key, activity);
    setSelectedAct(null);
  };

  const handleS2 = () => {
    if (mode === "manual") {
      setStep(3);
      return;
    }
    setShowAiLoading(true);
    setTimeout(() => {
      const answers = aiAnswers;
      let density = answers["Fill most slots"] ? 3 : answers["Almost empty"] ? 1 : 2;
      let acts: string[] = [];
      if (answers["Bird Watching"]) acts.push("Bird Watching");
      if (answers["Writing"]) acts.push("Writing");
      if (answers["Swimming"]) acts.push("Swimming");
      if (answers["Star Gazing"]) acts.push("Star Gazing");
      if (answers["Long Walks"]) acts.push("Long Walks");
      if (answers["Gym"]) acts.push("Gym");
      if (answers["Reading"]) acts.push("Reading");
      if (!acts.length) acts = ["Reading", "Journalling", "Long Walks", "Bird Watching"];
      if (answers["Still carrying the noise of the week"]) {
        acts = ["Long Bath", "Horizon Gazing", "Long Walks", ...acts];
        density = Math.max(1, density - 1);
      }

      const next = { ...schedule };
      const free = SLOTS.filter((s) => !s.fixed).map((s) => s.id);
      days.forEach((_, di) => {
        let placed = 0;
        free.forEach((sid, i) => {
          if (placed >= density || slotLocked(di, sid)) return;
          const key = `${di}_${sid}`;
          if (!next[key]) {
            next[key] = acts[i % acts.length];
            placed += 1;
          }
        });
      });
      setSchedule(next);
      setShowAiLoading(false);
      setStep(3);
    }, 1600);
  };

  const prevMonth = () => {
    if (calM === 0) { setCalY(calY - 1); setCalM(11); } else { setCalM(calM - 1); }
  };
  const nextMonth = () => {
    if (calM === 11) { setCalY(calY + 1); setCalM(0); } else { setCalM(calM + 1); }
  };

  const stepClass = (n: number) => `step ${step === n ? "active" : ""} ${n < step ? "done" : ""}`;
  const openInviteModal = () => {
    setShowModal(true);
    setModalSubmitted(false);
    setModalStep(1);
  };

  return (
    <main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0');
        .material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;}
        :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;}
        body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;overflow:hidden;font-size:14px}
        .hdr{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 6vw;background:var(--bg-2);border-bottom:1px solid var(--rule)}
        .steps{display:flex;border-bottom:1px solid var(--rule)}
        .step{flex:1;padding:12px 20px;border-right:1px solid var(--rule);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-3);display:flex;align-items:center;gap:10px}
        .step.active{color:var(--gold-pale);background:var(--bg-2)} .step.done{color:var(--gold-dim)}
        .step-n{width:22px;height:22px;border-radius:50%;border:1px solid var(--rule-2);display:grid;place-items:center;font-size:.7rem}
        .step.active .step-n{background:var(--gold);color:var(--bg)} .step.done .step-n{background:var(--gold-dim);color:var(--bg)}
        .p-inner{padding:24px 6vw;height:calc(100vh - 108px);overflow:auto}
        .p-grid,.c-grid{display:grid;gap:1px;background:var(--rule)}
        .p-grid{grid-template-columns:repeat(4,1fr)} .c-grid{grid-template-columns:1fr 1fr}
        .pc,.cc{background:var(--bg-2);cursor:pointer;transition:.2s}
        .pc{padding:20px 22px;border-bottom:2px solid transparent}.cc{padding:24px 26px;border-bottom:2px solid transparent;position:relative}
        .pc:hover,.cc:hover{background:var(--bg-3)} .pc.sel,.cc.sel{background:var(--bg-3);border-bottom-color:var(--gold)}
        .btn{background:var(--gold);color:var(--bg);font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;padding:12px 28px;border:none;cursor:pointer;font-weight:500}
        .btn-g{background:none;color:var(--text-3);font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;padding:12px 22px;border:1px solid var(--rule-2);cursor:pointer}
        .btn:disabled{opacity:.4;cursor:not-allowed}
        .btn-g:hover{color:var(--gold-pale);border-color:var(--gold-dim)}
        .cal-wrap{display:grid;grid-template-columns:1fr 220px;gap:24px;margin-top:16px}
        .cal-box{background:var(--bg-2);border:1px solid var(--rule);padding:18px 20px}
        .cal-days-hdr,.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
        .cal-dh{text-align:center;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-3);padding:5px 0}
        .ai-opt{background:var(--bg-3);border:1px solid var(--rule-2);padding:6px 14px;font-size:.82rem;color:var(--text-3);cursor:pointer}
        .ai-opt.on{background:rgba(197,160,101,.1);border-color:var(--gold-dim);color:var(--gold-pale)}
        .s3{display:flex;flex-direction:column;height:calc(100vh - 108px)}
        .pal{flex-shrink:0;border-bottom:1px solid var(--rule);background:var(--bg);overflow:hidden}
        .pal-cats{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--rule);margin:0 6vw}
        .pal-cat{background:var(--bg)}
        .pal-cat-n{padding:7px 10px;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid var(--rule);background:var(--bg);font-weight:500}
        .pal-items{padding:6px 10px;display:flex;flex-direction:column;gap:2px}
        .pill{font-size:.82rem;color:var(--text-2);padding:4px 8px;border:1px solid transparent;cursor:pointer;text-align:left;display:flex;align-items:center;gap:5px;background:none;width:100%}
        .pill:hover{color:var(--gold-pale)}
        .arrow-slot{
          min-height:48px;display:flex;align-items:center;justify-content:center;padding:0 8px;position:relative;
          --arrow-border:#3a2a1f;--arrow-fill:#1c1410;color:#e8d5b0;
        }
        .arrow-slot::before,
        .arrow-slot::after{
          content:"";position:absolute;top:0;left:0;right:0;bottom:0;
          clip-path:polygon(0 0,84% 0,100% 50%,84% 100%,0 100%,10% 50%);
          pointer-events:none;
        }
        .arrow-slot::before{background:var(--arrow-border);}
        .arrow-slot::after{top:1px;left:1px;right:1px;bottom:1px;background:var(--arrow-fill);}
        .arrow-slot > *{position:relative;z-index:2}
        .arrow-empty{--arrow-border:#3a2a1f;--arrow-fill:#160f0a;color:#7a6048}
        .arrow-empty.drag-over{--arrow-border:var(--gold);--arrow-fill:rgba(197,160,101,.14);color:#e8d5b0}
        .arrow-filled{--arrow-border:#5a3e28;--arrow-fill:#1c1410;color:#e8d5b0}
        .arrow-fixed{--arrow-border:#5a3e28;--arrow-fill:#1c1410;color:#c5a065}
        .arrow-checkin{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
        .arrow-checkout{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
        .arrow-locked{--arrow-border:#2a1f17;--arrow-fill:#0f0b08;color:#3a2a1f;opacity:.7}
        .date-col{width:90px;flex-shrink:0;display:flex;align-items:center;padding-right:10px}
        .date-label{font-size:.72rem;color:var(--text-2);line-height:1.4;text-align:right;width:100%}
        .tl-wrap{flex:1;overflow:hidden;display:flex;flex-direction:column}
        .tl-scroll{flex:1;overflow:auto;padding:16px 0}
        .cta-bar{flex-shrink:0;border-top:1px solid var(--rule);background:var(--bg-2);padding:16px 6vw;display:flex;align-items:center;justify-content:space-between;gap:16px}
        .modal{position:fixed;inset:0;background:rgba(15,11,8,.88);display:grid;place-items:center}
      `}</style>

      <div className="hdr">
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem" }}>The Silent Club</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem" }}>Design Your Day</div>
        <button className="btn-g" onClick={() => router.push("/")}>← Back to site</button>
      </div>

      <div className="steps">
        <div className={stepClass(1)}><div className="step-n">1</div>Choose your stay</div>
        <div className={stepClass(2)}><div className="step-n">2</div>How to design</div>
        <div className={stepClass(3)} style={{ borderRight: "none" }}><div className="step-n">3</div>Design your days</div>
      </div>

      {step === 1 && (
        <div className="p-inner">
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
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>{selectedDates.map((d) => <div key={d.toISOString()} style={{ padding: "7px 12px", border: "1px solid var(--rule-2)", fontSize: ".82rem", color: "var(--gold-dim)" }}>{fmtDate(d)}</div>)}</div>
                <button className="btn" disabled={!canStep1Continue} style={{ width: "100%" }} onClick={() => setStep(2)}>Continue →</button>
              </div>
            </div>
          )}
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
            <div style={{ border: "1px solid var(--rule)", background: "var(--bg-2)", padding: 20, marginTop: 16 }}>
              {[
                ["01 — What are you coming here to do?", ["Finish something I've started", "Think without interruption", "Rest and recover", "I don't know yet"]],
                ["02 — How do you want your body to feel each day?", ["Physically active", "Rested and still", "A mix of both"]],
                ["03 — When does your thinking feel sharpest?", ["Early morning", "Late morning", "Afternoon", "Evening"]],
                ["04 — Any activities you already want?", ["Bird Watching", "Writing", "Swimming", "Star Gazing", "Long Walks", "Gym", "Reading"]],
                ["05 — How structured should your days feel?", ["Fill most slots", "A few anchors only", "Almost empty"]],
                ["06 — How are you arriving?", ["Still carrying the noise of the week", "Somewhere in between", "Already quiet, ready to go deep"]],
              ].map(([q, opts]) => (
                <div key={q as string} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>{q as string}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {(opts as string[]).map((opt) => (
                      <button key={opt} className={`ai-opt ${aiAnswers[opt] ? "on" : ""}`} onClick={() => setAiAnswers((prev) => ({ ...prev, [opt]: !prev[opt] }))}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {showAiLoading && <div style={{ padding: 20, textAlign: "center", border: "1px solid var(--rule)", background: "var(--bg-2)", marginTop: 16, fontStyle: "italic", fontSize: ".9rem", color: "var(--text-3)" }}>Building your days...</div>}
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button className="btn-g" onClick={() => setStep(1)}>← Back</button>
            <button className="btn" onClick={handleS2}>Shape my Stay →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="s3">
          <div className="pal">
            <div className="pal-cats">
              {Object.entries(CATS).map(([cat, catData]) => (
                <div key={cat} className="pal-cat">
                  <div className="pal-cat-n" style={{ color: catData.color, borderBottom: `1px solid ${catData.color}22` }}>{cat}</div>
                  <div className="pal-items">
                    {catData.items.map((item) => (
                      <button
                        key={item.name}
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData("text/plain", item.name)}
                        className={`pill ${selectedAct === item.name ? "active" : ""}`}
                        style={selectedAct === item.name ? { borderColor: catData.color, color: catData.color, background: catData.bg } : {}}
                        onClick={() => setSelectedAct((prev) => (prev === item.name ? null : item.name))}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "13px", color: catData.color, verticalAlign: "middle", marginRight: 4 }}>{item.icon}</span>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tl-wrap">
            <div className="tl-scroll">
            <div style={{ width: "calc((100% - 12vw) / 0.85)", margin: "0 6vw", transform: "scale(0.85)", transformOrigin: "top left" }}>
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
                        fontWeight: s.fixed ? 500 : 300,
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
                      <div style={{ color: "var(--gold-dim)", fontWeight: 400 }}>{dayNames[d.getDay()]}</div>
                      <div>{d.getDate()} {shortMonths[d.getMonth()]}</div>
                    </div>
                  </div>
                  {/* Arrow slots */}
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: cols, gap: 6 }}>
                  {SLOTS.map((slot) => {
                    const key = `${di}_${slot.id}`;
                    const isCI = di === 0 && slot.id === "s7";
                    const isCO = di === days.length - 1 && slot.id === "s4" && days.length > 1;
                    const locked = slotLocked(di, slot.id);
                    if (isCI) {
                      return (
                        <div key={slot.id} className="arrow-slot arrow-checkin">
                          <span style={{ textAlign: "center", fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.2, fontWeight: 600, fontFamily: "var(--sans)" }}>
                            Check-in
                            <br />
                            <span style={{ fontSize: ".58rem", fontWeight: 500, letterSpacing: ".06em" }}>1:00 pm</span>
                          </span>
                        </div>
                      );
                    }
                    if (isCO) {
                      return (
                        <div key={slot.id} className="arrow-slot arrow-checkout">
                          <span style={{ textAlign: "center", fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase", lineHeight: 1.2, fontWeight: 600, fontFamily: "var(--sans)" }}>
                            Check-out
                            <br />
                            <span style={{ fontSize: ".58rem", fontWeight: 500, letterSpacing: ".06em" }}>11:00 am</span>
                          </span>
                        </div>
                      );
                    }
                    if (slot.fixed) return (
                      <div key={slot.id} className="arrow-slot arrow-fixed">
                        <span style={{ fontSize: ".72rem", textAlign: "center", fontWeight: 500 }}>{slot.fixed}</span>
                      </div>
                    );
                    if (locked) return <div key={slot.id} className="arrow-slot arrow-locked" />;
                    return (
                      <div
                        key={slot.id}
                        className={`arrow-slot ${schedule[key] ? "arrow-filled" : "arrow-empty"}`}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.currentTarget.classList.add("drag-over")}
                        onDragLeave={(e) => e.currentTarget.classList.remove("drag-over")}
                        onDrop={(e) => {
                          e.currentTarget.classList.remove("drag-over");
                          handleDropToSlot(e, key);
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
                          <>
                            {(() => {
                              const meta = getActMeta(schedule[key]);
                              return (
                                <>
                                  <span className="material-symbols-outlined" style={{ fontSize: "14px", color: meta.color, display: "block", textAlign: "center" }}>{meta.icon}</span>
                                  <span style={{ fontSize: ".65rem", color: meta.color, textAlign: "center", lineHeight: 1.2, display: "block" }}>{schedule[key]}</span>
                                </>
                              );
                            })()}
                            <span style={{ position: "absolute", top: 2, right: 8, fontSize: ".48rem", color: "#b09070" }}>×</span>
                          </>
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

          <div className="cta-bar">
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--text-3)" }}>If this made sense, <em style={{ color: "var(--gold-pale)", fontStyle: "normal" }}>you already know what to do.</em></div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn-g" onClick={() => setStep(2)}>← Redesign</button>
              <button className="btn" onClick={openInviteModal}>Request Invite →</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div style={{ background: "#160f0a", border: "1px solid #3a2a1f", maxWidth: 440, width: "100%", padding: 40 }} onClick={(e) => e.stopPropagation()}>
            <button className="btn-g" onClick={() => setShowModal(false)} style={{ float: "right" }}>×</button>
            {modalSubmitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 10 }}>We'll be in touch.</div>
                <div style={{ fontSize: ".75rem", color: "var(--text-3)" }}>Within 72 hours.</div>
                <button className="btn" style={{ marginTop: 20 }} onClick={() => { setShowModal(false); setModalSubmitted(false); }}>Close</button>
              </div>
            ) : (
              <>
                <div style={{ fontSize: ".58rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#7a6048", marginBottom: 10 }}>
                  Request Invite · Step {modalStep} of 3
                </div>
                {modalStep === 1 && (
                  <>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Question 1</div>
                    <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 12 }}>What are you hoping to get out of this stay?</div>
                    <textarea
                      rows={4}
                      placeholder="Take your time..."
                      value={modalQ1}
                      onChange={(e) => setModalQ1(e.target.value)}
                      style={{ width: "100%", marginBottom: 16, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                    />
                    <button className="btn" style={{ width: "100%" }} disabled={!modalQ1.trim()} onClick={() => setModalStep(2)}>
                      Next →
                    </button>
                  </>
                )}

                {modalStep === 2 && (
                  <>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Question 2</div>
                    <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 12 }}>Is there anything we should know before we speak?</div>
                    <textarea
                      rows={4}
                      placeholder="Share any context..."
                      value={modalQ2}
                      onChange={(e) => setModalQ2(e.target.value)}
                      style={{ width: "100%", marginBottom: 16, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                    />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button className="btn-g" style={{ flex: 1 }} onClick={() => setModalStep(1)}>← Back</button>
                      <button className="btn" style={{ flex: 1 }} disabled={!modalQ2.trim()} onClick={() => setModalStep(3)}>
                        Next →
                      </button>
                    </div>
                  </>
                )}

                {modalStep === 3 && (
                  <>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Your details</div>
                    <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 20 }}>We respond within 72 hours.</div>
                    <input
                      placeholder="Full name"
                      value={modalName}
                      onChange={(e) => setModalName(e.target.value)}
                      style={{ width: "100%", marginBottom: 8, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", boxSizing: "border-box" }}
                    />
                    <input
                      placeholder="email@example.com"
                      type="email"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                      style={{ width: "100%", marginBottom: 8, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", boxSizing: "border-box" }}
                    />
                    <input
                      placeholder="Phone number"
                      type="tel"
                      value={modalPhone}
                      onChange={(e) => setModalPhone(e.target.value)}
                      style={{ width: "100%", marginBottom: 16, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", boxSizing: "border-box" }}
                    />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button className="btn-g" style={{ flex: 1 }} onClick={() => setModalStep(2)}>← Back</button>
                      <button
                        className="btn"
                        style={{ flex: 1 }}
                        disabled={!modalName.trim() || !modalEmail.trim() || !modalPhone.trim()}
                        onClick={() => setModalSubmitted(true)}
                      >
                        Submit →
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
