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
    contentTitle: string;
    description: string[];
    provisioningTitle: string;
    provisioningSubtitle: string;
    provisions: Array<{ title: string; description: string }>;
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
        icon: "water_ec",
        title: "What This Is",
        description: "A self-directed learning experience. You are given equipment, location, time, and silence. No instruction beyond safety. Learning comes from repetition, waiting, and watching.",
      },
      {
        icon: "psychology",
        title: "What It's Designed For",
        description: "Patience without reward. Attention without stimulation. Effort without urgency. Presence without outcome guarantees. Nothing needs to be caught for the experience to work.",
      },
      {
        icon: "schedule",
        title: "How It Works",
        description: "Choose your time. Equipment explained once. Move to water independently. Remain as long as you choose. Return when the body signals completion. No fixed duration.",
      },
    ],
    contentTitle: "Learning patience through still water",
    description: [
      "Angling at The Silent Club is not a sport, lesson, or competition. It is a solitary practice designed to slow attention, sharpen observation, and rebuild tolerance for waiting.",
      "The water teaches without speaking.",
    ],
    provisioningTitle: "What's Included",
    provisioningSubtitle: "No live coaching. No performance feedback.",
    provisions: [
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
      <section className="px-4 md:px-10 lg:px-40 py-16 bg-earth-950">
        <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-16">
          <SolitudeDetailsContentComponent
            title={practice.contentTitle}
            description={practice.description}
            provisioningTitle={practice.provisioningTitle}
            provisioningSubtitle={practice.provisioningSubtitle}
            provisions={practice.provisions}
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
