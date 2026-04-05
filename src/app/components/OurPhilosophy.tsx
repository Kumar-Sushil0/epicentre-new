const cards = [
  {
    title: "Clarity Through Subtraction",
    description: "We remove before we add. Most environments compete for your attention. This one protects it. Noise is not reduced for comfort, it is removed so perception can stabilize. What remains is not emptiness. It is signal.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16V48M16 32H48" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="12" stroke="#C9A961" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Constraint Creates Autonomy",
    description: "Freedom without structure drifts. The estate is designed so you don't have to manage your environment, only your attention. Fewer choices. Fewer variables. More agency.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="32" height="32" stroke="#C9A961" strokeWidth="2"/>
        <path d="M24 24V40M32 24V40M40 24V40" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Identity Is Authored",
    description: "Nothing here reinforces who you are outside. No roles. No expectations. No performance. You are not guided. You are not interpreted. You decide what this time means.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 32L28 24M28 24L36 16M28 24V44M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="16" r="4" stroke="#C9A961" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Attention Is Sovereignty",
    description: "What you protect, shapes you. This environment is not optimized for comfort, nor productivity, nor experience. It is optimized for one thing: uninterrupted attention.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="16" stroke="#C9A961" strokeWidth="2"/>
        <circle cx="32" cy="32" r="8" stroke="#C9A961" strokeWidth="2"/>
        <circle cx="32" cy="32" r="3" fill="#C9A961"/>
      </svg>
    ),
  },
];

export default function OurPhilosophy() {
  return (
    <section className="py-16 bg-earth-900">
      <div className="w-full px-4 md:px-16">
        <h2 className="text-3xl font-normal mb-4 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Philosophy
        </h2>
        <p className="text-earth-300 text-sm md:text-base font-body max-w-2xl mb-10">
          The Silent Club is not built on preferences. It is built on principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="group relative h-64 bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
                {/* Icon sits just above the title, translates up and out on hover */}
                <div className="transition-all duration-500 group-hover:-translate-y-32 group-hover:opacity-0 mb-3">
                  {card.svg}
                </div>
                <h3 className="text-gold-500 text-base font-normal mb-1 group-hover:text-gold-400 transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {card.title}
                </h3>
                <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                  <div className="overflow-hidden">
                    <p className="text-earth-300 text-sm font-body leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
