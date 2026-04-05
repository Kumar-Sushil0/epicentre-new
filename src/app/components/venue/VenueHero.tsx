export default function VenueHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Top Shadow for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
      
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/banner/2.png')"
          }}
        ></div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 md:px-16 max-w-7xl">
        <div className="max-w-6xl border-l-2 border-gold-500/50 pl-4 md:pl-8 lg:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-2xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] tracking-tight drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="italic text-gold-500">Nothing is asking for your attention</span>
          </h1>
          <p className="text-earth-100 font-normal" style={{ fontSize: '1.5rem' }}>
            And that changes everything.
          </p>
        </div>
      </div>

    </section>
  );
}
