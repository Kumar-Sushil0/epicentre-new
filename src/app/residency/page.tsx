"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResidencyPage() {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  const residencyCards = [
    {
      id: 1,
      title: "Understanding AI's impact on thinking and identity",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "March 20, 2026",
      checkOut: "March 22, 2026",
    },
    {
      id: 2,
      title: "Observing impulse, volatility, and decision-making",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "April 15, 2026",
      checkOut: "April 17, 2026",
    },
    {
      id: 3,
      title: "Partial disconnection to surface patterns",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "May 10, 2026",
      checkOut: "May 12, 2026",
    },
    {
      id: 4,
      title: "Rethinking knowledge capture and trust",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "June 5, 2026",
      checkOut: "June 7, 2026",
    },
    {
      id: 5,
      title: "Embodied attention without performance",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "July 20, 2026",
      checkOut: "July 22, 2026",
    },
    {
      id: 6,
      title: "Exploring perspective through role and reversal",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "August 15, 2026",
      checkOut: "August 17, 2026",
    },
    {
      id: 7,
      title: "Creative process without output pressure",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "September 10, 2026",
      checkOut: "September 12, 2026",
    },
    {
      id: 8,
      title: "Recalibrating relationship with infrastructure",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "October 5, 2026",
      checkOut: "October 7, 2026",
    },
    {
      id: 9,
      title: "Long-horizon thinking about place and life",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "November 10, 2026",
      checkOut: "November 12, 2026",
    },
    {
      id: 10,
      title: "Sustained writing without prompts or deadlines",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "December 5, 2026",
      checkOut: "December 7, 2026",
    },
    {
      id: 11,
      title: "Perspective through time, not trends",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "January 10, 2027",
      checkOut: "January 12, 2027",
    },
    {
      id: 12,
      title: "Designing personal systems for intentional living",
      description: "A multi-day immersion at EPiCentre",
      image: "/banner.png",
      checkIn: "February 5, 2027",
      checkOut: "February 7, 2027",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F5F5F0]">
      <Header />
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/banner.png"
          alt="Residency Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Cards Grid Section with Flip Cards */}
      <section className="bg-[#F5F5F0] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center flex-wrap gap-8">
            {residencyCards.map((card) => (
              <Link
                key={card.id}
                href={`/residency/details?id=${card.id}`}
                className="flip-card-container cursor-pointer"
              >
                <div className="flip-card-inner">
                  {/* Front Side - Image, Title, and Booking Dates */}
                  <div className="flip-card-front relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'serif' }}>
                        {card.title}
                      </h3>
                      <div className="text-white text-sm">
                        <div className="mb-1">
                          <span className="text-gray-300">CHECK-IN:</span> {card.checkIn}
                        </div>
                        <div>
                          <span className="text-gray-300">CHECK-OUT:</span> {card.checkOut}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Back Side - Description */}
                  <div className="flip-card-back">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white" style={{ fontFamily: 'serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-center px-4 mb-4 text-white">
                      {card.description}
                    </p>
                    <div className="text-center text-xs text-gray-300 mb-4">
                      <div>CHECK-IN: {card.checkIn}</div>
                      <div>CHECK-OUT: {card.checkOut}</div>
                    </div>
                    <span className="text-[#D4A574] text-sm font-medium mt-4 block text-center">
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
