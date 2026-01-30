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
    return "";
  };

  return (
    <>
      <div className="bg-earth-800 border border-gold-500/20 rounded-xl shadow-xl relative z-40">
        <div className="w-full mx-auto p-4 md:p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">

            {/* 1. Date Picker */}
            <div className="relative w-full" ref={dateInputRef}>
              <div
                data-date-input
                className="flex items-center gap-3 w-full bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner cursor-pointer hover:border-gold-500/50 transition-colors h-12"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <span className="material-symbols-outlined text-gold-500 text-xl shrink-0">calendar_month</span>
                <input
                  className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 placeholder-earth-400 w-full font-body cursor-pointer truncate"
                  placeholder="Selet Date.."
                  type="text"
                  value={getDisplayText()}
                  readOnly
                />
              </div>
              {showDatePicker && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <DatePicker
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onCheckInChange={setCheckIn}
                    onCheckOutChange={setCheckOut}
                    onClose={() => setShowDatePicker(false)}
                  />
                </div>
              )}
            </div>

            {/* 2. Guests */}
            <div className="flex items-center gap-3 w-full bg-earth-900 px-4 py-3 rounded-lg border border-earth-700 shadow-inner h-12">
              <span className="material-symbols-outlined text-gold-500 text-xl shrink-0">group</span>
              <select className="bg-transparent border-none text-sm focus:ring-0 text-earth-100 w-full font-body cursor-pointer appearance-none">
                <option className="bg-earth-900">1 Guest</option>
                <option className="bg-earth-900">2 Guests</option>
                <option className="bg-earth-900">Group</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
