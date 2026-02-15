export default function FormatsOfUse() {
  return (
    <section className="py-24 px-6 md:px-16 bg-earth-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-16 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Formats of Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solitude */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Solitude
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Self-led time without instruction.
            </p>
          </div>

          {/* Experiments */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Experiments
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Controlled conditions for unfinished work.
            </p>
          </div>

          {/* Clarity Immersions */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Clarity Immersions
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Multi-day focus around a single question.
            </p>
          </div>

          {/* Residencies */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Residencies
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Extended withdrawal for sustained attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
