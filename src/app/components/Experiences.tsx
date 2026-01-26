"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  title: string;
  description: string;
  href: string;
  images: string[];
  imageAlt: string;
  itemTitles?: string[];
}

function ExperienceCard({ title, description, href, images, imageAlt, itemTitles }: ExperienceCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link href={href} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3] border border-earth-700">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              alt={`${imageAlt} - Image ${index + 1}`}
              src={image}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
        {/* Title Overlay - shows item title for current image */}
        {itemTitles && itemTitles.length > 0 && (
          <div className="absolute inset-0 z-20 flex items-end pointer-events-none">
            <div className="w-full bg-gradient-to-t from-earth-950/90 via-earth-950/70 to-transparent p-6">
              <h3 className="text-2xl font-bold text-earth-50 group-hover:text-gold-500 transition-colors">
                {itemTitles[currentSlide] || title}
              </h3>
            </div>
          </div>
        )}
        {/* Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-30 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentSlide ? "bg-gold-500 w-4" : "bg-earth-100/50 hover:bg-earth-100/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-earth-100 group-hover:text-gold-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-earth-300 font-body">{description}</p>
    </Link>
  );
}

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Solitude",
      description: "Structured silent hours and guided practices to help declutter the mind and reconnect with inner stillness.",
      href: "/solitude",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
      ],
      imageAlt: "Solitude practice images",
      itemTitles: ["Angling", "Bird Watching", "Star Gazing"],
    },
    {
      title: "Expression",
      description: "Discover your authentic voice through creative practices in writing, language play, and artistic reflection.",
      href: "/expression",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
      ],
      imageAlt: "Expression practice images",
      itemTitles: ["Language Play", "Finding Voice", "Artist In Reflection"],
    },
    {
      title: "Residency",
      description: "7-day immersive retreats for deep work, renewal, and structured periods of withdrawal from modern noise.",
      href: "/residency",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwCob9OLts6qzhSrAp3eGecAESNXcyBepcvKiD43IYeSQeZnKWVuCMxf2Em1PtMNEYmxk31bHbccgtnM7PlImtP3GGqHD8EkAwnRQ-0xJaDkpbAZlq87zjDkcVEyia-I8Qof9KGapcrL8UBqCCp5MUlsZ_xwtnbC3yH02WXO6nOH4VaPmqgUhGy5ji8U2Kd_cROe0lJLPalg7mRvnccU_ZlrTAQuU9IuFXmr4DuqqLNotB-Ey-0kbqiReB8HUzw2-yYrArpRYEVc-",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
      ],
      imageAlt: "Residency images",
      itemTitles: ["AI Sense-Making Residency", "Risk & Attention Residency", "Tech Sabbatical Lite"],
    },
    {
      title: "Wellness",
      description: "Movement, mindfulness, and outdoor activities designed for self-paced exertion and reconnection with nature.",
      href: "/wellness",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
      ],
      imageAlt: "Wellness practice images",
    },
    {
      title: "Experiences",
      description: "Curated activities including cooking, pottery, painting, movie screenings, and outdoor adventures.",
      href: "/experiences",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
      ],
      imageAlt: "Experience activity images",
      itemTitles: ["Evening Cooking", "Afternoon Pottery", "Midday Paint"],
    },
  ];

  // Create infinite loop by duplicating items
  const duplicatedExperiences = [...experiences, ...experiences];

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to 0 when we reach the original array length (for infinite effect)
        return next >= experiences.length ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [experiences.length]);

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
    <section className="py-24 bg-earth-800 border-t border-earth-700" id="experiences">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Activities</span>
          <h2 className="text-3xl font-bold text-earth-50">Curated Experiences</h2>
        </div>
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
