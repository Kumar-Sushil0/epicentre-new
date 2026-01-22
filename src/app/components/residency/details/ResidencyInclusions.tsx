interface Inclusion {
  title: string;
  description: string;
}

export default function ResidencyInclusions() {
  const inclusions: Inclusion[] = [
    { title: "Accommodation", description: "7 Nights in chosen category" },
    { title: "All Meals", description: "Organic, vegetarian, farm-to-table" },
    { title: "Workshops", description: "Daily sessions with Neel Kothari" },
    { title: "Activities", description: "Pottery supplies, yoga mats, library access" },
    { title: "Consultation", description: "One private consultation session" },
    { title: "Transportation", description: "Pick up & drop off from nearest airport" },
  ];

  return (
    <section className="space-y-8" id="inclusions">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Inclusions</span>
      </div>
      <h2 className="text-3xl font-bold text-earth-50">What is Included</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {inclusions.map((inclusion, index) => (
          <div key={index} className="flex items-start gap-3 p-4 border border-earth-800 rounded bg-earth-800/20">
            <span className="material-symbols-outlined text-gold-500">check_circle</span>
            <div>
              <h4 className="font-bold text-earth-100">{inclusion.title}</h4>
              <p className="text-sm text-earth-300 mt-1 font-body">{inclusion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
