interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export default function ResidencySchedule() {
  const scheduleItems: ScheduleItem[] = [
    {
      time: "06:00 AM",
      title: "Morning Bell & Nature Walk",
      description: "Waking up with the sun. A silent, barefoot walk on the earth to ground the electrical body.",
      isHighlighted: true,
    },
    {
      time: "08:00 AM",
      title: "Satvik Breakfast",
      description: "Light, warm, digestion-friendly nourishment served in the communal hall.",
    },
    {
      time: "10:00 AM - 01:00 PM",
      title: "Deep Work / Contemplation",
      description: "Unstructured time for journaling, reading, pottery, or simply sitting. No devices.",
    },
    {
      time: "04:00 PM",
      title: "Group Session with Neel",
      description: "Guided meditation and somatic release techniques. Introduction to breathwork.",
    },
    {
      time: "08:00 PM",
      title: "Noble Silence & Rest",
      description: "Retiring to quarters. Lights dimmed. Preparing the mind for dream states.",
      isHighlighted: true,
    },
  ];

  return (
    <section className="space-y-8" id="schedule">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Timeline</span>
      </div>
      <h2 className="text-3xl font-bold text-earth-50">Daily Rhythm</h2>
      <div className="relative border-l border-earth-700 ml-4 space-y-12 py-4">
        {scheduleItems.map((item, index) => (
          <div key={index} className="relative pl-10">
            <div
              className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full shadow-[0_0_0_4px_rgba(26,18,11,1)] ${
                item.isHighlighted ? "bg-gold-500" : "bg-earth-600 border border-gold-500"
              }`}
            ></div>
            <span className="text-gold-500 font-bold text-sm block mb-1">{item.time}</span>
            <h4 className="text-xl font-bold text-earth-100 mb-2">{item.title}</h4>
            <p className="text-earth-300 text-sm font-body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
