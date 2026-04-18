"use client";

import Image from "next/image";
import { useState } from "react";
import { InviteModal } from "./InviteModal";

type HeaderPage = "home" | "about" | "estate" | "faq" | "journal" | "events";

type Props = {
  active?: HeaderPage;
};

const links: { id: HeaderPage; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "/thesilentclub/home" },
  { id: "estate", label: "The Estate", href: "/thesilentclub/estate" },
  { id: "about", label: "About", href: "/thesilentclub/about" },
  { id: "events", label: "Events", href: "/thesilentclub/events" },
  { id: "journal", label: "Journal", href: "/thesilentclub/blogs" },
  { id: "faq", label: "FAQ", href: "/thesilentclub/faq" },
];

export function SiteHeader({ active = "home" }: Props) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Listen for #invite hash to open modal from any page
  if (typeof window !== "undefined") {
    if (window.location.hash === "#invite" && !modalOpen) {
      setTimeout(() => {
        setModalOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }, 0);
    }
  }

  const openInvite = () => setModalOpen(true);

  // Listen for #invite hash to open modal from any page
  if (typeof window !== "undefined") {
    if (window.location.hash === "#invite" && !modalOpen) {
      setTimeout(() => {
        setModalOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }, 0);
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#2a1f17] bg-[#0f0b08]/95 backdrop-blur">
        <div className="flex h-14 w-full items-center justify-between px-4 md:px-[56px]">
          {/* Logo */}
          <a href="/thesilentclub/home" className="flex h-10 w-40 items-center justify-center">
            <Image
              src="/the-silent-club-logo.png"
              alt="The Silent Club"
              width={200}
              height={75}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                    active === link.id
                      ? "text-[#c5a065]"
                      : "text-[#7a6048] hover:text-[#c5a065]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden h-9 items-center bg-[#c5a065] px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a] md:inline-flex"
          >
            Request Invite →
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-5 bg-[#c5a065]" />
            <span className="h-px w-5 bg-[#c5a065]" />
            <span className="h-px w-3 self-start bg-[#c5a065]" />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-[#0f0b08]/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed right-0 top-0 z-[101] flex h-full w-72 flex-col border-l border-[#2a1f17] bg-[#0f0b08] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex h-14 items-center justify-between border-b border-[#2a1f17] px-5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center text-[#7a6048] hover:text-[#c5a065]"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col border-b border-[#2a1f17]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[#2a1f17] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors last:border-0 ${
                active === link.id
                  ? "text-[#c5a065]"
                  : "text-[#7a6048] hover:text-[#c5a065]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-5">
          <button
            onClick={() => { setOpen(false); setModalOpen(true); }}
            className="flex w-full items-center justify-center bg-[#c5a065] py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f0b08]"
          >
            Request Invite →
          </button>
        </div>
      </aside>

      <InviteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
