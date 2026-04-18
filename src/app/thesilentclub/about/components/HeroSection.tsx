export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-left">
        <h1 className="hero-heading">
          <span style={{ display: "block" }}>Designed Deliberately.</span>
          <em style={{ color: "var(--gold)", display: "block", marginTop: "16px" }}>Not for everyone.</em>
        </h1>
        <p className="hero-sub">Built for the people who have already tried everything else.</p>
      </div>
    </section>
  );
}
