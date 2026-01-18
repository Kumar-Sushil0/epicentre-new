"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBookingPage = pathname === "/bookings";
  const isRoomsPage = pathname === "/rooms";
  const isResidencyPage = pathname === "/residency";
  const isWhitePage = isBookingPage || isRoomsPage || isResidencyPage;
  
  const menuItems = [
    "EPiCENTRE",
    "BOOKINGS",
    "ROOMS",
    "DINING",
    "SOLITUDE",
    "EXPRESSION",
    "WELLNESS",
    "EXPERIENCES",
    "RESIDENCY",
    "GALLERY",
    "ABOUT US",
    
  ];

  return (
    <header className={`${isWhitePage ? 'relative bg-white' : 'absolute'} top-0 left-0 right-0 z-50 w-full`}>
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
        <ul className={`flex items-center gap-8 ${isWhitePage ? 'text-black' : 'text-white'}`}>
          {menuItems.slice(1).map((item, index) => {
            let href = "#";
            if (item === "BOOKINGS") href = "/bookings";
            if (item === "ROOMS") href = "/rooms";
            if (item === "EXPERIENCES") href = "/experiences";
            if (item === "RESIDENCY") href = "/residency";
            return (
              <li key={index}>
                <a
                  href={href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
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
