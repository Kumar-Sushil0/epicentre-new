"use client";

export default function Location() {
  return (
    <section className="py-8 bg-earth-900 flex items-center" id="location">
      <div className="w-full px-16">
        <div className="mb-8">
           <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Location</h3>
          <p className="text-earth-300 font-body text-[15px] max-w-full">
                 
    A long, quiet drive through country roads.
    Reaching here feels unhurried, not exhausting.
 <br/>   
    You arrive sooner than you expect.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-earth-800 p-8 rounded-2xl shadow-sm border border-earth-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">location_on</span>
              <h3 className="text-xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>From Mumbai</h3>
            </div>
            <div className="space-y-4 font-body text-sm text-earth-300">
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">directions_car</span>
                  <span>Private Car</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">4.5 Hours</span>
              </div>
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">train</span>
                  <span>Train to Pune</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">3 + 2.5 Hours</span>
              </div>
              <p className="mt-4 italic text-xs text-earth-500">Closest Railway Station: Pune or Daund</p>
            </div>
          </div>
          <div className="bg-earth-800 p-8 rounded-2xl shadow-sm border border-earth-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">location_on</span>
              <h3 className="text-xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>From Pune</h3>
            </div>
            <div className="space-y-4 font-body text-sm text-earth-300">
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">directions_car</span>
                  <span>Private Car</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">2.5 Hours</span>
              </div>
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">directions_bus</span>
                  <span>State Bus</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">3.5 Hours</span>
              </div>
              <p className="mt-4 italic text-xs text-earth-500">Scenic route via Saswad and Jejuri.</p>
            </div>
          </div>
          <div className="bg-earth-800 p-8 rounded-2xl shadow-sm border border-earth-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-gold-500 text-3xl">location_on</span>
              <h3 className="text-xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>From Baramati</h3>
            </div>
            <div className="space-y-4 font-body text-sm text-earth-300">
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">directions_car</span>
                  <span>Private Car</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">45 Mins</span>
              </div>
              <div className="flex items-center justify-between border-b border-earth-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">directions_bus</span>
                  <span>Local Bus</span>
                </div>
                <span className="font-bold text-[#e7dfd3]">1 Hour</span>
              </div>
              <p className="mt-4 italic text-xs text-earth-500">Easy access from the nearest railway station.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
