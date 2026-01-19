"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [currency, setCurrency] = useState("₹ INR");

  return (
    <section className="w-full bg-[#F5F5F0] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Descriptive Text Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            A manor reborn in India's Wine Country
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hotel Irada breathes new life into Vijay Mallya's storied 2000's estate. Once a destination for his extravagant soirees, Hotel Irada is a 66-acre working winery, cradled by 4000 acres of reserve forest, bringing soul to every detail — through wine trails, forest rituals, and the creative spirit of a new India.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-[#F5F5F0] rounded-2xl shadow-lg p-6 flex items-center gap-0 border border-gray-200">
          {/* Check-in Section */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <svg className="w-6 h-6 text-[#6B3410] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex-1">
              <label className="text-xs uppercase text-gray-600 block mb-1">CHECK-IN</label>
              <input
                type="text"
                placeholder="Add Date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-base font-medium text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px h-12 bg-gray-300"></div>

          {/* Check-out Section */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <svg className="w-6 h-6 text-[#6B3410] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex-1">
              <label className="text-xs uppercase text-gray-600 block mb-1">CHECK-OUT</label>
              <input
                type="text"
                placeholder="Add Date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-base font-medium text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px h-12 bg-gray-300"></div>

          {/* Guests Section */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <svg className="w-6 h-6 text-[#6B3410] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="flex-1">
              <label className="text-xs uppercase text-gray-600 block mb-1">GUESTS</label>
              <div className="text-base font-medium text-gray-800">{guests}</div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px h-12 bg-gray-300"></div>

          {/* Currency Section */}
          <div className="flex-1 flex items-center gap-3 px-4 py-2">
            <svg className="w-6 h-6 text-[#6B3410] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <label className="text-xs uppercase text-gray-600 block mb-1">CURRENCY</label>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-gray-800">{currency}</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="bg-[#6B3410] hover:bg-[#5A2A0E] text-white uppercase font-bold px-8 py-4 rounded-r-2xl transition-colors">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
