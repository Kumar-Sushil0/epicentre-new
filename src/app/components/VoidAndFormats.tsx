export default function VoidAndFormats() {
  return (
    <section className="py-24 px-6 md:px-16 bg-earth-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* The Void - Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The Void
            </h2>
            
            <div className="space-y-6">
              <p className="text-earth-300 text-lg leading-relaxed">
                The Void is not escape.<br />
                It is calibration.
              </p>
              
              <p className="text-earth-300 text-lg leading-relaxed">
                External roles are suspended temporarily.<br />
                Context falls away.<br />
                What remains is authorship.
              </p>
              
              <p className="text-earth-300 text-lg leading-relaxed">
                You do not leave life.<br />
                You return to it sharper.
              </p>
            </div>
          </div>

          {/* Modes - Right Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-8 text-center lg:text-left" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Modes
            </h2>

            <div className="space-y-6">
              {/* Solitude */}
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Solitude
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Unfacilitated withdrawal designed for deep work and decision space.
                </p>
              </div>

              {/* Experiments */}
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Experiments
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Controlled sandboxes for testing ideas before public exposure.
                </p>
              </div>

              {/* Clarity Residency */}
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Clarity Residency
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Limited, question-centered residencies for resolving high-stakes life decisions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
