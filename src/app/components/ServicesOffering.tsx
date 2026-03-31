"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

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
  const [pendingSelection, setPendingSelection] = useState<CycleSelectionDetails | null>(null);
  const [dayCyclePersons, setDayCyclePersons] = useState(1);
  const [residencyPersons, setResidencyPersons] = useState(1);
  const [solitudePersons, setSolitudePersons] = useState(1);
  const [experimentDays, setExperimentDays] = useState(1);

  // Date picker state
  const [popupQuantity, setPopupQuantity] = useState(1);
  const [checkIn, setCheckIn] = useState<Date | null>(null);  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [viewMonth, setViewMonth] = useState(() => {
    const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const today = new Date(); today.setHours(0,0,0,0);
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const formatDateKey = (d: Date) => {
    const yy = d.getFullYear(), mm = String(d.getMonth()+1).padStart(2,"0"), dd = String(d.getDate()).padStart(2,"0");
    return `${yy}-${mm}-${dd}`;
  };
  const isSameDay = (a: Date|null, b: Date|null) => !!a && !!b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  const isDateInRange = (d: Date) => !!(checkIn && checkOut && d > checkIn && d < checkOut);
  const isPreviewRange = (d: Date) => {
    if (!checkIn || checkOut || !hoverDate) return false;
    const min = hoverDate > checkIn ? checkIn : hoverDate;
    const max = hoverDate > checkIn ? hoverDate : checkIn;
    return d > min && d < max;
  };

  const normalizedCycle = (pendingSelection?.label ?? "").toLowerCase();
  const isDayCyclePlan = normalizedCycle === "day cycle";
  const isResidencyPlan = normalizedCycle === "residency as a service";
  const isSolitudePlan = normalizedCycle === "solitude as a service";
  const isExperimentPlan = normalizedCycle === "experiment as a service";
  const maxSelectableDays = isDayCyclePlan ? 1 : 7;

  const isDateAllowedByPlan = (d: Date) => {
    const w = d.getDay();
    if (isResidencyPlan) return w === 5 || w === 6 || w === 0;
    if (isSolitudePlan) return w >= 1 && w <= 5;
    return true;
  };

  const buildRangeKeys = (start: Date, end: Date) => {
    const min = start <= end ? start : end, max = start <= end ? end : start;
    const keys: string[] = []; const cursor = new Date(min);
    while (cursor <= max) { keys.push(formatDateKey(cursor)); cursor.setDate(cursor.getDate()+1); }
    return keys.slice(0, maxSelectableDays);
  };

  const handleDateClick = (day: number) => {
    const d = new Date(year, month, day); d.setHours(0,0,0,0);
    if (d < today || !isDateAllowedByPlan(d)) return;

    // Residency: always Fri+Sat+Sun (3 days). Find the Friday of the clicked weekend.
    if (isResidencyPlan) {
      const w = d.getDay(); // 5=Fri, 6=Sat, 0=Sun
      const fridayOffset = w === 5 ? 0 : w === 6 ? -1 : -2;
      const fri = new Date(d); fri.setDate(fri.getDate() + fridayOffset);
      const sat = new Date(fri); sat.setDate(fri.getDate() + 1);
      const sun = new Date(fri); sun.setDate(fri.getDate() + 2);
      const keys = [fri, sat, sun].map(formatDateKey);
      setCheckIn(fri); setCheckOut(sun); setSelectedDates(keys);
      return;
    }

    // Solitude: always Mon–Fri (5 days). Find the Monday of the clicked week.
    if (isSolitudePlan) {
      const w = d.getDay(); // 1=Mon ... 5=Fri
      const monOffset = -(w - 1);
      const mon = new Date(d); mon.setDate(mon.getDate() + monOffset);
      const keys: string[] = [];
      for (let i = 0; i < 5; i++) {
        const day = new Date(mon); day.setDate(mon.getDate() + i);
        keys.push(formatDateKey(day));
      }
      const fri = new Date(mon); fri.setDate(mon.getDate() + 4);
      setCheckIn(mon); setCheckOut(fri); setSelectedDates(keys);
      return;
    }

    // Day Cycle: single day
    if (isDayCyclePlan) {
      setCheckIn(d); setCheckOut(null); setHoverDate(null); setSelectedDates([formatDateKey(d)]);
      return;
    }

    // Experiment / free range
    if (!checkIn || (checkIn && checkOut) || (checkIn && d < checkIn)) {
      setCheckIn(d); setCheckOut(null); setHoverDate(null); setSelectedDates([formatDateKey(d)]); return;
    }
    if (checkIn && !checkOut) {
      if (d <= checkIn) { setCheckIn(d); setCheckOut(null); setHoverDate(null); setSelectedDates([formatDateKey(d)]); }
      else {
        const keys = buildRangeKeys(checkIn, d);
        if (keys.some(k => !isDateAllowedByPlan(new Date(`${k}T00:00:00`)))) { setCheckIn(d); setCheckOut(null); setHoverDate(null); setSelectedDates([formatDateKey(d)]); return; }
        setCheckOut(new Date(`${keys[keys.length-1]}T00:00:00`)); setSelectedDates(keys);
      }
    }
  };

  const prettyDate = (date: string) => new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });

  const handlePlanClick = (selection: CycleSelectionDetails) => {
    setPendingSelection(selection);
    setPopupQuantity(1);
    setCheckIn(null); setCheckOut(null); setSelectedDates([]);
  };

  const personOptions = Array.from({ length: 4 }, (_, i) => i + 1);
  const dayOptions = Array.from({ length: 7 }, (_, i) => i + 1);

  const goToDesignYourStay = () => {
    const params = new URLSearchParams();
    if (pendingSelection) {
      params.set("cycle", pendingSelection.label);
      params.set("accommodation", pendingSelection.accommodationType);
      params.set("price", pendingSelection.priceLabel);
      params.set("quantity", `${popupQuantity} ${popupQuantity === 1 ? "person" : "persons"}`);
    }
    if (selectedDates.length) params.set("dates", selectedDates.join(","));
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
                priceLabel: `₹1,000 per person`,
              })
            }
          >
            <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
             Silence as a Service
            </h3>
            <p className="text-earth-300 text-xs mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Entry — Day Cycle</p>
            
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

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">₹1,000</div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
            </div>
          </div>

          {/* Weekend Cycle Card (second) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              handlePlanClick({
                label: "Residency as a Service",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹10,000" : "₹15,000"} per person`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
             Residency as a Service
            </h3>
            <p className="text-earth-300 text-xs mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Immersion — Weekend Cycle</p>
            
            <p className="text-gold-500 text-sm leading-snug mb-2">
              Structured Silence without disrupting larger commitments.
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

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">{accommodationType === "dorm" ? "₹10,000" : "₹15,000"}</div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
            </div>
          </div>
          
          {/* Weekday Cycle Card (third) */}
          <div
            className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 flex flex-col cursor-pointer hover:border-gold-500/70 transition-colors"
            onClick={() =>
              handlePlanClick({
                label: "Solitude as a Service",
                accommodationType,
                priceLabel: `${accommodationType === "dorm" ? "₹20,000" : "₹30,000"} per person`,
              })
            }
          >
            <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Solitude as a Service
            </h3>
            <p className="text-earth-300 text-xs mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Withdrawal — Weekday Cycle</p>
            
            <p className="text-gold-500 text-sm leading-snug mb-2">
              Complete silence for deep, sustained work.
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

            <div className="mt-auto text-right">
              <div className="text-gold-500 text-lg font-normal">{accommodationType === "dorm" ? "₹20,000" : "₹30,000"}</div>
              <p className="text-earth-400 text-xs mt-1">Per Person • Taxes applicable</p>
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
                  priceLabel: `${["F", "S", "Su"].includes(selectedDay) ? "₹1,20,000" : "₹1,00,000"} per night (full estate)`,
                })
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Experiment as a Service
                  </h3>
                  <p className="text-earth-300 text-xs mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Control — Collective Cycle</p>
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
                          onClick={(e) => { e.stopPropagation(); setSelectedDay(day.value); }}
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
                          onClick={(e) => { e.stopPropagation(); setSelectedDay(day.value); }}
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

              <div className="mt-3 text-right">
                <div className="text-gold-500 text-xl font-normal whitespace-nowrap">
                  ₹{["F", "S", "Su"].includes(selectedDay) ? "1,20,000" : "1,00,000"}
                </div>
                <p className="text-earth-400 text-xs mt-1">Per Night • Taxes applicable</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modal — appears when a card is selected */}
      {pendingSelection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setPendingSelection(null)}
        >
          <div
            className="relative bg-earth-900 border border-gold-500/40 rounded-2xl p-8 mx-4 max-w-3xl w-full shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPendingSelection(null)}
              className="absolute top-3 right-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-earth-500 hover:text-gold-400 hover:bg-earth-800 transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>

            {/* Plan + pricing + calendar in 2-col layout */}
            <div className="mb-5">
              <p className="text-gold-500 text-xl font-normal text-center mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>{pendingSelection.label}</p>
              <div className="grid grid-cols-2 gap-5 items-stretch">
                {/* Left: pricing breakdown */}
                {(() => {
                  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

                  // Experiment: price per day based on whether selected dates are weekend
                  if (isExperimentPlan) {
                    const weekendDates = selectedDates.filter(k => { const w = new Date(`${k}T00:00:00`).getDay(); return w === 5 || w === 6 || w === 0; });
                    const weekdayDates = selectedDates.filter(k => { const w = new Date(`${k}T00:00:00`).getDay(); return w >= 1 && w <= 4; });
                    const weekendNights = weekendDates.length;
                    const weekdayNights = weekdayDates.length;
                    const totalNights = selectedDates.length || 1;
                    const baseNum = (weekendNights * 120000) + (weekdayNights * 100000) || 100000;
                    const gst = Math.round(baseNum * 0.18);
                    const total = baseNum + gst;
                    return (
                      <div className="border border-earth-700/50 rounded-lg overflow-hidden text-sm flex flex-col">
                        <div className="flex justify-between px-4 py-3 bg-earth-800/30">
                          <span className="text-earth-400">Full Estate</span>
                          <span className="text-earth-200">Private Booking</span>
                        </div>
                        {weekdayNights > 0 && (
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                            <span className="text-earth-400">Weekday × {weekdayNights} night{weekdayNights > 1 ? "s" : ""}</span>
                            <span className="text-earth-300">{fmt(100000 * weekdayNights)}</span>
                          </div>
                        )}
                        {weekendNights > 0 && (
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                            <span className="text-earth-400">Weekend × {weekendNights} night{weekendNights > 1 ? "s" : ""} <span className="text-earth-600 text-xs">(₹1,20,000/night)</span></span>
                            <span className="text-earth-300">{fmt(120000 * weekendNights)}</span>
                          </div>
                        )}
                        {selectedDates.length === 0 && (
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                            <span className="text-earth-500 text-xs italic">Select dates to see breakdown</span>
                          </div>
                        )}
                        <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                          <span className="text-earth-400">Base total</span>
                          <span className="text-gold-500 font-medium">{fmt(baseNum)}</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                          <span className="text-earth-400">GST (18%)</span>
                          <span className="text-earth-300">{fmt(gst)}</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-t border-earth-700/50 bg-earth-800/30 mt-auto">
                          <span className="text-earth-200 font-medium">Total Amount</span>
                          <span className="text-gold-400 font-semibold">{fmt(total)}</span>
                        </div>
                        <div className="px-4 py-2 border-t border-earth-700/50">
                          <p className="text-earth-500 text-xs">Incl. all taxes • Subject to confirmation</p>
                        </div>
                      </div>
                    );
                  }

                  // All other plans: per-person pricing
                  const rawMatch = pendingSelection.priceLabel.match(/₹([\d,]+)/);
                  const baseNum = rawMatch ? parseInt(rawMatch[1].replace(/,/g, ""), 10) : null;
                  const gst = baseNum ? Math.round(baseNum * 0.18) : null;
                  const total = baseNum && gst ? baseNum + gst : null;
                  return (
                    <div className="border border-earth-700/50 rounded-lg overflow-hidden text-sm flex flex-col">
                      <div className="flex justify-between px-4 py-3 bg-earth-800/30">
                        <span className="text-earth-400">Accommodation</span>
                        <span className="text-earth-200">{pendingSelection.accommodationType === "dorm" ? "Dorm" : "Private Room"}</span>
                      </div>
                      <div className="flex justify-between items-center px-4 py-3 border-t border-earth-700/50">
                        <span className="text-earth-400">Guests</span>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => setPopupQuantity(q => Math.max(1, q - 1))} className="w-6 h-6 rounded bg-earth-700 text-earth-200 hover:bg-earth-600 flex items-center justify-center text-sm">−</button>
                          <span className="text-earth-200 w-4 text-center">{popupQuantity}</span>
                          <button type="button" onClick={() => setPopupQuantity(q => Math.min(10, q + 1))} className="w-6 h-6 rounded bg-earth-700 text-earth-200 hover:bg-earth-600 flex items-center justify-center text-sm">+</button>
                        </div>
                      </div>
                      {baseNum ? (
                        <>
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                            <span className="text-earth-400">Base rate</span>
                            <span className="text-gold-500 font-medium">{fmt(baseNum)}</span>
                          </div>
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                            <span className="text-earth-400">GST (18%)</span>
                            <span className="text-earth-300">{fmt(gst!)}</span>
                          </div>
                          <div className="flex justify-between px-4 py-3 border-t border-earth-700/50 bg-earth-800/30 mt-auto">
                            <span className="text-earth-200 font-medium">Total Amount</span>
                            <span className="text-gold-400 font-semibold">{fmt(total!)}</span>
                          </div>
                          <div className="px-4 py-2 border-t border-earth-700/50">
                            <p className="text-earth-500 text-xs">Incl. all taxes • Subject to confirmation</p>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-between px-4 py-3 border-t border-earth-700/50">
                          <span className="text-earth-400">Pricing</span>
                          <span className="text-gold-500">{pendingSelection.priceLabel}</span>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Right: calendar — full height to match table */}
                <div className="border border-earth-700/50 rounded-lg p-4 flex flex-col">
                  <div className="text-center mb-3">
                    <p className="text-earth-200 text-xs uppercase tracking-widest">
                      {isDayCyclePlan ? "Book 1 Day" : isResidencyPlan ? "Book 2 Nights / 3 Days" : isSolitudePlan ? "Book 4 Nights / 5 Days" : "Book Your Dates"}
                    </p>
                    <p className="text-earth-600 text-xs mt-0.5">
                      {isDayCyclePlan ? "Any day" : isResidencyPlan ? "Weekend only (Fri – Sun)" : isSolitudePlan ? "Weekdays only (Mon – Fri)" : "Any dates • Max 7 days"}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <button type="button" onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth()-1, 1))} className="w-7 h-7 rounded text-earth-400 hover:text-gold-400 hover:bg-earth-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-base">chevron_left</span>
                    </button>
                    <p className="text-xs uppercase tracking-[0.08em] text-earth-200">{MONTHS[month]} {year}</p>
                    <button type="button" onClick={() => setViewMonth(m => new Date(m.getFullYear(), m.getMonth()+1, 1))} className="w-7 h-7 rounded text-earth-400 hover:text-gold-400 hover:bg-earth-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-base">chevron_right</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 flex-1">
                    {DAYS.map(d => <div key={d} className="text-center text-xs text-earth-500 py-1">{d}</div>)}
                    {cells.map((day, i) => {
                      if (!day) return <div key={`e-${i}`} />;
                      const d = new Date(year, month, day); d.setHours(0,0,0,0);
                      const isPast = d < today;
                      const isDisallowed = !isDateAllowedByPlan(d);
                      const isStart = isSameDay(d, checkIn);
                      const isEnd = isSameDay(d, checkOut);
                      const inRange = isDateInRange(d);
                      const preview = isPreviewRange(d);
                      return (
                        <button key={`${month}-${day}`} type="button" disabled={isPast || isDisallowed}
                          onMouseEnter={() => setHoverDate(d)}
                          onClick={() => handleDateClick(day)}
                          className={`aspect-square rounded text-xs ${
                            isStart || isEnd ? "bg-gold-500 text-earth-950 font-medium"
                            : inRange || preview ? "bg-gold-500/20 text-gold-300"
                            : isPast || isDisallowed ? "text-earth-700 cursor-not-allowed"
                            : "text-earth-300 hover:bg-earth-800 hover:text-gold-400"
                          }`}
                        >{day}</button>
                      );
                    })}
                  </div>
                  <div className="mt-3">
                    {selectedDates.length === 0 ? (
                      <p className="text-earth-500 text-xs text-center">
                        {isDayCyclePlan ? "Single day only" : isResidencyPlan ? "Fri / Sat / Sun only" : isSolitudePlan ? "Mon – Fri only" : "Max 7 days"}
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {selectedDates.map(date => (
                          <span key={date} className="text-xs px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300">{prettyDate(date)}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goToDesignYourStay}
              className="w-full px-4 py-3 rounded-lg bg-gold-500 text-earth-950 text-sm font-medium hover:bg-gold-400 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Design Your Stay at The Silent Club →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
