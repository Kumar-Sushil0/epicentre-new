"use client";

import { useEffect, useState } from "react";
import { AboutStyles } from "./components/AboutStyles";
import { ClosingCtaSection } from "./components/ClosingCtaSection";
import { FooterSection } from "./components/FooterSection";
import { FounderSection } from "./components/FounderSection";
import { HeroSection } from "./components/HeroSection";
import { InviteModal } from "./components/InviteModal";
import { StfSection } from "./components/StfSection";
import { TopNav } from "./components/TopNav";
import { WhySection } from "./components/WhySection";

export default function TheSilentClubAbout3Page() {
  const [openAcc, setOpenAcc] = useState("acc1");
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <main>
      <AboutStyles />
      <TopNav scrolled={scrolled} onOpenModal={() => setOpenModal(true)} />
      <HeroSection />
      <WhySection openAcc={openAcc} setOpenAcc={setOpenAcc} />
      <FounderSection />
      <StfSection />
      <ClosingCtaSection onOpenModal={() => setOpenModal(true)} />
      <FooterSection />
      <InviteModal openModal={openModal} setOpenModal={setOpenModal} />
    </main>
  );
}
