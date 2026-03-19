const cohorts = [
  {
    year: "2026",
    label: "Post-Exit Founders",
  },
  {
    year: "2027",
    label: "Designers & Developers",
  },
  {
    year: "2028",
    label: "Musicians & Singers",
  },
  {
    year: "2029",
    label: "Writers & Thinkers",
  },
  {
    year: "2030",
    label: "Artists & Actors",
  },
] as const;

export default function LandingFiveYearCycle() {
  return (
    <section className="py-20 px-4 md:px-16 bg-earth-950 border-t border-earth-900">
      <div className="w-full text-center">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-5"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          The Founding Five-Year Cycle
        </h2>

        <div className="space-y-3 max-w-full mx-auto mb-10">
          <p className="text-earth-100 text-base md:text-lg font-body">
            The first five years establish the culture of the estate.
          </p>
          <p className="text-earth-100 text-base md:text-lg font-body">
            Each year centers one creative cohort.
          </p>
          <p className="text-earth-100 text-base md:text-lg font-body">
            Only 100 memberships are released annually.
          </p>
        </div>

        {/* Timeline-style layout - 5 columns on desktop, no scrolling */}
        <div className="mt-6">
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
                <div className="relative pl-6 border-l-2 border-gold-500">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-gold-500 ring-4 ring-earth-950" />
                  <div className="bg-earth-900/40 rounded-lg border border-earth-800/80 p-4">
                    <p
                      className="text-sm md:text-base text-earth-100 font-medium"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {cohort.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
