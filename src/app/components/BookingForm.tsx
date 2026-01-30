"use client";

import { useState, useRef } from "react";
import DatePicker from "./DatePicker";

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateInputRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getDisplayText = () => {
    if (checkIn && checkOut) {
      return `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
    } else if (checkIn) {
      return `${formatDate(checkIn)} - Check-out`;
    }
    return "Check-in - Check-out";
  };

  return (
    <>
      <div className="bg-earth-800 border-b border-earth-700 shadow-xl">
        <div className="max-w-full mx-auto px-4 py-8">
          <form className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <div className="relative" ref={dateInputRef}>
              <div
                data-date-input
                className="flex items-center gap-2 w-full md:w-auto bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner cursor-pointer hover:border-gold-500/50 transition-colors"
                onClick={() => setShowDatePicker(true)}
              >
                <span className="material-symbols-outlined text-gold-500">calendar_month</span>
                <input
                  className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 placeholder-earth-600 w-full md:w-48 font-body cursor-pointer"
                  placeholder="Check-in - Check-out"
                  type="text"
                  value={getDisplayText()}
                  readOnly
                />
              </div>
              {showDatePicker && (
                <DatePicker
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onCheckInChange={setCheckIn}
                  onCheckOutChange={setCheckOut}
                  onClose={() => setShowDatePicker(false)}
                />
              )}
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
                <option className="bg-earth-900">Private Rooms</option>

                <option className="bg-earth-900">Dorms</option>
                <option className="bg-earth-900">Community Hall</option>
                <option className="bg-earth-900">Luxury Tents</option>
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
    </>
  );
}
