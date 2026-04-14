export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-brand">The Silent Club</div>
          <div className="footer-tagline">Silence as a Service · Bhigwan, Pune</div>
          <div className="footer-collab">
            <p style={{ fontSize: ".72rem", color: "var(--text-3)", lineHeight: 1.5, marginBottom: 8 }}>
              Artist, musician, or experience creator? Host an event here.
            </p>
            <button
              style={{
                fontSize: ".6rem",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                background: "none",
                border: 0,
              }}
            >
              Collaborate with us →
            </button>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">Explore</div>
          <a className="footer-link" href="#">Home</a>
          <a className="footer-link" href="#">About</a>
          <a className="footer-link" href="#">The Estate</a>
          <a className="footer-link" href="#">Journal</a>
          <a className="footer-link" href="#">FAQ</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">Stay</div>
          <a className="footer-link" href="#">Silence — Day Cycle</a>
          <a className="footer-link" href="#">Residency — Weekend</a>
          <a className="footer-link" href="#">Solitude — Weekday</a>
          <a className="footer-link" href="#">Creation — Full Estate</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">Connect</div>
          <a className="footer-link" href="#">Instagram</a>
          <a className="footer-link" href="#">Substack</a>
          <a className="footer-link" href="#">Request Invite</a>
          <a className="footer-link" href="#">Host an Event</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 The Silent Club. All rights reserved.</div>
        <div className="footer-copy">
          The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104
        </div>
        <div className="footer-copy">A registered initiative of Silent Tourism Foundation.</div>
      </div>
    </footer>
  );
}
