export default function TestHero() {
    return (
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
            {/* Top Shadow for Header Visibility */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-earth-950/80 to-transparent z-10"></div>
            
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4')"
                    }}
                ></div>
                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-earth-950/40 to-transparent z-10 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-transparent to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container px-4 md:px-16 max-w-7xl">
                <div className="max-w-6xl border-l-2 border-gold-500/50 pl-4 md:pl-8 lg:pl-12 py-4 animate-in slide-in-from-left-4 duration-1000">
                    <h1 className="text-earth-100 text-4xl md:text-7xl lg:text-8xl font-display font-normal leading-[1.1] tracking-tight mb-6 md:mb-8 drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        <span className="text-earth-100">Silence, </span>
                        <span className="italic text-gold-500">Structured</span>
                    </h1>
                    <p className="text-earth-300/80 text-lg md:text-2xl font-light leading-relaxed w-full font-body">
                        The estate provides conditions.<br />
                        These services determine how those conditions are engaged.<br />
                        Three formats.<br />
                        Three depths.<br />
                        One objective: clarity.
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <span className="text-xs uppercase tracking-[0.2em] text-earth-300">Scroll</span>
                <span className="material-symbols-outlined text-earth-300 text-2xl">expand_more</span>
            </div>
        </section>
    );
}
