import Link from "next/link";

const offerings = [
  { name: "Silence", duration: "4 hours", href: "/services" },
  { name: "Residency", duration: "3 days", href: "/services" },
  { name: "Solitude", duration: "5 days", href: "/solitude/details" },
  { name: "Creation", duration: "Full control", href: "/services" },
];

export default function HomeOfferings() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-16 bg-earth-950 border-t border-earth-900">
      <div className="w-full max-w-3xl mx-auto">
        <p className="text-earth-400 text-sm uppercase tracking-[0.2em] mb-8 text-center" style={{ fontFamily: "Outfit, sans-serif" }}>
          Offerings
        </p>
        <div className="divide-y divide-earth-800">
          {offerings.map((o) => (
            <Link
              key={o.name}
              href={o.href}
              className="flex items-center justify-between py-5 group"
            >
              <h3
                className="text-xl md:text-2xl font-normal text-earth-100 group-hover:text-gold-500 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {o.name}
              </h3>
              <span className="text-earth-400 text-sm font-body group-hover:text-gold-500 transition-colors">
                {o.duration} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
