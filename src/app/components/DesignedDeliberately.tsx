export default function DesignedDeliberately() {
  return (
    <section className="py-24 px-4 md:px-16 bg-earth-900">
      <div className="w-full">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-normal text-gold-500 mb-8 uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Designed Deliberately
          </h2>
          
          <div className="space-y-3">
            <p className="text-earth-300 text-lg leading-normal">
              Every constraint here protects your attention.
            </p>
          </div>
        </div>

        {/* Bottom Section - Cards */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Designed Silence */}
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 h-full">
              <span className="material-symbols-outlined text-gold-500 text-4xl mb-4 block">volume_off</span>
              <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Designed Silence
              </h3>
              <p className="text-earth-300 text-sm leading-relaxed">
                Sound, pace, and signal are shaped to reduce distraction.
              </p>
            </div>

            {/* Designed Anonymity */}
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 h-full">
              <span className="material-symbols-outlined text-gold-500 text-4xl mb-4 block">person_off</span>
              <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Designed Anonymity
              </h3>
              <p className="text-earth-300 text-sm leading-relaxed">
                External roles pause. Only first names remain.
              </p>
            </div>

            {/* Designed Withdrawal */}
            <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 h-full">
              <span className="material-symbols-outlined text-gold-500 text-4xl mb-4 block">logout</span>
              <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Designed Withdrawal
              </h3>
              <p className="text-earth-300 text-sm leading-relaxed">
                Distance from constant input allows thought to stabilize.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
