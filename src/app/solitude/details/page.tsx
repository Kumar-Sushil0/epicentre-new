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
    subtitle: "Quiet waiting by the water.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwddnFGXgHVAAMrVrlLMnATirIuGyO8bdmUB8jh5OukP18ingx47NDlk8PmHoIKaar9X4thO0o4zRxsEudmV2BSHn06A3xkyvr6VF2Iq8IlJP2JewI4Ikb55iReVw6hS_PKQtd4JrhYq-YX-xQVdcqJPcFW5hqWnVthfc6vQDwh8rZQSIgJV8lyHGsWp8d-iZOb64SqVsRPJRgGH6xi_yIfElpjpJMHrs8G4gdvnA27shmOdXsgQoeHMltRtX0TkV4UfJQuqYZ7nIw",
    infoItems: [
      {
        icon: "water_ec",
        title: "The Venue",
        description: "Lakefront, Station 4.<br/>A secluded spot ensuring absolute privacy.",
      },
      {
        icon: "schedule",
        title: "The Duration",
        description: "Self-paced.<br/>From first light until the sun dips below the horizon.",
      },
      {
        icon: "quiet_time",
        title: "The Atmosphere",
        description: "Silent.<br/>A noise-free zone designed for deep introspection.",
      },
    ],
    contentTitle: "The Art of Patience",
    description: [
      "Angling is not merely about the catch. It is a ritual of repetition and hope. The cast, the wait, the silence—each element strips away the noise of the modern world.",
      "We have curated the environment so you can curate your thoughts. The water reflects the sky, and in its calmness, perhaps you will find a reflection of your own stillness.",
    ],
    provisioningTitle: "Provisioning",
    provisioningSubtitle: "Everything you need is waiting at the station. Travel light.",
    provisions: [
      {
        title: "Hand-crafted bamboo rod",
        description: "Lightweight, traditional build for tactile feedback.",
      },
      {
        title: "Minimalist tackle box",
        description: "Catch & release essentials only. Barbless hooks.",
      },
      {
        title: "Folding canvas stool",
        description: "Low profile, high comfort for extended sitting.",
      },
      {
        title: "Waterproof area map & journal",
        description: "For navigating the physical space and your mental landscape.",
      },
    ],
    stationName: "Station 4",
    price: "$45.00",
  },
  "bird-watching": {
    title: "Bird Watching",
    subtitle: "Observing without pursuit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
    infoItems: [
      {
        icon: "visibility",
        title: "The Venue",
        description: "Forest Canopy, Station 2.<br/>Elevated platforms for optimal viewing.",
      },
      {
        icon: "schedule",
        title: "The Duration",
        description: "Self-paced.<br/>Early morning to late afternoon recommended.",
      },
      {
        icon: "quiet_time",
        title: "The Atmosphere",
        description: "Still.<br/>Minimal movement to observe natural behaviors.",
      },
    ],
    contentTitle: "The Art of Observation",
    description: [
      "Bird watching is an exercise in patience and presence. By training your eye to notice the subtle movements of life around you, you train your mind to notice the subtle movements within.",
      "The forest becomes your teacher. Each flutter, each call, each moment of stillness teaches you something about your own nature.",
    ],
    provisioningTitle: "Provisioning",
    provisioningSubtitle: "All equipment provided at the station. Bring only your attention.",
    provisions: [
      {
        title: "Binoculars (8x42)",
        description: "High-quality optics for clear, detailed observation.",
      },
      {
        title: "Field guide & checklist",
        description: "Local species identification and tracking journal.",
      },
      {
        title: "Comfortable seating mat",
        description: "Portable, weather-resistant for extended sessions.",
      },
      {
        title: "Silent movement guide",
        description: "Tips for minimizing your presence in nature.",
      },
    ],
    stationName: "Station 2",
    price: "$35.00",
  },
  "star-gazing": {
    title: "Star Gazing",
    subtitle: "Reconnecting with the cosmos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
    infoItems: [
      {
        icon: "nightlight",
        title: "The Venue",
        description: "Open Field, Station 1.<br/>Unobstructed views of the night sky.",
      },
      {
        icon: "schedule",
        title: "The Duration",
        description: "Self-paced.<br/>From sunset until the first light of dawn.",
      },
      {
        icon: "quiet_time",
        title: "The Atmosphere",
        description: "Dark.<br/>Minimal light pollution for optimal viewing.",
      },
    ],
    contentTitle: "The Art of Wonder",
    description: [
      "Star gazing is an invitation to feel small in the best way possible. Under our clear, protected night skies, you reconnect with the scale of the universe and your place within it.",
      "The silence of space mirrors the silence within. As you observe the cosmos, you observe yourself.",
    ],
    provisioningTitle: "Provisioning",
    provisioningSubtitle: "Everything needed for a night under the stars. Warm clothing recommended.",
    provisions: [
      {
        title: "Telescope (refractor, 80mm)",
        description: "Entry-level scope for deep sky observation.",
      },
      {
        title: "Star chart & red-light torch",
        description: "Navigation tools that preserve night vision.",
      },
      {
        title: "Reclining observation chair",
        description: "Comfortable positioning for extended viewing.",
      },
      {
        title: "Blanket & hot beverage kit",
        description: "For warmth during extended night sessions.",
      },
    ],
    stationName: "Station 1",
    price: "$50.00",
  },
  "forest-walks": {
    title: "Forest Walks",
    subtitle: "Walking without destination.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
    infoItems: [
      {
        icon: "directions_walk",
        title: "The Venue",
        description: "Ancient Trails, Station 3.<br/>Multiple paths through protected woodland.",
      },
      {
        icon: "schedule",
        title: "The Duration",
        description: "Self-paced.<br/>As long as your feet and mind desire.",
      },
      {
        icon: "quiet_time",
        title: "The Atmosphere",
        description: "Natural.<br/>The forest sets its own rhythm and pace.",
      },
    ],
    contentTitle: "The Art of Wandering",
    description: [
      "Forest walks are an exercise in letting go of destination. There is no goal, no endpoint, no achievement to unlock. Only the path beneath your feet and the thoughts that arise as you move.",
      "The ancient woods have witnessed countless journeys. As you walk, you join a lineage of wanderers who found clarity not by reaching a destination, but by the simple act of moving forward.",
    ],
    provisioningTitle: "Provisioning",
    provisioningSubtitle: "Essential items provided. Comfortable walking shoes required.",
    provisions: [
      {
        title: "Trail map & compass",
        description: "For navigation without digital dependency.",
      },
      {
        title: "Water bottle & light snack",
        description: "Sustenance for extended exploration.",
      },
      {
        title: "Weather-appropriate gear",
        description: "Lightweight rain protection if needed.",
      },
      {
        title: "Reflection journal",
        description: "For capturing thoughts along the way.",
      },
    ],
    stationName: "Station 3",
    price: "$30.00",
  },
};

function SolitudeDetailsPageContent() {
  const searchParams = useSearchParams();
  const practiceId = searchParams.get("id") || "angling";
  const practice = solitudePractices[practiceId] || solitudePractices.angling;

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
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
