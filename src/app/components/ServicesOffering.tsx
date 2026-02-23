"use client";

import { useState } from "react";

const whatsappNumber = '919890322494'; // WhatsApp number with country code
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ServicesOffering() {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [selectedDay, setSelectedDay] = useState<'M' | 'T' | 'W' | 'Th' | 'F' | 'S' | 'Su'>('M');

  return (
    <section id="cycles-section" className="relative py-6 md:py-8 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-1 text-center uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
           Silent Cycles
        </h2>
        <p className="text-earth-300 text-base md:text-lg text-center mb-3 md:mb-4 px-4">
          The same environment reveals different things at different depths.<br/> Cycles allow you to return with intention.
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Full Cycle Card - At the Top */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 mb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Full Cycle
                </h3>
                <p className="text-gold-500 text-sm leading-snug mb-3">
                  Complete environmental control for sustained immersion.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gold-500">•</span>
                    <span className="text-earth-300 text-sm">Full access to all facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold-500">•</span>
                    <span className="text-earth-300 text-sm">All meals included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold-500">•</span>
                    <span className="text-earth-300 text-sm">Includes Rooms, Dorms, Community Hall, Tents with flexible sleeping options upto for 40 people.</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                {/* Mobile: Toggle and Price side by side */}
                <div className="flex md:hidden items-center justify-between w-full gap-3">
                  {/* Day Selection Toggle - Smaller for mobile */}
                  <div className="inline-flex items-center gap-1 bg-earth-800/50 rounded-lg p-0.5 border border-earth-700/50">
                    {/* Weekdays */}
                    <div className="flex items-center gap-0.5 pr-1 border-r-2 border-gold-500/30">
                      {[
                        { label: 'M', value: 'M' as const },
                        { label: 'T', value: 'T' as const },
                        { label: 'W', value: 'W' as const },
                        { label: 'T', value: 'Th' as const }
                      ].map((day, index) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-medium transition-all ${
                            selectedDay === day.value
                              ? 'bg-gold-500 text-earth-950'
                              : 'text-earth-400 hover:text-gold-500'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>

                    {/* Weekends */}
                    <div className="flex items-center gap-0.5 pl-1">
                      {[
                        { label: 'F', value: 'F' as const },
                        { label: 'S', value: 'S' as const },
                        { label: 'S', value: 'Su' as const }
                      ].map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-medium transition-all ${
                            selectedDay === day.value
                              ? 'bg-gold-500 text-earth-950'
                              : 'text-earth-400 hover:text-gold-500'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-gold-500 text-lg font-normal">
                      ₹{['F', 'S', 'Su'].includes(selectedDay) ? '1,20,000' : '1,00,000'}
                    </div>
                    <p className="text-earth-400 text-xs mt-1">Per Night • Taxes applicable</p>
                  </div>
                </div>

                {/* Desktop: Original layout */}
                <div className="hidden md:block">
                  {/* Day Selection Toggle with Visual UI */}
                  <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50 mb-2">
                    {/* Weekdays */}
                    <div className="flex items-center gap-1 pr-2 border-r-2 border-gold-500/30">
                      {[
                        { label: 'M', value: 'M' as const },
                        { label: 'T', value: 'T' as const },
                        { label: 'W', value: 'W' as const },
                        { label: 'T', value: 'Th' as const }
                      ].map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                            selectedDay === day.value
                              ? 'bg-gold-500 text-earth-950'
                              : 'text-earth-400 hover:text-gold-500'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>

                    {/* Weekends */}
                    <div className="flex items-center gap-1 pl-2">
                      {[
                        { label: 'F', value: 'F' as const },
                        { label: 'S', value: 'S' as const },
                        { label: 'S', value: 'Su' as const }
                      ].map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                            selectedDay === day.value
                              ? 'bg-gold-500 text-earth-950'
                              : 'text-earth-400 hover:text-gold-500'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-gold-500 text-xl font-normal">
                      ₹{['F', 'S', 'Su'].includes(selectedDay) ? '1,20,000' : '1,00,000'}
                    </div>
                    <p className="text-earth-400 text-xs mt-1">Per Night • Taxes applicable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Switch - Between Full Cycle and Three Cards */}
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
              <button
                onClick={() => setAccommodationType('dorm')}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all ${
                  accommodationType === 'dorm'
                    ? 'bg-gold-500 text-earth-950'
                    : 'text-earth-300 hover:text-gold-500'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Dorm
              </button>
              <button
                onClick={() => setAccommodationType('room')}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all ${
                  accommodationType === 'room'
                    ? 'bg-gold-500 text-earth-950'
                    : 'text-earth-300 hover:text-gold-500'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Private Room
              </button>
            </div>
          </div>

          {/* Three Cards Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          
          {/* Weekday Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-3">
              Uninterrupted silence for extended focus and deep work.
              </p>
            <div className="space-y-1 mb-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">4 nights / 5 days</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">No event overlap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">All meals Included</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-gold-500 text-lg font-normal">
                {accommodationType === 'dorm' ? '₹20,000' : '₹30,000'}
              </div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
            </div>
          </div>

          {/* Weekend Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-3">
              Structured withdrawal to reset direction without disruption.
            </p>

            <div className="space-y-1 mb-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">2 nights / 3 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">All meals Included</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-gold-500 text-lg font-normal">
                {accommodationType === 'dorm' ? '₹10,000' : '₹15,000'}
              </div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
            </div>
          </div>
          
          {/* Day Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 md:p-4 flex flex-col">
            <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day Cycle
            </h3>
            
            <p className="text-gold-500 text-xs md:text-sm leading-snug mb-3">
              Short calibration when attention needs immediate correction.
</p>
            <div className="space-y-1 mb-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Access Upto 4Hrs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">All meals Included</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-gold-500 text-lg font-normal">
                ₹1,000
              </div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
            </div>
          </div>

          </div>

        </div>

        {/* Request Conversation Button */}
        <div className="text-center mt-10 mb-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base md:text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-4 md:px-6 py-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Request Conversation
          </a>
        </div>
        
         {/* Bottom Notice */}
        <div className="text-center ">
          <p className="text-earth-300 text-xs md:text-sm leading-snug max-w-full mx-auto px-4">
            Access is based on alignment with the nature of the estate.
          </p>
        </div>

      </div>
    </section>
  );
}
