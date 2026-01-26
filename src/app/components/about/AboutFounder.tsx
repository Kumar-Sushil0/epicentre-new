export default function AboutFounder() {
  return (
    <section className="py-32 px-6 bg-earth-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-lg overflow-hidden aspect-3/4 shadow-2xl">
              <div 
                className="w-full h-full bg-cover bg-center grayscale contrast-125" 
                style={{
                  backgroundImage: "url('/dd.jpeg')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 space-y-8">
            <div>
              <span className="text-gold-500 text-xs tracking-widest uppercase font-body block mb-2">The Steward</span>
              <h2 className="text-earth-50 text-4xl md:text-5xl font-display font-medium mb-4">Digen Varma</h2>
              <h3 className="text-earth-50/60 text-lg font-body italic">Founder & Experience Architect</h3>
              <div className="h-px w-32 bg-gold-500/50 mt-6"></div>
            </div>
            <div className="space-y-4 text-earth-50/70 font-body text-base md:text-lg leading-relaxed">
              <p>Background in systems thinking and decision design</p>
              <p>Focus on environments over advice</p>
              <p>Designs conditions, not outcomes</p>
              <p>Protects the integrity of the system</p>
            </div>
            <div className="pt-4">
              <p className="text-gold-500/80 italic text-xl font-light">
                Not a guide.<br/>
                A steward.
              </p>
            </div>
            <div className="flex items-center gap-4 text-gold-500/80 pt-4">
              <span className="material-symbols-outlined">settings_input_component</span>
              <span className="text-xs font-medium uppercase tracking-widest font-body">Systems Stewardship & Environmental Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}