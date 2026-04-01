import Link from "next/link";

const formats = [
  {
    name: "Arrival",
    days: "All Days",
    sub: "Day Visit — Entry",
    desc1: "A first encounter with silence.",
    desc2: "A short return to attention when it begins to drift.",
    icon: "volume_off",
  },
  {
    name: "Immersion",
    days: "Weekends Only",
    sub: "2–3 Days — Short Stay",
    desc1: "Stepping out of noise.",
    desc2: "Time begins to slow. Attention begins to settle.",
    icon: "school",
  },
  {
    name: "Withdrawal",
    days: "Weekdays Only",
    sub: "4–5 Days — Extended Stay",
    desc1: "Longer time in silence.",
    desc2: "Thought deepens. Internal clarity begins to surface.",
    icon: "self_improvement",
  },
  {
    name: "Occupation",
    days: "All Days",
    sub: "Full Estate — Complete Access",
    desc1: "The estate, entirely yours.",
    desc2: "No overlap. No interruption. The environment responds only to you.",
    icon: "science",
  },
];

export default function VoidAndFormats() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        {/* Header copy */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-center text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Ways to Enter the Estate
          </h2>
          <div className="text-center text-earth-300 text-base md:text-lg leading-relaxed space-y-3 md:space-y-4">
            <p>
              There is no fixed agenda when you arrive.<br />
              The environment remains the same.<br />
              Only your depth of engagement changes.
            </p>
            <p>
              Stimulation reduces. Roles soften. Time opens.<br />
              You move at your own pace between reflection, nature, and self-directed thought.
            </p>
            <p>
              Silence is not something you perform.<br />
              It is the condition in which clearer thinking begins.
            </p>
          </div>
        </div>

        {/* Format cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {formats.map((f) => (
            <Link href="/services" key={f.name} className="block">
              <div className="h-full bg-earth-900/60 border border-earth-800/80 rounded-lg px-5 py-6 md:px-6 md:py-7 hover:border-gold-500/80 hover:bg-earth-900 transition-colors cursor-pointer text-center">
                <span className="material-symbols-outlined text-gold-500 text-3xl mb-3 block">
                  {f.icon}
                </span>
                <h3
                  className="text-base md:text-lg font-normal text-earth-100 mb-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {f.name}
                </h3>
                <p className="text-gold-500/70 text-xs mb-1">{f.days}</p>
                <p className="text-earth-500 text-xs mb-3">{f.sub}</p>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  {f.desc1}
                </p>
                <p className="text-earth-500 text-xs leading-relaxed mt-1">
                  {f.desc2}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
