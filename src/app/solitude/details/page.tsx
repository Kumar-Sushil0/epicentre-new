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

const solitudePractices: Record<
  string,
  {
    title: string;
    subtitle: string;
    image: string;
    infoItems: Array<{ icon: string; title: string; description: string }>;
    kitItems?: Array<{ item: string; purpose: string }>;
    includedItems?: Array<{ title: string; description: string }>;
    itinerary?: Array<{
      day: number;
      title: string;
      schedule: Array<{ time: string; activity: string }>;
    }>;
    stationName: string;
    price: string;
  }
> = {
  angling: {
    title: "Angling",
    subtitle: "A self-guided immersion into patience, observation, and restraint under silence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwddnFGXgHVAAMrVrlLMnATirIuGyO8bdmUB8jh5OukP18ingx47NDlk8PmHoIKaar9X4thO0o4zRxsEudmV2BSHn06A3xkyvr6VF2Iq8IlJP2JewI4Ikb55iReVw6hS_PKQtd4JrhYq-YX-xQVdcqJPcFW5hqWnVthfc6vQDwh8rZQSIgJV8lyHGsWp8d-iZOb64SqVsRPJRgGH6xi_yIfElpjpJMHrs8G4gdvnA27shmOdXsgQoeHMltRtX0TkV4UfJQuqYZ7nIw",
    infoItems: [
      {
        icon: "psychology",
        title: "Core Tension",
        description: "Modern life trains constant reaction. Immediate replies. Continuous movement. Shortened attention spans. Angling demands the opposite. Stillness. Waiting. Environmental reading. It exposes impatience quickly. The question is not whether you catch fish. It is whether you can remain steady without stimulation.",
      },
      {
        icon: "landscape",
        title: "What This Environment Changes",
        description: "The Silent Club removes distraction. No constant conversation. No crowd noise. No social performance. Long water horizons. Slow wind. Shifting light. Silence turns angling into cognitive training. You begin to observe patterns — not just in water, but in yourself.",
      },
      {
        icon: "groups",
        title: "Suitable For",
        description: "Individuals seeking patience training • Decision-makers needing cognitive reset • Beginners willing to learn independently • Those comfortable with extended quiet",
      },
      {
        icon: "cancel",
        title: "What It Is Not",
        description: "Not sport fishing • Not guided tours • Not competitive angling • Not entertainment • Catching something is secondary. Remaining present is primary.",
      },
      {
        icon: "emoji_events",
        title: "Outcome",
        description: "Improved tolerance for stillness • Increased environmental awareness • Reduced compulsive stimulation • Foundational angling competence • Not excitement. Calibration.",
      },
      {
        icon: "inventory_2",
        title: "What You Receive",
        description: "Shared curated digital library • Step-by-step orientation guide • Essential angling tool kit • Suggested silent daily rhythm • Access to dam backwater zones • No instructor. No guide on-site.",
      },
    ],
    kitItems: [
      { item: "Rod & Reel (Basic Quality)", purpose: "Functional fishing" },
      { item: "Tackle Box (Minimal)", purpose: "Controlled choice" },
      { item: "Bait / Lures", purpose: "As required" },
      { item: "Float Marker", purpose: "Patience practice" },
      { item: "Quiet Folding Stool", purpose: "Stationary endurance" },
      { item: "Catch Log Sheet", purpose: "Time vs outcome observation" },
      { item: "Release Net", purpose: "Ethical handling" },
    ],
    includedItems: [
      {
        title: "Angling equipment rental",
        description: "Basic gear provided and explained for safe use.",
      },
      {
        title: "Access to designated water zones",
        description: "Quiet locations selected for solitude and stillness.",
      },
      {
        title: "Basic safety orientation",
        description: "One-time briefing on equipment and water safety.",
      },
      {
        title: "Optional boat access",
        description: "If conditions require, boat access is available.",
      },
      {
        title: "Printed reference material",
        description: "Self-learning guides for independent practice.",
      },
      {
        title: "Weather and timing advisories",
        description: "Daily updates on optimal conditions for practice.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Nervous System Downshift (Monday)",
        schedule: [
          { time: "11:00–13:00", activity: "Check-in Window" },
          { time: "13:00–16:00", activity: "Personal Setup & Environment Familiarization" },
          { time: "16:00–17:30", activity: "Orientation Brief (Light Theory Introduction)" },
          { time: "18:00–19:00", activity: "Gentle Mobility / Silent Movement" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Evening Stillness Sit" },
          { time: "21:30", activity: "Early Rest Encouraged" },
        ],
      },
      {
        day: 2,
        title: "Initiation of Structured Practice (Tuesday)",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement / Breath Practice" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Theory Block 1" },
          { time: "11:30–13:00", activity: "Practical Block 1" },
          { time: "12:00–13:00", activity: "Lunch (within silent window)" },
          { time: "14:30–16:00", activity: "Practical Block 2" },
          { time: "16:30–18:00", activity: "Theory Block 2" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Optional Silent Sit" },
        ],
      },
      {
        day: 3,
        title: "Deepening & Application (Wednesday)",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Practical Block 1" },
          { time: "11:30–13:00", activity: "Practical Block 2" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Light Theory Integration" },
          { time: "16:30–18:00", activity: "Extended Practice" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Silent Reflection Window" },
        ],
      },
      {
        day: 4,
        title: "Extended Immersion (Thursday)",
        schedule: [
          { time: "06:30–07:30", activity: "Morning Movement" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–11:00", activity: "Deep Practice Block" },
          { time: "11:30–13:00", activity: "Deep Practice Block" },
          { time: "12:00–13:00", activity: "Lunch" },
          { time: "14:30–16:00", activity: "Self-Directed Work" },
          { time: "16:30–18:00", activity: "Long Practice / Field Application" },
          { time: "19:00–20:00", activity: "Dinner" },
          { time: "20:30–21:00", activity: "Personal Integration Sit" },
        ],
      },
      {
        day: 5,
        title: "Integration & Departure (Friday)",
        schedule: [
          { time: "06:30–07:30", activity: "Final Practice" },
          { time: "08:00–09:00", activity: "Breakfast" },
          { time: "09:30–10:30", activity: "Personal Reflection & Journaling" },
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
    subtitle: "Seeing without chasing or collecting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
    infoItems: [
      {
        icon: "visibility",
        title: "What This Is",
        description: "A self-directed observational practice. You are given viewing locations, binoculars, field guides, time, and silence. No requirement to name, count, or record. Learning comes from watching without interference.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Sustained attention without stimulation. Sensitivity to movement and sound. Patience with unpredictability. Awareness without control. Seeing is enough.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose a time window. Binoculars and guides issued once. Move independently to designated zones. Observe quietly for as long as feels natural. Return when attention naturally releases. No fixed route or duration.",
      },
    ],
    contentTitle: "Learning to see without interruption",
    description: [
      "Bird watching at The Silent Club is not about identification, competition, or checklists. It is a solitary practice designed to train perception, patience, and quiet awareness.",
      "Birds appear on their own terms.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No expert-led walks. No instruction during observation.",
    provisions: [
      {
        title: "Binoculars for use",
        description: "Quality optics provided for clear observation.",
      },
      {
        title: "Printed bird identification guides",
        description: "Reference materials for self-directed learning.",
      },
      {
        title: "Access to observation zones",
        description: "Designated quiet areas for optimal viewing.",
      },
      {
        title: "Optional app references",
        description: "Digital guides available for self-use if desired.",
      },
      {
        title: "Basic orientation to terrain and timing",
        description: "Initial briefing on best locations and times.",
      },
    ],
    stationName: "Observation Zones",
    price: "Included in Solitude Stay",
  },
  "star-gazing": {
    title: "Star Gazing",
    subtitle: "Looking outward until the inner noise fades.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
    infoItems: [
      {
        icon: "nightlight",
        title: "What This Is",
        description: "A self-directed observational experience. You are given open sky zones, telescopes, star maps, time, and darkness. No lecture. Learning comes from looking long enough.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Perspective beyond the personal. Comfort with vastness and uncertainty. Attention without task. Stillness without effort. Nothing needs to be identified for the experience to work.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose a clear night window. Equipment and star maps provided once. Move independently to designated viewing zones. Observe in silence, seated or lying down. Leave when the body signals completion. No prescribed duration.",
      },
    ],
    contentTitle: "Learning perspective through vastness",
    description: [
      "Star gazing at The Silent Club is not astronomy, spectacle, or instruction. It is a solitary practice designed to recalibrate scale, dissolve urgency, and restore perspective.",
      "The sky does the teaching.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No guided narration. No expert interpretation.",
    provisions: [
      {
        title: "Telescope access",
        description: "Shared or solo viewing equipment available.",
      },
      {
        title: "Printed star maps and seasonal guides",
        description: "Reference materials for self-directed exploration.",
      },
      {
        title: "Viewing mats or seating",
        description: "Comfortable positioning for extended observation.",
      },
      {
        title: "Red-light torch for navigation",
        description: "Preserves night vision while moving between zones.",
      },
      {
        title: "Basic orientation for safety and equipment use",
        description: "Initial briefing on equipment and viewing locations.",
      },
    ],
    stationName: "Sky Viewing Zones",
    price: "Included in Solitude Stay",
  },
  "forest-walks": {
    title: "Forest Walks",
    subtitle: "Moving without destination or agenda.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "directions_walk",
        title: "What This Is",
        description: "Self-directed movement practices. You are given mapped walking zones, quiet trails, basic orientation markers, time, and silence. No route to complete. Learning comes from moving without goal.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Pace without pressure. Awareness of bodily signals. Attention anchored in movement. Comfort with not knowing where you're going. Distance does not matter.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose a starting point and time. Maps and basic orientation provided once. Walk alone, stopping or changing direction as needed. Return when the body signals enough. No prescribed duration or distance.",
      },
    ],
    contentTitle: "Learning rhythm through unstructured movement",
    description: [
      "Forest walks at The Silent Club are not hikes, treks, or guided nature walks. They are solitary practices designed to recalibrate pace, soften urgency, and restore embodied attention.",
      "The land sets the rhythm.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No guided walks. No group pacing.",
    provisions: [
      {
        title: "Access to designated forest paths",
        description: "Quiet trails and open terrain for self-directed walking.",
      },
      {
        title: "Printed maps and orientation notes",
        description: "Basic guidance for navigation without digital dependency.",
      },
      {
        title: "Seating points along trails",
        description: "Rest areas positioned throughout the walking zones.",
      },
      {
        title: "Basic safety guidance",
        description: "Initial briefing on terrain and safety considerations.",
      },
      {
        title: "Weather and terrain advisories",
        description: "Current conditions and recommendations for safe walking.",
      },
    ],
    stationName: "Forest Trail Access",
    price: "Included in Solitude Stay",
  },
  "triathlon-conditioning": {
    title: "Triathlon Conditioning",
    subtitle: "Sustained movement without targets or comparison.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "directions_run",
        title: "What This Is",
        description: "A self-directed endurance practice. You are given access to open-water swimming zones, cycling routes, running paths, an indoor gym, time, and silence. No program to follow. Learning comes from staying with effort.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Sustained effort without reward signals. Pacing without external measurement. Transitions between movement states. Recovery as part of endurance. Improvement is not tracked.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose one or more movement forms. Routes and access points shared once. Move alone, at your own pace. Stop, rest, or change activity as needed. No prescribed distance or time.",
      },
    ],
    contentTitle: "Learning endurance without competition",
    description: [
      "Triathlon Conditioning at The Silent Club is not training for an event. It is a solitary movement practice designed to explore stamina, pacing, and recovery without clocks, rankings, or goals.",
      "The body sets the limits.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No coaching. No performance tracking.",
    provisions: [
      {
        title: "Access to swim, cycle, and run environments",
        description: "Open-water zones, village cycling routes, and running paths.",
      },
      {
        title: "Use of in-house gym facilities",
        description: "Indoor space for supplemental movement and conditioning.",
      },
      {
        title: "Basic safety and terrain orientation",
        description: "Initial briefing on routes, water safety, and terrain.",
      },
      {
        title: "Recovery access",
        description: "Sauna, hot/cold tubs, and designated rest zones.",
      },
      {
        title: "Hydration and rest support",
        description: "Water stations and recovery areas along routes.",
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
