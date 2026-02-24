'use client';

import { useState } from 'react';

interface SolitudeDetailsBookingProps {
  stationName: string;
  price: string;
}

const whatsappNumber = '919890322494';
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function SolitudeDetailsBooking({ stationName, price }: SolitudeDetailsBookingProps) {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [selectedWeek, setSelectedWeek] = useState<{ start: Date; end: Date } | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPrice = () => {
    return accommodationType === 'dorm' ? '₹20,000' : '₹30,000';
  };

  const getMonday = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.getFullYear(), date.getMonth(), diff);
  };

  const getFriday = (monday: Date) => {
    return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 4);
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day >= 1 && day <= 5; // Monday to Friday
  };

  const isSameWeek = (date: Date, weekStart: Date | null) => {
    if (!weekStart) return false;
    const monday = getMonday(date);
    return monday.getTime() === weekStart.getTime();
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (clickedDate < today || !isWeekday(clickedDate)) return;

    const monday = getMonday(clickedDate);
    const friday = getFriday(monday);
    
    setSelectedWeek({ start: monday, end: friday });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate all dates including overflow from previous and next month
  const allDates: Date[] = [];
  
  // Previous month overflow
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  const prevMonthDays = getDaysInMonth(prevMonth);
  for (let i = firstDay - 1; i >= 0; i--) {
    allDates.push(new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonthDays - i));
  }
  
  // Current month
  for (let i = 1; i <= daysInMonth; i++) {
    allDates.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }
  
  // Next month overflow - only add enough to complete the last week
  const currentLength = allDates.length;
  const remainingInWeek = currentLength % 7 === 0 ? 0 : 7 - (currentLength % 7);
  const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  for (let i = 1; i <= remainingInWeek; i++) {
    allDates.push(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i));
  }

  return (
    <div className="w-full lg:w-[400px] flex-shrink-0">
      <div className="sticky top-24 bg-earth-800 rounded-xl border border-earth-700 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-earth-700 bg-earth-800/50">
          <h3 className="text-xl font-bold text-earth-50 mb-1">Book Your Weekday Cycle</h3>
          <p className="text-sm text-earth-400 mb-3">4 nights / 5 days</p>
          
          {/* Accommodation Toggle */}
          <div className="inline-flex items-center gap-2 bg-earth-900/50 rounded-lg p-1 border border-earth-700/50">
            <button
              onClick={() => setAccommodationType('dorm')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'dorm'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
            >
              Dorm
            </button>
            <button
              onClick={() => setAccommodationType('room')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'room'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
            >
              Private Room
            </button>
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-4">
          {/* Embedded Calendar */}
          <div className="rounded-lg p-3 bg-earth-800/50">
            <div className="flex justify-between items-center mb-2">
              <button 
                onClick={handlePrevMonth}
                type="button"
                className="text-earth-300 hover:text-earth-100 transition-colors p-0.5"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <span className="text-xs font-medium tracking-wide text-earth-100">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button 
                onClick={handleNextMonth}
                type="button"
                className="text-earth-300 hover:text-earth-100 transition-colors p-0.5"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-0.5 mb-1">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-[9px] text-earth-400 font-medium py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
              {allDates.map((date, index) => {
                const isPast = date < today;
                const isWeekdayDate = isWeekday(date);
                const monday = isWeekdayDate ? getMonday(date) : null;
                const isSelected = selectedWeek && monday && isSameWeek(date, selectedWeek.start);
                const isCurrentMonth = date.getMonth() === currentMonth.getMonth();

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isPast && isWeekdayDate) {
                        const clickedDate = date;
                        const monday = getMonday(clickedDate);
                        const friday = getFriday(monday);
                        setSelectedWeek({ start: monday, end: friday });
                      }
                    }}
                    disabled={isPast || !isWeekdayDate}
                    type="button"
                    className={`aspect-square flex items-center justify-center rounded text-[10px] transition-all ${
                      isPast || !isWeekdayDate
                        ? "text-earth-700 cursor-not-allowed"
                        : isSelected
                        ? "bg-gold-500 text-earth-950 font-bold"
                        : isCurrentMonth
                        ? "text-earth-300 hover:text-earth-100 hover:bg-earth-700/50"
                        : "text-earth-500 hover:text-earth-200 hover:bg-earth-700/50"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-end pt-4 border-t border-earth-700">
            <span className="text-2xl font-bold text-earth-50">
              {getPrice()}
            </span>
            <span className="text-xs text-earth-400">Taxes applicable</span>
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 font-bold rounded-lg transition-all transform text-center block ${
              selectedWeek === null
                ? 'bg-earth-700 text-earth-500 cursor-not-allowed'
                : 'bg-gold-500 hover:bg-gold-400 text-earth-950 active:scale-[0.98] shadow-lg shadow-gold-500/20'
            }`}
            onClick={(e) => {
              if (selectedWeek === null) {
                e.preventDefault();
              }
            }}
          >
            Request a conversation
          </a>
        </div>
      </div>
    </div>
  );
}
