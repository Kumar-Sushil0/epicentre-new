"use client";

import { useEffect, useState } from "react";

const accordionItems = [
  {
    id: "acc1",
    num: "01",
    title: "Why this structure",
    body: [
      "You already know what you need to do. You've known for a while.",
      "The coaches, the frameworks, the retreats — they weren't wrong. But at some point the searching becomes its own distraction. Another way to stay busy while the real thing waits.",
      "This structure removes that option. No programme. No facilitator. No decisions to make once you arrive. Just you, and the thinking you've been putting off.",
      "Come for four hours or five days. Once or every month. Because this isn't something you resolve once — thinking accumulates, life interrupts, and the long-tail thoughts need protecting. The structure exists so you can return whenever they do.",
    ],
  },
  {
    id: "acc2",
    num: "02",
    title: "Why silence",
    body: [
      "Not to switch off. To finally hear yourself.",
      "The city doesn't just distract you — it fragments you. Every pull on your attention leaves something unfinished. It accumulates. You get heavier without knowing why.",
      "Most people at this point start consuming — self-help, frameworks, other people's answers. Until the realisation arrives: your problems are too specific to you for anyone else to solve. Only you have the full picture.",
      "But silence can feel frightening. What will you hear when you stop filling the space? That fear is real and it's worth saying clearly: you don't need to disappear. You stay reachable. You stay responsible. You simply stop performing long enough for your own signal to come through.",
      "Silence isn't the answer. It's the condition in which your own answers become audible.",
    ],
  },
  {
    id: "acc3",
    num: "03",
    title: "Why a club",
    body: [
      "Not to meet people. To not have to.",
      "A club is a shared understanding — a thread that runs through everyone present without making them the same. You may never have a real conversation with anyone here. You don't need to. But you will respect them. Because you can see they're doing the hard work.",
      "Everyone who arrives here eventually understands the same thing — direction matters more than effort. You can work harder inside the wrong life for a very long time.",
      "What you'll see: people staring at the water for an hour, scribbling something urgent, walking alone, reading like there's no tomorrow. Not a word exchanged.",
      "The awkward silence is the culture. When everyone has chosen it, it stops being awkward.",
    ],
  },
  {
    id: "acc4",
    num: "04",
    title: "Why Bhigwan",
    body: [
      "Two and a half hours from Pune. No ghats, no traffic. Maharashtra's second largest dam. Over a hundred species of birds. A village of less than a thousand people who have never needed to perform stillness — they simply live it.",
      "No excessive rules. No permissions to access the lake. No sound systems at night. No bars positioning themselves between you and the water.",
      "If you want to go midnight boating, it doesn't feel like a crime. It feels like exploration.",
      "This place was chosen after two to three years of searching, and a full year of returning before a single thing was built. It had to earn it. It did.",
      "Our club sits on a small hill overlooking the lake.",
      "Part monastery, part war room, part creative lab — where people invent themselves into something they have been longing to be.",
    ],
  },
];

const cohorts = [
  ["2026", "Founders & Academicians", "Designing next decade without pressure.", true],
  ["2027", "Designers & Developers", "Designing work that outlives trends.", false],
  ["2028", "Musicians & Singers", "Designing sounds you are obsessed about.", false],
  ["2029", "Writers & Thinkers", "Designing ideas too dangerous for blogs.", false],
  ["2030", "Artists & Actors", "Designing performances beyond applause.", false],
] as const;

