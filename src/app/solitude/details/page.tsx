"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SolitudeDetailsHero from "../../components/solitude/details/SolitudeDetailsHero";
import SolitudeDetailsPhilosophy from "../../components/solitude/details/SolitudeDetailsPhilosophy";
import SolitudeDetailsInfo from "../../components/solitude/details/SolitudeDetailsInfo";
import SolitudeDetailsContentComponent from "../../components/solitude/details/SolitudeDetailsContent";
import SolitudeDetailsBooking from "../../components/solitude/details/SolitudeDetailsBooking";
import RequestConversation from "../../components/RequestConversation";

const solitudePractices: Record<
  string,
  {
    title: string;
    subtitle: string;
    image: string;
    infoItems: Array<{ icon: string; title: string; description: string }>;
    kitItems?: Array<{ item: string; purpose: string }>;
    includedItems?: Array<{ title: string; description?: string }>;
    itinerary?: Array<{
      day: number;
      title: string;
      schedule: Array<{ time: string; activity: string }>;
    }>;
    contentTitle?: string;
    description?: string[];
    provisioningTitle?: string;
    provisioningSubtitle?: string;
    provisions?: Array<{ title: string; description: string }>;
    stationName: string;
    price: string;
  }
> = {
  angling: {
    title: "Angling",
    subtitle: "Waiting with water and repetition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwddnFGXgHVAAMrVrlLMnATirIuGyO8bdmUB8jh5OukP18ingx47NDlk8PmHoIKaar9X4thO0o4zRxsEudmV2BSHn06A3xkyvr6VF2Iq8IlJP2JewI4Ikb55iReVw6hS_PKQtd4JrhYq-YX-xQVdcqJPcFW5hqWnVthfc6vQDwh8rZQSIgJV8lyHGsWp8d-iZOb64SqVsRPJRgGH6xi_yIfElpjpJMHrs8G4gdvnA27shmOdXsgQoeHMltRtX0TkV4UfJQuqYZ7nIw",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Angling is a practice of restraint. In a culture shaped by urgency and constant stimulation, it invites you into a slower contract with time. You cast. You wait. You adjust. The water does not respond to impatience; it responds to attention. Under silence, waiting becomes deliberate. Repetition becomes stabilizing. Stillness becomes skill rather than inconvenience.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club reduces interference before you approach the water. Without digital interruption, social noise, or external commentary, your perception sharpens. Subtle changes in current, wind, and light become visible. Duration stretches. Reaction softens. The estate's quiet conditions allow angling to become observation first, outcome second.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with steadier attention and slower reactions. Patience becomes embodied rather than conceptual. You begin to notice environmental cues before impulse takes over. Time feels less compressed. Nothing dramatic shifts. But your tolerance for stillness increases.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals rebuilding patience • Decision-makers under cognitive strain • Beginners willing to learn slowly • Experienced anglers seeking quiet refinement • Those who prefer solitude over instruction",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not competitive fishing • Not guided training • Not performance coaching • Not social recreation • There are no scores here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital learning library (basic angling theory & ecology) • Printed practice guide • Access to designated water zones • Physical carry kit • Suggested weekly rhythm",
      },
    ],
    kitItems: [
      { item: "Rod & Reel (Basic Setup)", purpose: "Functional fishing" },
      { item: "Minimal Tackle Box", purpose: "Controlled choice" },
      { item: "Bait / Lures", purpose: "As required" },
      { item: "Float Marker", purpose: "Patience practice" },
      { item: "Quiet Folding Stool", purpose: "Stationary endurance" },
      { item: "Catch Log Sheet", purpose: "Time & condition observation" },
      { item: "Release Net", purpose: "Ethical handling" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Basic angling equipment",
      },
      {
        title: "Designated water access",
      },
      {
        title: "Safety orientation",
      },
      {
        title: "Full estate access for duration of stay",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Personal Setup & Water Familiarization" },
          { time: "16:00–17:30", activity: "Orientation (Safety & Basics)" },
          { time: "18:00–19:00", activity: "Gentle Mobility" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Stillness" },
        ],
      },
      {
        day: 2,
        title: "Orientation to Practice",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Ecology & Timing Overview" },
          { time: "11:30–13:00", activity: "Practice Session" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Practice Session" },
          { time: "16:30–18:00", activity: "Quiet Adjustment" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Practice" },
          { time: "11:30–13:00", activity: "Extended Practice" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Silent Observation" },
          { time: "16:30–18:00", activity: "Refinement" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Practice Block" },
          { time: "11:30–13:00", activity: "Deep Practice Block" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Long Field Session" },
          { time: "16:30–18:00", activity: "Still Observation (No Casting)" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Practice" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Personal Reflection & Log Completion" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Lakefront Access",
    price: "Included in Solitude Stay",
  },
  "bird-watching": {
    title: "Bird Watching",
    subtitle: "Seeing without interference.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Bird watching is a practice of quiet noticing. It asks you to slow your movements, soften your gaze, and refine your listening. You do not pursue birds. You wait long enough for them to resume being themselves. Under silence, perception reorganizes. Peripheral vision sharpens. Subtle sound distinctions become meaningful. Attention moves from scanning to attuning.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club reduces human density and acoustic noise. Without conversation, devices, or social signaling, your nervous system settles. Micro-movements in foliage, shifts in wind, and distant calls become detectable. You begin to see patterns of migration, rhythm, and territory. The estate's open horizons and seasonal bird movement support prolonged observation without urgency.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with heightened perceptual sensitivity. Your attention becomes less reactive and more receptive. You notice before you interpret. Patience extends without strain. Nothing dramatic occurs. But your tolerance for subtlety increases.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals restoring attentional stamina • Writers and thinkers refining perception • Beginners curious about avian life • Experienced birders seeking uninterrupted quiet • Anyone rebuilding sensory depth",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a guided birding tour • Not a photography workshop • Not species-count competition • Not a social outdoor activity • There is no checklist to complete.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital library (basic ornithology & migration cycles) • Printed silent observation guide • Mapped bird observation zones • Seasonal species list (non-exhaustive) • Physical carry kit • Suggested weekly rhythm • We provide structure. You provide steadiness.",
      },
    ],
    kitItems: [
      { item: "Binoculars", purpose: "Long-distance clarity" },
      { item: "Field Notebook", purpose: "Observation logging" },
      { item: "Species Reference Card", purpose: "Quiet identification" },
      { item: "Simple Field Guide", purpose: "Basic taxonomy" },
      { item: "Compact Stool", purpose: "Extended stillness" },
      { item: "Hat / Shade Cloth", purpose: "Environmental comfort" },
      { item: "Time Log Sheet", purpose: "Pattern tracking" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Designated observation access areas",
      },
      {
        title: "Safety & habitat orientation",
      },
      {
        title: "Estate access during stay",
      },
      {
        title: "Shared silence protocol",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Estate Familiarization" },
          { time: "16:00–17:30", activity: "Orientation (Habitat & Safety)" },
          { time: "18:00–19:00", activity: "Gentle Movement" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Sunset Listening" },
        ],
      },
      {
        day: 2,
        title: "Orientation to Observation",
        schedule: [
          { time: "06:00–07:30", activity: "Dawn Observation Block" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Basic Identification Theory" },
          { time: "11:30–13:00", activity: "Field Practice" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Silent Observation" },
          { time: "16:30–18:00", activity: "Field Notes Review" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:00–07:30", activity: "Dawn Observation" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Extended Observation" },
          { time: "11:30–13:00", activity: "Extended Observation" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Habitat Study" },
          { time: "16:30–18:00", activity: "Perch & Listen Session" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:00–08:00", activity: "Long Dawn Block" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Solo Zone Rotation" },
          { time: "11:30–13:00", activity: "Solo Zone Rotation" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Silent Sit (No Recording)" },
          { time: "16:30–18:00", activity: "Pattern Mapping" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:00–07:30", activity: "Final Observation" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Reflection & Log Completion" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Observation Zones",
    price: "Included in Solitude Stay",
  },
  "star-gazing": {
    title: "Star Gazing",
    subtitle: "Looking up until the mind softens.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Star gazing is a practice of scale. When you look at the night sky long enough, your internal urgency reorganizes. Problems shrink. Narratives loosen. Perspective widens without effort. Under darkness, attention expands. You stop searching for meaning and begin absorbing proportion. The sky does not demand interpretation. It simply reveals.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club minimizes artificial light and sound. Without screens, street glow, or commentary, the night regains depth. Constellations sharpen. Movement becomes visible. Time stretches between breaths. Darkness here is not absence. It is restoration of contrast. You are not entertained by the sky. You are recalibrated by it.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with expanded perspective. Your internal dialogue slows. Minor anxieties lose dominance. Decision-making regains proportion. Nothing is solved. But everything feels correctly sized.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals seeking perspective • High-responsibility decision-makers • Writers and thinkers processing scale • Beginners curious about the night sky • Anyone needing distance from immediacy",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not an astronomy course • Not a telescope workshop • Not astrophotography training • Not a guided constellation tour • There is no performance here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital library (basic celestial navigation & sky cycles) • Printed night-sky orientation guide • Seasonal constellation map • Dark-zone access areas • Physical carry kit • Suggested weekly rhythm • We provide the conditions. You provide the gaze.",
      },
    ],
    kitItems: [
      { item: "Star Map (Seasonal)", purpose: "Basic orientation" },
      { item: "Red-Light Torch", purpose: "Night vision preservation" },
      { item: "Blanket / Ground Mat", purpose: "Still positioning" },
      { item: "Reclining Chair / Mat", purpose: "Extended viewing" },
      { item: "Notebook", purpose: "Reflection logging" },
      { item: "Warm Layer", purpose: "Temperature stability" },
      { item: "Time Log Sheet", purpose: "Sky movement tracking" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Night-access clearance to designated zones",
      },
      {
        title: "Low-light safety orientation",
      },
      {
        title: "Estate access during stay",
      },
      {
        title: "Shared silence protocol",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Estate Familiarization" },
          { time: "16:00–17:30", activity: "Night Safety Orientation" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–22:00", activity: "First Sky Acclimatization" },
        ],
      },
      {
        day: 2,
        title: "Orientation to the Sky",
        schedule: [
          { time: "Morning", activity: "Personal Rest & Reflection" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Basic Sky Movement Theory" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "Afternoon", activity: "Rest & Quiet Time" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–23:00", activity: "Night Observation Block" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "Morning", activity: "Rest / Slow Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "Afternoon", activity: "Minimal Theory Review" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–00:00", activity: "Extended Observation" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "Morning", activity: "Recovery & Reflection" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "Afternoon", activity: "Free Time" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–Late", activity: "Deep Silent Viewing" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "Morning", activity: "Late Wake & Reflection" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Log Completion" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Sky Viewing Zones",
    price: "Included in Solitude Stay",
  },
  "forest-walks": {
    title: "Forest Trails",
    subtitle: "Walking until the mind untangles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Forest Trails is a practice of rhythmic movement. Walking without conversation reorganizes thought. Repetition steadies breath. The body begins solving what the mind has been overworking. Under silence, steps become metronomes. Internal dialogue surfaces, settles, and rearranges itself without force. Movement here is not transit. It is processing.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club offers low-density land and uninterrupted paths. Without headphones, screens, or social pacing, your nervous system recalibrates. The body returns to natural cadence. Breath aligns with terrain. Attention shifts from abstraction to sensation. Tree corridors, open stretches, and changing light support prolonged walking without urgency. The environment holds the rhythm so you do not have to.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with reduced cognitive compression. Thought becomes less fragmented. Decisions feel less forced. The body carries less residual tension. Nothing spectacular happens. But your internal pace slows to something usable.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals under cognitive overload • Decision-makers processing complexity • Writers reorganizing ideas • Anyone rebuilding tolerance for unstructured time • Those seeking embodied clarity",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a trekking tour • Not endurance training • Not a fitness challenge • Not a guided nature workshop • Distance is secondary. Regulation is primary.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital library (walking cognition & restoration theory) • Printed silent walking guide • Mapped estate trail routes • Suggested pacing framework • Physical carry kit • Suggested weekly rhythm • We provide the land. You provide the steps.",
      },
    ],
    kitItems: [
      { item: "Trail Map", purpose: "Route clarity" },
      { item: "Minimal Backpack", purpose: "Lightweight carry" },
      { item: "Water Bottle", purpose: "Hydration stability" },
      { item: "Field Notebook", purpose: "Walking reflections" },
      { item: "Pencil", purpose: "Quiet recording" },
      { item: "Hat / Sun Protection", purpose: "Environmental comfort" },
      { item: "Time Log Sheet", purpose: "Pace awareness" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Designated trail access",
      },
      {
        title: "Safety & route orientation",
      },
      {
        title: "Estate access during stay",
      },
      {
        title: "Shared silence protocol",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Estate Orientation" },
          { time: "16:00–17:30", activity: "Trail Safety Brief" },
          { time: "18:00–19:00", activity: "Gentle Familiarization Walk" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 2,
        title: "Establishing Rhythm",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Silent Trail Walk" },
          { time: "11:30–13:00", activity: "Silent Trail Walk" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Theory: Walking & Cognition" },
          { time: "16:30–18:00", activity: "Evening Walk" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:30", activity: "Extended Walk" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:30", activity: "Extended Walk" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–12:00", activity: "Long Continuous Walk" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "15:00–17:00", activity: "Unstructured Solo Walk" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Gentle Walk" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Reflection & Log Completion" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Forest Trail Access",
    price: "Included in Solitude Stay",
  },
  "triathlon-conditioning": {
    title: "Triathlon Training",
    subtitle: "Endurance without applause.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Triathlon is structured endurance. Swim. Cycle. Run. Repeat. In most environments, training becomes performance. Metrics dominate. Comparison accelerates. The body becomes a scoreboard. Under silence, endurance becomes introspection. Effort reveals thought patterns. Fatigue exposes narrative. Breath reorganizes impulse. This is not about speed. It is about composure under strain.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes spectators and social pacing. Without noise, commentary, or digital tracking pressure, you confront effort without external validation. Long horizons replace crowded lanes. Repetition replaces intensity spikes. Movement becomes rhythmic instead of reactive. The estate allows volume without chaos.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with stabilized endurance. Your pacing becomes internal rather than competitive. Effort feels measured instead of frantic. Recovery improves without force. Nothing heroic happens. But your tolerance for sustained effort increases.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals rebuilding discipline • Athletes seeking distraction-free training • Professionals strengthening resilience • Beginners willing to train slowly • Anyone testing composure under fatigue",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not race preparation coaching • Not competitive camp training • Not performance benchmarking • Not motivational fitness culture • This is solitary endurance.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital training library (endurance fundamentals & pacing theory) • Printed weekly training structure • Access to swim, cycle, and run routes • Structured daily training windows • Physical carry kit • Suggested weekly rhythm • We provide the structure. You execute.",
      },
    ],
    kitItems: [
      { item: "Swim Cap & Goggles", purpose: "Water training" },
      { item: "Basic Bike Maintenance Kit", purpose: "Mechanical stability" },
      { item: "Reflective Vest", purpose: "Route safety" },
      { item: "Training Log Sheet", purpose: "Effort tracking" },
      { item: "Minimal First Aid Kit", purpose: "Risk management" },
      { item: "Stretch Band", purpose: "Recovery work" },
      { item: "Hydration Bottle", purpose: "Sustained output" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Training route access",
      },
      {
        title: "Basic safety orientation",
      },
      {
        title: "Estate access during stay",
      },
      {
        title: "Shared silence protocol",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Route Familiarization" },
          { time: "16:00–17:30", activity: "Safety & Training Overview" },
          { time: "18:00–19:00", activity: "Light Activation Session" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 2,
        title: "Structured Effort",
        schedule: [
          { time: "06:00–07:30", activity: "Endurance Session (Discipline 1)" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "10:00–11:30", activity: "Recovery & Mobility" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "16:00–17:30", activity: "Endurance Session (Discipline 2)" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Volume Increase",
        schedule: [
          { time: "06:00–08:00", activity: "Extended Endurance Block" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "16:00–17:30", activity: "Controlled Tempo Session" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:00–09:00", activity: "Long Multi-Discipline Session" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "16:00–17:30", activity: "Active Recovery" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Light Recovery Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Log Completion" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Multi-Sport Access",
    price: "Included in Solitude Stay",
  },
  "awareness-of-breath": {
    title: "Awareness of Breath",
    subtitle: "Staying with breath without trying to change it.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
    infoItems: [
      {
        icon: "air",
        title: "What This Is",
        description: "A self-directed observation practice. You are given quiet zones, meditation decks, mats, time, and silence. No instructions beyond posture and safety. The breath teaches by being noticed.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Attention without effort. Regulation without control. Stillness without force. Sensitivity to internal signals. Nothing needs to deepen or slow.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose when and where to sit. Basic setup guidance provided once. Observe breath as it is. Stop when attention naturally fades. Sessions may last minutes or hours.",
      },
    ],
    contentTitle: "Learning regulation without technique",
    description: [
      "Awareness of Breath at The Silent Club is not a meditation method. It is a solitary attention practice designed to rebuild sensitivity to breath as it naturally occurs.",
      "Nothing is corrected.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No guided sessions. No techniques taught.",
    provisions: [
      {
        title: "Access to quiet sitting zones",
        description: "Indoor and outdoor spaces designated for stillness.",
      },
      {
        title: "Mats, cushions, and back supports",
        description: "Comfortable seating options for extended observation.",
      },
      {
        title: "Low-light indoor rooms",
        description: "Softly lit spaces that support sustained attention.",
      },
      {
        title: "Outdoor decks and shaded areas",
        description: "Natural settings for breath observation.",
      },
      {
        title: "Printed reference material for self-learning",
        description: "Basic guidance for independent practice.",
      },
    ],
    stationName: "Meditation Zones",
    price: "Included in Solitude Stay",
  },
  "fascia-system": {
    title: "Fascia Systems",
    subtitle: "Releasing what tension has memorized.",
    image:
      "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Solitude/fascia.png",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Fascia holds what movement repeats. It is the connective tissue that adapts to posture, stress, and habit. Over time, it tightens around patterns you no longer notice. Under silence, sensation becomes detectable. Micro-tension surfaces. Breath exposes restriction. This is not about flexibility. It is about recalibrating internal tension maps.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes social observation and external pacing. Without mirrors, group instruction, or verbal correction, you move more honestly. The nervous system softens. Sensation replaces performance. Slow, deliberate loading and release patterns become measurable without distraction. Silence amplifies proprioception. You begin to feel before you react.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with increased bodily awareness. Movement feels less compressed. Postural tension reduces without force. Breathing deepens without instruction. Nothing dramatic shifts. But internal resistance decreases.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals carrying chronic tension • Desk-bound professionals • Athletes seeking structural reset • Somatic learners preferring solitude • Anyone restoring body intelligence",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a physiotherapy session • Not personal training • Not corrective coaching • Not rehabilitation treatment • This is self-guided structural awareness.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital library (basic fascia theory & movement maps) • Printed guided sequence manual • Access to designated movement space • Structured daily practice windows • Physical carry kit • Suggested weekly rhythm • We provide the structure. You move within it.",
      },
    ],
    kitItems: [
      { item: "Foam Roller", purpose: "Myofascial release" },
      { item: "Massage Ball Set", purpose: "Targeted pressure" },
      { item: "Resistance Band", purpose: "Controlled tension" },
      { item: "Floor Mat", purpose: "Ground work" },
      { item: "Sequence Guide", purpose: "Movement reference" },
      { item: "Breath Timing Card", purpose: "Pace awareness" },
      { item: "Log Sheet", purpose: "Sensation tracking" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Movement floor access",
      },
      {
        title: "Basic mobility equipment",
      },
      {
        title: "Safety orientation",
      },
      {
        title: "Estate access during stay",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Estate Familiarization" },
          { time: "16:00–17:30", activity: "Movement Safety Orientation" },
          { time: "18:00–19:00", activity: "Gentle Introductory Sequence" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 2,
        title: "Structural Awareness",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Mobility" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Theory: Fascia & Adaptation" },
          { time: "11:30–13:00", activity: "Guided Release Sequence" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Slow Loading Practice" },
          { time: "16:30–18:00", activity: "Breath & Integration" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 3,
        title: "Deepening",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Mobility" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:30", activity: "Extended Release Block" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:30", activity: "Targeted Pattern Work" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 4,
        title: "Immersion",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Mobility" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–12:00", activity: "Deep Structural Sequence" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "15:00–17:00", activity: "Slow Integration Flow" },
          { time: "19:00–20:00", activity: "Dinner" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure",
        schedule: [
          { time: "06:30–07:30", activity: "Final Mobility Session" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Log Completion & Self-Assessment" },
          { time: "11:00–12:00", activity: "Checkout Window" },
          { time: "By 13:00", activity: "Departure" },
        ],
      },
    ],
    stationName: "Movement Floor",
    price: "Included in Solitude Stay",
  },
};

function SolitudeDetailsPageContent() {
  const searchParams = useSearchParams();
  const practiceId = searchParams.get("id") || "angling";
  const practice = solitudePractices[practiceId] || solitudePractices.angling;

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100  ">
      <Header />
      <SolitudeDetailsHero title={practice.title} subtitle={practice.subtitle} image={practice.image} />
      <SolitudeDetailsPhilosophy />
      <SolitudeDetailsInfo infoItems={practice.infoItems} />
      <section className="px-4 md:px-16 py-16 bg-earth-950">
        <div className="w-full flex flex-col lg:flex-row gap-16">
          <SolitudeDetailsContentComponent
            kitItems={practice.kitItems}
            includedItems={practice.includedItems}
            itinerary={practice.itinerary}
          />
          <SolitudeDetailsBooking stationName={practice.stationName} price={practice.price} />
        </div>
      </section>
      <RequestConversation pageName={practice.title} />
      <Footer />
    </main>
  );
}

export default function SolitudeDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-earth-900 flex items-center justify-center text-earth-50">Loading...</div>}>
      <SolitudeDetailsPageContent />
    </Suspense>
  );
}
