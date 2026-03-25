"use client";

import { useEffect, useState } from "react";
import { api, endpoints } from "@/utils/api";
import { useAuth } from "../context/AuthContext";

interface Activity {
  id: string;
  name: string;
  icon: string;
}

interface TimeSlot {
  time: string;
  label?: string;
  isFixed?: boolean;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

const activityGroups: { title: string; activities: Activity[] }[] = [
  {
    title: "Deep Work",
    activities: [
      { id: "writing", name: "Writing", icon: "edit_note" },
      { id: "reading", name: "Reading", icon: "menu_book" },
      { id: "journalling", name: "Journalling", icon: "book" },
      { id: "thinking-sessions", name: "Thinking Sessions", icon: "psychology" },
      { id: "idea-sketching", name: "Idea Sketching", icon: "draw" },
      { id: "long-walks", name: "Long Walks", icon: "directions_walk" },
    ],
  },
  {
    title: "Quiet Exploration",
    activities: [
      { id: "bird-watching", name: "Bird Watching", icon: "flutter" },
      { id: "forest-safari", name: "Forest Safari", icon: "forest" },
      { id: "sunrise-sunsets", name: "Sunrise & Sunsets", icon: "wb_twilight" },
      { id: "boat-rides", name: "Boat Rides", icon: "sailing" },
      { id: "kayaks", name: "Kayaks", icon: "kayaking" },
      { id: "star-gazing", name: "Star Gazing", icon: "nightlight" },
    ],
  },
  {
    title: "Body Reset",
    activities: [
      { id: "gym", name: "Gym", icon: "fitness_center" },
      { id: "running", name: "Running", icon: "directions_run" },
      { id: "cycling", name: "Cycling", icon: "pedal_bike" },
      { id: "swimming", name: "Swimming", icon: "pool" },
      { id: "recovery", name: "Recovery", icon: "self_improvement" },
      { id: "stretching", name: "Stretching", icon: "accessibility_new" },
    ],
  },
  {
    title: "Creative Expression",
    activities: [
      { id: "drawing", name: "Drawing", icon: "brush" },
      { id: "sketching", name: "Sketching", icon: "ink_pen" },
      { id: "plant-observation", name: "Plant Observation", icon: "local_florist" },
      { id: "analog-photography", name: "Analog Photography", icon: "photo_camera" },
      { id: "zen-garden", name: "Zen Garden", icon: "spa" },
      { id: "farm-work", name: "Farm Work", icon: "agriculture" },
    ],
  },
  {
    title: "Gentle Social",
    activities: [
      { id: "board-games", name: "Board Games", icon: "casino" },
      { id: "cooking", name: "Cooking", icon: "cooking" },
      { id: "lawn-games", name: "Lawn Games", icon: "sports_cricket" },
      { id: "intentional-conversations", name: "Intentional Conversations", icon: "forum" },
      { id: "shared-dinners", name: "Shared Dinners", icon: "dinner_dining" },
      { id: "writing-letters", name: "Writing Letters", icon: "mail" },
    ],
  },
  {
    title: "Subtraction Rituals",
    activities: [
      { id: "silence-blocks", name: "Silence Blocks - Auditory reset", icon: "hearing_disabled" },
      { id: "dark-room", name: "Dark Room - Visual reset", icon: "visibility_off" },
      { id: "digital-fasting", name: "Digital Fasting - Cognitive reset", icon: "phonelink_off" },
      { id: "anonymous-presence", name: "Anonymous Presence - Identity reset", icon: "person_off" },
      { id: "float-tank", name: "Float Tank - Total sensory reset", icon: "water" },
      { id: "horizon-gazing", name: "Horizon Gazing - Perspective reset", icon: "landscape" },
    ],
  },
];

const timeSlots: TimeSlot[] = [
  { time: "06:00" },
  { time: "07:30" },
  { time: "09:00", label: "Breakfast", isFixed: true },
  { time: "09:30" },
  { time: "11:00" },
  { time: "12:30", label: "Lunch", isFixed: true },
  { time: "13:00" },
  { time: "14:30" },
  { time: "16:00", label: "High Tea", isFixed: true },
  { time: "16:30" },
  { time: "18:00" },
  { time: "19:30", label: "Dinner", isFixed: true },
  { time: "20:00" },
];
const CHECK_IN_TIME = "13:00";
const CHECK_OUT_TIME = "11:00";

export default function DesignYourDay() {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});
  const [draggedActivity, setDraggedActivity] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const { isAuthenticated } = useAuth();

  // Load any saved schedule for the logged-in user on mount
  useEffect(() => {
    const loadSchedule = async () => {
      if (!isAuthenticated) return;

      const token =
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : null;
      if (!token) return;

      try {
        const result = await api.get<{ schedule: { [key: string]: string } }>(
          endpoints.dayCycle.get,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (result && result.schedule && typeof result.schedule === "object") {
          setSchedule(result.schedule);
        }
      } catch (error) {
        console.error("Failed to load day cycle schedule", error);
      }
    };

    loadSchedule();
  }, [isAuthenticated]);

  const persistSchedule = async (nextSchedule: { [key: string]: string }) => {
    if (!isAuthenticated) return;

    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null;
    if (!token) return;

    try {
      await api.post(
        endpoints.dayCycle.save,
        { schedule: nextSchedule },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Failed to save day cycle schedule", error);
    }
  };

  const handleDragStart = (activityId: string) => {
    setDraggedActivity(activityId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (date: string, time: string, isFixed?: boolean, isLocked?: boolean) => {
    if (isFixed || isLocked || !draggedActivity) return;

    const key = `${date}-${time}`;
    setSchedule((prev) => {
      const next = {
        ...prev,
        [key]: draggedActivity,
      };
      void persistSchedule(next);
      return next;
    });
    setDraggedActivity(null);
  };

  const handleRemove = (date: string, time: string) => {
    const key = `${date}-${time}`;
    setSchedule((prev) => {
      const next = { ...prev };
      delete next[key];
      void persistSchedule(next);
      return next;
    });
  };

  const getActivityById = (id: string) =>
    activityGroups.flatMap((group) => group.activities).find((a) => a.id === id);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const formatDateKey = (d: Date) => {
    const yy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yy}-${mm}-${dd}`;
  };
  const isSameDay = (a: Date | null, b: Date | null) =>
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
  const isDateInRange = (d: Date) => {
    if (!checkIn || !checkOut) return false;
    return d > checkIn && d < checkOut;
  };
  const isPreviewRange = (d: Date) => {
    if (!checkIn || checkOut || !hoverDate) return false;
    const min = hoverDate > checkIn ? checkIn : hoverDate;
    const max = hoverDate > checkIn ? hoverDate : checkIn;
    return d > min && d < max;
  };
  const buildRangeKeys = (start: Date, end: Date) => {
    const min = start <= end ? start : end;
    const max = start <= end ? end : start;
    const keys: string[] = [];
    const cursor = new Date(min);
    while (cursor <= max) {
      keys.push(formatDateKey(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    return keys.slice(0, 7);
  };

  const handleDateClick = (day: number) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    if (d < today) return;

    if (!checkIn || (checkIn && checkOut) || (checkIn && d < checkIn)) {
      setCheckIn(d);
      setCheckOut(null);
      setHoverDate(null);
      setSelectedDates([formatDateKey(d)]);
      return;
    }

    if (checkIn && !checkOut) {
      if (d <= checkIn) {
        setCheckIn(d);
        setCheckOut(null);
        setHoverDate(null);
        setSelectedDates([formatDateKey(d)]);
      } else {
        const keys = buildRangeKeys(checkIn, d);
        const cappedEnd = new Date(`${keys[keys.length - 1]}T00:00:00`);
        setCheckOut(cappedEnd);
        setSelectedDates(keys);
      }
    }
  };

  const prettyDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="py-4 px-3 md:px-6 bg-earth-950 border-t border-earth-900">
      <div className="w-full">
        {/* Date Selection */}
        <div className="mb-3">
          <button
            type="button"
            onClick={() => setIsDatePickerOpen(true)}
            className="w-full md:w-auto bg-earth-800/50 border border-earth-700/50 rounded-md px-3 py-2 text-earth-200 text-sm hover:border-gold-500/60 transition-colors"
          >
            {selectedDates.length
              ? `${selectedDates.length} date${selectedDates.length > 1 ? "s" : ""} selected`
              : "Select Dates (up to 7)"}
          </button>
          {selectedDates.length ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {selectedDates.map((date) => (
                <span key={date} className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300">
                  {prettyDate(date)}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Activities Grid */}
        <div className="mb-3">
          <h3 className="text-sm md:text-base font-normal text-gold-500 mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
            Available Activities
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-1.5">
            {activityGroups.map((group) => (
              <div key={group.title} className="bg-earth-900/40 border border-earth-700/50 rounded-md overflow-hidden">
                <div className="px-2 py-1 border-b border-earth-700/50 bg-earth-900/70">
                  <p className="text-[10px] text-earth-100 font-medium leading-tight">{group.title}</p>
                </div>
                <div>
                  {group.activities.map((activity) => (
                    <div
                      key={activity.id}
                      draggable
                      onDragStart={() => handleDragStart(activity.id)}
                      className="px-1.5 py-1 cursor-move border-b border-earth-800/70 last:border-b-0 hover:bg-earth-800/40 transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-gold-500 text-xs">
                        {activity.icon}
                      </span>
                      <span className="text-earth-300 text-[10px] leading-tight">{activity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className={`overflow-x-auto ${!selectedDates.length ? "opacity-40 pointer-events-none" : ""}`}>
          <div className="min-w-[700px]">
            {/* Time Header */}
            <div className="grid grid-cols-[90px_repeat(13,1fr)] gap-1 mb-1">
              <div className="bg-earth-800/40 rounded-md p-1"></div>
              {timeSlots.map((slot) => (
                <div
                  key={slot.time}
                  className={`rounded-md p-1 text-center text-[10px] ${
                    slot.isFixed
                      ? "bg-gold-500/20 text-gold-500 font-medium"
                      : "bg-earth-800/40 text-earth-400"
                  }`}
                >
                  {slot.time}
                </div>
              ))}
            </div>

            {/* One strip per selected date */}
            {selectedDates.map((selectedDate) => (
              <div key={selectedDate} className="grid grid-cols-[90px_repeat(13,1fr)] gap-1 mb-1">
                <div className="bg-earth-800/40 rounded-md p-1 flex items-center justify-center">
                  <span className="text-earth-300 text-[10px] font-medium leading-tight">
                    {`${new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", { day: "2-digit", month: "short" })} / ${new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", { weekday: "short" })}`}
                  </span>
                </div>
                {timeSlots.map((slot) => {
                  const slotIndex = timeSlots.findIndex((s) => s.time === slot.time);
                  const checkInIndex = timeSlots.findIndex((s) => s.time === CHECK_IN_TIME);
                  const checkOutIndex = timeSlots.findIndex((s) => s.time === CHECK_OUT_TIME);
                  const firstSelectedDate = selectedDates[0];
                  const lastSelectedDate = selectedDates[selectedDates.length - 1];
                  const isFirstDate = selectedDate === firstSelectedDate;
                  const isLastDate = selectedDate === lastSelectedDate;
                  const isCheckInMarker = isFirstDate && slot.time === CHECK_IN_TIME;
                  const isCheckOutMarker = isLastDate && slot.time === CHECK_OUT_TIME;
                  const isBeforeCheckInBlocked = isFirstDate && slotIndex < checkInIndex;
                  const isAfterCheckOutBlocked = isLastDate && slotIndex > checkOutIndex;
                  const isLockedByStayRule = isBeforeCheckInBlocked || isAfterCheckOutBlocked;
                  const key = `${selectedDate}-${slot.time}`;
                  const activityId = schedule[key];
                  const activity = activityId ? getActivityById(activityId) : null;

                  if (isCheckInMarker) {
                    return (
                      <div
                        key={slot.time}
                        className="bg-gold-500/30 rounded-md p-1 flex items-center justify-center border border-gold-500/50"
                      >
                        <span className="text-gold-300 text-[10px] font-semibold text-center leading-tight">
                          Check-in
                        </span>
                      </div>
                    );
                  }

                  if (isCheckOutMarker) {
                    return (
                      <div
                        key={slot.time}
                        className="bg-gold-500/30 rounded-md p-1 flex items-center justify-center border border-gold-500/50"
                      >
                        <span className="text-gold-300 text-[10px] font-semibold text-center leading-tight">
                          Check-out
                        </span>
                      </div>
                    );
                  }

                  if (isLockedByStayRule) {
                    return (
                      <div
                        key={slot.time}
                        className="rounded-md p-1 min-h-[32px] border border-earth-800"
                        style={{
                          backgroundColor: "rgba(19, 14, 11, 0.85)",
                          backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(148, 123, 95, 0.16) 0px, rgba(148, 123, 95, 0.16) 2px, transparent 2px, transparent 8px)",
                        }}
                      />
                    );
                  }

                  if (slot.isFixed) {
                    return (
                      <div
                        key={slot.time}
                        className="bg-gold-500/20 rounded-md p-1 flex items-center justify-center"
                      >
                        <span className="text-gold-500 text-[10px] font-medium text-center leading-tight">
                          {slot.label}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={slot.time}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(selectedDate, slot.time, slot.isFixed, isLockedByStayRule)}
                      className={`bg-earth-800/40 rounded-md p-1 min-h-[32px] flex items-center justify-center transition-all ${
                        draggedActivity && !activity
                          ? "border-2 border-dashed border-gold-500/50"
                          : "border border-earth-700/50"
                      }`}
                    >
                      {activity ? (
                        <div
                          className="relative group w-full h-full flex flex-col items-center justify-center"
                          onClick={() => handleRemove(selectedDate, slot.time)}
                        >
                          <span className="material-symbols-outlined text-gold-500 text-xs">
                            {activity.icon}
                          </span>
                          <span className="text-earth-300 text-[9px] text-center leading-tight">
                            {activity.name}
                          </span>
                          <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-red-500 text-xs">
                              close
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="text-earth-400 text-xs text-center mt-2">
          Select dates first (1 to 7). Then drag activities into each date strip. Click an activity to remove it.
        </p>

        {selectedDates.length ? (
          <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2">
            <a
              href="/The_Silent_Club_2_Page_Brochure.pdf"
              download="The_Silent_Club_2_Page_Brochure.pdf"
              className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-earth-700 text-gold-400 text-xs hover:border-gold-500/60 hover:bg-gold-500/10 transition-colors"
            >
              Download PDF
            </a>
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gold-500 text-earth-950 text-xs font-medium hover:bg-gold-400 transition-colors"
            >
              Book a 15 min Alignment Call
            </a>
          </div>
        ) : null}
      </div>

      {isDatePickerOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-3">
          <div className="w-full max-w-sm bg-earth-900 border border-earth-700 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
                className="w-7 h-7 rounded-md text-earth-400 hover:text-gold-400 hover:bg-earth-800"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <p className="text-xs uppercase tracking-[0.08em] text-earth-200">
                {MONTHS[month]} {year}
              </p>
              <button
                type="button"
                onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
                className="w-7 h-7 rounded-md text-earth-400 hover:text-gold-400 hover:bg-earth-800"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-[10px] text-earth-500 py-1">{d}</div>
              ))}
              {cells.map((day, i) => {
                if (!day) return <div key={`empty-${i}`} />;
                const d = new Date(year, month, day);
                d.setHours(0, 0, 0, 0);
                const isPast = d < today;
                const selected = selectedDates.includes(formatDateKey(d));
                const isStart = isSameDay(d, checkIn);
                const isEnd = isSameDay(d, checkOut);
                const inRange = isDateInRange(d);
                const preview = isPreviewRange(d);

                return (
                  <button
                    key={`${month}-${day}`}
                    type="button"
                    disabled={isPast}
                    onMouseEnter={() => setHoverDate(d)}
                    onClick={() => handleDateClick(day)}
                    className={`aspect-square rounded-md text-xs ${
                      isStart || isEnd
                        ? "bg-gold-500 text-earth-950 font-medium"
                        : inRange || preview
                        ? "bg-gold-500/20 text-gold-300"
                        : selected
                        ? "bg-gold-500/15 text-gold-300"
                        : isPast
                        ? "text-earth-700 cursor-not-allowed"
                        : "text-earth-300 hover:bg-earth-800 hover:text-gold-400"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 pt-2 border-t border-earth-700 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setSelectedDates([]);
                  setCheckIn(null);
                  setCheckOut(null);
                  setHoverDate(null);
                }}
                className="text-xs text-earth-400 hover:text-earth-200"
              >
                Clear
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-earth-500">{selectedDates.length}/7 selected</span>
                <button
                  type="button"
                  onClick={() => setIsDatePickerOpen(false)}
                  className="px-3 py-1.5 text-xs rounded-md bg-gold-500 text-earth-950 hover:bg-gold-400"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
