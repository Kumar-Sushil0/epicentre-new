export function HeroSection() {
  return (
    <section className="relative grid overflow-hidden border-b border-[#2a1f17] md:min-h-[calc(100vh-56px)] md:grid-cols-2">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/hero.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#0f0b08]/45 to-[#0f0b08]/70" />
      <div className="relative z-10 flex flex-col justify-end gap-6 border-b border-[#2a1f17]/50 px-6 py-12 md:border-b-0 md:px-10">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c5a065]" />
          <span>Private Estate · Bhigwan, Pune · Invite Only</span>
        </div>
        <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">
          <span className="block">A place</span>
          <span className="block">to think</span>
          <span className="block italic text-[#c5a065]">without</span>
          <span className="block">interruption.</span>
        </h1>
        <p className="max-w-xl text-sm leading-8 text-[#b09070]">
          The Silent Club is an invite-only estate for thinkers, artists, and entrepreneurs who do
          their best work in quiet. No meetings. No notifications. No noise. Just the rarest
          luxury in modern life — uninterrupted time with your own mind.
        </p>
        <div className="flex max-w-xs flex-col gap-2">
          <button className="bg-[#c5a065] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08]">
            Request Invite →
          </button>
          <button className="border border-[#3a2a1f] bg-[#0f0b08] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#b09070]">
            See what a day looks like
          </button>
        </div>
      </div>
      <div className="relative z-10 flex flex-col justify-end px-6 py-12 md:px-10" />
    </section>
  );
}
