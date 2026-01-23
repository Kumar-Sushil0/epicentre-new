"use client";

import { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onCheckInChange: (date: Date | null) => void;
  onCheckOutChange: (date: Date | null) => void;
  onClose: () => void;
}

export default function DatePicker({ checkIn, checkOut, onCheckInChange, onCheckOutChange, onClose }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date > checkIn && date < checkOut;
  };

  const isDateBetween = (date: Date) => {
    if (!checkIn || !checkOut) {
      if (checkIn && hoverDate && date > checkIn && date < hoverDate) return true;
      return false;
    }
    return isDateInRange(date);
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (clickedDate < today) return; // Prevent selecting past dates

    if (!checkIn || (checkIn && checkOut) || (checkIn && clickedDate < checkIn)) {
      // Start new selection
      onCheckInChange(clickedDate);
      onCheckOutChange(null);
    } else if (checkIn && !checkOut) {
      // Complete the range
      if (clickedDate <= checkIn) {
        onCheckInChange(clickedDate);
        onCheckOutChange(null);
      } else {
        onCheckOutChange(clickedDate);
      }
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        // Don't close if clicking on the date input field
        if (!target.closest('[data-date-input]')) {
          onClose();
        }
      }
    };

    // Add a small delay to prevent immediate closure
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="absolute top-full left-0 mt-2 z-[9999]" ref={popupRef}>
      <div className="border border-earth-700 rounded-xl shadow-2xl p-4 w-[320px]" style={{ backgroundColor: '#261b14' }}>
        {/* Selected Dates Display */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-earth-900 border border-earth-700 rounded-lg p-2">
            <p className="text-xs text-earth-300 uppercase tracking-wide mb-1 font-body">Check-in</p>
            <p className="text-earth-100 text-sm font-medium">{checkIn ? formatDate(checkIn) : "Select"}</p>
          </div>
          <div className="bg-earth-900 border border-earth-700 rounded-lg p-2">
            <p className="text-xs text-earth-300 uppercase tracking-wide mb-1 font-body">Check-out</p>
            <p className="text-earth-100 text-sm font-medium">{checkOut ? formatDate(checkOut) : "Select"}</p>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePrevMonth();
              }} 
              type="button"
              className="text-earth-300 hover:text-earth-100 transition-colors p-1 pointer-events-auto"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <span className="text-sm font-medium tracking-wide text-earth-100">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleNextMonth();
              }} 
              type="button"
              className="text-earth-300 hover:text-earth-100 transition-colors p-1 pointer-events-auto"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-1">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-[10px] text-earth-300 font-medium py-1 font-body">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}
            {days.map((day) => {
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              date.setHours(0, 0, 0, 0);
              const isPast = date < today;
              const isCheckIn = checkIn && isSameDay(date, checkIn);
              const isCheckOut = checkOut && isSameDay(date, checkOut);
              const inRange = isDateBetween(date);
              const isHovering = hoverDate && checkIn && !checkOut && date > checkIn && date <= hoverDate;

              return (
                <button
                  key={day}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDateClick(day);
                  }}
                  onMouseEnter={() => setHoverDate(date)}
                  disabled={isPast}
                  type="button"
                  className={`aspect-square flex items-center justify-center rounded text-xs transition-all pointer-events-auto ${
                    isPast
                      ? "text-earth-700 cursor-not-allowed"
                      : isCheckIn || isCheckOut
                      ? "bg-gold-500 text-earth-950 font-bold"
                      : inRange || isHovering
                      ? "bg-gold-500/20 text-gold-500 font-medium"
                      : "text-earth-300 hover:text-earth-100 hover:bg-earth-700/50"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-earth-700">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCheckInChange(null);
              onCheckOutChange(null);
            }}
            type="button"
            className="px-3 py-1.5 text-xs text-earth-300 hover:text-earth-100 transition-colors font-body pointer-events-auto"
          >
            Clear
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            type="button"
            className="px-4 py-1.5 bg-gold-500 hover:bg-gold-400 text-earth-950 text-xs font-bold rounded transition-colors pointer-events-auto"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
