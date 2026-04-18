export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-brand">The Silent Club</div>
          <div className="footer-tagline">Silence as a Service · Bhigwan, Pune</div>
          <div style={{ padding: "14px 18px", border: "1px solid var(--rule-2)" }}>
            <p style={{ fontSize: ".72rem", color: "var(--text-3)", lineHeight: 1.5, marginBottom: 8 }}>
              Artist, musician, or experience creator? Host an event here.
            </p>
            <button style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-dim)", border: 0, background: "none" }}>
              Collaborate with us →
            </button>
          </div>
        </div>
        <div className="footer-col"><div className="footer-col-label">Explore</div><a className="footer-link" href="#">Home</a><a className="footer-link" href="#">About</a><a className="footer-link" href="#">The Estate</a><a className="footer-link" href="#">Journal</a><a className="footer-link" href="#">FAQ</a></div>
        <div className="footer-col"><div className="footer-col-label">Stay</div><a className="footer-link" href="#">Silence Day Cycle</a><a className="footer-link" href="#">Residency Weekend</a><a className="footer-link" href="#">Solitude Weekday</a><a className="footer-link" href="#">Creation Full Estate</a></div>
        <div className="footer-col"><div className="footer-col-label">Connect</div><a className="footer-link" href="#">Instagram</a><a className="footer-link" href="#">Substack</a><a className="footer-link" href="/thesilentclub/daydesigner">Request Invite</a><a className="footer-link" href="#">Host an Event</a></div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 The Silent Club. All rights reserved.</div>
        <div className="footer-copy">The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</div>
        <div className="footer-copy">A registered initiative of Silent Tourism Foundation.</div>
      </div>
    </footer>
  );
}

export function InviteModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (v: boolean) => void;
}) {
  return (
    <div className={`modal ${openModal ? "show" : ""}`} onClick={(e) => e.currentTarget === e.target && setOpenModal(false)}>
      <div className="modal-box">
        <button className="modal-x" onClick={() => setOpenModal(false)}>×</button>
        <div style={{ fontSize: ".6rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#7a6048", marginBottom: 12 }}>Request Invite</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", marginBottom: 6 }}>Two questions.<br />No pitch.</div>
        <div style={{ fontSize: ".82rem", color: "#7a6048", marginBottom: 22 }}>We respond within 72 hours.</div>
        <label style={{ display: "block", marginBottom: 13 }}><span style={{ display: "block", marginBottom: 5, fontSize: ".56rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a6048" }}>Your name</span><input type="text" placeholder="Full name" style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", color: "#e8d5b0" }} /></label>
        <label style={{ display: "block", marginBottom: 13 }}><span style={{ display: "block", marginBottom: 5, fontSize: ".56rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a6048" }}>Your email</span><input type="email" placeholder="email@example.com" style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", color: "#e8d5b0" }} /></label>
        <label style={{ display: "block", marginBottom: 13 }}><span style={{ display: "block", marginBottom: 5, fontSize: ".56rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a6048" }}>What do you do, and what kind of quiet do you need?</span><textarea rows={3} style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", color: "#e8d5b0" }} /></label>
        <label style={{ display: "block", marginBottom: 13 }}><span style={{ display: "block", marginBottom: 5, fontSize: ".56rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a6048" }}>Describe the last time you were truly alone with a thought.</span><textarea rows={3} style={{ width: "100%", background: "#1c1410", border: "1px solid #2a1f17", padding: "10px 12px", color: "#e8d5b0" }} /></label>
        <button style={{ width: "100%", background: "#c5a065", color: "#0f0b08", fontSize: ".62rem", letterSpacing: ".18em", textTransform: "uppercase", padding: 12, border: 0 }}>Submit →</button>
      </div>
    </div>
  );
}
