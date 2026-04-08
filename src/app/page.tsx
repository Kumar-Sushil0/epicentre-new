"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BetweenChapters from "./components/BetweenChapters";
import HomeFilter from "./components/HomeFilter";
import HomeWhatThisIs from "./components/HomeWhatThisIs";
import VoidAndFormats from "./components/VoidAndFormats";
import HomeBridge from "./components/HomeBridge";
import DiningVariant from "./components/DiningVariant";
import DesignedDeliberately from "./components/DesignedDeliberately";
import Location from "./components/Location";
import FaqSection from "./components/FaqSection";

import Footer from "./components/Footer";
import AboutWhat from "./components/about/AboutWhat";

const homeFaqs = [
  {
    question: "Is The Silent Club a retreat?",
    answer: "No. A retreat implies a programme, a facilitator, a sequence of experiences. The Silent Club offers none of these. There is no agenda waiting for you. What the estate offers is structural silence, an environment engineered to reduce interference so your thinking can proceed without management.",
  },
  {
    question: "What is alignment-based access?",
    answer: "Membership is not open for purchase, it is applied for. The assessment is not based on your net worth, industry, or title. It is based on whether the way you intend to use the estate is consistent with the protocol that keeps it functional for everyone else.",
  },
  {
    question: "What actually happens when I am there?",
    answer: "There is no schedule waiting for you when you arrive. The morning is yours. Meals are simple and prepared. The environment is minimal by design, enough comfort to rest, not enough stimulation to distract. By the second day, the mental noise that arrived with you begins to slow.",
  },
  {
    question: "Can I work while I am there?",
    answer: "You can work. The estate does not prohibit it. What it does is remove the ambient conditions that make work compulsive rather than chosen. Members who arrive intending to work often find the first two days produce very little output and considerably more clarity about what the work should actually be.",
  },
];

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-earth-900">
        <div className="text-gold-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) return null;

  return (
    <main>
      <Header />
      {/* Hero */}
      <Hero />
      {/* Section 1 — Hook */}
     
      <AboutWhat/>
      {/* Section 2 — Filter */}
      <DesignedDeliberately />
      <HomeFilter />
      {/* Section 3 — What This Is */}
      
      {/* Section 4 & 5 — The System + Depth */}
      <VoidAndFormats />
      {/* Section 6 — Bridge */}
      <HomeBridge />
      {/* Section 8 — Estate */}
      <DiningVariant />
      {/* Section 9 — Designed Deliberately */}
     
      {/* Section 10 — Location */}
      <Location />
      {/* Section 11 — FAQ */}
      <FaqSection items={homeFaqs} title="Before You Come" subtitle="Most people arrive with questions. Few leave with the same ones." />

      <Footer />
    </main>
  );
}
