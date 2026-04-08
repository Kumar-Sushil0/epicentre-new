"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DiningVariant() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAccommodationIndex, setCurrentAccommodationIndex] = useState(0);
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance accommodation carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAccommodationIndex((prev) => (prev + 1) % accommodationItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance experience carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperienceIndex((prev) => (prev + 1) % experienceItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      id: 0,
      category: "",
      title: "Private Rooms",
      description: "Protected space for uninterrupted rest.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room3.png",
      ],
    },
    {
      id: 1,
      category: "",
      title: "Shared Dorm",
      description: "Quiet coexistence with clear boundaries.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm1.png",
      ],
    },
    {
      id: 2,
      category: "",
      title: "Community Halls",
      description: "Larger shared spaces for communal silence and gatherings.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/hall.png",
      ],
    },
  ];

  const accommodationItems = [
    {
      id: 0,
      category: "",
      title: "Satvik Home Food",
      description: "Meals designed for stability, not stimulation.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
      ],
    },
    {
      id: 1,
      category: "",
      title: "Salads, Smoothies & Sandwiches",
      description: "Light meals that sustain focus.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss1.png",
      ],
    },
    {
      id: 2,
      category: "",
      title: "Barbeque, Pizza & Sushi",
      description: "Occasional shared meals within rhythm.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs1.png",
      ],
    },
  ];

  const experienceItems = [
    {
      id: 0,
      category: "",
      title: "Outdoor Gym",
      description: "Physical discharge for mental clarity.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym1.png",
      ],
    },
    {
      id: 1,
      category: "",
      title: "Contrast Therapy",
      description: "Heat and cold to recalibrate the nervous system.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym3.png",
      ],
    },
    {
      id: 2,
      category: "",
      title: "Yoga & Meditation",
      description: "Stillness practiced through breath and posture.",
      images: [
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleAccommodationPrev = () => {
    setCurrentAccommodationIndex((prev) => (prev - 1 + accommodationItems.length) % accommodationItems.length);
  };

  const handleAccommodationNext = () => {
    setCurrentAccommodationIndex((prev) => (prev + 1) % accommodationItems.length);
  };

  const handleExperiencePrev = () => {
    setCurrentExperienceIndex((prev) => (prev - 1 + experienceItems.length) % experienceItems.length);
  };

  const handleExperienceNext = () => {
    setCurrentExperienceIndex((prev) => (prev + 1) % experienceItems.length);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-24 min-h-[100vh] bg-earth-900 flex items-center" id="dining">
      <div className="w-full px-4 md:px-16">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What the Estate Provides
          </h3>
          <p className="text-[#e7dfd3] font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Everything here is chosen for one reason: to support sustained, undistracted presence.
          </p>
          <p className="text-[#e7dfd3] font-body text-sm md:text-base max-w-full mt-2">
            Accommodation, food, and physical recovery, nothing more, nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 pb-12 md:pb-0">
          {/* Accommodations Carousel */}
          <div>
            <p className="text-gold-500 text-base md:text-lg font-bold text-center mb-4">Spaces to sit, think, and withdraw.</p>
            <div className="relative">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative aspect-[25/20] rounded-lg overflow-hidden shadow-2xl border border-earth-700 group cursor-pointer">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3
                        className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gold-500 w-4' : 'bg-earth-600 hover:bg-earth-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Food Carousel */}
          <div>
            <p className="text-gold-500 text-base md:text-lg font-bold text-center mb-4">Food that doesn't demand attention.</p>
            <div className="relative">
              {accommodationItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentAccommodationIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative aspect-[25/20] rounded-lg overflow-hidden shadow-2xl border border-earth-700 group cursor-pointer">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3
                        className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {accommodationItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentAccommodationIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentAccommodationIndex ? 'bg-gold-500 w-4' : 'bg-earth-600 hover:bg-earth-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Practice & Recovery Carousel */}
          <div>
            <p className="text-gold-500 text-base md:text-lg font-bold text-center mb-4">Environments that regulate, not stimulate.</p>
            <div className="relative">
              {experienceItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentExperienceIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="relative aspect-[25/20] rounded-lg overflow-hidden shadow-2xl border border-earth-700 group cursor-pointer">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3
                        className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {item.title}
                      </h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {experienceItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentExperienceIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentExperienceIndex ? 'bg-gold-500 w-4' : 'bg-earth-600 hover:bg-earth-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
