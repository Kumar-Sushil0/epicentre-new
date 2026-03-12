import { Metadata } from "next";
import LandingHero from "../components/landing/LandingHero";
import LandingPhilosophy from "../components/landing/LandingPhilosophy";
import LandingBetweenChapters from "../components/landing/LandingBetweenChapters";
import LandingFullImage from "../components/landing/LandingFullImage";
import LandingWhySilence from "../components/landing/LandingWhySilence";
import LandingEstate from "../components/landing/LandingEstate";
import LandingFiveYearCycle from "../components/landing/LandingFiveYearCycle";
import LandingAccessProtocol from "../components/landing/LandingAccessProtocol";
import LandingCustodian from "../components/landing/LandingCustodian";
import LandingInvitationProcess from "../components/landing/LandingInvitationProcess";
import LandingCTA from "../components/landing/LandingCTA";

export const metadata: Metadata = {
  title: "The Silent Club Bhigwan Estate | Private Estate for Uninterrupted Attention",
  description: "A private estate designed to protect attention for people between chapters of life. Silence as infrastructure. 2026 Cohort: Post-Exit Founders. 100 memberships available.",
  keywords: "silent club, bhigwan estate, private estate, post-exit founders, uninterrupted attention, silence retreat, founder retreat",
  openGraph: {
    title: "The Silent Club Bhigwan Estate",
    description: "A private estate designed to protect attention for people between chapters of life.",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main>
      <LandingHero />
      <LandingPhilosophy />
      <LandingBetweenChapters />
      <LandingFullImage />
      <LandingWhySilence />
      <LandingEstate />
      <LandingFiveYearCycle />
      <LandingAccessProtocol />
      <LandingCustodian />
      <LandingInvitationProcess />
      <LandingCTA />
    </main>
  );
}
