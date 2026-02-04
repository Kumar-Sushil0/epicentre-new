export default function AboutFounder() {
  return (
    <section className="py-32 px-16 bg-earth-900 border-b border-earth-800">
      <div className="max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

          {/* Image Side */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 contrast-[1.1]"
                style={{
                  backgroundImage: "url('/dd.jpeg')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 to-transparent"></div>
            </div>
            {/* Name Overlay - positioned absolutely for magazine feel */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-earth-950 p-8 border border-earth-800 max-w-xs shadow-2xl">
              <h2 className="text-gold-500 text-3xl font-medium mb-2 font-serif" style={{ fontFamily: 'Outfit, sans-serif' }}>Digen Varma</h2>
              <p className="text-earth-300/60 text-xs font-bold tracking-widest uppercase">Founder & Architect</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 lg:pt-0">
            <blockquote className="text-3xl md:text-4xl text-earth-100 font-serif italic leading-tight mb-12">
              "We encourage a digital detox to fully experience the retreat."
            </blockquote>

            <div className="space-y-6 text-earth-300/80 font-body text-lg leading-relaxed max-w-2xl">
              <p>
                Across two decades of work spanning fitness, holistic health, retail, product design, and strategy, Digen kept returning to the same question: <span className="text-earth-100">why do capable people feel stuck inside lives they never consciously designed?</span>
              </p>

              <p>
                Not because they lack motivation. But because their environments constantly direct attention outward, leaving no structure for clarity to emerge.
              </p>

              <p>
                His work focuses on designing conditions rather than offering advice. Instead of coaching outcomes, he builds environments—physical, psychological, and systemic—where unnecessary signals are removed and self-observation becomes possible.
              </p>

              <p className="pt-4 border-t border-earth-800 mt-8">
                The Silent Club is a physical expression of this approach. A place where space, pace, and constraint quietly do the work. Digen's role here is not to guide or instruct. It is to protect the integrity of the system.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}