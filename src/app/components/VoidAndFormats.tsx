import Link from "next/link";

export default function VoidAndFormats() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        {/* Experience copy */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-center text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            How It Works
          </h2>
          <div className="text-center text-earth-300 text-base md:text-lg leading-relaxed space-y-3 md:space-y-4">
            <p>
              There is no fixed agenda when you arrive. The environment is intentionally minimal so your attention can return to what matters.
            </p>
            <p>
              Stimulation reduces. Roles soften. Time opens. You move at your own pace between reflection, nature, and self-directed practice.
            </p>
            <p>
              Silence is not something you perform. It is the condition that allows clearer thinking and more honest decisions to emerge.
            </p>
          </div>
        </div>

        {/* Formats */}
        <div className="space-y-6">
         
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Solitude */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  self_improvement
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Solitude as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  A structured multi-day stay for uninterrupted thinking, nature-led reset, and self-directed deep work.
                </p>
              </div>
            </Link>

            {/* Experiments */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  science
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Experiments as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  A private environment to test ideas, routines, or creative directions without performance pressure.
                </p>
              </div>
            </Link>

            {/* Residency */}
            <Link href="/services" className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  school
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Residency as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  A curated small-group immersion with expert dialogue to explore one critical question in depth.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
