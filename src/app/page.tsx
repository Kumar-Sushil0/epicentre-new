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
import RequestConversation from "./components/RequestConversation";
import Footer from "./components/Footer";

const homeFaqs = [
  {
    question: "Is The Silent Club a retreat?",
    answer: "No. A retreat implies a programme, a facilitator, a sequence of experiences. The Silent Club offers none of these. There is no agenda waiting for you. What the estate offers is structural silence — an environment engineered to reduce interference so your thinking can proceed without management.",
  },
  {
    question: "What is alignment-based access?",
    answer: "Membership is not open for purchase — it is applied for. The assessment is not based on your net worth, industry, or title. It is based on whether the way you intend to use the estate is consistent with the protocol that keeps it functional for everyone else.",
  },
  {
    question: "What actually happens when I am there?",
    answer: "There is no schedule waiting for you when you arrive. The morning is yours. Meals are simple and prepared. The environment is minimal by design — enough comfort to rest, not enough stimulation to distract. By the second day, the mental noise that arrived with you begins to slow.",
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
      <BetweenChapters />
      {/* Section 2 — Filter */}
      <HomeFilter />
      {/* Section 3 — What This Is */}
      <HomeWhatThisIs />
      {/* Section 4 & 5 — The System + Depth */}
      <VoidAndFormats />
      {/* Section 6 — Bridge */}
      <HomeBridge />
      {/* Section 8 — Estate */}
      <DiningVariant />
      {/* Section 9 — Designed Deliberately */}
      <DesignedDeliberately />
      {/* Section 10 — Location */}
      <Location />
      {/* Section 11 — FAQ */}
      <FaqSection items={homeFaqs} title="Before You Come" />
      <section className="py-8 px-4 md:px-16 bg-earth-900 text-center">
        <p className="text-earth-300 text-base md:text-lg leading-loose">
          Most people arrive with questions.<br />
          Few leave with the same ones.
        </p>
      </section>
      {/* Section 12 — Final Close */}
      <RequestConversation />
      <Footer />
    </main>
  );
}
