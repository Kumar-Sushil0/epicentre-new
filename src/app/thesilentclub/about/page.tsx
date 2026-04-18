"use client";

import { useState } from "react";
import { AboutStyles } from "./components/AboutStyles";
import { ClosingCtaSection } from "./components/ClosingCtaSection";
import { SiteFooter } from "../components/SiteFooter";
import { FounderSection } from "./components/FounderSection";
import { HeroSection } from "./components/HeroSection";
import { StfSection } from "./components/StfSection";
import { TopNav } from "./components/TopNav";
import { WhySection } from "./components/WhySection";

export default function TheSilentClubAbout3Page() {
  const [openAcc, setOpenAcc] = useState("");

  return (
    <main>
      <AboutStyles />
      <TopNav scrolled={false} />
      <HeroSection />
      <WhySection openAcc={openAcc} setOpenAcc={setOpenAcc} />
      <FounderSection />
      <StfSection />
      <ClosingCtaSection />
      <SiteFooter />
    </main>
  );
}
