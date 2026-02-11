export default function IconStrip() {
  return (
    <div className="w-full bg-earth-950 pt-8">
      <div className="w-full px-4 md:px-16">
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Safe Space */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">shield</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">safe space</span>
          </div>

          {/* Wilderness Sanctuary */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">forest</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">wilderness<br/>sanctuary</span>
          </div>

          {/* Somatic Support */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">spa</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">somatic<br/>support</span>
          </div>

          {/* 100,000+ Wild Acres */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">landscape</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">enfolded in<br/>100,000+ wild<br/>acres</span>
          </div>

          {/* Organic Water */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">water_drop</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">organic<br/>water</span>
          </div>

          {/* Private Plunge */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">pool</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">private<br/>plunge/creek<br/>seasonal</span>
          </div>

          {/* Mountain Spring */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">water</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">mountain<br/>spring water</span>
          </div>

           {/* Mountain Spring */}
          <div className="flex flex-col items-center gap-2 text-center flex-1 min-w-[100px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-gold-500 text-3xl">water</span>
            </div>
            <span className="text-xs text-earth-400 font-body leading-tight">mountain<br/>spring water</span>
          </div>
        </div>
      </div>
    </div>
  );
}