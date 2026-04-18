"use client";

import { useEffect, useState } from "react";
import { AboutStyles } from "./components/AboutStyles";
import { ClosingCtaSection } from "./components/ClosingCtaSection";
import { SiteFooter } from "../components/SiteFooter";
import { FounderSection } from "./components/FounderSection";
import { HeroSection } from "./components/HeroSection";
import { InviteModal } from "./components/InviteModal";
import { StfSection } from "./components/StfSection";
import { TopNav } from "./components/TopNav";
import { WhySection } from "./components/WhySection";

export default function TheSilentClubAbout3Page() {
  const [openAcc, setOpenAcc] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <main>
      <AboutStyles />
      <TopNav scrolled={false} onOpenModal={() => setOpenModal(true)} />
      <HeroSection />
      <WhySection openAcc={openAcc} setOpenAcc={setOpenAcc} />
      <FounderSection />
      <StfSection />
      <ClosingCtaSection onOpenModal={() => setOpenModal(true)} />
      <SiteFooter />
      <InviteModal openModal={openModal} setOpenModal={setOpenModal} />
    </main>
  );
}
