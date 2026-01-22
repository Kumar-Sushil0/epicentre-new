"use client";

export default function ResidencyBookingForm() {
  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-28 transition-all duration-300">
        <div className="bg-earth-800 p-8 rounded-2xl border border-earth-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
          <h3 className="text-2xl font-bold text-earth-50 mb-6 text-center">Book Your Retreat</h3>
          <form className="space-y-5 font-body">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth-300 mb-2">Full Name</label>
              <input
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors placeholder-earth-600"
                placeholder="e.g. Ananya Sharma"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth-300 mb-2">Phone Number</label>
              <input
                className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors placeholder-earth-600"
                placeholder="+91 90000 00000"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth-300 mb-2">Occupancy Type</label>
              <div className="relative">
                <select className="w-full bg-earth-900 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 appearance-none cursor-pointer">
                  <option>Luxury Tent (Single)</option>
                  <option>Private Suite (Single)</option>
                  <option>Shared Dorm</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 text-earth-400 pointer-events-none text-xl">
                  expand_more
                </span>
              </div>
            </div>
            <div className="bg-earth-900/50 rounded-lg p-4 mt-6 border border-earth-700/50">
              <div className="flex justify-between items-center text-sm text-earth-300 mb-2">
                <span>Base Retreat</span>
                <span>₹60,000</span>
              </div>
              <div className="flex justify-between items-center text-sm text-earth-300 mb-4 pb-4 border-b border-earth-700">
                <span>Taxes & Fees (18%)</span>
                <span>₹10,800</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-earth-100">Total</span>
                <span className="font-bold text-xl text-gold-500">₹70,800</span>
              </div>
            </div>
            <button
              className="w-full bg-gold-500 hover:bg-gold-400 text-earth-950 font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-gold-500/20 mt-4 flex items-center justify-center gap-2"
              type="button"
            >
              Confirm Booking
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <p className="text-xs text-center text-earth-500 mt-4 font-body">
              Secure payment powered by Stripe. Cancellation available up to 48h before arrival.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
