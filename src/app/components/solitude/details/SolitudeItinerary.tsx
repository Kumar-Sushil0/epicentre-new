'use client';

import { useState } from 'react';

interface TimeSlot {
  time: string;
  activity: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  schedule: TimeSlot[];
}

interface SolitudeItineraryProps {
  days: ItineraryDay[];
}

export default function SolitudeItinerary({ days }: SolitudeItineraryProps) {
  const [activeDay, setActiveDay] = useState<number>(1);

  const activeDayData = days.find(d => d.day === activeDay) || days[0];

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-xl font-bold text-earth-50 font-display">Daily Schedule</h4>
      <p className="text-sm text-earth-400 font-body">
        A suggested rhythm. You may adapt based on your own pace and needs.
      </p>
      
      <div className="border border-earth-700 rounded-lg overflow-hidden bg-earth-900/50">
        {/* Tabs - Browser style */}
        <div className="flex flex-wrap gap-0 border-b border-earth-700 bg-earth-800/30">
          {days.map((dayItem) => {
            const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
            return (
              <button
                key={dayItem.day}
                onClick={() => setActiveDay(dayItem.day)}
                className={`flex-1 min-w-[100px] px-4 py-3 text-sm font-medium transition-all relative ${
                  activeDay === dayItem.day
                    ? 'bg-earth-900/50 text-gold-500 border-b-2 border-gold-500'
                    : 'bg-earth-800/30 text-earth-400 hover:text-earth-200 hover:bg-earth-800/50'
                }`}
              >
                {dayNames[dayItem.day - 1]}
              </button>
            );
          })}
        </div>

        {/* Content Area - Table */}
        <div className="p-6">
          <div className="mb-4">
            <h5 className="text-earth-50 font-bold text-lg">
              Day {activeDayData.day}: {activeDayData.title.replace(/\s*\([^)]*\)\s*$/, '')}
            </h5>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-earth-700">
                  <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm w-24">Time</th>
                  <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm">Activity</th>
                </tr>
              </thead>
              <tbody>
                {activeDayData.schedule.map((slot, index) => (
                  <tr
                    key={index}
                    className="border-b border-earth-700/30 last:border-b-0 hover:bg-earth-800/30 transition-colors"
                  >
                    <td className="py-3 px-4 text-gold-500/80 font-medium text-sm whitespace-nowrap align-top">
                      {slot.time}
                    </td>
                    <td className="py-3 px-4 text-earth-300 text-sm align-top">
                      {slot.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
