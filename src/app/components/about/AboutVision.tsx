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
        <p className="text-earth-50 text-xl md:text-3xl font-display font-medium leading-relaxed italic mb-10">
          "We don't aim to give people silence.<br/>We aim to build a place where silence is easy to enter—and possible to carry back into the world."
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
