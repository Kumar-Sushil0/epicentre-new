import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { blogPosts } from "../blogContent";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">

      <SiteHeader active="journal" />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden border-b border-[#2a1f17]" style={{ paddingTop: "60px" }}>
        <div className="absolute inset-0 bg-[#1c1410] flex items-center justify-center">
          <span className="font-serif text-base italic text-[#3a2a1f]">Post hero image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08]/92 via-[#0f0b08]/40 to-[#0f0b08]/10" />
        <div className="relative z-10 px-6 md:px-[56px] py-10 md:py-16 max-w-[860px]">
          <a href="/thesilentclub/blogs" className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.16em] text-[#7a6048] mb-6 hover:text-[#8a6e42] transition-colors">
            ← Back to Journal
          </a>
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#8a6e42] mb-3">{post.categoryLabel}</div>
          <h1 className="font-serif font-light text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-tight mb-4">{post.title}</h1>
          <p className="font-serif italic text-[clamp(1rem,1.6vw,1.3rem)] text-[#b09070] mb-5">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-[0.62rem] tracking-[0.1em] text-[#7a6048]">
            <span>The Silent Club</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#3a2a1f]" />
            <span>2026</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#3a2a1f]" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-0 px-6 md:px-[56px] py-12 md:py-20">
        {/* Left Sidebar */}
        <div className="hidden lg:block pr-12 sticky top-24 self-start">
          <span className="block text-[0.56rem] uppercase tracking-[0.2em] text-[#7a6048] mb-4">Share</span>
          <div className="flex flex-col gap-2">
            <button className="border border-[#3a2a1f] px-3 py-2 text-[0.58rem] uppercase tracking-[0.12em] text-[#7a6048] hover:border-[#8a6e42] hover:text-[#c5a065] transition-all text-left">
              Copy link
            </button>
            <button className="border border-[#3a2a1f] px-3 py-2 text-[0.58rem] uppercase tracking-[0.12em] text-[#7a6048] hover:border-[#8a6e42] hover:text-[#c5a065] transition-all text-left">
              Twitter
            </button>
            <button className="border border-[#3a2a1f] px-3 py-2 text-[0.58rem] uppercase tracking-[0.12em] text-[#7a6048] hover:border-[#8a6e42] hover:text-[#c5a065] transition-all text-left">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Article */}
        <article className="lg:border-l lg:border-r border-[#2a1f17] lg:px-12">
          <div className="font-serif font-light text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.9] text-[#d4c4a8]">
            {post.content.map((line, idx) => {
              if (line === "gap") {
                return <p key={idx} className="pt-5" />;
              }
              if (line.startsWith("highlight:")) {
                return (
                  <p key={idx} className="py-1.5 text-[#c5a065] italic">
                    {line.replace("highlight:", "")}
                  </p>
                );
              }
              return (
                <p key={idx} className="py-1.5">
                  {line}
                </p>
              );
            })}
          </div>

          <div className="border-t border-[#2a1f17] mt-12 pt-8">
            <div className="text-[0.58rem] uppercase tracking-[0.18em] text-[#7a6048] mb-2">Published by</div>
            <div className="font-serif text-base text-[#b09070]">The Silent Club · Bhigwan, Maharashtra · 2026</div>
          </div>
        </article>

        {/* Right Sidebar */}
        <div className="hidden lg:block pl-12 sticky top-24 self-start">
          <span className="block text-[0.56rem] uppercase tracking-[0.2em] text-[#7a6048] mb-3">If this landed</span>
          <p className="font-serif text-[0.9rem] text-[#b09070] leading-[1.6] mb-4">{post.sidebarCta}</p>
          <a href="#invite" className="w-full block text-center bg-[#c5a065] text-[#0f0b08] text-[0.58rem] font-bold uppercase tracking-[0.14em] px-4 py-2.5 hover:bg-[#d4b07a] transition-colors">
            Request Invite →
          </a>
        </div>
      </div>

      {/* CTA Band */}
      <section className="relative border-t border-[#2a1f17] bg-[#160f0a] px-6 md:px-[56px] py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(197,160,101,0.05)_0%,transparent_65%)] pointer-events-none" />
        <h2 
          className="relative font-serif font-light text-[clamp(1.8rem,3.5vw,3.4rem)] leading-[1.15] tracking-tight mb-8"
          dangerouslySetInnerHTML={{ __html: post.ctaHeadline }}
        />
        <a href="#invite" className="relative bg-[#c5a065] text-[#0f0b08] text-[0.68rem] font-bold uppercase tracking-[0.18em] px-9 py-3.5 hover:bg-[#d4b07a] transition-colors">
          Request Invite →
        </a>
        <p className="relative mt-4 font-serif italic text-[1.02rem] text-[#7a6048]">Two questions. A short conversation. Your first invite.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
