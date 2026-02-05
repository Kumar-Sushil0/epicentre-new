export default function VenueHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8TvSF_6qQYT0sf1Z3QeDGPpedh3fFfoLu0xYEOVs4B-3yAdulyHspPVbw5A_jiNj8YyH-fB6Zrd1At6C_Dpr10Dp0zkPKpZNISmKy6obJPax1cVlyk35I9Je4qtWZQN9XhH-VmJMZXXGgG8x64v4oy9B3vkjNJhb-RZNqem3OaDqxOhIf3z7_TF48J-Km9ipy9oDRORSuxs3foTCuPvAU45bY8Co7UAqKqkWMEFchPTcX2tPhut34xCRmtQ0oyIjX5NCUmxRAaI0")`,
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
            
            <span className="italic text-gold-500">Held, Not Hired</span>
          </h1>
          <p className="text-earth-300/80 text-xl md:text-2xl font-light leading-relaxed w-full font-body">
             Designed to hold attention without effort.<br/> 
 
 Use is available by inquiry and alignment, not membership alone.

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
