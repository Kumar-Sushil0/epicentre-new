export default function WhoThisIsFor() {
  return (
    <section className="py-24 px-16 bg-earth-950 border-t border-earth-700">
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-earth-700">
          <div className="bg-earth-950 p-12 md:p-20">
            <h3 className="text-gold-500 text-2xl mb-10 border-b border-gold-500/20 pb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Who This Is For</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-gold-500/60">check_circle</span>
                <div>
                  <p className="text-earth-50/60 text-sm font-body">People at pause points</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-gold-500/60">check_circle</span>
                <div>
                  <p className="text-earth-50/60 text-sm font-body">Those overloaded with stimulation</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-gold-500/60">check_circle</span>
                <div>
                  <p className="text-earth-50/60 text-sm font-body">Those seeking clarity without instruction</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-gold-500/60">check_circle</span>
                <div>
                  <p className="text-earth-50/60 text-sm font-body">Those comfortable being self-directed</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-earth-950 p-12 md:p-20">
            <h3 className="text-gold-500 text-2xl mb-10 border-b border-white/5 pb-4 opacity-70" style={{ fontFamily: 'Outfit, sans-serif' }}>Who This Is Not For</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-white/20">cancel</span>
                <div>
                  <p className="text-earth-50/50 text-sm font-body">Entertainment or escape</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-white/20">cancel</span>
                <div>
                  <p className="text-earth-50/50 text-sm font-body">High-energy social use</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-white/20">cancel</span>
                <div>
                  <p className="text-earth-50/50 text-sm font-body">Transformation programs</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-white/20">cancel</span>
                <div>
                  <p className="text-earth-50/50 text-sm font-body">Scheduled outcomes</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gold-500/80 italic text-xl font-light">
            This place rewards patience.
          </p>
        </div>
      </div>
    </section>
  );
}