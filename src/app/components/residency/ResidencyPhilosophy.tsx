export default function ResidencyPhilosophy() {
  return (
    <section className="py-24 bg-earth-900 border-b border-earth-800" id="philosophy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 text-earth-50/80 text-lg font-body font-light leading-relaxed mb-12">
          <p>
            Residencies are structured periods of focused time around a single inquiry.
          </p>
          <p>
            The space holds the frame. What you do with the attention is yours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="font-display text-xl text-earth-50 mb-4">Conditions for Depth</h3>
            <p className="text-earth-300 leading-relaxed font-light font-body">
              The environment is arranged to support sustained focus.
            </p>
            <p className="text-earth-300 leading-relaxed font-light font-body mt-2">
              Quiet work zones, shared surfaces, and minimal interruption shape the rhythm of the days.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-earth-50 mb-4">Shared Context</h3>
            <p className="text-earth-300 leading-relaxed font-light font-body">
              Residencies bring together small groups around one line of inquiry.
            </p>
            <p className="text-earth-300 leading-relaxed font-light font-body mt-2">
              Work happens in parallel, without comparison or performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
