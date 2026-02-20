'use client';

import { useState } from 'react';
import ResidencyPractitioner from './ResidencyPractitioner';

interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

interface Practitioner {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  socialMedia?: SocialMedia[];
}

interface ProvisionItem {
  title: string;
  description: string;
}

interface KitItem {
  item: string;
  purpose: string;
}

interface TimeSlot {
  time: string;
  activity: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  schedule: TimeSlot[];
}

interface ResidencyDetailsContentProps {
  practitioners: Practitioner[];
  includedItems?: ProvisionItem[];
  kitItems?: KitItem[];
  itinerary?: ItineraryDay[];
}

export default function ResidencyDetailsContent({ 
  practitioners, 
  includedItems,
  kitItems,
  itinerary 
}: ResidencyDetailsContentProps) {
  const [activeDay, setActiveDay] = useState<number>(1);

  const activeDayData = itinerary && itinerary.find(d => d.day === activeDay) || (itinerary && itinerary[0]);

  return (
    <div className="flex-1 flex flex-col gap-10">
      {/* What's Included Section */}
      {includedItems && includedItems.length > 0 && (
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold text-earth-50 font-display">What's Included</h4>
          <p className="text-sm text-earth-400 font-body">Expert-guided sessions with personalized feedback.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-earth-800 border border-earth-700">
                <span className="material-symbols-outlined text-gold-500 mt-0.5">check_circle</span>
                <div>
                  <p className="text-earth-50 font-medium">{item.title}</p>
                  <p className="text-xs text-earth-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Physical Carry Kit Section */}
      {kitItems && kitItems.length > 0 && (
        <>
          <div className="h-px w-full bg-earth-700"></div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-earth-50 font-display">Physical Carry Kit</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-earth-700">
                    <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm">Item</th>
                    <th className="text-left py-3 px-4 text-gold-500 font-bold text-sm">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {kitItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-earth-700/30 last:border-b-0 hover:bg-earth-800/30 transition-colors"
                    >
                      <td className="py-3 px-4 text-earth-100 font-medium text-sm align-top">
                        {item.item}
                      </td>
                      <td className="py-3 px-4 text-earth-300 text-sm align-top">
                        {item.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Daily Schedule Section with Tabs */}
      {itinerary && itinerary.length > 0 && (
        <>
          <div className="h-px w-full bg-earth-700"></div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-earth-50 font-display">Daily Schedule</h4>
            <p className="text-sm text-earth-400 font-body">
              A structured rhythm guided by expert practitioners. Sessions adapt to group needs.
            </p>
            
            <div className="border border-earth-700 rounded-lg overflow-hidden bg-earth-900/50">
              {/* Tabs - Browser style */}
              <div className="flex flex-wrap gap-0 border-b border-earth-700 bg-earth-800/30">
                {itinerary.map((dayItem) => {
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
              {activeDayData && (
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
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
