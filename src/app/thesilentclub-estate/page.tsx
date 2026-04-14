"use client";

import { useEffect, useState } from "react";

const natureCards = [
  ["Bird Walks", "Dawn on the lake. Over 100 migratory species. Binoculars provided. No guide, no commentary, no schedule."],
  ["Wildlife Encounters", "Hyenas, foxes, jackals, deer in the forest nearby. Not curated. Not behind glass. Simply present."],
  ["Lake Fishing", "Ujni Lake at your pace. Still water, still mind. The catch is optional."],
  ["Farm & Animals", "Dogs, chickens, goats, cows, buffalo. A working farm. The animals were here before you and will be here after."],
  ["Dawn & Dusk Decks", "The lake faces west. The light does something different here twice a day. Both are worth staying still for."],
  ["Star Gazing", "No light pollution. Telescope on the deck. The sky here is the original silence."],
] as const;

const spacesCards = [
  ["Private Room", "Bed, desk, attached bath. Nothing on the walls that asks you to feel something."],
  ["Shared Dorm", "Two dorms, five beds each. Same silence, same access. The room does not decide what kind of thinker you are."],
  ["Contemplation Garden", "Open-air. Nothing to do. Nowhere to be. The most honest space on the estate."],
  ["Deep Thought Lounge", "Poolside, overlooking the lake. For the kind of thinking that needs a horizon to land on."],
  ["Central Courtyard", "The heart of the estate. Where paths cross without requiring conversation."],
  ["The Treehouses", "Three of them. Elevated, private, above the noise that was never really there to begin with."],
] as const;

const practiceCards = [
  ["Satvik Kitchen", "Vegetarian, eggs, select vegan. Prepared fresh each morning. No menu, no ordering, no decisions."],
  ["The Pantry", "Open all day. Smoothies, sandwiches, light bites. For when the body needs something without making it an event."],
  ["The Outdoor Kitchen", "Barbecue and pizza. Outdoor evenings. Shared in silence, or near it."],
  ["Gym & Pool", "Open all day. No classes, no instructors, no one watching. Regulate, then create."],
  ["Meditation Deck", "Structured stillness for those who need a container before they can sit with themselves."],
  ["Contrast Therapy", "For the body that has been sitting still long enough to need the opposite."],
  ["Kayaks & Cycling", "On the lake and the open road. Movement that doesn't require conversation."],
] as const;

const symbolicaCards = [
  ["Identity Cemetery", "A place to set down what you've been performing. Your title, your role, your reputation. None of it followed you here."],
  ["Moon Gate", "A circular opening in the estate wall. What you see through it changes with the light. So does what you're thinking about."],
  ["Thinking Man", "A figure. Seated. Not doing anything. The only honest role model on the premises."],
  ["Edgeless Gallery", "No frames, no labels, no curator's note. The estate itself is the exhibit. You are both the visitor and the work."],
] as const;

const heroImage =
  "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat1.png";

const estateImageMap: Record<string, string> = {
  "Bird Walks": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird1.png",
  "Wildlife Encounters": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari1.png",
  "Lake Fishing": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat2.png",
  "Farm & Animals": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/farm.jpeg",
  "Dawn & Dusk Decks": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/lawn.jpeg",
  "Star Gazing": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat3.png",
  "Private Room": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room1.png",
  "Shared Dorm": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm1.png",
  "Contemplation Garden": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen1.png",
  "Deep Thought Lounge": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/library.png",
  "Central Courtyard": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/courtyard.png",
  "The Treehouses": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/treehouse.jpeg",
  "Satvik Kitchen": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
  "The Pantry": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp1.png",
  "The Outdoor Kitchen": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok1.png",
  "Gym & Pool": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym1.png",
  "Meditation Deck": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
  "Contrast Therapy": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/hot.png",
  "Kayaks & Cycling": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/kayak.png",
  "Identity Cemetery": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/cemetary.jpg",
  "Moon Gate": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/moongate.png",
  "Thinking Man": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/thinkingman.png",
  "Edgeless Gallery": "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/edgelessgallery.jpeg",
};

