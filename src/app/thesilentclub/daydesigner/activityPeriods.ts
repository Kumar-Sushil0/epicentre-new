/** Activities that may only appear in certain time-of-day periods (matches slot.period). */
export const ACTIVITY_PERIOD: Record<string, string[]> = {
  "Star Gazing": ["Night"],
  Sunrise: ["Dawn"],
  "Bird Watching": ["Dawn", "Morning"],
  "Dark Room": ["Evening", "Night"],
  "Horizon Gazing": ["Evening", "Night"],
  "Long Bath": ["Evening", "Night"],
  Running: ["Dawn", "Morning"],
  Cycling: ["Dawn", "Morning", "Afternoon"],
  Stretching: ["Dawn", "Morning"],
  Gym: ["Dawn", "Morning", "Afternoon"],
  Swimming: ["Morning", "Afternoon"],
  Kayaking: ["Morning", "Afternoon"],
  "Boat Rides": ["Morning", "Afternoon"],
  "Forest Safari": ["Dawn", "Morning"],
  Photography: ["Dawn", "Morning", "Afternoon", "Evening"],
};

export function activityFitsPeriod(activity: string, period: string): boolean {
  const allowed = ACTIVITY_PERIOD[activity];
  if (!allowed) return true;
  return allowed.includes(period);
}
