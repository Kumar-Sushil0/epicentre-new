export default function AboutPrinciples() {
  return (
    <section className="py-24 px-4 md:px-16 bg-earth-900 relative">
      <div className="w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-gold-500 text-3xl font-display" style={{ fontFamily: 'Outfit, sans-serif' }}>STRUCTURAL LOGIC</h2>
          <p className="text-earth-50/60 text-lg mt-2">We do not rely on motivation.<br />We design conditions.</p>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">01</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Environment &gt; Motivation</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Architecture precedes psychology.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">02</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Reduction &gt; Abundance</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Choice is edited, not expanded.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">03</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Agreement &gt; Enforcement</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Alignment before access.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">04</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Observation &gt; Instruction</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">We do not tell you what to see.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">05</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Structure &gt; Personality</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">The system holds. Individuals move through it.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">06</span>
            <h4 className="text-gold-500 font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Pace &gt; Urgency</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Nothing here is optimized for speed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}