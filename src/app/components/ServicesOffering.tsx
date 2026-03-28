"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const whatsappNumber = '919890322494'; // WhatsApp number with country code
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

interface CycleSelectionDetails {
  label: string;
  accommodationType: 'dorm' | 'room';
  priceLabel: string;
  quantityLabel?: string;
}

interface ServicesOfferingProps {
  onCycleSelect?: (selection: CycleSelectionDetails) => void;
  title?: string;
  primaryToggleLabel?: string;
  secondaryToggleLabel?: string;
}

export default function ServicesOffering({
  onCycleSelect,
  title = "Plans",
  primaryToggleLabel = "Dorm",
  secondaryToggleLabel = "Private Room",
}: ServicesOfferingProps) {
  const router = useRouter();
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [cycleType, setCycleType] = useState<'weekday' | 'weekend'>('weekday');
  const [selectedDay, setSelectedDay] = useState<'M' | 'T' | 'W' | 'Th' | 'F' | 'S' | 'Su'>('M');
  const [highlightDesignYourDay, setHighlightDesignYourDay] = useState(false);
  const [pendingSelection, setPendingSelection] = useState<CycleSelectionDetails | null>(null);
  const [dayCyclePersons, setDayCyclePersons] = useState(1);
  const [residencyPersons, setResidencyPersons] = useState(1);
  const [solitudePersons, setSolitudePersons] = useState(1);
  const [experimentDays, setExperimentDays] = useState(1);

  const handlePlanClick = (selection: CycleSelectionDetails) => {
    setPendingSelection(selection);
    setHighlightDesignYourDay(true);
  };

  const personOptions = Array.from({ length: 4 }, (_, i) => i + 1);
  const dayOptions = Array.from({ length: 7 }, (_, i) => i + 1);

  const goToDesignYourStay = () => {
    const params = new URLSearchParams();
    if (pendingSelection) {
      params.set("cycle", pendingSelection.label);
      params.set("accommodation", pendingSelection.accommodationType);
      params.set("price", pendingSelection.priceLabel);
      if (pendingSelection.quantityLabel) {
        params.set("quantity", pendingSelection.quantityLabel);
      }
    }
    router.push(`/design-your-stay${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section id="cycles-section" className="relative pt-10 pb-3 md:pt-12 md:pb-4 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-2 md:mb-3 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
           {title}
        </h2>
        <p className="text-earth-300 text-sm md:text-base text-center mb-2 md:mb-3 px-4">
        Cycles do not change the environment. They change your depth of engagement. Access is available through membership or invitation only.
        </p>

        <div className="max-w-5xl mx-auto relative">
              {highlightDesignYourDay ? (
                <div className="absolute inset-0 z-10 bg-black/70 pointer-events-none rounded-xl" />
              ) : null}
              {/* Accommodation toggle ABOVE the three cards */}
              <div className="flex justify-center mb-2 md:mb-3">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-2.5">
          
          {/* Day Cycle Card (first) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              handlePlanClick({
                label: "Day Cycle",
                accommodationType,
                priceLabel: `₹1,000 per person • ${dayCyclePersons} person${dayCyclePersons > 1 ? "s" : ""}`,
                quantityLabel: `${dayCyclePersons} person${dayCyclePersons > 1 ? "s" : ""}`,
              })
            }
          >
            <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
             Silence as a Service
            </h3>
            
            <p className="text-gold-500 text-xs md:text-sm leading-snug mb-2">
              Short recalibration when attention needs immediate correction.
            </p>
            <div className="space-y-1 mb-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full Access Upto 4Hrs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">All meals Included</span>
              </div>
            </div>

            <div className="mt-auto flex flex-row items-end justify-between gap-3">
              <div className="shrink-0">
                <label className="text-earth-400 text-[10px] block">Persons</label>
                <select
                  value={dayCyclePersons}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    setDayCyclePersons(Number(e.target.value));
                  }}
                  className="cycles-plan-select mt-1 w-[4.5rem] border border-earth-600/60 rounded-md px-2 py-1 text-xs focus:outline-none focus:border-gold-500/60"
                >
                  {personOptions.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-0 text-right">
                <div className="text-gold-500 text-lg font-normal">
                  ₹1,000
                </div>
                <p className="text-earth-400 text-xs mt-1">
                  Per Person • Taxes applicable
                </p>
              </div>
            </div>
          </div>

          {/* Weekend Cycle Card (second) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              handlePlanClick({
                label: "Residency as a Service",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹10,000" : "₹15,000"} per person • ${residencyPersons} person${residencyPersons > 1 ? "s" : ""}`,
                quantityLabel: `${residencyPersons} person${residencyPersons > 1 ? "s" : ""}`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
             Residency as a Service
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-2">
              Structured withdrawal without disrupting larger commitments.
            </p>

            <div className="space-y-1 mb-1.5 flex-1">
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

            <div className="mt-auto flex flex-row items-end justify-between gap-3">
              <div className="shrink-0">
                <label className="text-earth-400 text-[10px] block">Persons</label>
                <select
                  value={residencyPersons}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    setResidencyPersons(Number(e.target.value));
                  }}
                  className="cycles-plan-select mt-1 w-[4.5rem] border border-earth-600/60 rounded-md px-2 py-1 text-xs focus:outline-none focus:border-gold-500/60"
                >
                  {personOptions.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-0 text-right">
                <div className="text-gold-500 text-lg font-normal">
                  {accommodationType === "dorm" ? "₹10,000" : "₹15,000"}
                </div>
                <p className="text-earth-400 text-xs mt-1">
                  Per Person • Taxes applicable
                </p>
              </div>
            </div>
          </div>
          
          {/* Weekday Cycle Card (third) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              handlePlanClick({
                label: "Solitude as a Service",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹20,000" : "₹30,000"} per person • ${solitudePersons} person${solitudePersons > 1 ? "s" : ""}`,
                quantityLabel: `${solitudePersons} person${solitudePersons > 1 ? "s" : ""}`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Solitude as a Service
            </h3>
            
            <p className="text-gold-500 text-sm leading-snug mb-2">
              Extended silence for deep, sustained work.
            </p>
            <div className="space-y-1 mb-1.5 flex-1">
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

            <div className="mt-auto flex flex-row items-end justify-between gap-3">
              <div className="shrink-0">
                <label className="text-earth-400 text-[10px] block">Persons</label>
                <select
                  value={solitudePersons}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSolitudePersons(Number(e.target.value));
                  }}
                  className="cycles-plan-select mt-1 w-[4.5rem] border border-earth-600/60 rounded-md px-2 py-1 text-xs focus:outline-none focus:border-gold-500/60"
                >
                  {personOptions.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-0 text-right">
                <div className="text-gold-500 text-lg font-normal">
                  {accommodationType === "dorm" ? "₹20,000" : "₹30,000"}
                </div>
                <p className="text-earth-400 text-xs mt-1">
                  Per Person • Taxes applicable
                </p>
              </div>
            </div>
          </div>

          </div>

          {/* Weekday/Weekend toggle + Full Cycle BELOW the three cards */}
          <div className="mt-2.5 space-y-2.5">
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
              className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 cursor-pointer hover:border-gold-500/70 transition-colors"
              onClick={() =>
                handlePlanClick({
                  label: "Experiment as a Service",
                  accommodationType,
                  priceLabel: `${["F", "S", "Su"].includes(selectedDay) ? "₹1,20,000" : "₹1,00,000"} per night (full estate) • ${experimentDays} day${experimentDays > 1 ? "s" : ""}`,
                  quantityLabel: `${experimentDays} day${experimentDays > 1 ? "s" : ""}`,
                })
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Experiment as a Service
                  </h3>
                  <p className="text-gold-500 text-sm leading-snug mb-2">
                    Complete environmental control for sustained immersion.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
                <div className="flex flex-col items-end h-full min-h-[92px]">
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

              <div className="mt-3 flex flex-row items-end justify-between gap-3">
                <div className="shrink-0">
                  <label className="text-earth-400 text-[10px] block">No. of Days</label>
                  <select
                    value={experimentDays}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      e.stopPropagation();
                      setExperimentDays(Number(e.target.value));
                    }}
                    className="cycles-plan-select mt-1 w-[4.5rem] border border-earth-600/60 rounded-md px-2 py-1 text-xs focus:outline-none focus:border-gold-500/60"
                  >
                    {dayOptions.map((dayCount) => (
                      <option key={dayCount} value={dayCount}>
                        {dayCount}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="min-w-0 text-right">
                  <div className="text-gold-500 text-xl font-normal">
                    ₹{["F", "S", "Su"].includes(selectedDay) ? "1,20,000" : "1,00,000"}
                  </div>
                  <p className="text-earth-400 text-xs mt-1">
                    Per Night • Taxes applicable
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goToDesignYourStay}
              className={`relative z-20 block mx-auto px-4 py-2 rounded-md border text-sm md:text-base transition-all ${
                highlightDesignYourDay
                  ? "text-gold-300 border-gold-400 bg-gold-500/10 animate-pulse shadow-[0_0_18px_rgba(212,175,55,0.65)]"
                  : "text-gold-500 border-earth-600 bg-earth-800/50 hover:text-gold-400 hover:border-gold-500/70"
              }`}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Design Your Stay at The Silent Club
            </button>

            {pendingSelection ? (
              <div className="relative z-20 flex justify-center mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setPendingSelection(null);
                    setHighlightDesignYourDay(false);
                  }}
                  className="inline-flex items-center justify-center rounded-md p-1 text-earth-500 hover:text-gold-400 hover:bg-earth-800/60 transition-colors"
                  aria-label="Clear selection"
                >
                  <span className="material-symbols-outlined text-[1.15rem]">close</span>
                </button>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
}
