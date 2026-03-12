"use client";

import { useEffect, useState } from "react";
import { api, endpoints } from "@/utils/api";
import { useAuth } from "../context/AuthContext";

interface Activity {
  id: string;
  name: string;
  icon: string;
  category: string;
}

interface TimeSlot {
  time: string;
  label?: string;
  isFixed?: boolean;
}

const activities: Activity[] = [
  { id: "gym", name: "Gym", icon: "fitness_center", category: "Movement" },
  { id: "reading", name: "Reading", icon: "menu_book", category: "Quiet" },
  { id: "bird-watching", name: "Bird Watching", icon: "flutter", category: "Nature" },
  { id: "sports", name: "Sports", icon: "sports_basketball", category: "Movement" },
  { id: "board-games", name: "Board Games", icon: "casino", category: "Social" },
  { id: "meditation", name: "Meditation", icon: "self_improvement", category: "Quiet" },
  { id: "writing", name: "Writing", icon: "edit_note", category: "Quiet" },
  { id: "boat-rides", name: "Boat Rides", icon: "sailing", category: "Nature" },
  { id: "recovery", name: "Recovery", icon: "thermostat", category: "Movement" },
  { id: "running", name: "Running", icon: "directions_run", category: "Movement" },
  { id: "swimming", name: "Swimming", icon: "pool", category: "Movement" },
  { id: "drawing", name: "Drawing", icon: "brush", category: "Quiet" },
  { id: "cycling", name: "Cycling", icon: "pedal_bike", category: "Movement" },
  { id: "safari", name: "Safari", icon: "forest", category: "Nature" },
  { id: "farm-work", name: "Farm Work", icon: "agriculture", category: "Nature" },
  { id: "forest-walks", name: "Forest Walks", icon: "park", category: "Nature" },
  { id: "star-gazing", name: "Star Gazing", icon: "nightlight", category: "Nature" },
  { id: "kayaks", name: "Kayaks", icon: "kayaking", category: "Nature" },
  { id: "zen-garden", name: "Zen Garden", icon: "spa", category: "Quiet" },
  { id: "journalling", name: "Journalling", icon: "book", category: "Quiet" },
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

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function DesignYourDay() {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});
  const [draggedActivity, setDraggedActivity] = useState<string | null>(null);
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
  const usedActivities = new Set(Object.values(schedule));

  const handleDragStart = (activityId: string) => {
    setDraggedActivity(activityId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (day: string, time: string, isFixed?: boolean) => {
    if (isFixed || !draggedActivity) return;

    const key = `${day}-${time}`;
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

  const handleRemove = (day: string, time: string) => {
    const key = `${day}-${time}`;
    setSchedule((prev) => {
      const next = { ...prev };
      delete next[key];
      void persistSchedule(next);
      return next;
    });
  };

  const getActivityById = (id: string) => activities.find((a) => a.id === id);

  return (
    <section className="py-20 px-4 md:px-16 bg-earth-950 border-t border-earth-900">
      <div className="w-full">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-4 text-center"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          The Estate Rhythm
        </h2>
        <p className="text-earth-300 text-base md:text-lg text-center mb-8 max-w-3xl mx-auto">
          Structure your day without rigidity. Drag activities into your schedule to design a rhythm that supports depth.
        </p>

        {/* Activities Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-normal text-gold-500 mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Available Activities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {activities
              .filter((activity) => !usedActivities.has(activity.id))
              .map((activity) => (
              <div
                key={activity.id}
                draggable
                onDragStart={() => handleDragStart(activity.id)}
                className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-3 cursor-move hover:border-gold-500/50 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-gold-500 text-lg">
                  {activity.icon}
                </span>
                <span className="text-earth-300 text-sm">{activity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Time Header */}
            <div className="grid grid-cols-[100px_repeat(13,1fr)] gap-1 mb-1">
              <div className="bg-earth-800/40 rounded-lg p-2"></div>
              {timeSlots.map((slot) => (
                <div
                  key={slot.time}
                  className={`rounded-lg p-2 text-center text-xs ${
                    slot.isFixed
                      ? "bg-gold-500/20 text-gold-500 font-medium"
                      : "bg-earth-800/40 text-earth-400"
                  }`}
                >
                  {slot.time}
                </div>
              ))}
            </div>

            {/* Days Rows */}
            {days.map((day) => (
              <div key={day} className="grid grid-cols-[100px_repeat(13,1fr)] gap-1 mb-1">
                <div className="bg-earth-800/40 rounded-lg p-2 flex items-center">
                  <span className="text-earth-300 text-sm font-medium">{day}</span>
                </div>
                {timeSlots.map((slot) => {
                  const key = `${day}-${slot.time}`;
                  const activityId = schedule[key];
                  const activity = activityId ? getActivityById(activityId) : null;

                  if (slot.isFixed) {
                    return (
                      <div
                        key={slot.time}
                        className="bg-gold-500/20 rounded-lg p-2 flex items-center justify-center"
                      >
                        <span className="text-gold-500 text-xs font-medium text-center">
                          {slot.label}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={slot.time}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(day, slot.time, slot.isFixed)}
                      className={`bg-earth-800/40 rounded-lg p-2 min-h-[50px] flex items-center justify-center transition-all ${
                        draggedActivity && !activity
                          ? "border-2 border-dashed border-gold-500/50"
                          : "border border-earth-700/50"
                      }`}
                    >
                      {activity ? (
                        <div
                          className="relative group w-full h-full flex flex-col items-center justify-center"
                          onClick={() => handleRemove(day, slot.time)}
                        >
                          <span className="material-symbols-outlined text-gold-500 text-base">
                            {activity.icon}
                          </span>
                          <span className="text-earth-300 text-[10px] text-center mt-1">
                            {activity.name}
                          </span>
                          <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-red-500 text-sm">
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

        <p className="text-earth-400 text-sm text-center mt-6">
          Drag activities from above into time slots. Click to remove. Meals are fixed.
        </p>
      </div>
    </section>
  );
}
