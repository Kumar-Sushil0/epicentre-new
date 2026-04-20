"use client";

import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

type Category = "all" | "silence" | "identity" | "decision" | "environment";

type Post = {
  href: string;
  cat: Exclude<Category, "all">;
  tag: string;
  title: string;
  sub: string;
  thumbnail: string;
};

const posts: Post[] = [
  {
    href: "/thesilentclub/blogs/performing",
    cat: "identity",
    tag: "Identity & Sovereignty",
    title: "You Don't Have a Private Self. You Have an Unmonitored One.",
    sub: "Why the audience never leaves — and what happens when it does.",
    thumbnail: "/blog1.png",
  },
  {
    href: "/thesilentclub/blogs/environment",
    cat: "decision",
    tag: "Decision & Clarity",
    title: "You're Not Undisciplined. You're Outdesigned.",
    sub: "Why behaviour follows setup — not intention.",
    thumbnail: "/blog2.png",
  },
  {
    href: "/thesilentclub/blogs/sitting",
    cat: "silence",
    tag: "Silence & Attention",
    title: "You Don't Have a Thinking Problem. You Have an Exit Problem.",
    sub: "Why the mind that can't sit still is not restless — it's trained.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/3.png",
  },
  {
    href: "/thesilentclub/blogs/discipline",
    cat: "silence",
    tag: "Silence & Attention",
    title: "You Don't Need Discipline. You Need a Line You Won't Cross.",
    sub: "Why disgust is more reliable than motivation.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/2.png",
  },
  {
    href: "/thesilentclub/blogs/want",
    cat: "identity",
    tag: "Identity & Sovereignty",
    title: "You Know What You Should Want. That's the Problem.",
    sub: "Why familiarity feels like desire — and how to tell the difference.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/4.png",
  },
  {
    href: "/thesilentclub/blogs/chose",
    cat: "environment",
    tag: "Environment & Structure",
    title: "You Didn't Design This Life. You Adjusted Into It.",
    sub: "The difference between authorship and momentum.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/8.png",
  },
  {
    href: "/thesilentclub/blogs/commit",
    cat: "environment",
    tag: "Environment & Structure",
    title: "You're Not Keeping Options Open. You're Keeping Decisions Alive.",
    sub: "Why openness is not freedom — it's friction.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/7.png",
  },
  {
    href: "/thesilentclub/blogs/small",
    cat: "decision",
    tag: "Decision & Clarity",
    title: "Nothing Big Is Ruining Your Life. Something Small Is Running It.",
    sub: "Why attention compounds — and what it's compounding into.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/9.png",
  },
  {
    href: "/thesilentclub/blogs/promises",
    cat: "identity",
    tag: "Identity & Sovereignty",
    title: "You Don't Have a Clarity Problem. You Have a Credibility Problem.",
    sub: "Why self-trust is not built by knowing more — it's built by doing what you already know.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/5.png",
  },
  {
    href: "/thesilentclub/blogs/adding",
    cat: "environment",
    tag: "Environment & Structure",
    title: "Clarity Was Never Missing. You Were Just Keeping Too Much Alive.",
    sub: "Why addition is avoidance — and subtraction is the whole move.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/6.png",
  },
  {
    href: "/thesilentclub/blogs/meaning",
    cat: "decision",
    tag: "Decision & Clarity",
    title: "You're Not Lost. You're Just Interpreting Too Early.",
    sub: "Why meaning that is borrowed never fully lands.",
    thumbnail: "/blog11.png",
  },
  {
    href: "/thesilentclub/blogs/thinking-problem",
    cat: "silence",
    tag: "Silence & Attention",
    title: "You Don't Lack Answers. You Lack Attention.",
    sub: "Why clarity is not intelligence — it's continuity.",
    thumbnail: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/blogs/1.png",
  },
];

