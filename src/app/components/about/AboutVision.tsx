import Link from "next/link";

export default function AboutVision() {
  return (
    <section className="py-40 px-4 md:px-16 flex flex-col items-center justify-center text-center bg-earth-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C5A065 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-earth-100 font-serif font-normal leading-tight mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Silence acts as a mirror.<br />
          <span className="text-earth-300/50 italic">Come see what it reflects.</span>
        </h2>

        <p className="text-earth-300/60 text-lg md:text-xl font-body font-light mb-16 max-w-2xl mx-auto">
          We invite you to experience the clarity that comes when the noise stops.
        </p>

        <Link
          href="/bookings"
          className="group relative inline-flex items-center gap-4 bg-transparent border border-gold-500 text-gold-500 px-12 py-5 rounded-full text-sm font-normal uppercase tracking-[0.2em] transition-all hover:bg-gold-500 hover:text-earth-950 hover:px-14"
        >
          Book Now
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}