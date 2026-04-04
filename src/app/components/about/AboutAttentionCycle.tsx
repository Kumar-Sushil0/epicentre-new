const cohorts = [
  {
    year: "2026",
    label: "Founders and Academicians",
    description: "Designing their next decade without pressure.",
  },
  {
    year: "2027",
    label: "Designers & Developers",
    description: "Designing work that outlives trends.",
  },
  {
    year: "2028",
    label: "Musicians & Singers",
    description: "Designing sounds you are obsessed about.",
  },
  {
    year: "2029",
    label: "Writers & Thinkers",
    description: "Designing ideas too dangerous for blogs.",
  },
  {
    year: "2030",
    label: "Artists & Actors",
    description: "Designing performances beyond applause.",
  },
] as const;

export default function AboutAttentionCycle() {
  return (
    <section className="py-20 px-4 md:px-16 bg-earth-950 border-t border-earth-900">
      <div className="w-full text-center">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-5 "
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          The Founding Five-Year Cycle
        </h2>

        <p className="text-earth-300/80 text-base md:text-lg mb-2 text-center font-body">
          This is not a membership model. It is a staged observation.
        </p>
        <p className="text-earth-300/80 text-base md:text-lg mb-2 text-center font-body">
          Each year, the same environment holds. But the lens shifts.<br />
          Not to expand. But to understand.
        </p>
        <p className="text-earth-300/80 text-base md:text-lg mb-2 text-center font-body">
          One group at a time. One context at a time. One pattern at a time.
        </p>
        <p className="text-earth-300/80 text-base md:text-lg mb-2 text-center font-body">
          100 memberships each year. Not to scale the system—but to study it without distortion.
        </p>
        <p className="text-earth-300/80 text-base md:text-lg mb-4 text-center font-body">
          Different lives. Different pressures. Different relationships with silence.<br />
          What changes is the person. What remains is the condition.
        </p>

        {/* Timeline-style layout - 5 columns on desktop, no scrolling */}
        <div className="mt-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 text-left">
            {cohorts.map((cohort) => (
              <div key={cohort.year} className="w-full">
                {/* Year header */}
                <div className="py-2 mb-3 border-b-2 border-gold-500">
                  <h4
                    className="text-xl font-normal text-gold-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {cohort.year}
                  </h4>
                </div>

                {/* Timeline node */}
                <div className="relative">
                  <div className="bg-earth-900/40 rounded-lg border border-earth-800/80 p-4">
                    <p
                      className="text-sm md:text-base text-earth-100 mb-1 font-medium"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {cohort.label}
                    </p>
                    <p className="text-xs md:text-sm text-earth-300 font-body">
                      {cohort.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gold-500 text-base md:text-lg font-normal font-body mb-2 text-center">
          The environment does not change. Only the lens does.
        </p>
        <p className="text-gold-500 text-base md:text-lg font-normal font-body mb-2 text-center">
          Over five years, patterns begin to stabilize. Not from assumption. But from repetition.
        </p>
        <p className="text-gold-500 text-base md:text-lg font-normal font-body mb-2 text-center">
          Five years. Five lenses. One structure, tested across many lives.
        </p>
        <p className="text-gold-500 text-base md:text-lg font-normal font-body text-center">
          After five years, the signal is no longer scattered. It holds.
        </p>
      </div>
    </section>
  );
}

