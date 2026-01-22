import Image from "next/image";

export default function ResidencyLocation() {
  return (
    <section className="space-y-8 pb-12" id="location">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Location</span>
      </div>
      <h2 className="text-3xl font-bold text-earth-50">The Sanctuary</h2>
      <div className="bg-earth-800 rounded-xl overflow-hidden border border-earth-700 p-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-gold-500 mt-1">pin_drop</span>
            <div>
              <h4 className="font-bold text-earth-100">Hidden Valley, Maharashtra</h4>
              <p className="text-sm text-earth-300 font-body mt-2">
                Nestled between two hills, protected from the highway noise. A micro-climate of cool breezes and silence.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t border-earth-700 pt-4 mt-4">
            <span className="material-symbols-outlined text-earth-400 mt-1">directions_car</span>
            <div>
              <h4 className="font-bold text-earth-200 text-sm">2.5 Hrs from Pune</h4>
              <p className="text-xs text-earth-400 font-body">Private transfers arranged upon booking.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-48 md:h-auto rounded-lg overflow-hidden relative">
          <Image
            alt="Residency location"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz"
            fill
            className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-earth-900/10 border border-earth-700/50 rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
