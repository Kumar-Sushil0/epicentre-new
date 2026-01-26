export default function AboutPrinciples() {
  return (
    <section className="py-24 px-6 bg-earth-900 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-earth-50 text-3xl md:text-4xl font-display">Operating Principles</h2>
          <p className="text-earth-50/60 text-lg mt-2">These are constraints, not values.</p>
          <div className="h-1 w-20 bg-gold-500/40 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">01</span>
            <h4 className="text-earth-50 font-bold mb-4">Designed Silence</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Sound, movement, and activity are intentionally shaped</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">02</span>
            <h4 className="text-earth-50 font-bold mb-4">Non-Performative Space</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">No pressure to speak, share, or explain</p>
          </div>
          <div className="p-8 border border-earth-700 bg-earth-950/50">
            <span className="text-gold-500 font-display text-4xl mb-6 block opacity-30">03</span>
            <h4 className="text-earth-50 font-bold mb-4">Environment-Led Change</h4>
            <p className="text-earth-50/60 text-sm leading-relaxed">Land, pace, and physical conditions lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}