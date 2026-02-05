export default function FAQHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-16 max-w-7xl">
        <div className="max-w-6xl border-l-2 border-gold-500/50 pl-8 md:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            
            <span className="italic text-gold-500">Questions Answered</span>
          </h1>
          <p className="text-earth-300/80 text-xl md:text-2xl font-light leading-relaxed w-full font-body">
            Curiosities about our way of life.<br />
            If you have more questions, reach out to us.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-earth-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-earth-300 text-2xl">arrow_downward</span>
        </div>
      </div>
    </section>
  );
}