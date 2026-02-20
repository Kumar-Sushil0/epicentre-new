"use client";

import { useState } from "react";

const whatsappNumber = '919890322494'; // WhatsApp number with country code
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ServicesOffering() {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [fullCycleDayType, setFullCycleDayType] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <section id="cycles-section" className="relative py-6 md:py-8 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-1 text-center uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
           Silent Cycles
        </h2>
        <p className="text-earth-300 text-base md:text-lg text-center mb-3 md:mb-4 px-4">
          Choose the depth of your withdrawal.
        </p>

        {/* Toggle Switch */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          
          {/* Day Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 md:p-4 flex flex-col">
            <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day Cycle <span className="text-xs md:text-sm">/ Per Person</span>
            </h3>
            
            <p className="text-earth-300 text-xs md:text-sm leading-snug mb-2 h-auto md:h-8">
              Designed for short-duration recalibration and focused decision clarity.
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
              <p className="text-earth-400 text-xs mt-1">Taxes applicable</p>
            </div>
          </div>

          {/* Weekend Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle <span className="text-sm">/ Per Person</span>
            </h3>
            
            <p className="text-earth-300 text-sm leading-snug mb-2 h-8">
              Designed for structured withdrawal with optional experimental interaction.
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
              <p className="text-earth-400 text-xs mt-1">Taxes applicable</p>
            </div>
          </div>

          {/* Weekday Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle <span className="text-sm">/ Per Person</span>
            </h3>
            
            <p className="text-earth-300 text-sm leading-snug mb-2 h-8">
              Designed for uninterrupted deep work.
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
              <p className="text-earth-400 text-xs mt-1">Taxes applicable</p>
            </div>
          </div>

        </div>

        {/* Full Cycle Card - Spans Full Width */}
        <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 mb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Full Cycle  <span className="text-sm">/ Per Night</span>
              </h3>
              <p className="text-earth-300 text-sm leading-snug mb-2">
                Extended immersion for deep work, residencies, or experimental cycles.
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
                  <span className="text-earth-300 text-sm">Flexible Sleeping Option Including Tent and Sleeping Bag Upto 50 People</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              {/* Mobile: Toggle and Price side by side */}
              <div className="flex md:hidden items-center justify-between w-full gap-3">
                {/* Weekday/Weekend Toggle - Smaller for mobile */}
                <div className="inline-flex items-center gap-0.5 bg-earth-800/50 rounded-lg p-0.5 border border-earth-700/50">
                  {/* Weekdays Option */}
                  <button
                    onClick={() => setFullCycleDayType('weekday')}
                    className={`flex items-center px-1 py-1 rounded-md transition-all ${
                      fullCycleDayType === 'weekday' 
                        ? 'bg-gold-500' 
                        : 'hover:bg-earth-700/30'
                    }`}
                  >
                    {['M', 'T', 'W', 'T', 'F'].map((day, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium transition-all ${
                            fullCycleDayType === 'weekday'
                              ? 'bg-earth-950 text-gold-500'
                              : 'text-earth-400'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day}
                        </div>
                        {index < 4 && (
                          <div 
                            className={`w-1 h-0.5 ${
                              fullCycleDayType === 'weekday' ? 'bg-earth-950' : 'bg-earth-700/50'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </button>

                  {/* Weekends Option */}
                  <button
                    onClick={() => setFullCycleDayType('weekend')}
                    className={`flex items-center px-1 py-1 rounded-md transition-all ${
                      fullCycleDayType === 'weekend' 
                        ? 'bg-gold-500' 
                        : 'hover:bg-earth-700/30'
                    }`}
                  >
                    {['F', 'S', 'S'].map((day, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium transition-all ${
                            fullCycleDayType === 'weekend'
                              ? 'bg-earth-950 text-gold-500'
                              : 'text-earth-400'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day}
                        </div>
                        {index < 2 && (
                          <div 
                            className={`w-1 h-0.5 ${
                              fullCycleDayType === 'weekend' ? 'bg-earth-950' : 'bg-earth-700/50'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-gold-500 text-lg font-normal">
                    ₹{fullCycleDayType === 'weekday' 
                      ? (accommodationType === 'dorm' ? '1,00,000' : '1,50,000')
                      : (accommodationType === 'dorm' ? '1,20,000' : '1,80,000')
                    }
                  </div>
                  <p className="text-earth-400 text-xs mt-1">Taxes applicable</p>
                </div>
              </div>

              {/* Desktop: Original layout */}
              <div className="hidden md:block">
                {/* Weekday/Weekend Toggle with Visual UI */}
                <div className="inline-flex items-center gap-1 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50 mb-2">
                  {/* Weekdays Option */}
                  <button
                    onClick={() => setFullCycleDayType('weekday')}
                    className={`flex items-center px-2 py-1.5 rounded-md transition-all ${
                      fullCycleDayType === 'weekday' 
                        ? 'bg-gold-500' 
                        : 'hover:bg-earth-700/30'
                    }`}
                  >
                    {['M', 'T', 'W', 'T', 'F'].map((day, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                            fullCycleDayType === 'weekday'
                              ? 'bg-earth-950 text-gold-500'
                              : 'text-earth-400'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day}
                        </div>
                        {index < 4 && (
                          <div 
                            className={`w-1.5 h-0.5 ${
                              fullCycleDayType === 'weekday' ? 'bg-earth-950' : 'bg-earth-700/50'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </button>

                  {/* Weekends Option */}
                  <button
                    onClick={() => setFullCycleDayType('weekend')}
                    className={`flex items-center px-2 py-1.5 rounded-md transition-all ${
                      fullCycleDayType === 'weekend' 
                        ? 'bg-gold-500' 
                        : 'hover:bg-earth-700/30'
                    }`}
                  >
                    {['F', 'S', 'S'].map((day, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                            fullCycleDayType === 'weekend'
                              ? 'bg-earth-950 text-gold-500'
                              : 'text-earth-400'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {day}
                        </div>
                        {index < 2 && (
                          <div 
                            className={`w-1.5 h-0.5 ${
                              fullCycleDayType === 'weekend' ? 'bg-earth-950' : 'bg-earth-700/50'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-gold-500 text-xl font-normal">
                    ₹{fullCycleDayType === 'weekday' 
                      ? (accommodationType === 'dorm' ? '1,00,000' : '1,50,000')
                      : (accommodationType === 'dorm' ? '1,20,000' : '1,80,000')
                    }
                  </div>
                  <p className="text-earth-400 text-xs mt-1">Taxes applicable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="text-center mb-3">
          <p className="text-earth-300 text-xs md:text-sm leading-snug max-w-full mx-auto px-4">
            This space is not suited for high-stimulus gatherings.
            Access depends on alignment with the nature of the estate.
            Scale, urgency, or money do not override intent.
          </p>
        </div>

        {/* Request Conversation Button */}
        <div className="text-center">
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

      </div>
    </section>
  );
}
