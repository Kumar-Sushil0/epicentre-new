export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/banner/6.png')"
          }}
          role="img"
          aria-label="About Us - Serene natural landscape at The Silent Club"
        ></div>
        {/* Cinematic Gradient Overlays */}
        {/* Subtle top overlay to keep header readable */}
        <div className="absolute inset-x-0 top-0 h-20 md:h-24 bg-gradient-to-b from-earth-950/70 via-earth-950/40 to-transparent z-10"></div>
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
            The Silent Club is not accidental.<br />
            It is a structured environment engineered to reduce interference.<br />
            Silence here is functional, not aesthetic.<br />
            Membership is alignment-based.<br />
            Access is limited by design.<br />
            You do not arrive to be instructed.<br />
            You arrive to think without interruption.
          </p>
        </div>
      </div>

    </section>
  );
}