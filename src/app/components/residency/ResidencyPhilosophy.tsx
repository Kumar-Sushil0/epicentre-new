export default function ResidencyPhilosophy() {
  return (
    <section className="py-24 bg-earth-900 border-b border-earth-800" id="philosophy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 text-earth-50/80 text-lg font-body font-light leading-relaxed mb-12">
          <p>
            Residencies are structured periods of focused time around a single inquiry.<br />
            The space holds the frame. What you do with the attention is yours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Conditions for Depth</h3>
            <ul className="space-y-2 text-earth-300 leading-relaxed font-light font-body">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>The environment is arranged to support sustained focus.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>Quiet work zones, shared surfaces, and minimal interruption shape the rhythm of the days.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Shared Context</h3>
            <ul className="space-y-2 text-earth-300 leading-relaxed font-light font-body">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>Residencies bring together small groups around one line of inquiry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>Work happens in parallel, without comparison or performance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
