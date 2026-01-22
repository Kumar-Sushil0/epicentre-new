"use client";

import { useState } from "react";

interface SessionDate {
  date: string;
  time: string;
  spots?: string;
  available: boolean;
}

interface ExpressionDetailsBookingProps {
  price: string;
  sessionDates: SessionDate[];
  facilitatorName: string;
  facilitatorRole: string;
}

export default function ExpressionDetailsBooking({
  price,
  sessionDates,
  facilitatorName,
  facilitatorRole,
}: ExpressionDetailsBookingProps) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [guestCount, setGuestCount] = useState(1);

  const totalPrice = parseFloat(price.replace("$", "")) * guestCount;

  return (
    <div className="lg:col-span-5 relative">
      <div className="bg-earth-800 border border-earth-700 rounded-xl shadow-2xl p-8 lg:p-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-earth-50 font-display">Book a Session</h3>
            <p className="text-earth-50/50 text-sm mt-1 font-body">Secure your spot in the circle.</p>
          </div>
          <div className="text-right">
            <span className="block text-3xl font-bold text-gold-500">{price}</span>
            <span className="text-xs text-earth-50/40 uppercase tracking-wider">Per Person</span>
          </div>
        </div>
        <form className="space-y-8">
          <div>
            <label className="block text-xs font-bold text-earth-50/70 uppercase tracking-widest mb-3 font-body">
              Select Date
            </label>
            <div className="space-y-3">
              {sessionDates.map((session, index) => (
                <label
                  key={index}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-earth-700 transition-colors group ${
                    selectedDate === index ? "border-gold-500 bg-earth-700" : "border-earth-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      checked={selectedDate === index}
                      onChange={() => setSelectedDate(index)}
                      className="w-5 h-5 text-gold-500 bg-earth-900 border-earth-300 focus:ring-gold-500 focus:ring-offset-earth-800"
                      name="session-date"
                      type="radio"
                    />
                    <div>
                      <span className="block text-earth-50 font-bold">{session.date}</span>
                      <span className="text-sm text-earth-50/50">{session.time}</span>
                    </div>
                  </div>
                  {session.spots && (
                    <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded">{session.spots}</span>
                  )}
                  {!session.spots && session.available && (
                    <span className="text-xs font-medium text-earth-50/40">Open</span>
                  )}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-earth-50/70 uppercase tracking-widest mb-3 font-body">
              Number of Guests
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                className="w-10 h-10 rounded-full border border-earth-700 bg-earth-900 text-earth-50 hover:border-gold-500 hover:text-gold-500 transition flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="text-xl font-bold text-earth-50 w-8 text-center">{guestCount}</span>
              <button
                type="button"
                onClick={() => setGuestCount(Math.min(4, guestCount + 1))}
                className="w-10 h-10 rounded-full border border-earth-700 bg-earth-900 text-earth-50 hover:border-gold-500 hover:text-gold-500 transition flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
              <span className="text-xs text-earth-50/40 ml-2">(Max 4 per booking)</span>
            </div>
          </div>
          <div className="pt-4 border-t border-earth-700">
            <div className="flex justify-between items-center mb-6">
              <span className="text-earth-50/70">Total Due</span>
              <span className="text-2xl font-bold text-earth-50">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-gold-500 hover:bg-gold-400 text-earth-950 font-bold rounded-lg shadow-lg hover:shadow-gold-500/20 transition-all flex items-center justify-center gap-2"
            >
              Confirm Booking
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-xs text-earth-50/30 mt-4">
              Cancellation allowed up to 48 hours before the session.
            </p>
          </div>
        </form>
      </div>
      <div className="mt-8 flex items-center gap-4 p-4 border border-earth-700 rounded-lg bg-earth-900">
        <div className="size-12 rounded-full bg-earth-700 flex items-center justify-center text-earth-50/40">
          <span className="material-symbols-outlined">person</span>
        </div>
        <div>
          <p className="text-xs text-gold-500 uppercase tracking-wider font-bold mb-1">Facilitated By</p>
          <p className="text-earth-50 text-sm font-display">
            {facilitatorName}, {facilitatorRole}
          </p>
        </div>
      </div>
    </div>
  );
}
