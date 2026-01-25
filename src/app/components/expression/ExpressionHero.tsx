export default function ExpressionHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/60 via-earth-950/40 to-earth-950 z-10"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl pt-20">
        <div className="flex flex-col items-center gap-8">
          <div className="w-16 h-[1px] bg-gold-500/60 mb-2"></div>
          <h1 className="text-earth-50 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-xl font-display">
            Facilitated, work-in-progress spaces at <span className="italic text-gold-500">The Silent Club</span>
          </h1>
          <div className="space-y-3 text-earth-50/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-body drop-shadow-md">
            <p>
              Expression here is about staying with unfinished work.
            </p>
            <p>
              These are held spaces for voice, movement, language, or ideas — without judgment or outcome.
            </p>
            <p>
              Nothing needs to be explained, polished, or completed.
            </p>
          </div>
          <div className="pt-6">
            <button className="flex items-center gap-2 cursor-pointer rounded-full h-14 px-8 bg-transparent border border-earth-50/30 hover:bg-earth-50/10 hover:border-gold-500/50 text-earth-50 text-base font-medium transition-all duration-300 font-body backdrop-blur-sm group">
              <span>Explore the Space</span>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform text-lg">arrow_downward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
