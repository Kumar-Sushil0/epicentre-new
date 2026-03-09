"use client";

import { useState } from "react";

const whatsappNumber = '919890322494'; // WhatsApp number with country code
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

interface CycleSelectionDetails {
  label: string;
  accommodationType: 'dorm' | 'room';
  priceLabel: string;
}

interface ServicesOfferingProps {
  onCycleSelect?: (selection: CycleSelectionDetails) => void;
  title?: string;
  primaryToggleLabel?: string;
  secondaryToggleLabel?: string;
}

export default function MembershipServicesOffering({
  onCycleSelect,
  title = "Memberships",
  primaryToggleLabel = "Dorm",
  secondaryToggleLabel = "Private Room",
}: ServicesOfferingProps) {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [cycleType, setCycleType] = useState<'weekday' | 'weekend'>('weekday');
  const [selectedDay, setSelectedDay] = useState<'M' | 'T' | 'W' | 'Th' | 'F' | 'S' | 'Su'>('M');

  return (
    <section id="cycles-section" className="relative pt-16 pb-6 md:pt-20 md:pb-8 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-4 md:mb-6 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
           {title}
        </h2>
        <p className="text-earth-300 text-base md:text-lg text-center mb-3 md:mb-4 px-4">
        Cycles do not change the environment. They change your depth of engagement. Access is available through membership or invitation only.
        </p>

        <div className="max-w-5xl mx-auto">
              {/* Accommodation toggle ABOVE the three cards */}
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
                    {primaryToggleLabel}
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
                    {secondaryToggleLabel}
                  </button>
                </div>
              </div>

              {/* Three Cards Below */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          
          {/* Day Cycle Card (first) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 md:p-4 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              onCycleSelect?.({
                label: "Day Cycle",
                accommodationType,
                priceLabel: "₹1,000 per person",
              })
            }
          >
            <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day Cycle
            </h3>
            
            <p className="text-gold-500 text-xs md:text-sm leading-snug mb-3">
              Short recalibration when attention needs immediate correction.
            </p>
            <div className="space-y-1 mb-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full Access Upto 4Hrs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">All meals Included</span>
              </div>
            </div>

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">
                ₹1,000
              </div>
              <p className="text-earth-400 text-xs mt-1">
                Per Person • Taxes applicable
              </p>
            </div>
          </div>

          {/* Weekend Cycle Card (second) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              onCycleSelect?.({
                label: "Weekend Cycle",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹10,000" : "₹15,000"} per person`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-3">
              Structured withdrawal without disrupting larger commitments.
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

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">
                {accommodationType === "dorm" ? "₹10,000" : "₹15,000"}
              </div>
              <p className="text-earth-400 text-xs mt-1">
                Per Person • Taxes applicable
              </p>
            </div>
          </div>
          
          {/* Weekday Cycle Card (third) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              onCycleSelect?.({
                label: "Weekday Cycle",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹20,000" : "₹30,000"} per person`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-3">
              Extended silence for deep, sustained work.
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

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">
                {accommodationType === "dorm" ? "₹20,000" : "₹30,000"}
              </div>
              <p className="text-earth-400 text-xs mt-1">
                Per Person • Taxes applicable
              </p>
            </div>
          </div>

          </div>

          {/* Weekday/Weekend toggle + Full Cycle BELOW the three cards */}
          <div className="mt-4 space-y-3">
            {/* Weekday/Weekend Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
                <button
                  onClick={() => setCycleType('weekday')}
                  className={`px-4 md:px-6 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all ${
                    cycleType === 'weekday'
                      ? 'bg-gold-500 text-earth-950'
                      : 'text-earth-300 hover:text-gold-500'
                  }`}
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Weekday
                </button>
                <button
                  onClick={() => setCycleType('weekend')}
                  className={`px-4 md:px-6 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all ${
                    cycleType === 'weekend'
                      ? 'bg-gold-500 text-earth-950'
                      : 'text-earth-300 hover:text-gold-500'
                  }`}
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Weekend
                </button>
              </div>
            </div>

            {/* Day Selection Visual Indicator - mobile-only, under toggle */}
            <div className="flex justify-center md:hidden">
              <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50 mt-2">
                {/* Weekdays */}
                <div className="flex items-center gap-1 pr-2 border-r-2 border-gold-500/30">
                  {[
                    { label: 'M', value: 'M' as const },
                    { label: 'T', value: 'T' as const },
                    { label: 'W', value: 'W' as const },
                    { label: 'T', value: 'Th' as const }
                  ].map((day) => (
                    <div
                      key={day.value}
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                        cycleType === 'weekday'
                          ? 'bg-gold-500 text-earth-950'
                          : 'text-earth-400'
                      }`}
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {day.label}
                    </div>
                  ))}
                </div>

                {/* Weekends */}
                <div className="flex items-center gap-1 pl-2">
                  {[
                    { label: 'F', value: 'F' as const },
                    { label: 'S', value: 'S' as const },
                    { label: 'S', value: 'Su' as const }
                  ].map((day) => (
                    <div
                      key={day.value}
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                        cycleType === 'weekend'
                          ? 'bg-gold-500 text-earth-950'
                          : 'text-earth-400'
                      }`}
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {day.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Cycle card */}
            <div
              className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 cursor-pointer hover:border-gold-500/70 transition-colors"
              onClick={() =>
                onCycleSelect?.({
                  label: "Full Cycle",
                  accommodationType,
                  priceLabel: `${["F", "S", "Su"].includes(selectedDay) ? "₹1,20,000" : "₹1,00,000"} per night (full estate)`,
                })
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
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
                      <span className="text-earth-300 text-sm">
                        Includes 4 Rooms, 10 Dorm Beds, access to Community Hall, tents and flexible sleeping options
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Day selector */}
                <div className="flex flex-col items-end h-full min-h-[120px]">
                  {/* Day Selection Toggle Container - Top */}
                  <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
                    {/* Weekdays */}
                    <div className="flex items-center gap-1 pr-2 border-r-2 border-gold-500/30">
                      {[
                        { label: "M", value: "M" as const },
                        { label: "T", value: "T" as const },
                        { label: "W", value: "W" as const },
                        { label: "T", value: "Th" as const },
                      ].map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                            selectedDay === day.value
                              ? "bg-gold-500 text-earth-950"
                              : "text-earth-400 hover:text-gold-500"
                          }`}
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>

                    {/* Weekends */}
                    <div className="flex items-center gap-1 pl-2">
                      {[
                        { label: "F", value: "F" as const },
                        { label: "S", value: "S" as const },
                        { label: "S", value: "Su" as const },
                      ].map((day) => (
                        <button
                          key={day.value}
                          onClick={() => setSelectedDay(day.value)}
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium transition-all ${
                            selectedDay === day.value
                              ? "bg-gold-500 text-earth-950"
                              : "text-earth-400 hover:text-gold-500"
                          }`}
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Cycle Pricing (replaces CTA) */}
              <div className="mt-3 text-right">
                <div className="text-gold-500 text-xl font-normal">
                  ₹{["F", "S", "Su"].includes(selectedDay) ? "1,20,000" : "1,00,000"}
                </div>
                <p className="text-earth-400 text-xs mt-1">
                  Per Night • Taxes applicable
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