export default function TheSilentClubBlogsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [activeCat, setActiveCat] = useState<Category>("all");

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const visiblePosts = useMemo(() => {
    if (activeCat === "all") return posts;
    return posts.filter((post) => post.cat === activeCat);
  }, [activeCat]);

  return (
    <main className="blogs-page">
      <style jsx global>{`
        :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw;}
        *{box-sizing:border-box}
        html{font-size:16px;scroll-behavior:smooth}
        body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;-webkit-font-smoothing:antialiased}
        body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:.4}
        .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--rule);transition:background .2s}
        .nav.scrolled{background:rgba(15,11,8,.98)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1400px;margin:0 auto;padding:0 var(--g)}
        .nav-brand{height:56px;width:160px;display:flex;align-items:center;justify-content:center;text-decoration:none}
        .nav-links{display:flex;align-items:center;gap:32px;list-style:none}
        .nav-links a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--text-3);text-decoration:none}
        .nav-links a:hover,.nav-links a.active{color:var(--gold)}
        .nav-cta{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none;cursor:pointer;font-family:var(--sans);font-weight:bold}
        .hero{padding-top:60px;border-bottom:1px solid var(--rule)}
        .hero-inner{padding:clamp(56px,8vw,96px) var(--g) clamp(40px,5vw,56px);display:flex;flex-direction:column;gap:24px;border-bottom:1px solid var(--rule)}
        .hero-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px}
        .hero-heading{font-family:var(--serif);font-weight:700;font-size:clamp(2.2rem,5vw,5rem);line-height:.95;letter-spacing:-.02em;color:var(--gold-pale)}
        .hero-heading em{font-style:italic;color:var(--gold)}
        .hero-desc{font-size:.9rem;line-height:1.85;color:var(--text-2);margin-bottom:24px}
        .hero-desc em{font-family:var(--serif);font-style:italic;color:var(--gold-pale)}
        .featured{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--rule);cursor:pointer;transition:background .3s;text-decoration:none}
        .featured:hover{background:var(--bg-2)}
        .featured-img{aspect-ratio:4/3;background:var(--bg-3);position:relative;overflow:hidden;border-right:1px solid var(--rule)}
        .featured-img-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:1rem;font-style:italic;color:var(--rule-2)}
        .featured-body{padding:clamp(40px,5vw,64px) var(--g);display:flex;flex-direction:column;justify-content:space-between}
        .featured-eyebrow{display:flex;align-items:center;gap:12px;margin-bottom:20px}
        .featured-tag{font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-dim);border:1px solid var(--rule-2);padding:3px 10px}
        .featured-pin{font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-3)}
        .featured-title{font-family:var(--serif);font-weight:300;font-size:clamp(1.6rem,3vw,2.8rem);color:var(--gold-pale);line-height:1.1;letter-spacing:-.01em;margin-bottom:16px}
        .featured-sub{font-size:.875rem;color:var(--text-3);line-height:1.75;font-family:var(--serif);font-style:italic;margin-bottom:24px;flex:1}
        .featured-meta{display:flex;align-items:center;justify-content:space-between;padding-top:20px;border-top:1px solid var(--rule)}
        .featured-date{font-size:.62rem;letter-spacing:.1em;color:var(--text-3)}
        .featured-read{font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-dim)}
        .filter-bar{display:flex;align-items:center;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule);overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
        .filter-bar::-webkit-scrollbar{display:none}
        .filter-btn{background:var(--bg-2);border:none;padding:14px 20px;font-family:var(--sans);font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--text-3);cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap;flex-shrink:0}
        .filter-btn.active{background:var(--bg);color:var(--gold-pale);border-bottom-color:var(--gold)}
        .filter-count{font-size:.5rem;color:var(--text-3);margin-left:6px}
        .posts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
        .post-card{background:var(--bg);display:flex;flex-direction:column;cursor:pointer;transition:background .3s;text-decoration:none}
        .post-card:hover{background:var(--bg-2)}
        .post-card-img{aspect-ratio:16/9;background:var(--bg-3);position:relative;overflow:hidden;flex-shrink:0}
        .post-card-img-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:.85rem;font-style:italic;color:var(--rule-2)}
        .post-card-body{padding:22px 22px 26px;flex:1;display:flex;flex-direction:column}
        .post-card-tag{font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-dim);margin-bottom:8px}
        .post-card-title{font-family:var(--serif);font-size:1.22rem;font-weight:700;color:var(--gold-pale);line-height:1.18;letter-spacing:-.01em;margin-bottom:10px;transition:color .25s ease,transform .25s ease}
        .post-card-sub{font-size:.8rem;font-weight:700;color:#bca58a;line-height:1.7;flex:1;margin-bottom:18px;font-family:var(--serif);font-style:normal;transition:color .25s ease}
        .post-card:hover .post-card-title{color:#f1e2c6;transform:translateX(1px)}
        .post-card:hover .post-card-sub{color:#d2bea1}
        .post-card-meta{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--rule)}
        .post-card-date{font-size:.6rem;letter-spacing:.08em;color:var(--text-3)}
        .post-card-read{font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text-3)}
        .footer{background:var(--bg);border-top:1px solid var(--rule)}
        .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
        .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px)}
        .footer-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);margin-bottom:4px}
        .footer-tagline{font-size:.66rem;color:var(--text-3);margin-bottom:24px}
        .footer-col-label{font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text-3);margin-bottom:14px}
        .footer-link{display:block;font-size:.78rem;color:var(--text-3);padding:3px 0;text-decoration:none}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap}
        .footer-copy{font-size:.62rem;color:var(--text-3)}
        .modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
        .modal.show{display:flex}
        .modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative;max-height:90vh;overflow-y:auto}
        .modal-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem;cursor:pointer}
        .m-lbl{font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#7a6048;margin-bottom:12px}
        .m-h{font-family:var(--serif);font-size:1.7rem;font-weight:300;color:#e8d5b0;margin-bottom:6px}
        .m-p{font-size:.82rem;color:#7a6048;line-height:1.65;margin-bottom:22px}
        .m-f{margin-bottom:13px}
        .m-f label{display:block;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:#7a6048;margin-bottom:5px}
        .m-f input,.m-f textarea{width:100%;background:#1c1410;border:1px solid #2a1f17;padding:10px 12px;font-size:.84rem;color:#e8d5b0;outline:none}
        .m-btn{width:100%;background:#c5a065;color:#0f0b08;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;padding:12px;border:none;cursor:pointer;margin-top:6px}
        @media(max-width:860px){.nav-links{display:none}.hero-inner,.featured{grid-template-columns:1fr}.featured-img{border-right:none;border-bottom:1px solid var(--rule)}.posts-grid{grid-template-columns:1fr 1fr}.footer-top{grid-template-columns:1fr 1fr}.footer-bottom{flex-direction:column;gap:8px}}
        @media(max-width:540px){.posts-grid{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr}}
      `}</style>

      <SiteHeader active="journal" />

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-label">Journal</div>
            <h1 className="hero-heading">
              On thinking.
            
              <em>
                On silence.
                <br />
                On what gets in the way.
              </em>
            </h1>
          </div>
          <div>
            <p className="hero-desc">
              Writing from The Silent Club. Not productivity advice. Not wellness content.{" "}
              <em>Honest observations about attention, clarity, and what most environments make impossible.</em>
            </p>
          </div>
        </div>
      </section>

      <div className="filter-bar">
        {[
          { id: "all" as const, label: "All", count: 12 },
          { id: "silence" as const, label: "Silence & Attention", count: 4 },
          { id: "identity" as const, label: "Identity & Sovereignty", count: 3 },
          { id: "decision" as const, label: "Decision & Clarity", count: 3 },
          { id: "environment" as const, label: "Environment & Structure", count: 3 },
        ].map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeCat === filter.id ? "active" : ""}`}
            onClick={() => setActiveCat(filter.id)}
          >
            {filter.label} <span className="filter-count">{filter.count}</span>
          </button>
        ))}
      </div>

      <div className="posts-grid">
        {visiblePosts.map((post) => (
          <a className="post-card" href={post.href} key={post.title}>
            <div className="post-card-img">
              <img
                src={post.thumbnail}
                alt={post.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="post-card-body">
              <div className="post-card-tag">{post.tag}</div>
              <div className="post-card-title">{post.title}</div>
              <div className="post-card-sub">{post.sub}</div>
              <div className="post-card-meta">
                <span className="post-card-date">2026</span>
                <span className="post-card-read">Read →</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <SiteFooter />

      <div
        className={`modal ${openModal ? "show" : ""}`}
        onClick={(event) => {
          if (event.currentTarget === event.target) setOpenModal(false);
        }}
      >
        <div className="modal-box">
          <button className="modal-x" onClick={() => setOpenModal(false)}>×</button>
          <div className="m-lbl">Request Invite</div>
          <div className="m-h">Two questions.<br />No pitch.</div>
          <div className="m-p">We respond within 72 hours.</div>
          <div className="m-f"><label>Your name</label><input type="text" placeholder="Full name" /></div>
          <div className="m-f"><label>Your email</label><input type="email" placeholder="email@example.com" /></div>
          <div className="m-f"><label>What do you do, and what kind of quiet do you need?</label><textarea rows={3} /></div>
          <div className="m-f"><label>Describe the last time you were truly alone with a thought.</label><textarea rows={3} /></div>
          <button className="m-btn">Submit →</button>
        </div>
      </div>
    </main>
  );
}
