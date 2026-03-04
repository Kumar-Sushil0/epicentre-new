const cohorts = [
  {
    year: "2026",
    label: "Post-Exit Founders",
    description: "Designing their next decade without pressure.",
  },
  {
    year: "2027",
    label: "Independent Designers",
    description: "Refining a signature body of work.",
  },
  {
    year: "2028",
    label: "Established Artists",
    description: "Operating beyond visibility.",
  },
  {
    year: "2029",
    label: "Writers & Long-Form Thinkers",
    description: "Between major works.",
  },
  {
    year: "2030",
    label: "Legacy Architects",
    description: "Designing multi-decade impact.",
  },
] as const;

export default function AboutAttentionCycle() {
  return (
    <section className="py-20 px-4 md:px-16 bg-earth-950 border-t border-earth-900">
      <div className="w-full max-w-6xl">
        <h2
          className="text-sm tracking-[0.25em] uppercase text-earth-400 mb-4"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          THE 5-YEAR ATTENTION CYCLE
        </h2>
        <p
          className="text-xl md:text-2xl text-earth-100 mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          100 memberships. One life-stage cohort per year.
        </p>
        <p className="text-earth-300/80 text-base md:text-lg mb-8 max-w-3xl font-body">
          Sequencing preserves depth. Growth without structure dilutes it.
        </p>

        <h3
          className="text-earth-200 text-lg md:text-xl mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          The first five years are staged deliberately.
        </h3>

        {/* Timeline-style layout */}
        <div className="mt-4 mb-10">
          <div className="md:overflow-x-auto overflow-y-visible pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-col md:inline-flex md:flex-row gap-8 md:min-w-full items-start">
              {cohorts.map((cohort) => (
                <div key={cohort.year} className="w-full md:shrink-0 md:w-64">
                  {/* Year header */}
                  <div className="sticky top-0 bg-earth-950/80 backdrop-blur-sm py-2 mb-3 border-b-2 border-gold-500">
                    <h4
                      className="text-xl font-normal text-gold-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {cohort.year}
                    </h4>
                  </div>

                  {/* Vertical timeline node */}
                  <div className="relative pl-8 pb-4 border-l-2 border-gold-500 ml-2">
                    {/* Dot */}
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-gold-500 ring-4 ring-earth-950" />

                    <div className="bg-earth-900/40 rounded-lg border border-earth-800/80 p-4">
                      <p
                        className="text-sm md:text-base text-earth-100 mb-1"
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
        </div>

        <p className="text-earth-200 text-sm md:text-base font-body mb-2 max-w-3xl">
          The environment remains constant. The cultural lens shifts. After five years, the standard stabilizes.
        </p>
        <p className="text-earth-200 text-sm md:text-base font-body max-w-3xl">
          Five cohorts. Five hundred individuals. One preserved structure.
        </p>
      </div>
    </section>
  );
}

