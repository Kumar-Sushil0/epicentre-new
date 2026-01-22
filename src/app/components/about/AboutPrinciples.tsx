export default function AboutPrinciples() {
  const principles = [
    {
      number: "01",
      icon: "graphic_eq",
      title: "Designed Silence",
      description:
        "Silence here is not just the absence of noise, but a constructed presence. We engineer the soundscape to allow the internal voice to surface without competition.",
    },
    {
      number: "02",
      icon: "visibility_off",
      title: "Non-Performative Space",
      description:
        "A liberation from social expectations. In our communal areas, eye contact is optional, and conversation is intentional, removing the pressure to 'be' someone for others.",
    },
    {
      number: "03",
      icon: "landscape",
      title: "Environment-Led Growth",
      description:
        "The terrain is the teacher. The harsh, beautiful landscape of Bhigwan mirrors the resilience required for internal growth. We learn by observing the land.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-earth-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-earth-800 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-earth-50 text-3xl md:text-4xl font-bold">Core Principles</h2>
          <p className="text-earth-50/50 mt-4 font-body">The pillars that hold our sanctuary.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group p-8 border border-earth-700 hover:border-gold-500/50 rounded-xl bg-earth-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-between items-start">
                <span className="text-5xl font-display text-gold-500/20 group-hover:text-gold-500 transition-colors duration-300">
                  {principle.number}
                </span>
                <span className="material-symbols-outlined text-gold-500 text-3xl">{principle.icon}</span>
              </div>
              <h3 className="text-xl text-earth-50 font-bold mb-4 group-hover:text-gold-500 transition-colors">
                {principle.title}
              </h3>
              <p className="text-earth-50/60 font-body leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
