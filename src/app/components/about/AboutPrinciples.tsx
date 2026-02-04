export default function AboutPrinciples() {
  return (
    <section className="py-24 px-16 bg-earth-900 relative">
      <div className="max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-gold-500 text-3xl md:text-4xl font-display" style={{ fontFamily: 'Outfit, sans-serif' }}>Operating Principles</h2>
          <p className="text-earth-50/60 text-lg mt-2">These are constraints, not values.</p>
          <div className="h-1 w-20 bg-gold-500/40 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">01</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Silence Is Designed</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">Sound, movement, and stimulation are intentionally shaped.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Silence is produced through structure, not enforced through rules.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">02</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Nothing Demands Performance</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">There is no obligation to speak, share, participate, or explain.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Presence is sufficient.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">03</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Environment Leads, Behavior Follows</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">Land, architecture, and rhythm set the pace.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Human behavior adapts to place.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">04</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Choice Is Reduced Deliberately</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">Fewer options create clarity.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Anything unnecessary is removed.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">05</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Use Is Conditional, Not Guaranteed</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">Access depends on alignment with the nature of the space.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Scale, urgency, or money do not override intent.</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">06</span>
            <h4 className="text-gold-500 font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Pace Is Protected</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed mb-3">Nothing is rushed, compressed, or accelerated.</p>
            <p className="text-earth-50/40 text-xs leading-relaxed">Time is treated as part of the environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}