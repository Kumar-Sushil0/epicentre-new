import Link from "next/link";

export default function AboutVision() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-earth-900 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#cf7317 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px"
        }}
      ></div>
      <div className="relative z-10">
        <Link
          href="/bookings"
          className="group relative inline-flex items-center gap-3 bg-gold-500 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:pr-12"
        >
          Book Now
          <span className="material-symbols-outlined text-xl transition-all group-hover:translate-x-2">arrow_right_alt</span>
        </Link>
      </div>
    </section>
  );
}