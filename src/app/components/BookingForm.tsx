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

      <div className="bg-transparent rounded-lg shadow-xl relative z-40 w-full">
        <div className="w-full mx-auto p-0">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center w-full">
            {/* Download Brochure Button */}
            <a 
              href="/The_Silent_Club_2_Page_Brochure.pdf" 
              download="The_Silent_Club_2_Page_Brochure.pdf"
              className="flex items-center justify-center w-full h-9 bg-earth-900 px-2 py-2 rounded border border-earth-700 shadow-inner cursor-pointer hover:border-gold-500/50 transition-colors text-xs text-gold-500 font-medium hover:text-gold-400"
              style={{ minWidth: 0 }}
            >
              Download Brochure
            </a>
            {/* Google Maps Button */}
            <a
              href="https://maps.google.com" /* Replace with actual map link if needed */
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-9 bg-earth-900 px-2 py-2 rounded border border-earth-700 shadow-inner cursor-pointer hover:border-gold-500/50 transition-colors text-xs text-gold-500 font-medium hover:text-gold-400"
              style={{ minWidth: 0 }}
            >
              Google Maps
            </a>
            {/* 1. Date Picker */}
            <div className="relative w-full" ref={dateInputRef}>
              <div
                data-date-input
                className="flex items-center gap-2 w-full bg-earth-900 px-2 py-2 rounded border border-earth-700 shadow-inner cursor-pointer hover:border-gold-500/50 transition-colors h-9"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <span className="material-symbols-outlined text-gold-500 text-base shrink-0">calendar_month</span>
                <input
                  className="bg-transparent border-none text-xs focus:ring-0 text-earth-100 placeholder-earth-400 w-full font-body cursor-pointer truncate"
                  placeholder="Select Date.."
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
            <div className="flex items-center gap-2 w-full bg-earth-900 px-2 py-2 rounded border border-earth-700 shadow-inner h-9">
              <span className="material-symbols-outlined text-gold-500 text-base shrink-0">group</span>
              <input
                type="number"
                min="1"
                max="50"
                placeholder="Guests"
                className="bg-transparent border-none text-xs focus:ring-0 text-earth-100 placeholder-earth-400 w-full font-body [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
