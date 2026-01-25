export default function PhilosophyVariant() {
  return (
    <section className="py-24 bg-earth-900" id="philosophy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block">Manifesto</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-earth-50">Reason Of Existence</h2>
        <div className="relative py-8">
          <span className="material-symbols-outlined text-gold-500/10 text-6xl absolute top-0 left-0 -translate-x-4 -translate-y-4">
            format_quote
          </span>
          <p className="text-xl md:text-2xl leading-relaxed text-earth-300 font-display italic relative z-10">
            "In a world of constant noise, we choose silence. In a culture of excess, we choose simplicity. The Silent Club exists as a shared refuge for thought, presence, and the freedom to do nothing without explanation."
          </p>
        </div>
      </div>
    </section>
  );
}
