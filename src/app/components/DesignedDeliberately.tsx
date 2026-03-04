export default function DesignedDeliberately() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-900">
      <div className="w-full">
        {/* Top Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-10 md:w-12 h-px mx-auto mb-4 md:mb-6 bg-earth-700/80" />
          <h2
            className="text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-5 "
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Designed Deliberately
          </h2>

          <div className="space-y-3 px-4">
            <p className="text-earth-300 text-base md:text-lg leading-normal">
              Every constraint here protects your attention.
            </p>
          </div>
        </div>

        {/* Bottom Section - Icon Row */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Designed Silence */}
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-earth-700/80">
                <span className="material-symbols-outlined text-gold-500 text-xl md:text-2xl">
                  volume_off
                </span>
              </div>
              <h3
                className="text-base md:text-lg font-normal text-earth-100"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Designed Silence
              </h3>
              <p className="text-earth-300 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                Sound, pace, and signal are shaped to reduce distraction.
              </p>
            </div>

            {/* Designed Anonymity */}
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-earth-700/80">
                <span className="material-symbols-outlined text-gold-500 text-xl md:text-2xl">
                  person_off
                </span>
              </div>
              <h3
                className="text-base md:text-lg font-normal text-earth-100"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Designed Anonymity
              </h3>
              <p className="text-earth-300 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                External roles pause. Only first names remain.
              </p>
            </div>

            {/* Designed Withdrawal */}
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-earth-700/80">
                <span className="material-symbols-outlined text-gold-500 text-xl md:text-2xl">
                  logout
                </span>
              </div>
              <h3
                className="text-base md:text-lg font-normal text-earth-100"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Designed Withdrawal
              </h3>
              <p className="text-earth-300 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                Distance from constant input allows thought to stabilize.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
