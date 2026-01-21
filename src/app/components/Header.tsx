"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBookingPage = pathname === "/bookings";
  const isRoomsPage = pathname === "/rooms";
  const isResidencyPage = pathname === "/residency";
  const isWellnessPage = pathname === "/wellness";
  const isExpressionPage = pathname === "/expression";
  const isSolitudePage = pathname === "/solitude";
  const isExperiencesPage = pathname === "/experiences";
  const isVenuePage = pathname === "/venue";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isWhitePage = isBookingPage || isRoomsPage || isResidencyPage || isWellnessPage || isExpressionPage || isSolitudePage || isExperiencesPage || isVenuePage || isAboutPage || isContactPage;
  
  const menuItems = [
    "EPiCENTRE",
    "ABOUT US",
    "BOOKINGS",
    "ROOMS",
    "SOLITUDE",
    "EXPRESSION",
    "RESIDENCY",
    "WELLNESS",
    "EXPERIENCES",
    "VENUE",
    "GALLERY",
    
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-between px-8 py-6">
        <a href="/" className="relative h-10 w-32 block">
          <Image
            src="/logo.svg"
            alt="EpiCentre Logo"
            fill
            className="object-contain"
            priority
          />
        </a>
        <ul className="flex items-center gap-8 text-white">
          {menuItems.slice(1).map((item, index) => {
            let href = "#";
            if (item === "ABOUT US") href = "/about";
            if (item === "BOOKINGS") href = "/bookings";
            if (item === "ROOMS") href = "/rooms";
            if (item === "EXPERIENCES") href = "/experiences";
            if (item === "EXPERIENCE") href = "/experiences";
            if (item === "RESIDENCY") href = "/residency";
            if (item === "WELLNESS") href = "/wellness";
            if (item === "EXPRESSION") href = "/expression";
            if (item === "SOLITUDE") href = "/solitude";
            if (item === "VENUE") href = "/venue";
            if (item === "GALLERY") href = "/gallery";
            return (
              <li key={index}>
                <a
                  href={href}
                  className="text-sm font-bold hover:opacity-80 transition-opacity"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