export default function TheSilentClubAbout3Page() {
  const [openAcc, setOpenAcc] = useState("acc1");
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <main>
      <style jsx global>{`
        :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw;--ease:cubic-bezier(.25,.46,.45,.94)}
        *{box-sizing:border-box} html{font-size:16px;scroll-behavior:smooth}
        body{margin:0;background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;-webkit-font-smoothing:antialiased}
        .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--rule)}
        .nav.scrolled{background:rgba(15,11,8,.98)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1200px;margin:0 auto;padding:0 var(--g)}
        .nav-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);letter-spacing:.04em;text-decoration:none}
        .nav-links{display:flex;align-items:center;gap:32px;list-style:none}
        .nav-links a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--text-3);text-decoration:none}
        .nav-links a.active,.nav-links a:hover{color:var(--gold)}
        .nav-cta{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none;cursor:pointer}
        .hero{padding-top:60px;min-height:60vh;display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--rule)}
        .hero-left{padding:clamp(56px,8vw,96px) var(--g);display:flex;flex-direction:column;justify-content:flex-end}
        .hero-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:20px}
        .hero-heading{font-family:var(--serif);font-size:clamp(2.2rem,5vw,5rem);font-weight:300;line-height:.95;letter-spacing:-.02em;margin:0 0 28px}
        .hero-sub{font-size:.9rem;color:var(--text-3);line-height:1.8;max-width:380px;font-family:var(--serif);font-style:italic}
        .hero-right{border-left:1px solid var(--rule);background:var(--bg-2);display:flex;align-items:center;justify-content:center}
        .why-header{padding:clamp(56px,7vw,88px) var(--g) clamp(32px,4vw,48px);display:grid;grid-template-columns:1fr 1.6fr;gap:80px;align-items:end;border-bottom:1px solid var(--rule)}
        .why-label,.founder-label,.stf-label,.footer-col-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3)}
        .why-heading{font-family:var(--serif);font-size:clamp(1.8rem,3vw,3rem);font-weight:300;line-height:1.1}
        .why-intro{font-size:.9rem;line-height:1.85;color:var(--text-2);font-family:var(--serif);font-style:italic}
        .acc-item{border-bottom:1px solid var(--rule)}
        .acc-trigger{width:100%;background:none;border:none;padding:28px var(--g);display:grid;grid-template-columns:1fr 1.6fr auto;gap:0 60px;text-align:left;cursor:pointer}
        .acc-trigger:hover,.acc-item.open .acc-trigger{background:var(--bg-2)}
        .acc-num{font-size:.6rem;letter-spacing:.2em;color:var(--text-3)}
        .acc-title{font-family:var(--serif);font-size:clamp(1.3rem,2vw,1.8rem);color:var(--text-2)}
        .acc-item.open .acc-title,.acc-trigger:hover .acc-title{color:var(--gold-pale)}
        .acc-icon{font-size:1.1rem;color:var(--gold-dim);transition:transform .35s var(--ease)}
        .acc-item.open .acc-icon{transform:rotate(45deg)}
        .acc-body{max-height:0;overflow:hidden;transition:max-height .5s var(--ease)}
        .acc-item.open .acc-body{max-height:700px}
        .acc-body-inner{display:grid;grid-template-columns:1fr 1.6fr;gap:0 60px;padding:0 var(--g) 36px}
        .acc-body-text{grid-column:2;font-size:.9rem;line-height:1.9;color:#d4c4a8}
        .founder{display:grid;grid-template-columns:1fr 1.6fr;border-bottom:1px solid var(--rule)}
        .founder-left{border-right:1px solid var(--rule);padding:clamp(56px,7vw,88px) var(--g);background:var(--bg-2)}
        .founder-photo{width:100%;aspect-ratio:3/4;background:var(--bg-3);border:1px solid var(--rule);margin-bottom:24px;overflow:hidden}
        .founder-photo img{width:100%;height:100%;object-fit:cover;display:block}
        .founder-name{font-family:var(--serif);font-size:1.4rem}
        .founder-title{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-dim)}
        .founder-right{padding:clamp(56px,7vw,88px) var(--g);background:#160f0a}
        .founder-statement{font-family:var(--serif);font-size:clamp(1.05rem,1.6vw,1.25rem);line-height:1.85;color:var(--text-2)}
        .founder-bridge{margin-top:36px;padding-top:28px;border-top:1px solid var(--rule);font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--gold)}
        .stf{display:flex;flex-direction:column;border-bottom:1px solid var(--rule)}
        .stf-idea{display:grid;grid-template-columns:1fr 1.6fr;border-bottom:1px solid var(--rule)}
        .stf-idea-left{padding:clamp(48px,6vw,72px) var(--g);border-right:1px solid var(--rule);background:#0f0b08}
        .stf-idea-right,.stf-cycle-wrap{padding:clamp(48px,6vw,72px) var(--g)}
        .stf-heading{font-family:var(--serif);font-size:clamp(1.6rem,2.5vw,2.4rem);font-weight:300;line-height:1.1}
        .stf-desc{font-size:.875rem;line-height:1.85;color:var(--text-2)}
        .stf-download{display:inline-flex;border:1px solid var(--rule-2);padding:10px 20px;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-dim);background:none}
        .stf-cycle-heading{font-family:var(--serif);font-size:clamp(1.4rem,2.2vw,2rem);font-weight:300;margin-bottom:12px}
        .stf-cycle-desc{font-size:.84rem;color:var(--text-3);line-height:1.75;margin-bottom:36px;max-width:600px}
        .stf-cohorts-h{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--rule)}
        .stf-cohort-h{background:var(--bg-2);padding:20px 20px 24px;border-top:2px solid var(--rule-2)}
        .stf-cohort-year-h{font-family:var(--serif);font-size:1.6rem;color:var(--gold);margin-bottom:12px}
        .stf-cohort-dot{width:8px;height:8px;border-radius:50%;background:var(--rule-2);margin-bottom:14px}
        .stf-cohort-dot.open{background:var(--gold)}
        .stf-cohort-box-name{font-family:var(--serif);font-size:.95rem;color:var(--gold-pale);margin-bottom:6px}
        .stf-cohort-box-desc{font-size:.72rem;color:var(--text-3)}
        .closing-cta{padding:clamp(80px,10vw,120px) var(--g);text-align:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
        .closing-quote{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.8rem);line-height:1.3;margin-bottom:40px}
        .closing-btn{background:var(--gold);color:var(--bg);padding:14px 36px;border:none;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase}
        .closing-sub{margin-top:16px;font-family:var(--serif);font-style:italic;font-size:.9rem;color:var(--text-3)}
        .footer{background:var(--bg);border-top:1px solid var(--rule)}
        .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
        .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px)}
        .footer-brand{font-family:var(--serif);font-size:1.1rem;margin-bottom:4px}
        .footer-tagline{font-size:.66rem;color:var(--text-3);margin-bottom:24px}
        .footer-collab{padding:14px 18px;border:1px solid var(--rule-2)}
        .footer-link{display:block;font-size:.78rem;color:var(--text-3);padding:3px 0;text-decoration:none}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap}
        .footer-copy{font-size:.62rem;color:var(--text-3)}
        .modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
        .modal.show{display:flex}
        .modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative}
        .modal-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem;cursor:pointer}
        @media(max-width:860px){.nav-links{display:none}.hero{grid-template-columns:1fr}.hero-right{display:none}.why-header,.founder,.stf-idea{grid-template-columns:1fr;gap:24px}.founder-left,.stf-idea-left{border-right:none;border-bottom:1px solid var(--rule)}.acc-trigger{grid-template-columns:auto 1fr auto;gap:0 20px}.acc-body-inner{grid-template-columns:1fr}.acc-body-text{grid-column:1}}
      `}</style>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-brand" href="#">The Silent Club</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#" className="active">About</a></li>
            <li><a href="#">The Estate</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
          <button className="nav-cta" onClick={() => setOpenModal(true)}>Request Invite →</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-label">About</div>
          <h1 className="hero-heading">Designed<br />Deliberately.<br /><em style={{ color: "var(--gold)" }}>Not for<br />everyone.</em></h1>
          <p className="hero-sub">Built for the people who have already tried everything else.</p>
        </div>
        <div className="hero-right"><span style={{ fontFamily: "var(--serif)", color: "var(--rule-2)", fontStyle: "italic" }}>Estate photograph</span></div>
      </section>

      <section className="why-section">
        <div className="why-header">
          <div><div className="why-label">The thinking behind it</div><h2 className="why-heading">Why it's built<br />the way it is</h2></div>
          <div className="why-intro">Four questions. The honest answers to each one are what became The Silent Club.</div>
        </div>
        <div className="accordion">
          {accordionItems.map((item) => {
            const isOpen = openAcc === item.id;
            return (
              <div key={item.id} className={`acc-item ${isOpen ? "open" : ""}`}>
                <button className="acc-trigger" onClick={() => setOpenAcc(isOpen ? "" : item.id)}>
                  <div className="acc-num">{item.num}</div>
                  <div className="acc-title">{item.title}</div>
                  <div className="acc-icon">+</div>
                </button>
                <div className="acc-body">
                  <div className="acc-body-inner">
                    <div className="acc-body-text">
                      {item.body.map((p, idx) => (
                        <p key={p} style={{ marginBottom: idx === item.body.length - 1 ? 0 : 16 }}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="founder">
        <div className="founder-left">
          <div className="founder-photo">
            <img src="/dd.jpeg" alt="Founder portrait" />
          </div>
          <div className="founder-name">The Founder</div>
          <div className="founder-title">Conductor of Conditions</div>
        </div>
        <div className="founder-right">
          <div className="founder-label">Why this exists</div>
          <div className="founder-statement">
            <p>There were thoughts I couldn't finish.</p>
            <p>Not because I lacked time, discipline, or motivation. I had tried all of it — coaches, mentors, online courses, retreats, communities. Most of it made me more performative, not less. I was comparing myself to borrowed benchmarks, seeking validation from environments that required me to announce who I was so people could decide how much substance I deserved.</p>
            <p>What I didn't have was an environment where I didn't need to perform at all. No judgement. No validation required or offered. No one asking what I do.</p>
            <p>I just wanted to ghost my old life for a bit. Come back a little resolved, a little untangled, a little less on my mind — so I could be more present in the life I was returning to. Unfinished thinking takes up space like a thief.</p>
            <p>So I built the socket. I call it The Silent Club.</p>
          </div>
          <div className="founder-bridge">If any of this sounds familiar — this page is for you.</div>
        </div>
      </section>

      <section className="stf">
        <div className="stf-idea">
          <div className="stf-idea-left"><div className="stf-label">Initiative</div><h2 className="stf-heading">Silent Tourism<br />Foundation</h2></div>
          <div className="stf-idea-right">
            <p className="stf-desc">An open-source research initiative documenting what happens when silence is made structurally accessible — not as a luxury, but as a condition for clearer thinking and better living. The findings belong to everyone.</p>
            <p className="stf-desc" style={{ marginTop: 12, fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--text-3)" }}>The foundation tracks one question across five years and five different kinds of minds — what does silence make possible when the conditions are right?</p>
            <button className="stf-download" style={{ marginTop: 24 }}>Download White Paper →</button>
          </div>
        </div>
        <div className="stf-cycle-wrap">
          <h3 className="stf-cycle-heading">The Founding Five-Year Cycle</h3>
          <div className="stf-cycle-desc"><p>100 participants each year. Not to scale the system — but to study it without distortion.</p><p>Different lives. Different pressures. Different relationships with silence.</p></div>
          <div className="stf-cohorts-h">
            {cohorts.map(([year, title, desc, open]) => (
              <div className="stf-cohort-h" key={year}>
                <div className="stf-cohort-year-h">{year}</div>
                <div className={`stf-cohort-dot ${open ? "open" : ""}`} />
                <div className="stf-cohort-box-name">{title}</div>
                <div className="stf-cohort-box-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-quote">"Unfinished thinking takes up space like a thief.<br /><em style={{ color: "var(--gold)" }}>It robs you of the moment you're actually in.</em>"</div>
        <button className="closing-btn" onClick={() => setOpenModal(true)}>Request Invite →</button>
        <div className="closing-sub">Two questions. A short conversation. Your first invite.</div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-brand">The Silent Club</div>
            <div className="footer-tagline">Silence as a Service · Bhigwan, Pune</div>
            <div className="footer-collab">
              <p style={{ fontSize: ".72rem", color: "var(--text-3)", lineHeight: 1.5, marginBottom: 8 }}>Artist, musician, or experience creator? Host an event here.</p>
              <button style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-dim)", background: "none", border: 0 }}>Collaborate with us →</button>
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
