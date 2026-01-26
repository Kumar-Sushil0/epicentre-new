export default function PrinciplesAndEnvironment() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-earth-900 border-b border-earth-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left Side - Operating Principles */}
          <div>
            <span className="text-gold-500 font-body text-xs tracking-[0.2em] uppercase mb-4 block">Constraints</span>
            <h2 className="text-earth-50 text-4xl font-display font-medium mb-2">Operating Principles</h2>
            <p className="text-earth-50/60 text-lg mb-6">These are constraints, not values.</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 border border-earth-700 bg-earth-950/50 rounded">
                <div className="flex items-center gap-3">
                  <span className="text-gold-500 font-display text-xl opacity-30">01</span>
                  <div>
                    <h4 className="text-earth-50 font-bold text-sm">Designed Silence</h4>
                    <p className="text-earth-50/60 text-xs leading-relaxed">Sound, movement, and activity are intentionally shaped</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-earth-700 bg-earth-950/50 rounded">
                <div className="flex items-center gap-3">
                  <span className="text-gold-500 font-display text-xl opacity-30">02</span>
                  <div>
                    <h4 className="text-earth-50 font-bold text-sm">Non-Performative Space</h4>
                    <p className="text-earth-50/60 text-xs leading-relaxed">No pressure to speak, share, or explain</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-earth-700 bg-earth-950/50 rounded">
                <div className="flex items-center gap-3">
                  <span className="text-gold-500 font-display text-xl opacity-30">03</span>
                  <div>
                    <h4 className="text-earth-50 font-bold text-sm">Environment-Led Change</h4>
                    <p className="text-earth-50/60 text-xs leading-relaxed">Land, pace, and physical conditions lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Built Environment */}
          <div className="bg-earth-950 p-10 border border-earth-700 rounded-lg">
            <h3 className="text-gold-500 text-xl font-display italic mb-6">Built Environment</h3>
            <ul className="space-y-4 text-earth-50/70 font-body text-lg leading-relaxed mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 text-sm mt-2">•</span>
                <span>Architecture designed to recede</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 text-sm mt-2">•</span>
                <span>Local materials, simple forms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 text-sm mt-2">•</span>
                <span>Visual noise avoided</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 text-sm mt-2">•</span>
                <span>Built to support rest, focus, and continuity</span>
              </li>
            </ul>
            <p className="text-gold-500/80 italic text-xl font-light">
              The space is meant to disappear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}