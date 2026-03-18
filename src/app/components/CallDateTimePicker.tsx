"use client";

import { useState } from "react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];
const TIME_SLOTS = ["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00"];

interface CallDateTimePickerProps {
  value: { date: Date | null; time: string | null };
  onChange: (val: { date: Date | null; time: string | null }) => void;
}

export default function CallDateTimePicker({ value, onChange }: CallDateTimePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const prevMonth = () =>
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () =>
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  // Build calendar grid
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // pad to full rows
  while (cells.length % 7 !== 0) cells.push(null);

  const selectDate = (day: number) => {
    const d = new Date(year, month, day);
    if (d < today) return;
    onChange({ date: d, time: value.time });
  };

  const selectTime = (t: string) => {
    onChange({ date: value.date, time: t });
  };

  const isSelected = (day: number) => {
    if (!value.date) return false;
    return (
      value.date.getFullYear() === year &&
      value.date.getMonth() === month &&
      value.date.getDate() === day
    );
  };

  const isPast = (day: number) => new Date(year, month, day) < today;

  return (
    <div className="space-y-5">
      {/* Month nav */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-earth-400 hover:text-gold-400 hover:bg-earth-800 transition-colors"
        >
          <span className="material-symbols-outlined text-[1.1rem]">chevron_left</span>
        </button>
        <span className="text-[0.85rem] tracking-[0.1em] uppercase text-earth-200">
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-earth-400 hover:text-gold-400 hover:bg-earth-800 transition-colors"
        >
          <span className="material-symbols-outlined text-[1.1rem]">chevron_right</span>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[0.65rem] tracking-[0.1em] uppercase text-earth-600 py-1">
            {d}
          </div>
        ))}
        {/* Date cells */}
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const past = isPast(day);
          const selected = isSelected(day);
          return (
            <button
              key={day}
              type="button"
              disabled={past}
              onClick={() => selectDate(day)}
              className={`aspect-square w-full flex items-center justify-center rounded-lg text-[0.82rem] transition-all
                ${selected
                  ? "bg-gold-500 text-earth-950 font-medium"
                  : past
                  ? "text-earth-700 cursor-not-allowed"
                  : "text-earth-300 hover:bg-earth-800 hover:text-gold-400"
                }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Selected date display */}
      {value.date && (
        <p className="text-[0.78rem] text-earth-400 text-center">
          {value.date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      )}

      {/* Time slots */}
      <div className="pt-3 border-t border-earth-800 space-y-3">
        <p className="text-[0.72rem] tracking-[0.12em] uppercase text-earth-500">Preferred time</p>
        <div className="grid grid-cols-3 gap-2">
          {TIME_SLOTS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => selectTime(t)}
              className={`py-2 rounded-lg text-[0.78rem] border transition-all
                ${value.time === t
                  ? "border-gold-500 bg-gold-500/15 text-gold-300"
                  : "border-earth-700 text-earth-400 hover:border-gold-500/50 hover:text-gold-400"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
