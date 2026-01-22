export default function ResidencyOverview() {
  return (
    <section className="space-y-6" id="overview">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Overview</span>
      </div>
      <h2 className="text-3xl font-bold text-earth-50">Return to Your Essence</h2>
      <p className="text-earth-300 text-lg leading-relaxed font-body">
        The EPiCentre Residency is designed for those seeking a profound reset. It is not merely a vacation, but a structured period of withdrawal from the noise of modern life. Over the course of seven days, you will engage in a curriculum of silence, guided introspection, and communal being.
      </p>
      <p className="text-earth-300 text-lg leading-relaxed font-body">
        Our architecture, diet, and schedule are all calibrated to support your nervous system in down-regulating, allowing your natural clarity and creativity to surface effortlessly.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className="bg-earth-800/50 p-4 rounded-lg border border-earth-700 text-center">
          <span className="material-symbols-outlined text-gold-500 text-2xl mb-2">timer</span>
          <p className="text-sm font-bold text-earth-100">7 Days</p>
        </div>
        <div className="bg-earth-800/50 p-4 rounded-lg border border-earth-700 text-center">
          <span className="material-symbols-outlined text-gold-500 text-2xl mb-2">group</span>
          <p className="text-sm font-bold text-earth-100">Small Group</p>
        </div>
        <div className="bg-earth-800/50 p-4 rounded-lg border border-earth-700 text-center">
          <span className="material-symbols-outlined text-gold-500 text-2xl mb-2">self_improvement</span>
          <p className="text-sm font-bold text-earth-100">Guided</p>
        </div>
        <div className="bg-earth-800/50 p-4 rounded-lg border border-earth-700 text-center">
          <span className="material-symbols-outlined text-gold-500 text-2xl mb-2">no_sim</span>
          <p className="text-sm font-bold text-earth-100">Digital Detox</p>
        </div>
      </div>
    </section>
  );
}
