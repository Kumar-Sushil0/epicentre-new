import Link from "next/link";

export default function AboutVision() {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-earth-900 relative">
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(#cf7317 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px"
        }}
      ></div>
      <div className="max-w-4xl relative z-10">
        <span className="text-gold-500 font-body text-xs tracking-[0.3em] uppercase mb-8 block">An Invitation</span>
        
        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border border-earth-700 rounded bg-earth-950">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="material-symbols-outlined text-gold-500 text-xl">block</span>
            </div>
            <p className="text-earth-50 text-lg font-light">Nothing to complete</p>
          </div>
          
          <div className="p-6 border border-earth-700 rounded bg-earth-950">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="material-symbols-outlined text-gold-500 text-xl">no_food</span>
            </div>
            <p className="text-earth-50 text-lg font-light">Nothing to consume</p>
          </div>
          
          <div className="p-6 border border-earth-700 rounded bg-earth-950">
            <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="material-symbols-outlined text-gold-500 text-xl">sensors</span>
            </div>
            <p className="text-earth-50 text-lg font-light">Enter when fewer signals feel necessary</p>
          </div>
        </div>
        
        <p className="text-gold-500/80 italic text-3xl md:text-4xl font-light mb-12">
          "The space is open"
        </p>
        
        <Link
          href="/residency"
          className="group relative inline-flex items-center gap-3 bg-gold-500 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:pr-12"
        >
          Apply for Residency
          <span className="material-symbols-outlined text-xl transition-all group-hover:translate-x-2">arrow_right_alt</span>
        </Link>
      </div>
    </section>
  );
}