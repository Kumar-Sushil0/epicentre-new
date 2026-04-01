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
            What Changes When You Arrive
          </h2>
          <div className="text-center text-earth-300 text-base md:text-lg leading-relaxed space-y-3 md:space-y-4">
            <p>
              There is no fixed agenda when you arrive.
            </p>
            <p>
              The environment is intentionally minimal.<br />
              Stimulation reduces. Roles soften. Time opens.
            </p>
            <p>
              You move at your own pace.<br />
              Between reflection, nature, and thought.
            </p>
            <p>
              Some come for a few hours.
              Some stay for days.<br />
              Some go deeper into complete withdrawal.<br />
              Some take full control of the environment.
            </p>
            <p>
              The depth changes.
              The environment does not.
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
                  className="text-base md:text-lg font-normal text-earth-100"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {f.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
