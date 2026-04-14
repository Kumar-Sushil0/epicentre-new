export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-left">
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
    </section>
  );
}
