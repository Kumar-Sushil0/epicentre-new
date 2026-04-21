"use client";

import { useEffect, useState } from "react";
import { natureCards, practiceCards, spacesCards, symbolicaCards } from "./content";
import { EstateStyles } from "./components/EstateStyles";
import { ClosingCta, CategorySection, HeroSection, IntroAndNumbers, TopNav } from "./components/EstateSections";
import { InviteModal } from "../thesilentclub/components/InviteModal";
import { SiteFooter } from "../thesilentclub/components/SiteFooter";

export default function TheSilentClubEstatePage() {
  const [openModal, setOpenModal] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    nature: false,
    spaces: false,
    practice: false,
    symbolica: false,
  });

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const toggleGroup = (key: "nature" | "spaces" | "practice" | "symbolica") => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main>
      <EstateStyles />
      <TopNav scrolled={false} onOpenModal={() => setOpenModal(true)} />
      <HeroSection />
      <IntroAndNumbers />
      <CategorySection groupKey="nature" num="01" title="Nature" desc="The setting that does the work before you've unpacked." open={openGroups.nature} onToggle={toggleGroup} cards={natureCards} />
      <CategorySection groupKey="spaces" num="02" title="Spaces" desc="Every room removes a decision." open={openGroups.spaces} onToggle={toggleGroup} cards={spacesCards} />
      <CategorySection groupKey="practice" num="03" title="Practice" desc="Food and movement. Both designed to sustain thinking, not interrupt it." open={openGroups.practice} onToggle={toggleGroup} cards={practiceCards} />
      <CategorySection groupKey="symbolica" num="04" title="Symbolica" desc="The parts of the estate that don't have a function. That's the point." open={openGroups.symbolica} onToggle={toggleGroup} cards={symbolicaCards} className="symbolica" />
      <ClosingCta onOpenModal={() => setOpenModal(true)} />
      <SiteFooter />
      <InviteModal open={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
}
