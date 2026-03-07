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
    subtitle: "Observation before conclusion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Bird watching is one of the few activities that trains undivided attention without demanding effort. You cannot observe birds by trying. You observe them by becoming still enough that your presence stops being a disturbance. The Ujani backwaters host over 200 recorded species — greater flamingos, painted storks, pelicans, herons, and migratory visitors from Central Asia. What you encounter depends entirely on how long you are willing to remain quiet and how precisely you learn to look.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes social noise before you reach the water. Without the pressure to perform an experience or report on it, your perception sharpens naturally. You begin to notice what the eye bypasses under distraction — movement at distance, shifts in posture, the silence before a bird takes flight. Duration expands. The hour you expected to spend becomes two without effort.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with a recalibrated attention threshold. Things that required effort to notice now register automatically. The habit of looking carefully before reacting — trained at the water — begins to transfer. Decision quality improves not through discipline but through perceptual change.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals who process through observation rather than discussion • Those rebuilding the capacity for sustained, non-urgent attention • Members seeking a practice that requires no prior knowledge • Anyone who finds movement and noise counterproductive to thinking",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a guided birdwatching tour • Not a wildlife photography session • Not a naturalist course • Not social recreation • There are no checklists here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital species reference for Bhigwan backwaters • Printed observation field guide • Access to designated water viewpoints • Physical carry kit • Suggested morning and dusk rhythm",
      },
    ],
    kitItems: [
      { item: "Binoculars (8x42)", purpose: "Sustained distance observation" },
      { item: "Field notebook", purpose: "Recording attention, not logging" },
      { item: "Printed species reference", purpose: "Silent identification aid" },
      { item: "Light windproof layer", purpose: "Dawn and dusk temperature drop" },
      { item: "Neutral-tone clothing guidance", purpose: "Reduces environmental disturbance" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Binoculars (estate-provided)",
      },
      {
        title: "Designated viewpoint access",
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
    subtitle: "Scale corrects proportion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Bhigwan sits beyond the light pollution radius of both Pune and Mumbai. On clear nights, the sky above the estate is dark enough to see the Milky Way unaided. Star gazing here is not a scheduled event. It is an available condition. The act of sustained exposure to genuine scale produces a specific cognitive effect: problems that occupied the foreground of your thinking begin to occupy a more accurate proportion. This is not philosophy. It is a known perceptual response to environments that dwarf the self.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The estate eliminates artificial light interference after sundown. Without ambient noise, digital input, or social obligation, the sky becomes fully legible. Time slows. The kind of thinking that only surfaces in stillness, the kind that requires no urgency becomes accessible. Members report that the clearest thinking of their stay frequently happens here, after dark, doing nothing except looking up.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with a recalibrated sense of proportion. Things that felt large begin to occupy their actual size. The mental compression that comes with sustained high-performance living decompresses not through effort, but through exposure. Nothing resolves dramatically. But your tolerance for ambiguity increases, and your relationship with time becomes less adversarial.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals carrying disproportionate cognitive weight • Those at inflection points requiring perspective rather than answers • Members who find stillness generative rather than uncomfortable • Anyone for whom scale and distance produce clarity",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not an astronomy course • Not a guided celestial tour • Not a group experience • Not performance-oriented • There are no telescopic targets assigned here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared digital sky reference for Bhigwan latitude • Printed constellation and planetary guide • Access to estate observation point • Physical carry kit • Suggested seasonal viewing rhythm",
      },
    ],
    kitItems: [
      { item: "Telescope (estate-provided)", purpose: "Extended deep-sky observation" },
      { item: "Printed sky map", purpose: "Silent navigation — no screen required" },
      { item: "Recliner / ground mat", purpose: "Sustained horizontal viewing" },
      { item: "Warm layer", purpose: "Night temperature at the backwater drops significantly" },
      { item: "Red-light torch (estate-provided)", purpose: "Preserves night vision" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Telescope (estate-provided)",
      },
      {
        title: "Recliner access at observation point",
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
    subtitle: "Movement without destination.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Walking is one of the few states in which the thinking mind processes without being directed. Bilateral physical rhythm, the left-right repetition of movement, is associated with memory consolidation, emotional integration, and the low-level processing that produces clarity after extended stillness. The trails accessible from the estate are unstructured. There is no marked difficulty, no target elevation, no completion metric. You walk because the walking works, not because it leads somewhere.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes urgency before you reach the trail. Without a schedule to return to or a performance to maintain, the walk becomes genuinely open. You notice what you notice. The pace you set is the pace the thinking requires. Members who use walking as a cognitive tool report that the trail at the estate produces a different quality of movement than urban running or structured fitness, slower, less compressed, more generative.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with physically integrated thinking rather than intellectually held conclusions. The kind of clarity that arrives while walking does not dissolve when you stop. It has already moved through the body. Decisions that felt paralysed become easier to make. Not because the trail provided answers but because the movement removed the interference that was preventing them.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals who think better in motion than in stillness • Those processing a significant decision or transition • Members who find seated reflection insufficient on its own • Anyone who uses physical rhythm as a cognitive instrument",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a fitness programme • Not a guided nature walk • Not timed or tracked • Not group activity • There are no distances to complete here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Printed trail map with route options by duration • Terrain and safety briefing • Access to all estate trail networks • Physical carry kit • Suggested morning rhythm",
      },
    ],
    kitItems: [
      { item: "Lightweight trail shoes or boots", purpose: "Uneven terrain ankle support recommended" },
      { item: "1L water bottle", purpose: "Dawn walks heat builds by 9am" },
      { item: "Field notebook", purpose: "For thinking that arrives mid-trail" },
      { item: "Light breathable layer", purpose: "Early morning temperature variation" },
      { item: "Sun protection", purpose: "Open sections of the trail have no canopy" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Printed trail map",
      },
      {
        title: "Terrain orientation",
      },
      {
        title: "Safety briefing",
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
    subtitle: "Discipline without an audience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "The Bhigwan environment is naturally suited to triathlon training. Open water for swimming. Flat, low-traffic roads for cycling. Trail access for running. Three disciplines, three environments, one uninterrupted morning. For members who use physical training as a cognitive instrument, the triathlon format offers a full-spectrum reset not because it is demanding, but because it requires the kind of sustained, singular focus that urban training environments rarely permit. No crowd. No race atmosphere. No performance pressure.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes the comparative and social dimensions of training before you begin. Without a Strava segment, a training partner's pace, or a coach's target, the session becomes genuinely yours. You train at the intensity the day requires. The body sets the pace. Members who train seriously report that sessions at the estate produce a different quality of physical output not faster, but more integrated. The thinking that surfaces during a long cycle or an open-water swim here is qualitatively different from what arrives in a city pool or on an urban road.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with both physical and cognitive reset. The combination of sustained aerobic effort across three disciplines each requiring different sensory engagement produces a decompression that isolated gym sessions rarely achieve. Decisions that required forced deliberation begin to resolve during the swim, the ride, or the run. Not through effort. Through motion in silence.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Trained athletes seeking a private, unstructured training environment • Individuals who use sustained physical effort as a thinking tool • Members preparing for an event who require focused solo training • Anyone for whom competitive training environments have become counterproductive",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a triathlon coaching programme • Not a group training camp • Not performance-monitored • Not a race preparation service • There are no times recorded here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Printed route maps for all three disciplines • Open water safety briefing • Access to cycling, swimming, and trail running routes • Physical carry kit • Suggested session rhythm by stay cycle",
      },
    ],
    kitItems: [
      { item: "Personal bicycle (or estate rental available)", purpose: "Road and trail circuit access" },
      { item: "Open water wetsuit (recommended)", purpose: "Backwater temperature varies by season" },
      { item: "Swim goggles", purpose: "Open water conditions" },
      { item: "Running shoes", purpose: "Trail and road terrain" },
      { item: "Nutrition and hydration kit", purpose: "Sessions often exceed 2 hours — plan accordingly" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Open water access",
      },
      {
        title: "Road cycling routes (20km circuit)",
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
    title: "Fascia System",
    subtitle: "The body holds what the mind accumulates.",
    image:
      "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Solitude/fascia.png",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Frame",
        description: "Extended periods of high performance leave physical residue. Compressed posture. Shallow breathing. Held tension in the shoulders, jaw, and hips. These are not metaphors — they are structural conditions that directly limit the quality of thinking. The Fascia System addresses this through resistance training, mobility work, and fascial release: the systematic decompression of tissue locked by prolonged stress. It is not a gym session. It is a physical protocol designed to restore the body's capacity to support clear thought.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes the social dimension of physical training before you begin. Without mirrors, performance culture, or comparative pressure, the body responds differently. Effort becomes internal rather than performed. You notice where tension lives — genuinely, not diagnostically. The outdoor setup at the estate places the work in low-stimulation conditions, which changes how the nervous system responds to exertion. Recovery is faster. Awareness is sharper.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "You leave with a physically lighter cognitive load. Tension that was limiting the range of your thinking has been removed at the source. Breathing deepens. Posture opens. The mental clarity that follows is not motivation, it is the result of the body no longer competing with the mind for resources. Members report that physical sessions mid-stay consistently precede the clearest thinking of the visit.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals carrying chronic physical tension from sustained high performance • Those who have neglected the body during a demanding professional chapter • Members who process emotionally through physical release • Anyone for whom the body is a constraint on the quality of thought",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not a gym membership • Not personal training • Not performance coaching • Not aesthetic fitness • There are no metrics tracked here.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Printed Fascia System protocol guide • Equipment orientation on arrival • Access to outdoor functional training setup • Physical carry kit • Suggested session rhythm by stay cycle",
      },
    ],
    kitItems: [
      { item: "Comfortable training clothes", purpose: "Functional movement — not aesthetic" },
      { item: "Training shoes", purpose: "Flat sole preferred for ground-based work" },
      { item: "Foam roller (estate-provided)", purpose: "Fascial release between sessions" },
      { item: "Resistance bands (estate-provided)", purpose: "Mobility and activation work" },
      { item: "Water bottle", purpose: "Training in outdoor heat requires sustained hydration" },
    ],
    includedItems: [
      {
        title: "Accommodation (Room / Dorm / Tent)",
      },
      {
        title: "Three daily meals",
      },
      {
        title: "Full equipment access",
      },
      {
        title: "Equipment orientation",
      },
      {
        title: "Safety briefing",
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
