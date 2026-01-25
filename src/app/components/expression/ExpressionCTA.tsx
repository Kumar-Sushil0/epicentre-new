import Link from "next/link";

export default function ExpressionCTA() {
  return (
    <section className="py-24 px-6 bg-earth-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-earth-50">Ready to explore your process?</h2>
        <div className="space-y-2 text-lg text-earth-50/70 font-body max-w-lg">
          <p>
            Enter a shared space where unfinished work is held with care,
          </p>
          <p>
            and attention stays on making — not outcomes.
          </p>
        </div>
        <Link
          href="/bookings"
          className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-gold-500 hover:bg-gold-400 text-earth-950 text-base font-bold leading-normal tracking-wide shadow-lg transition-all transform hover:scale-105"
        >
          <span className="truncate">Book a Session</span>
        </Link>
      </div>
    </section>
  );
}
