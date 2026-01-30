export default function PrinciplesAndEnvironment() {
  const principles = [
    {
      id: "01",
      title: "Silence Is Designed",
      description: "Sound, movement, and stimulation are intentionally shaped. Silence is produced through structure, not enforced through rules."
    },
    {
      id: "02",
      title: "Nothing Demands Performance",
      description: "There is no obligation to speak, share, participate, or explain. Presence is sufficient."
    },
    {
      id: "03",
      title: "Environment Leads",
      description: "Land, architecture, and rhythm set the pace. Human behavior adapts to place."
    },
    {
      id: "04",
      title: "Choice Is Reduced",
      description: "Fewer options create clarity. Anything unnecessary is removed."
    },
    {
      id: "05",
      title: "Use Is Conditional",
      description: "Access depends on alignment with the nature of the space. Scale, urgency, or money do not override intent."
    },
    {
      id: "06",
      title: "Pace Is Protected",
      description: "Nothing is rushed, compressed, or accelerated. Time is treated as part of the environment."
    }
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-earth-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-earth-800 pb-12">
          <h2 className="text-gold-500 text-5xl md:text-6xl font-medium font-serif leading-none" style={{ fontFamily: 'Trirong, serif' }}>
            Operating <br />
            <span className="italic text-earth-100">Principles</span>
          </h2>
          <p className="text-earth-300 text-lg mt-6 md:mt-0 font-body max-w-sm text-right">
            These are constraints, not values. They shape the container.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {principles.map((principle) => (
            <div key={principle.id} className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="text-gold-500/20 text-6xl font-display font-medium mb-4 group-hover:text-gold-500/40 transition-colors">
                {principle.id}
              </div>
              <h4 className="text-earth-50 text-xl font-bold mb-4 font-serif tracking-wide border-t border-earth-800 pt-4 group-hover:border-gold-500/50 transition-colors">
                {principle.title}
              </h4>
              <p className="text-earth-300/60 text-base leading-relaxed font-body">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}