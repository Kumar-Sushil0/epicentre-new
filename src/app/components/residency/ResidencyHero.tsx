export default function ResidencyHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Top Shadow for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
      
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz')"
          }}
        ></div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-16 max-w-7xl">
        <div className="max-w-4xl border-l-2 border-gold-500/50 pl-8 md:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
          <h1 className="text-earth-100 text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            
            <span className="italic text-gold-500">One Question Held Fully</span>
          </h1>
          <p className="text-earth-300/80 text-xl md:text-2xl font-light leading-relaxed w-full font-body">
            Multi-day immersions centered around a single inquiry.<br />
            Hosted with a selective group for sustained exploration.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-earth-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-earth-300 text-2xl">expand_more</span>
        </div>
      </div>
    </section>
  );
}
