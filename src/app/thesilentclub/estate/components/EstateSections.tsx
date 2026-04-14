import { heroImage } from "../content";
import { CardGrid } from "./CardGrid";

type GroupKey = "nature" | "spaces" | "practice" | "symbolica";

export function TopNav({
  scrolled,
  onOpenModal,
}: {
  scrolled: boolean;
  onOpenModal: () => void;
}) {
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="/thesilentclub/home">
          The Silent Club
        </a>
        <ul className="nav-links">
          <li><a href="/thesilentclub/home">Home</a></li>
          <li><a href="/thesilentclub/estate" className="active">Estate</a></li>
          <li><a href="/thesilentclub/about">About</a></li>
          <li><a href="/thesilentclub/faq">FAQ</a></li>
          <li><a href="/blogs">Journal</a></li>
        </ul>
        <button className="nav-cta" onClick={onOpenModal}>Request Invite →</button>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImage} alt="Lake photograph — dawn, Ujni, Bhigwan" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-rule" />
        <div className="hero-text">
          <h1 className="hero-headline">Nothing is asking<br />for your attention.</h1>
          <p className="hero-sub">And that changes everything.</p>
        </div>
      </div>
    </section>
  );
}

export function IntroAndNumbers() {
  return (
    <>
      <section className="intro">
        <div className="intro-label">The Estate</div>
        <p className="intro-body">
          Every decision about this estate was made to support one thing —{" "}
          <em>uninterrupted thinking.</em> Not comfort for its own sake. Not aesthetics for their own
          sake. Each space removes something that would otherwise compete for your attention.
        </p>
      </section>

      <div className="numbers">
        <div className="number-item"><div className="number-val">7</div><div className="number-label">Acres overlooking Ujni Lake</div></div>
        <div className="number-item"><div className="number-val">20</div><div className="number-label">Maximum members at any time</div></div>
        <div className="number-item"><div className="number-val">100+</div><div className="number-label">Migratory bird species</div></div>
        <div className="number-item"><div className="number-val">2.5h</div><div className="number-label">From Pune city centre</div></div>
        <div className="number-item"><div className="number-val">3</div><div className="number-label">Treehouses on the hill</div></div>
        <div className="number-item"><div className="number-val">24h</div><div className="number-label">Kitchen access, every day</div></div>
      </div>
    </>
  );
}

export function CategorySection({
  groupKey,
  num,
  title,
  desc,
  open,
  onToggle,
  cards,
  cols,
  className = "",
}: {
  groupKey: GroupKey;
  num: string;
  title: string;
  desc: string;
  open: boolean;
  onToggle: (key: GroupKey) => void;
  cards: readonly (readonly [string, string])[];
  cols?: string;
  className?: string;
}) {
  return (
    <section className={`cat-section ${className}`.trim()}>
      <div className="cat-header-wrap">
        <button className="cat-trigger" onClick={() => onToggle(groupKey)}>
          <div className="cat-header">
            <div>
              <div className="cat-num">{num}</div>
              <div className="cat-title">{title}</div>
            </div>
            <div className="cat-desc">{desc}</div>
          </div>
        </button>
        <span className={`cat-toggle ${open ? "open" : ""}`}>+</span>
      </div>
      <div className={`cat-body ${open ? "" : "closed"}`}>
        <CardGrid cards={cards} cols={cols} />
      </div>
    </section>
  );
}

export function ClosingCta({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="cta-band">
      <h2 className="cta-headline">The infrastructure is ready.<br /><em style={{ color: "var(--gold)" }}>The thinking is yours.</em></h2>
      <button className="btn-gold" onClick={onOpenModal}>Request Invite →</button>
      <p className="cta-sub">Two questions. A short conversation. Your first invite.</p>
    </section>
  );
}
