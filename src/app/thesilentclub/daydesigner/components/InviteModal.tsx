type Props = {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
  modalSubmitted: boolean;
  setModalSubmitted: (v: boolean) => void;
  modalName: string;
  setModalName: (v: string) => void;
  modalEmail: string;
  setModalEmail: (v: string) => void;
  modalQ1: string;
  setModalQ1: (v: string) => void;
  modalQ2: string;
  setModalQ2: (v: string) => void;
};

export function InviteModal(props: Props) {
  const {
    showModal, setShowModal, modalSubmitted, setModalSubmitted,
    modalName, setModalName, modalEmail, setModalEmail, modalQ1, setModalQ1, modalQ2, setModalQ2,
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
            <div style={{ fontSize: ".58rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#7a6048", marginBottom: 10 }}>Request Invite</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 6 }}>Two questions.<br />No pitch.</div>
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
              style={{ width: "100%", marginBottom: 12, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", boxSizing: "border-box" }}
            />
            <div style={{ fontSize: ".54rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 5 }}>What are you hoping to get out of this stay?</div>
            <textarea
              rows={3}
              placeholder="Take your time..."
              value={modalQ1}
              onChange={(e) => setModalQ1(e.target.value)}
              style={{ width: "100%", marginBottom: 12, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
            />
            <div style={{ fontSize: ".54rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 5 }}>Is there anything we should know before we speak?</div>
            <textarea
              rows={3}
              placeholder="Optional..."
              value={modalQ2}
              onChange={(e) => setModalQ2(e.target.value)}
              style={{ width: "100%", marginBottom: 16, background: "#1c1410", border: "1px solid #2a1f17", padding: "9px 12px", color: "#e8d5b0", resize: "none", boxSizing: "border-box" }}
            />
            <button
              className="btn"
              style={{ width: "100%" }}
              disabled={!modalName.trim() || !modalEmail.trim() || !modalQ1.trim()}
              onClick={() => setModalSubmitted(true)}
            >
              Submit →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
