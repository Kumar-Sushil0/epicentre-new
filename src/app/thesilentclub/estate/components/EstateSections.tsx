import { heroImage } from "../content";
import { CardGrid } from "./CardGrid";
import { SiteHeader } from "../../components/SiteHeader";

type GroupKey = "nature" | "spaces" | "practice" | "symbolica";

export function TopNav({
  scrolled,
  onOpenModal,
}: {
  scrolled: boolean;
  onOpenModal: () => void;
}) {
  void scrolled;
  void onOpenModal;
  return <SiteHeader active="estate" />;
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImage} alt="Lake photograph, dawn, Ujni, Bhigwan" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Private Estate · Bhigwan, Pune · Invite Only</span>
        </div>
        <h1 className="hero-headline">
          Nothing is asking
          <em>for your attention.</em>
        </h1>
        <p className="hero-sub">And that changes everything.</p>
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
          Every decision about this estate was made to support one thing:{" "}
          <em>uninterrupted thinking.</em> Not comfort for its own sake. Not aesthetics for their own
          sake. Each space removes something that would otherwise compete for your attention.
        </p>
      </section>

      <div className="numbers">
        <div className="number-item"><div className="number-val">7</div><div className="number-label">Acres overlooking Ujni Lake</div></div>
        <div className="number-item"><div className="number-val">20</div><div className="number-label">Members at a time</div></div>
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
            <div className="cat-num-title">
              <span className="cat-num">{num}</span>
              <span className="cat-sep">—</span>
              <span className="cat-title">{title}</span>
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
      <a href="#invite" className="btn-gold">Request Invite →</a>
      <p className="cta-sub">Two questions. A short conversation. Your first invite.</p>
    </section>
  );
}
