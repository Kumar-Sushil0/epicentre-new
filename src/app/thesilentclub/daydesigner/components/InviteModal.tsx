import { useState } from "react";

type Props = {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
  modalStep: 1 | 2 | 3;
  setModalStep: (v: 1 | 2 | 3) => void;
  modalCalY: number;
  setModalCalY: (v: number) => void;
  modalCalM: number;
  setModalCalM: (v: number) => void;
  modalDate: string;
  setModalDate: (v: string) => void;
  modalTime: string;
  setModalTime: (v: string) => void;
  modalSubmitted: boolean;
  setModalSubmitted: (v: boolean) => void;
  modalName: string;
  setModalName: (v: string) => void;
  modalEmail: string;
  setModalEmail: (v: string) => void;
  modalPhone: string;
  setModalPhone: (v: string) => void;
  modalQ1: string;
  setModalQ1: (v: string) => void;
  modalQ2: string;
  setModalQ2: (v: string) => void;
  cycleLabel?: string;
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const timeOptions = ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "17:00", "18:00"] as const;

export function InviteModal(props: Props) {
  const {
    showModal, setShowModal, modalStep, setModalStep, modalCalY, setModalCalY, modalCalM, setModalCalM, modalDate, setModalDate, modalTime, setModalTime, modalSubmitted, setModalSubmitted,
    modalName, setModalName, modalEmail, setModalEmail, modalPhone, setModalPhone, modalQ1, setModalQ1, modalQ2, setModalQ2, cycleLabel,
  } = props;
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [comingFrom, setComingFrom] = useState("");

  const handleSubmit = async () => {
    if (!modalName.trim() || !modalEmail.trim() || !modalPhone.trim() || !modalDate.trim() || !modalTime.trim()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
      const res = await fetch(`${apiBase}/call-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: modalName.trim(),
          email: modalEmail.trim(),
          phone: modalPhone.trim(),
          cycleLabel: cycleLabel || "Day Designer",
          callDate: modalDate,
          callTime: modalTime,
          questions: [
            "What's been occupying your thinking lately — even if you can't fully articulate it yet?",
            "What have you already tried, and why didn't it work?",
          ],
          answers: [modalQ1.trim(), modalQ2.trim()],
          comingFrom: comingFrom.trim(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setSubmitError((err as { error?: string }).error || "Failed to submit request.");
        return;
      }
      setModalSubmitted(true);
    } catch {
      setSubmitError("Could not connect to the server.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!showModal) return null;

  const stepInfo = {
    1: { eyebrow: "Before we speak", title: "Two questions" },
    2: { eyebrow: "Pick a time", title: "15-minute alignment conversation" },
    3: { eyebrow: "Your details", title: "Almost done" },
  } as const;

  return (
    <div className="tsc-invite-modal-overlay" onClick={() => setShowModal(false)}>
      <div
        style={{
          background: "#160f0a",
          border: "1px solid #3a2a1f",
          maxWidth: 480,
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #2a1f17", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[1, 2, 3].map((n, idx) => {
              const isCurrent = modalStep === n;
              const isCompleted = modalStep > n;
              return (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 500,
                      background: isCurrent || isCompleted ? "#c5a065" : "transparent",
                      color: isCurrent || isCompleted ? "#0f0b08" : "#7a6048",
                      border: isCurrent || isCompleted ? "none" : "1px solid #3a2a1f",
                    }}
                  >
                    {isCompleted ? "✓" : n}
                  </div>
                  {idx < 2 && <div style={{ height: 1, width: 24, background: "#2a1f17" }} />}
                </div>
              );
            })}
          </div>
          <button className="btn-g" onClick={() => setShowModal(false)} style={{ padding: "4px 8px" }}>×</button>
        </div>

        <div style={{ height: 540, display: "flex", flexDirection: "column" }}>
          {modalSubmitted ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(197,160,101,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 20, color: "#c5a065" }}>✓</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500, marginBottom: 8 }}>Application received</div>
              <div style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.6, maxWidth: 280 }}>We'll confirm your conversation within 24 hours.</div>
            </div>
          ) : (
            <>
              {modalStep === 1 && (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 20px 0" }}>
                  <div style={{ marginBottom: 4, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)" }}>{stepInfo[1].eyebrow}</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500, marginBottom: 20 }}>{stepInfo[1].title}</div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, overflowY: "auto", paddingRight: 2 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>What's been occupying your thinking lately — even if you can't fully articulate it yet?</label>
                      <textarea
                        rows={3}
                        placeholder="Take your time..."
                        value={modalQ1}
                        onChange={(e) => setModalQ1(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, lineHeight: 1.6, color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>What have you already tried, and why didn't it work?</label>
                      <textarea
                        rows={3}
                        placeholder="Share any context..."
                        value={modalQ2}
                        onChange={(e) => setModalQ2(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, lineHeight: 1.6, color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {modalStep === 2 && (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 20px 0" }}>
                  <div style={{ marginBottom: 4, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)" }}>{stepInfo[2].eyebrow}</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500, marginBottom: 16 }}>{stepInfo[2].title}</div>
                  <div style={{ flex: 1, overflowY: "auto", paddingRight: 2 }}>
                    <div style={{ background: "#1c1410", border: "1px solid #2a1f17", marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #2a1f17" }}>
                        <button className="btn-g" onClick={() => modalCalM === 0 ? (setModalCalY(modalCalY - 1), setModalCalM(11)) : setModalCalM(modalCalM - 1)}>‹</button>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-1)" }}>
                          {monthNames[modalCalM]} {modalCalY}
                        </div>
                        <button className="btn-g" onClick={() => modalCalM === 11 ? (setModalCalY(modalCalY + 1), setModalCalM(0)) : setModalCalM(modalCalM + 1)}>›</button>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", padding: "6px 8px 2px", gap: 2 }}>
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                          <div key={`${d}-${idx}`} style={{ textAlign: "center", fontSize: 11, color: "var(--text-3)", padding: "3px 0" }}>{d}</div>
                        ))}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", padding: "2px 8px 8px", gap: 2 }}>
                        {(() => {
                          const firstDay = new Date(modalCalY, modalCalM, 1).getDay();
                          const daysInMonth = new Date(modalCalY, modalCalM + 1, 0).getDate();
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const cells = [];
                          for (let i = 0; i < firstDay; i += 1) cells.push(<div key={`e-${i}`} />);
                          for (let day = 1; day <= daysInMonth; day += 1) {
                            const date = new Date(modalCalY, modalCalM, day);
                            const dateStr = `${modalCalY}-${String(modalCalM + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                            const selectable = date >= today;
                            const selected = modalDate === dateStr;
                            cells.push(
                              <div
                                key={dateStr}
                                onClick={() => selectable && setModalDate(dateStr)}
                                style={{
                                  textAlign: "center",
                                  padding: "5px 2px",
                                  fontSize: 13,
                                  cursor: selectable ? "pointer" : "default",
                                  color: !selectable ? "var(--rule-2)" : selected ? "var(--bg)" : "var(--gold-pale)",
                                  background: selected ? "var(--gold)" : "transparent",
                                  borderRadius: 6,
                                }}
                              >
                                {day}
                              </div>,
                            );
                          }
                          return cells;
                        })()}
                      </div>
                    </div>

                    <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 8 }}>Choose a slot</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 12 }}>
                      {timeOptions.map((t) => (
                        <button
                          key={t}
                          className="btn-g"
                          onClick={() => setModalTime(t)}
                          style={{
                            padding: "8px 4px",
                            fontSize: 13,
                            color: modalTime === t ? "var(--gold-pale)" : "var(--text-3)",
                            borderColor: modalTime === t ? "var(--gold-dim)" : "var(--rule-2)",
                            background: modalTime === t ? "rgba(197,160,101,.1)" : "transparent",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {modalStep === 3 && (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 20px 0" }}>
                  <div style={{ marginBottom: 4, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)" }}>{stepInfo[3].eyebrow}</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500, marginBottom: 6 }}>{stepInfo[3].title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 20, lineHeight: 1.5 }}>We'll confirm your conversation within 24 hours.</div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, overflowY: "auto", paddingRight: 2 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>Full name</label>
                      <input
                        placeholder="Your full name"
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, color: "#e8d5b0", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>Email</label>
                      <input
                        placeholder="email@example.com"
                        type="email"
                        value={modalEmail}
                        onChange={(e) => setModalEmail(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, color: "#e8d5b0", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>Phone</label>
                      <input
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                        value={modalPhone}
                        onChange={(e) => setModalPhone(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, color: "#e8d5b0", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, color: "var(--text-2)", marginBottom: 6 }}>Coming from</label>
                      <input
                        placeholder="City or area"
                        value={comingFrom}
                        onChange={(e) => setComingFrom(e.target.value)}
                        style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", fontSize: 14, color: "#e8d5b0", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>
                  {submitError && (
                    <div style={{ marginTop: 10, fontSize: ".75rem", color: "#d1917b" }}>{submitError}</div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {!modalSubmitted && (
          <div style={{ padding: "16px 20px", borderTop: "1px solid #2a1f17", display: "flex", gap: 8 }}>
            {modalStep > 1 && (
              <button
                className="btn-g"
                style={{ flex: 1, padding: "11px" }}
                onClick={() => setModalStep((modalStep - 1) as 1 | 2 | 3)}
              >
                ← Back
              </button>
            )}
            <button
              className="btn"
              style={{ flex: modalStep > 1 ? 2 : 1, padding: "11px" }}
              disabled={
                modalStep === 1
                  ? !modalQ1.trim() || !modalQ2.trim()
                  : modalStep === 2
                    ? !modalDate.trim() || !modalTime.trim()
                    : !modalName.trim() || !modalEmail.trim() || !modalPhone.trim() || submitting
              }
              onClick={() => {
                if (modalStep === 1) setModalStep(2);
                else if (modalStep === 2) setModalStep(3);
                else handleSubmit();
              }}
            >
              {modalStep === 3 ? (submitting ? "Submitting..." : "Submit →") : "Continue →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
