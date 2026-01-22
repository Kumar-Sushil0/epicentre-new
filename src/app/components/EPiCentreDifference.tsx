export default function EPiCentreDifference() {
  return (
    <section className="py-20 bg-earth-900">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-earth-50 mb-4">The EPiCentre Difference</h2>
          <p className="text-earth-300 max-w-2xl mx-auto font-body">A curated environment designed to help you disconnect to reconnect.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-earth-800/30 rounded-2xl border border-earth-800">
            <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">nature_people</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-earth-100">Raw Nature</h3>
            <p className="text-earth-300 font-body leading-relaxed">Surrounded by untouched landscapes that ground you in the present moment.</p>
          </div>
          <div className="text-center p-8 bg-earth-800/30 rounded-2xl border border-earth-800 md:border-x md:border-earth-700/50">
            <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">architecture</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-earth-100">Earthy Architecture</h3>
            <p className="text-earth-300 font-body leading-relaxed">Structures built with clay and local stone that breathe with the environment.</p>
          </div>
          <div className="text-center p-8 bg-earth-800/30 rounded-2xl border border-earth-800">
            <div className="w-16 h-16 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">diversity_3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-earth-100">Silent Community</h3>
            <p className="text-earth-300 font-body leading-relaxed">Shared spaces that encourage presence alongside others without the pressure of talk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
