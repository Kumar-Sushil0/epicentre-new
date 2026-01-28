export default function Philosophy() {
  return (
    <section className="py-24 bg-earth-900" id="philosophy">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="relative py-8">
          <span className="material-symbols-outlined text-gold-500/10 text-6xl absolute top-0 left-0 -translate-x-4 -translate-y-4">
            format_quote
          </span>
          <p className="text-xl md:text-2xl leading-relaxed text-gold-500 relative z-10" style={{ fontFamily: 'Trirong, serif' }}>
            "The Silent Club exists to reduce interference. In a world optimized for noise, speed, and performance, this is a space designed for stillness, self-observation, and clarity. Nothing here is trying to improve you. The conditions make it easier to see.""
          </p>
        </div>
      </div>
    </section>
  );
}
