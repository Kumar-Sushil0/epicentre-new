"use client";

import { useState } from "react";
import { AboutStyles } from "./components/AboutStyles";
import { ClosingCtaSection } from "./components/ClosingCtaSection";
import { SiteFooter } from "../thesilentclub/components/SiteFooter";
import { FounderSection } from "./components/FounderSection";
import { HeroSection } from "./components/HeroSection";
import { StfSection } from "./components/StfSection";
import { TopNav } from "./components/TopNav";
import { WhySection } from "./components/WhySection";
import { InviteModal } from "../thesilentclub/components/InviteModal";

export default function TheSilentClubAbout3Page() {
  const [openAcc, setOpenAcc] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <AboutStyles />
      <TopNav scrolled={false} />
      <HeroSection />
      <WhySection openAcc={openAcc} setOpenAcc={setOpenAcc} />
      <FounderSection />
      <StfSection />
      <ClosingCtaSection onOpenModal={() => setOpenModal(true)} />
      <SiteFooter />
      <InviteModal open={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
}
