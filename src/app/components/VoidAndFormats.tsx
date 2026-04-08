import Link from "next/link";

const levels = [
  {
    name: "Silence",
    depth: "Encounter",
    action: "Pause",
    desc: "4 hours to step out and reset.",
    icon: "volume_off",
  },
  {
    name: "Residency",
    depth: "Immersion",
    action: "Observe",
    desc: "3 days to question what you believe.",
    icon: "home",
  },
  {
    name: "Solitude",
    depth: "Withdrawal",
    action: "Confront",
    desc: "5 days to face what you've been avoiding.",
    icon: "self_improvement",
  },
  {
    name: "Creation",
    depth: "Occupation",
    action: "Build",
    desc: "Full control to make something real.",
    icon: "science",
  },
];

export default function VoidAndFormats() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <div className="mb-10 md:mb-14 text-center">
          <h2
            className="text-2xl md:text-3xl font-normal text-gold-500 mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Choose Your Depth
          </h2>
          <p className="text-earth-300 text-sm md:text-base">
            A private estate designed for structured silence, deep work, and decision clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 mb-12">
          {levels.map((l) => (
            <div key={l.name} className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-8 text-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl mb-4 block">
                {l.icon}
              </span>
              <h3
                className="text-lg md:text-xl font-normal text-earth-100 mb-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {l.name}
              </h3>
              <p className="text-gold-500/70 text-xs font-normal mb-3 tracking-widest uppercase">
                {l.depth}
              </p>
              <p className="text-earth-400 text-xs mb-3">{l.action}</p>
              <p className="text-earth-300 text-sm mb-3">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-earth-300 text-base md:text-lg">You don't choose a plan.</p>
          <p className="text-earth-300 text-base md:text-lg">You choose how deep you're willing to go.</p>
          <p className="text-earth-300 text-base md:text-lg">Not everyone needs to go all the way. Most don't. Some do.</p>
        </div>
      </div>
    </section>
  );
}
