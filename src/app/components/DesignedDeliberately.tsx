export default function DesignedDeliberately() {
  return (
    <section className="py-24 px-6 md:px-16 bg-earth-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-normal text-gold-500 mb-16 text-center uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Designed Deliberately
        </h2>
        <p className="text-earth-300 text-lg text-center mb-16 max-w-3xl mx-auto">
          Every constraint here protects your attention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Designed Silence */}
          <div className="text-center">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Designed Silence
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Sound, pace, and signal are shaped to reduce distraction.
            </p>
          </div>

          {/* Designed Anonymity */}
          <div className="text-center">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Designed Anonymity
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              External roles pause. Only first names remain.
            </p>
          </div>

          {/* Designed Withdrawal */}
          <div className="text-center">
            <h3 className="text-2xl font-normal text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Designed Withdrawal
            </h3>
            <p className="text-earth-300 text-base leading-relaxed">
              Distance from constant input allows thought to stabilize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
