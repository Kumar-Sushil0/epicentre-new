export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-label">About</div>
        <h1 className="hero-heading">
          Designed
          <br />
          Deliberately.
          <br />
          <em style={{ color: "var(--gold)" }}>
            Not for
            <br />
            everyone.
          </em>
        </h1>
        <p className="hero-sub">Built for the people who have already tried everything else.</p>
      </div>
      <div className="hero-right">
        <span style={{ fontFamily: "var(--serif)", color: "var(--rule-2)", fontStyle: "italic" }}>
          Estate photograph
        </span>
      </div>
    </section>
  );
}
