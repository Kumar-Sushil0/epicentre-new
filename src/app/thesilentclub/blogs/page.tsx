"use client";

import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { BlogsStyles } from "./components/BlogsStyles";

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
      <BlogsStyles />

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