function CardGrid({ cards, cols = "" }: { cards: readonly (readonly [string, string])[]; cols?: string }) {
  return (
    <div className={`cards ${cols}`}>
      {cards.map(([name, desc]) => (
        <div className="card" key={name}>
          <div className="card-img">
            {estateImageMap[name] ? (
              <img src={estateImageMap[name]} alt={name} />
            ) : (
              <div className="card-img-placeholder">{name}</div>
            )}
          </div>
          <div className="card-body">
            <div className="card-name">{name}</div>
            <div className="card-desc">{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TheSilentClubEstatePage() {
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    nature: true,
    spaces: true,
    practice: true,
    symbolica: true,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const toggleGroup = (key: "nature" | "spaces" | "practice" | "symbolica") => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main>
      <style jsx global>{`
        :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--bg-4:#221814;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw}
        *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300}
        .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,0);backdrop-filter:blur(0);border-bottom:1px solid transparent;transition:all .4s}
        .nav.scrolled{background:rgba(15,11,8,.96);backdrop-filter:blur(16px);border-bottom-color:var(--rule)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1400px;margin:0 auto;padding:0 var(--g)}
        .nav-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);text-decoration:none}
        .nav-links{display:flex;gap:32px;list-style:none}.nav-links a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(232,213,176,.6);text-decoration:none}
        .nav-links a.active,.nav-links a:hover{color:var(--gold-pale)}
        .nav-cta{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none}
        .hero{position:relative;height:100vh;display:flex;align-items:flex-end;overflow:hidden}
        .hero-bg{position:absolute;inset:0;background:var(--bg-3);display:flex;align-items:center;justify-content:center}
        .hero-bg img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,11,8,.75) 0%,rgba(15,11,8,.1) 50%,transparent 100%)}
        .hero-content{position:relative;z-index:2;padding:clamp(48px,6vw,80px) var(--g);display:flex;align-items:flex-end;gap:24px}
        .hero-rule{width:2px;height:clamp(60px,8vw,100px);background:var(--gold)}
        .hero-headline{font-family:var(--serif);font-style:italic;font-size:clamp(2.4rem,5.5vw,5.5rem);color:var(--gold);line-height:1;margin:0 0 10px}
        .hero-sub{font-size:clamp(.875rem,1.2vw,1rem);color:var(--gold-pale);opacity:.85}
        .intro{padding:clamp(56px,7vw,88px) var(--g);display:grid;grid-template-columns:1fr 1.8fr;gap:0 100px;align-items:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
        .intro-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3)}
        .intro-body{font-family:var(--serif);font-size:clamp(1.1rem,1.8vw,1.5rem);line-height:1.65;color:var(--text-2)}
        .numbers{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
        .number-item{background:var(--bg-2);padding:28px 24px}.number-val{font-family:var(--serif);font-size:2.4rem;color:var(--gold)}
        .number-label{font-size:.62rem;color:var(--text-3)}
        .cat-section{border-bottom:1px solid var(--rule)} .cat-header{padding:clamp(48px,6vw,72px) var(--g) clamp(28px,3.5vw,40px);display:grid;grid-template-columns:1fr 1.8fr;gap:0 100px;align-items:end;border-bottom:1px solid var(--rule)}
        .cat-trigger{width:100%;background:none;border:none;color:inherit;text-align:left;cursor:pointer;padding:0}
        .cat-header-wrap{position:relative}
        .cat-toggle{position:absolute;right:var(--g);top:50%;transform:translateY(-50%);font-size:1.15rem;color:var(--gold-dim);transition:transform .25s ease}
        .cat-toggle.open{transform:translateY(-50%) rotate(45deg);color:var(--gold)}
        .cat-body{max-height:2000px;overflow:hidden;transition:max-height .45s ease}
        .cat-body.closed{max-height:0}
        .cat-num{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:14px}
        .cat-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.6rem);line-height:1}
        .cat-desc{font-size:.875rem;line-height:1.85;color:var(--text-2);font-family:var(--serif);font-style:italic}
        .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:28px var(--g);background:transparent}
        .cards.four-col{grid-template-columns:repeat(4,1fr)}
        .card{background:#0f0b08;display:flex;flex-direction:column;border:1px solid var(--rule);border-radius:2px;overflow:hidden}
        .card-img{aspect-ratio:4/3;background:var(--bg-3);position:relative;overflow:hidden}
        .card-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
        .card-img-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-style:italic;color:var(--rule-2)}
        .card-body{padding:20px 22px 24px}.card-name{font-family:var(--serif);font-size:1.1rem;margin-bottom:6px}.card-desc{font-size:.76rem;color:var(--text-3);line-height:1.65}
        .symbolica{background:var(--bg-2)} .symbolica .card{background:var(--bg-3)} .symbolica .cat-title{font-style:italic}
        .cta-band{padding:clamp(80px,10vw,120px) var(--g);text-align:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
        .cta-headline{font-family:var(--serif);font-size:clamp(2rem,4vw,4rem);line-height:1.15;margin-bottom:36px}.btn-gold{background:var(--gold);color:var(--bg);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 36px;border:none}
        .cta-sub{margin-top:16px;font-family:var(--serif);font-style:italic;font-size:.9rem;color:var(--text-3)}
        .footer{background:var(--bg);border-top:1px solid var(--rule)} .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
        .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px)} .footer-brand{font-family:var(--serif);font-size:1.1rem}
        .footer-tagline,.footer-copy,.footer-link{color:var(--text-3)} .footer-link{text-decoration:none;display:block;padding:3px 0}
        .footer-col-label{font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text-3);margin-bottom:14px}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap}.footer-copy{font-size:.62rem}
        .modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
        .modal.show{display:flex}.modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative}
        .modal-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem}
        @media(max-width:900px){.numbers{grid-template-columns:repeat(3,1fr)}.cards,.cards.four-col{grid-template-columns:repeat(2,1fr)}.footer-top{grid-template-columns:1fr 1fr}}
        @media(max-width:860px){.nav-links{display:none}.intro,.cat-header{grid-template-columns:1fr;gap:16px}}
        @media(max-width:540px){.numbers{grid-template-columns:repeat(2,1fr)}.cards,.cards.four-col{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr}}
      `}</style>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#">The Silent Club</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#" className="active">Estate</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
          <button className="nav-cta" onClick={() => setOpenModal(true)}>Request Invite →</button>
        </div>
      </nav>

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

      <section className="intro">
        <div className="intro-label">The Estate</div>
        <p className="intro-body">Every decision about this estate was made to support one thing — <em>uninterrupted thinking.</em> Not comfort for its own sake. Not aesthetics for their own sake. Each space removes something that would otherwise compete for your attention.</p>
      </section>

      <div className="numbers">
        <div className="number-item"><div className="number-val">7</div><div className="number-label">Acres overlooking Ujni Lake</div></div>
        <div className="number-item"><div className="number-val">20</div><div className="number-label">Maximum members at any time</div></div>
        <div className="number-item"><div className="number-val">100+</div><div className="number-label">Migratory bird species</div></div>
        <div className="number-item"><div className="number-val">2.5h</div><div className="number-label">From Pune city centre</div></div>
        <div className="number-item"><div className="number-val">3</div><div className="number-label">Treehouses on the hill</div></div>
        <div className="number-item"><div className="number-val">24h</div><div className="number-label">Kitchen access, every day</div></div>
      </div>

      <section className="cat-section">
        <div className="cat-header-wrap">
          <button className="cat-trigger" onClick={() => toggleGroup("nature")}>
            <div className="cat-header"><div><div className="cat-num">01</div><div className="cat-title">Nature</div></div><div className="cat-desc">The setting that does the work before you've unpacked.</div></div>
          </button>
          <span className={`cat-toggle ${openGroups.nature ? "open" : ""}`}>+</span>
        </div>
        <div className={`cat-body ${openGroups.nature ? "" : "closed"}`}>
          <CardGrid cards={natureCards} />
        </div>
      </section>

      <section className="cat-section">
        <div className="cat-header-wrap">
          <button className="cat-trigger" onClick={() => toggleGroup("spaces")}>
            <div className="cat-header"><div><div className="cat-num">02</div><div className="cat-title">Spaces</div></div><div className="cat-desc">Every room removes a decision.</div></div>
          </button>
          <span className={`cat-toggle ${openGroups.spaces ? "open" : ""}`}>+</span>
        </div>
        <div className={`cat-body ${openGroups.spaces ? "" : "closed"}`}>
          <CardGrid cards={spacesCards} />
        </div>
      </section>

      <section className="cat-section">
        <div className="cat-header-wrap">
          <button className="cat-trigger" onClick={() => toggleGroup("practice")}>
            <div className="cat-header"><div><div className="cat-num">03</div><div className="cat-title">Practice</div></div><div className="cat-desc">Food and movement. Both designed to sustain thinking, not interrupt it.</div></div>
          </button>
          <span className={`cat-toggle ${openGroups.practice ? "open" : ""}`}>+</span>
        </div>
        <div className={`cat-body ${openGroups.practice ? "" : "closed"}`}>
          <CardGrid cards={practiceCards} />
        </div>
      </section>

      <section className="cat-section symbolica">
        <div className="cat-header-wrap">
          <button className="cat-trigger" onClick={() => toggleGroup("symbolica")}>
            <div className="cat-header"><div><div className="cat-num">04</div><div className="cat-title">Symbolica</div></div><div className="cat-desc">The parts of the estate that don't have a function. That's the point.</div></div>
          </button>
          <span className={`cat-toggle ${openGroups.symbolica ? "open" : ""}`}>+</span>
        </div>
        <div className={`cat-body ${openGroups.symbolica ? "" : "closed"}`}>
          <CardGrid cards={symbolicaCards} cols="four-col" />
        </div>
      </section>

      <section className="cta-band">
        <h2 className="cta-headline">The infrastructure is ready.<br /><em style={{ color: "var(--gold)" }}>The thinking is yours.</em></h2>
        <button className="btn-gold" onClick={() => setOpenModal(true)}>Request Invite →</button>
        <p className="cta-sub">Two questions. A short conversation. Your first invite.</p>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-brand">The Silent Club</div>
            <div className="footer-tagline">Silence as a Service · Bhigwan, Pune</div>
            <div style={{ padding: "14px 18px", border: "1px solid var(--rule-2)" }}>
              <p style={{ fontSize: ".72rem", color: "var(--text-3)", lineHeight: 1.5, marginBottom: 8 }}>Artist, musician, or experience creator? Host an event here.</p>
              <button style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-dim)", border: 0, background: "none" }}>Collaborate with us →</button>
            </div>
          </div>
          <div className="footer-col"><div className="footer-col-label">Explore</div><a className="footer-link" href="#">Home</a><a className="footer-link" href="#">About</a><a className="footer-link" href="#">The Estate</a><a className="footer-link" href="#">Journal</a><a className="footer-link" href="#">FAQ</a></div>
          <div className="footer-col"><div className="footer-col-label">Stay</div><a className="footer-link" href="#">Silence — Day Cycle</a><a className="footer-link" href="#">Residency — Weekend</a><a className="footer-link" href="#">Solitude — Weekday</a><a className="footer-link" href="#">Creation — Full Estate</a></div>
          <div className="footer-col"><div className="footer-col-label">Connect</div><a className="footer-link" href="#">Instagram</a><a className="footer-link" href="#">Substack</a><a className="footer-link" href="#">Request Invite</a><a className="footer-link" href="#">Host an Event</a></div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 The Silent Club. All rights reserved.</div>
          <div className="footer-copy">The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</div>
          <div className="footer-copy">A registered initiative of Silent Tourism Foundation.</div>
        </div>
      </footer>

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
    </main>
  );
}
