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
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const timeOptions = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00"] as const;

export function InviteModal(props: Props) {
  const {
    showModal, setShowModal, modalStep, setModalStep, modalCalY, setModalCalY, modalCalM, setModalCalM, modalDate, setModalDate, modalTime, setModalTime, modalSubmitted, setModalSubmitted,
    modalName, setModalName, modalEmail, setModalEmail, modalPhone, setModalPhone, modalQ1, setModalQ1, modalQ2, setModalQ2,
  } = props;

  if (!showModal) return null;

  return (
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
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Questions</div>
                <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 12 }}>What are you hoping to get out of this stay?</div>
                <textarea
                  rows={3}
                  placeholder="Take your time..."
                  value={modalQ1}
                  onChange={(e) => setModalQ1(e.target.value)}
                  style={{ width: "100%", marginBottom: 12, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                />
                <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 12 }}>Is there anything we should know before we speak?</div>
                <textarea
                  rows={3}
                  placeholder="Share any context..."
                  value={modalQ2}
                  onChange={(e) => setModalQ2(e.target.value)}
                  style={{ width: "100%", marginBottom: 16, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
                />
                <button className="btn" style={{ width: "100%" }} disabled={!modalQ1.trim() || !modalQ2.trim()} onClick={() => setModalStep(2)}>
                  Next →
                </button>
              </>
            )}

            {modalStep === 2 && (
              <>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Preferred date & time</div>
                <div style={{ fontSize: ".8rem", color: "#7a6048", marginBottom: 20 }}>Pick when you'd like us to reach out.</div>
                <div style={{ background: "#1c1410", border: "1px solid #2a1f17", padding: 12, marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <button className="btn-g" onClick={() => modalCalM === 0 ? (setModalCalY(modalCalY - 1), setModalCalM(11)) : setModalCalM(modalCalM - 1)}>‹</button>
                    <div style={{ fontSize: ".74rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-2)", alignSelf: "center" }}>
                      {monthNames[modalCalM]} {modalCalY}
                    </div>
                    <button className="btn-g" onClick={() => modalCalM === 11 ? (setModalCalY(modalCalY + 1), setModalCalM(0)) : setModalCalM(modalCalM + 1)}>›</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3, marginBottom: 4 }}>
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d} style={{ textAlign: "center", fontSize: ".68rem", color: "var(--text-3)" }}>{d}</div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3 }}>
                    {(() => {
                      const firstDay = new Date(modalCalY, modalCalM, 1).getDay();
                      const daysInMonth = new Date(modalCalY, modalCalM + 1, 0).getDate();
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const cells: JSX.Element[] = [];
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
                              padding: "7px 2px",
                              fontSize: ".78rem",
                              cursor: selectable ? "pointer" : "default",
                              color: !selectable ? "var(--rule-2)" : selected ? "var(--bg)" : "var(--gold-pale)",
                              background: selected ? "var(--gold)" : "transparent",
                              borderRadius: 2,
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

                <div style={{ fontSize: ".7rem", color: "var(--text-3)", marginBottom: 8, letterSpacing: ".12em", textTransform: "uppercase" }}>Choose a time slot</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
                  {timeOptions.map((t) => (
                    <button
                      key={t}
                      className="btn-g"
                      onClick={() => setModalTime(t)}
                      style={{
                        padding: "10px 6px",
                        color: modalTime === t ? "var(--gold-pale)" : "var(--text-3)",
                        borderColor: modalTime === t ? "var(--gold-dim)" : "var(--rule-2)",
                        background: modalTime === t ? "rgba(197,160,101,.1)" : "transparent",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-g" style={{ flex: 1 }} onClick={() => setModalStep(1)}>← Back</button>
                  <button className="btn" style={{ flex: 1 }} disabled={!modalDate.trim() || !modalTime.trim()} onClick={() => setModalStep(3)}>
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
  );
}
