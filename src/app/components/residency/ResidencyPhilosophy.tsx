export default function ResidencyPhilosophy() {
  return (
    <section className="py-32 bg-earth-900 border-b border-earth-800" id="philosophy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="material-symbols-outlined text-gold-600/40 text-5xl">history_edu</span>
        </div>
        <h2 className="text-earth-100 text-3xl md:text-4xl font-display italic leading-relaxed mb-12">
          "Designed for depth, our residencies prioritize the pursuit of{" "}
          <span className="text-gold-500">one question at a time</span>. We provide the container; you provide the attention."
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="font-display text-xl text-earth-50 mb-4">Deep Work Infrastructure</h3>
            <p className="text-earth-300 leading-relaxed font-light font-body">
              Our spaces are physically optimized for cognitive endurance. From ergonomic writing nooks to curated library access, every corner serves the residency's specific theme.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-earth-50 mb-4">The Power of Context</h3>
            <p className="text-earth-300 leading-relaxed font-light font-body">
              We don't just host guests; we curate cohorts. Each program gathers individuals around a shared inquiry, fostering a community of silent parallel effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
