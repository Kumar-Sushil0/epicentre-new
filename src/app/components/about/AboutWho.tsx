export default function AboutWho() {
  return (
    <section className="py-16 md:py-20 bg-earth-950 border-b border-earth-800 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/20 to-transparent"></div>

      <div className="w-full px-4 md:px-16 relative z-10">
        {/* Title at top */}
        <div className="mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-normal mb-3 text-gold-500"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Who it is For
          </h2>
          <p className="text-lg md:text-xl text-earth-200 font-light max-w-3xl">
            For individuals between major chapters. Accomplished, self-directed, and who have earned the right to think without being managed.
          </p>
        </div>

        {/* 2026 Cohort highlight - full width */}
        <div className="bg-gradient-to-br from-gold-500/10 via-gold-500/5 to-transparent p-5 md:p-6 rounded-lg border border-gold-500/30 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-gold-500 text-2xl">groups</span>
            <h3 className="text-base md:text-lg font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
              2026 Cohort
            </h3>
          </div>
          <p className="text-earth-200 font-body text-sm md:text-base leading-relaxed">
            Specifically structured for <span className="text-gold-500 font-semibold">post-exit founders</span>: individuals who have recently exited a company, completed a significant transition, or are navigating an inflection point that requires uninterrupted clarity.
          </p>
        </div>

        {/* Criteria in horizontal grid */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-earth-300 font-body text-sm italic">This is not for everyone.</p>
            <span className="text-earth-700">—</span>
            <p className="text-gold-500/90 text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>It is for those who:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-earth-900/40 p-4 rounded-lg border border-earth-800 hover:border-gold-500/30 transition-colors">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gold-500/60 text-xl mt-0.5">psychology</span>
                <p className="text-earth-200 font-body text-xs leading-relaxed">
                  Arrive with <span className="text-gold-500">questions</span>, not answers they are performing
                </p>
              </div>
            </div>

            <div className="bg-earth-900/40 p-4 rounded-lg border border-earth-800 hover:border-gold-500/30 transition-colors">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gold-500/60 text-xl mt-0.5">schedule</span>
                <p className="text-earth-200 font-body text-xs leading-relaxed">
                  Do not need facilitation to use <span className="text-gold-500">unstructured time</span> well
                </p>
              </div>
            </div>

            <div className="bg-earth-900/40 p-4 rounded-lg border border-earth-800 hover:border-gold-500/30 transition-colors">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gold-500/60 text-xl mt-0.5">work</span>
                <p className="text-earth-200 font-body text-xs leading-relaxed">
                  Understand that <span className="text-gold-500">thinking is work</span>, and protecting it is serious
                </p>
              </div>
            </div>

            <div className="bg-earth-900/40 p-4 rounded-lg border border-earth-800 hover:border-gold-500/30 transition-colors">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gold-500/60 text-xl mt-0.5">explore</span>
                <p className="text-earth-200 font-body text-xs leading-relaxed">
                  Can remain <span className="text-gold-500">self-directed</span> without instruction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership approach - compact */}
        <div className="bg-gradient-to-r from-earth-900 to-earth-950 p-5 md:p-6 rounded-lg border border-gold-500/20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gold-500 text-2xl">verified</span>
              <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
                Membership Approach
              </h3>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-earth-200 font-body text-sm">
              <p className="flex items-center gap-2">
                <span className="text-gold-500/40">×</span>
                <span>Not <span className="text-gold-500 font-semibold">sold</span></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-500">✓</span>
                <span><span className="text-gold-500 font-semibold">Applied for</span></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-500">✓</span>
                <span><span className="text-gold-500 font-semibold">Alignment-based</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

