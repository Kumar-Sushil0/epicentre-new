"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CarouselCard from "./CarouselCard";

interface ExperienceCardProps {
  title: string;
  description: string;
  href: string;
  images: string[];
  imageAlt: string;
  itemTitles?: string[];
}

function ExperienceCard({ title, description, href, images }: ExperienceCardProps) {
  return (
    <Link href={href} className="block">
      <CarouselCard
        title={title}
        description={description}
        images={[images[0]]} // Use only the first image, no carousel
        className="rounded-lg"
        overlayColor="gold-solid"
        overlayHeight={65}
        showBorderLine={false}
      />
    </Link>
  );
}

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Activities",
      description: "Guided sessions led by experienced practitioners. Offered by booking, individually or in small groups. Each session stands on its own.",
      href: "/experiences",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
      ],
      imageAlt: "Experience activity images",
      itemTitles: ["Evening Cooking", "Afternoon Pottery", "Midday Paint"],
    },
    {
      title: "Experiment",
      description: " Temporary containers for leaders and small groups testing ideas. Used for quiet iteration before public release. Nothing needs to be finished or shared.",
      href: "/expression",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHhHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
      ],
      imageAlt: "Expression practice images",
      itemTitles: ["Language Play", "Finding Voice", "Artist In Reflection"],
    },
  ];

  // Create infinite loop by duplicating items
  const duplicatedExperiences = [...experiences, ...experiences];

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return; // Pause when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to 0 when we reach the original array length (for infinite effect)
        return next >= experiences.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [experiences.length, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 min-h-[100vh] bg-earth-800 border-t border-earth-700 flex items-center" id="experiences">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Experiences</h3>
          <p className="text-[#e7dfd3] font-body text-[15px] max-w-full">
            Time here is not scheduled or directed.<br /> You engage with what’s available, when
          </p>
        </div>
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                willChange: "transform",
              }}
            >
              {duplicatedExperiences.map((experience, index) => (
                <div
                  key={`${experience.href}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - 4rem) / 3)`,
                    flexShrink: 0,
                  }}
                >
                  <ExperienceCard
                    title={experience.title}
                    description={experience.description}
                    href={experience.href}
                    images={experience.images}
                    imageAlt={experience.imageAlt}
                    itemTitles={experience.itemTitles}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-1 rounded-full transition-all ${index === currentIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
