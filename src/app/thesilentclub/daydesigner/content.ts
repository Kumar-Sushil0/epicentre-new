export type ProductId = "silence" | "residency" | "solitude" | "creation";
export type Mode = "manual" | "ai";

export type Product = {
  id: ProductId;
  count: string;
  name: string;
  cycle: string;
  desc: string;
  days: number;
};

export type Slot = {
  id: string;
  t: string;
  period: string;
  fixed?: string;
  ftype?: "meal" | "voice";
};

export type CatItem = { name: string; icon: string };
export type Cat = { color: string; bg: string; items: CatItem[] };

export const PRODUCTS: Product[] = [
  { id: "silence", count: "—", name: "Silence", cycle: "Day Cycle · 4 Hours", desc: "Any 4 hours. Any day.", days: 1 },
  { id: "residency", count: "3", name: "Residency", cycle: "Weekend · 2N / 3D", desc: "A structured weekend.", days: 3 },
  { id: "solitude", count: "5", name: "Solitude", cycle: "Weekday · 4N / 5D", desc: "Five days of genuine solitude.", days: 5 },
  { id: "creation", count: "1", name: "Creation", cycle: "Full Estate · Up to 7D", desc: "Full estate. Your terms.", days: 7 },
];

export const RULES: Record<ProductId, string> = {
  silence: "Available any day",
  residency: "Available weekends only (Fri – Sun)",
  solitude: "Available weekdays only (Mon – Fri)",
  creation: "Available any day",
};

export const SLOTS: Slot[] = [
  { id: "s1", t: "06:00", period: "Dawn" },
  { id: "s2", t: "07:30", period: "Dawn" },
  { id: "s3", t: "09:00", period: "Morning", fixed: "Breakfast", ftype: "meal" },
  { id: "s4", t: "09:30", period: "Morning" },
  { id: "s5", t: "11:00", period: "Morning" },
  { id: "s6", t: "12:30", period: "Afternoon", fixed: "Lunch", ftype: "meal" },
  { id: "s7", t: "13:00", period: "Afternoon" },
  { id: "s8", t: "14:30", period: "Afternoon" },
  { id: "s9", t: "16:00", period: "Evening", fixed: "High Tea", ftype: "meal" },
  { id: "s10", t: "16:30", period: "Evening" },
  { id: "s11", t: "18:00", period: "Evening" },
  { id: "s12", t: "19:30", period: "Night", fixed: "Dinner", ftype: "meal" },
  { id: "s13", t: "20:00", period: "Night" },
  { id: "s14", t: "21:30", period: "Night", fixed: "Voice Window", ftype: "voice" },
];

export const CATS: Record<string, Cat> = {
  "Deep Work": {
    color: "#a5b4fc", bg: "rgba(99,102,241,.12)",
    items: [
      { name: "Writing", icon: "edit_note" },
      { name: "Reading", icon: "menu_book" },
      { name: "Journalling", icon: "book" },
      { name: "Thinking", icon: "psychology" },
      { name: "Idea Sketching", icon: "draw" },
      { name: "Long Walks", icon: "directions_walk" },
    ],
  },
  "Quiet Exploration": {
    color: "#6ee7b7", bg: "rgba(16,185,129,.12)",
    items: [
      { name: "Bird Watching", icon: "flutter" },
      { name: "Forest Safari", icon: "forest" },
      { name: "Sunrise", icon: "wb_twilight" },
      { name: "Boat Rides", icon: "sailing" },
      { name: "Kayaking", icon: "kayaking" },
      { name: "Star Gazing", icon: "nightlight" },
    ],
  },
  "Body Reset": {
    color: "#7dd3fc", bg: "rgba(14,165,233,.12)",
    items: [
      { name: "Gym", icon: "fitness_center" },
      { name: "Running", icon: "directions_run" },
      { name: "Cycling", icon: "pedal_bike" },
      { name: "Swimming", icon: "pool" },
      { name: "Recovery", icon: "self_improvement" },
      { name: "Stretching", icon: "accessibility_new" },
    ],
  },
  "Creative": {
    color: "#fcd34d", bg: "rgba(245,158,11,.12)",
    items: [
      { name: "Drawing", icon: "brush" },
      { name: "Sketching", icon: "ink_pen" },
      { name: "Photography", icon: "photo_camera" },
      { name: "Zen Garden", icon: "spa" },
      { name: "Farm Work", icon: "agriculture" },
      { name: "Plant Obs.", icon: "local_florist" },
    ],
  },
  "Gentle Social": {
    color: "#fca5a5", bg: "rgba(239,68,68,.12)",
    items: [
      { name: "Board Games", icon: "casino" },
      { name: "Cooking", icon: "cooking" },
      { name: "Lawn Games", icon: "sports_cricket" },
      { name: "Conversations", icon: "forum" },
      { name: "Shared Dinner", icon: "dinner_dining" },
      { name: "Letters", icon: "mail" },
    ],
  },
  "Subtraction": {
    color: "#c4b5fd", bg: "rgba(139,92,246,.12)",
    items: [
      { name: "Silence Block", icon: "hearing_disabled" },
      { name: "Dark Room", icon: "visibility_off" },
      { name: "Digital Fast", icon: "phonelink_off" },
      { name: "Anon. Presence", icon: "person_off" },
      { name: "Horizon Gazing", icon: "landscape" },
      { name: "Long Bath", icon: "water" },
    ],
  },
};

export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const fmtDate = (d: Date) => `${String(d.getDate()).padStart(2, "0")} ${shortMonths[d.getMonth()]} ${d.getFullYear()}`;
