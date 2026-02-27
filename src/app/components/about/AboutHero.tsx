export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgtoMMPZz88PXkDYrxvHVR6uCSwqNqDnob4jaoXODBFLGl2UsdhfJ4s__nqrXImhLMN4QUasNvlWzk9Yo_824P4d9lIvSn1WbjbbWb28HQs30tbEHbQGS_MuR1epNrsedDPULlE6AaZ45m5He654JaT49FOV-G_q2QjNTxPSVrimly9bjXTZ01TiOoTicoKoqMBOqEzGfSDPcspcYTtn2f9nvsAvItSPnGcZhvCVsFO9kjJPBy1OdqHj_PbY0RZq_5hkBecKLlEATa')"
          }}
          role="img"
          aria-label="About Us - Serene natural landscape at The Silent Club"
        ></div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 md:px-16 max-w-7xl">
        <div className="max-w-6xl border-l-2 border-gold-500/50 pl-4 md:pl-8 lg:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-4xl md:text-7xl lg:text-8xl font-display font-normal leading-[1.1] tracking-tight mb-6 md:mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="italic text-gold-500">Designed Deliberately.</span>
          </h1>
          <p className="text-earth-300/80 text-lg md:text-2xl font-light leading-relaxed w-full font-body">
            The Silent Club is not a retreat.<br />
            It is a structured environment engineered to reduce interference.<br />
            Silence here is functional, not aesthetic.<br />
            When external input decreases, attention stabilizes.<br />
            When attention stabilizes, decisions become less negotiable.<br />
            Clarity is not chased.<br />
            It is permitted.<br />
            You do not leave life here.<br />
            You prepare to re-enter it deliberately.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-earth-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-earth-300 text-2xl">expand_more</span>
        </div>
      </div>
    </section>
  );
}