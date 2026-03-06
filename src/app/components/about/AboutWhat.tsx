export default function AboutWhat() {
  return (
    <section className="py-16 md:py-20 bg-earth-950 border-b border-earth-800">
      <div className="w-full px-4 md:px-16">
        {/* Title at top */}
        <div className="mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-normal mb-3 text-gold-500"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            What is The Silent Club
          </h2>
          <p className="text-lg md:text-xl text-earth-200 font-light max-w-3xl">
            A private estate designed to protect one thing: <span className="text-gold-500 italic">your attention.</span>
          </p>
        </div>

        {/* Content in horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* What it is NOT */}
          <div className="border border-earth-800 bg-earth-900/50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500/60 text-2xl">block</span>
              <h3 className="text-base font-normal text-gold-500/90" style={{ fontFamily: "Outfit, sans-serif" }}>
                What it is not
              </h3>
            </div>
            <div className="space-y-1.5 text-earth-300 font-body text-sm">
              <p className="flex items-center gap-2">
                <span className="text-gold-500/40 text-xl font-bold">×</span> Not a retreat
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-500/40 text-xl font-bold">×</span> Not a wellness resort
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold-500/40 text-xl font-bold">×</span> No programming or workshops
              </p>
            </div>
          </div>

          {/* What it IS */}
          <div className="border border-earth-800 bg-earth-900/50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500 text-2xl">check_circle</span>
              <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
                What it is
              </h3>
            </div>
            <p className="text-earth-300 font-body text-sm leading-relaxed">
              A structured environment designed to reduce interference so your thinking can stabilise on its own terms.
            </p>
          </div>

          {/* Functional silence */}
          <div className="border border-earth-800 bg-earth-900/50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold-500 text-2xl">volume_off</span>
              <h3 className="text-base font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
                Functional silence
              </h3>
            </div>
            <p className="text-earth-300 font-body text-sm leading-relaxed mb-2">
              Silence here is not aesthetic. <span className="text-earth-300 font-semibold">It is functional.</span>
            </p>
            <p className="text-earth-300 font-body text-xs leading-relaxed">
              Clarity arrives without effort because the noise has been removed.
            </p>
          </div>
        </div>

        {/* Founding principle - full width below */}
        <div className="mt-5 border border-earth-800 bg-earth-900/50 p-5 md:p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <p className="text-gold-500 font-semibold text-base mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                The founding principle:
              </p>
              <p className="text-earth-300 font-body text-sm">
                Most environments amplify input. This one reduces it. The result is <span className="text-gold-500 font-semibold">cognitive restoration.</span>
              </p>
            </div>
            <div className="flex gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-earth-500 text-xl">trending_up</span>
                <span className="text-earth-300 text-xs">Most places</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-500 text-xl">trending_down</span>
                <span className="text-gold-500 text-xs font-semibold">Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

