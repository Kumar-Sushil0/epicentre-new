export default function AboutPrinciples() {
  return (
    <section className="py-24 px-16 bg-earth-900 relative">
      <div className="w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-gold-500 text-3xl font-display" style={{ fontFamily: 'Outfit, sans-serif' }}>Principles</h2>
          <p className="text-earth-50/60 text-lg mt-2">These are constraints, not values.</p>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">01</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Silence Is Designed</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Sound, movement, and stimulation are intentionally shaped.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">02</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Nothing Demands Performance</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">There is no obligation to speak, share, or explain.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">03</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Environment Leads</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Behavior adapts to place.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">04</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Choice Is Reduced</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Fewer options create clarity.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">05</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Use Is Conditional</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Alignment matters more than scale.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">06</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Pace Is Protected</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Nothing is rushed. Time is structural.</p>
          </div>
        </div>
      </div>
    </section>
  );
}