"use client";

export default function BookingForm() {
  return (
    <div className="relative z-10 bg-earth-800 border-b border-earth-700 shadow-xl">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <form className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="flex items-center gap-2 w-full md:w-auto bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner">
            <span className="material-symbols-outlined text-gold-500">calendar_month</span>
            <input
              className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 placeholder-earth-600 w-full md:w-48 font-body"
              placeholder="Check-in - Check-out"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner">
            <span className="material-symbols-outlined text-gold-500">group</span>
            <select className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 w-full md:w-32 font-body cursor-pointer">
              <option className="bg-earth-900">1 Guest</option>
              <option className="bg-earth-900">2 Guests</option>
              <option className="bg-earth-900">Group</option>
            </select>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner">
            <span className="material-symbols-outlined text-gold-500">bed</span>
            <select className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 w-full md:w-40 font-body cursor-pointer">
              <option className="bg-earth-900">Room Type</option>
              <option className="bg-earth-900">Private Suites</option>
              <option className="bg-earth-900">Luxury Tents</option>
              <option className="bg-earth-900">Dorms</option>
              <option className="bg-earth-900">Community Hall</option>
            </select>
          </div>
          <button
            className="w-full md:w-auto bg-gold-500 hover:bg-gold-400 text-earth-950 text-sm font-bold py-3.5 px-8 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            type="button"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
}
