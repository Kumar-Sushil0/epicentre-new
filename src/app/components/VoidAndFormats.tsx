import Link from "next/link";

const states = [
  {
    name: "Silence",
    action: "Pause",
    desc: "4 hours to step out and reset.",
    icon: "volume_off",
    href: "/services",
  },
  {
    name: "Residency",
    action: "Observe",
    desc: "3 days to question what you believe.",
    icon: "home",
    href: "/services",
  },
  {
    name: "Solitude",
    action: "Confront",
    desc: "5 days to face what you've been avoiding.",
    icon: "self_improvement",
    href: "/solitude/details",
  },
  {
    name: "Creation",
    action: "Build",
    desc: "Full control to make something real.",
    icon: "science",
    href: "/services",
  },
];

const depths = [
  { name: "Encounter", desc: "A brief interruption — just enough to notice what's been running.", icon: "radio_button_checked" },
  { name: "Immersion", desc: "Time expands. Patterns begin to reveal themselves.", icon: "water" },
  { name: "Withdrawal", desc: "The noise fades. What remains gets harder to ignore.", icon: "dark_mode" },
  { name: "Occupation", desc: "You take control. And build from what you've seen.", icon: "construction" },
];

export default function VoidAndFormats() {
  return (
    <>
      {/* Section 4 — The System */}
      <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
        <div className="w-full">
          <div className="mb-10 md:mb-14 text-center">
            <h2
              className="text-2xl md:text-3xl font-normal text-gold-500 mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              The Four States
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 mb-12">
            {states.map((s) => (
              <Link href={s.href} key={s.name} className="block group">
                <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-8 hover:border-gold-500/80 hover:bg-earth-900 transition-colors text-center">
                  <span className="material-symbols-outlined text-gold-500 text-3xl mb-4 block">
                    {s.icon}
                  </span>
                  <h3
                    className="text-lg md:text-xl font-normal text-earth-100 group-hover:text-gold-500 transition-colors mb-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {s.name}
               h   </h3>
                  <p className="text-earth-400 text-xs mb-3"> {s.action}</p>
                  <p className="text-earth-300 text-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-earth-300 text-base md:text-lg">You don't choose a plan.</p>
            <p className="text-earth-300 text-base md:text-lg">You choose how deep you're willing to go.</p>
          </div>
        </div>
      </section>

      {/* Section 5 — Depth */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-earth-900 border-t border-earth-800">
        <div className="w-full">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-gold-500" style={{ fontFamily: "Outfit, sans-serif" }}>
            Choose Your Depth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 mb-12">
            {depths.map((d) => (
              <div key={d.name} className="h-full bg-earth-950 border border-earth-800/80 rounded-lg px-5 py-8 text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-4 block">{d.icon}</span>
                <h3
                  className="text-lg md:text-xl font-normal text-gold-500 mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {d.name}
                </h3>
                <p className="text-earth-300 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-earth-300 text-base md:text-lg">Not everyone needs to go all the way.</p>
            <p className="text-earth-300 text-base md:text-lg">Most don't. Some do.</p>
          </div>
        </div>
      </section>
    </>
  );
}
