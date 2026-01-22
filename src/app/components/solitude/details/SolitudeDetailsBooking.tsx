interface SolitudeDetailsBookingProps {
  stationName: string;
  price: string;
}

export default function SolitudeDetailsBooking({ stationName, price }: SolitudeDetailsBookingProps) {
  return (
    <div className="w-full lg:w-[400px] flex-shrink-0">
      <div className="sticky top-24 bg-earth-800 rounded-xl border border-earth-700 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-earth-700 bg-earth-800/50">
          <h3 className="text-xl font-bold text-earth-50">Reserve Your Spot</h3>
          <p className="text-sm text-earth-300 mt-1">{stationName} Availability</p>
        </div>
        <div className="p-6 flex flex-col gap-6">
          {/* Date Picker Simulation */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-earth-400">Select Date</label>
            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2 text-earth-400">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <button className="aspect-square flex items-center justify-center rounded-full text-earth-600 cursor-not-allowed">27</button>
              <button className="aspect-square flex items-center justify-center rounded-full text-earth-600 cursor-not-allowed">28</button>
              <button className="aspect-square flex items-center justify-center rounded-full bg-earth-700 text-earth-50 hover:bg-earth-600 transition">
                1
              </button>
              <button className="aspect-square flex items-center justify-center rounded-full bg-gold-500 text-earth-950 font-bold shadow-lg shadow-gold-500/20">
                2
              </button>
              <button className="aspect-square flex items-center justify-center rounded-full bg-earth-700 text-earth-50 hover:bg-earth-600 transition">
                3
              </button>
              <button className="aspect-square flex items-center justify-center rounded-full bg-earth-700 text-earth-50 hover:bg-earth-600 transition">
                4
              </button>
              <button className="aspect-square flex items-center justify-center rounded-full bg-earth-700 text-earth-50 hover:bg-earth-600 transition">
                5
              </button>
            </div>
          </div>
          {/* Time Block */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-earth-400">Time Block</label>
            <div className="flex rounded-lg bg-earth-900 p-1 border border-earth-700">
              <button className="flex-1 py-2 rounded text-sm font-medium bg-earth-700 text-earth-50 shadow-sm border border-earth-700">
                Morning (Dawn - 12)
              </button>
              <button className="flex-1 py-2 rounded text-sm font-medium text-earth-400 hover:text-earth-300">Evening (12 - Dusk)</button>
            </div>
          </div>
          {/* Guest Count (Always 1) */}
          <div className="flex justify-between items-center py-2 border-t border-b border-earth-700">
            <span className="text-earth-50 text-sm">Guests</span>
            <span className="text-earth-300 text-sm font-medium">1 Person (Strictly Solitary)</span>
          </div>
          {/* Total */}
          <div className="flex justify-between items-end mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-earth-400">Total</span>
              <span className="text-2xl font-bold text-earth-50">{price}</span>
            </div>
          </div>
          {/* CTA */}
          <button className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-earth-950 font-bold rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-gold-500/20">
            Confirm Reservation
          </button>
          <p className="text-xs text-center text-earth-600 mt-2">Cancellation allowed up to 24h prior.</p>
        </div>
      </div>
    </div>
  );
}
