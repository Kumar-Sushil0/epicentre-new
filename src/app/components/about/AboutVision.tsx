import Link from "next/link";

export default function AboutVision() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-earth-900 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#cf7317 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-2xl relative z-10">
        <span className="material-symbols-outlined text-gold-500 text-5xl mb-8">spa</span>
        <p className="text-earth-50 text-xl md:text-3xl font-display font-medium leading-relaxed italic mb-10">
          "We hope EPiCentre becomes a place where you don't just find silence, but where you learn to carry it with you, back into the noise of the world."
        </p>
        <Link
          href="/residency"
          className="inline-block bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-950 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300"
        >
          Explore Residencies
        </Link>
      </div>
    </section>
  );
}
