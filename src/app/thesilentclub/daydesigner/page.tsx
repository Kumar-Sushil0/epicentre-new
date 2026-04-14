"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CATS, dayNames, fmtDate, Mode, monthNames, Product, ProductId, PRODUCTS, RULES, shortMonths, SLOTS } from "./content";
import { DayDesignerStyles } from "./components/DayDesignerStyles";
import { DesignerHeader } from "./components/DesignerHeader";
import { InviteModal } from "./components/InviteModal";

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

  return (
    <main>
      <DayDesignerStyles />
      <DesignerHeader
        stepClass={stepClass}
        onBackToSite={() => router.push("/thesilentclub/home")}
      />

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
      />
    </main>
  );
}
