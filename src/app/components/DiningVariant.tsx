"use client";

import React, { useEffect, useRef, useState } from "react";

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
      title: "Accommodations",
      description: "Complete withdrawal and uninterrupted rest.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMEXUIh--EZP5fQBMot7ipsmQCI4w60rUmtgCRCv8ONulpWU6j4OW3PA4o0KwMtwDejXpiV3FqTXgT7nqoXoF607AHGqURe06tVE0AJJHiBNB4j2SnpOgEZPJF0pxIiDKFCMCXMgJNvaxTOEUvwCFdufEX0U71Q97lChwn8BYapAJ7AhXcZyouXA-0N-z17ZVe2XJLlN_HlI52GtQDyehXMU8BVLZgXkkHX6im_VJfSbOxCGyWsr8TyrlTTsuVxyxPSqfBw9r4Y8h"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Accommodations",
      description: "Quiet coexistence with clear boundaries.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_dFvHyP31JXbQRtNiZIUI94-8e_c0QShxJv1rmygbtridAA9K46Xa3QhUDB7a44eMqsv-s9HFVkx-o6wpN6WzGZo0WpEzDa285WmpQTAGbCzD1Tp-F9gThsXPoSRToC8oFd7uJnGoyIN_Sjm91MvJl0esPwg3ZmjulH3thRT0IQP81wmV2KshhQQAGu7dlmLU4FCvPYpIMWQcOHr_ot6fmFNikZK7soyC-7hY7XhmrrJeGaYljsrGvN5Ph4Zg71ul-P1-OCwhmPEl"
      ],
    },
    {
      id: 2,
      category: "",
      title: "Accommodations",
      description: "Minimal shelter close to land and weather.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cp533rD2hQD7h4B-RpKKREBmm3s8x90hpO9pcXHR7Jj_t5Irxlyz92Hrm5LmCpp-_4wiRrD2igTCEBlSvWz9ZSIXh9rLXb5yANk7rWHOHLz7TfkkJfecRmovPUNnrruP-zbpoMFSueAEVvahR4K9I0KbmDplWZyocDTz6ebvHgdNgJ00Jidrk0zs5VuMdNEcRv3opfOO2ADL-3hlSX4BDN7SxBx8qQ3cpIgZhFKbikP7rtaljp_bYwXVa4ZIQrkl0QVmO7YJ4Dfg"
      ],
    },
  ];

  const accommodationItems = [
    {
      id: 0,
      category: "",
      title: "Food",
      description: "Uncomplicated vegetarian meals prepared for ease.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/iAB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Food",
      description: "Occasional lighter preparations available anytime.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5"
      ],
    },
  ];

  const experienceItems = [
    {
      id: 0,
      category: "",
      title: "Practice & Recovery",
      description: "Always-available practices that support the body.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Practice & Recovery",
      description: "Hot and cold therapy for nervous system regulation.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb"
      ],
    },
    {
      id: 2,
      category: "",
      title: "Practice & Recovery",
      description: "Self-led, nature-based engagement without instruction.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd"
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
    <section ref={sectionRef} className="py-24 min-h-[100vh] bg-earth-900 flex items-center" id="dining">
      <div className="w-full px-6 md:px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-normal mb-2 text-gold-500 uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>The Club Includes</h3>
          <p className="text-[#e7dfd3] font-body text-lg max-w-full">
            Accommodations, Food, and Practice & Recovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Accommodations Carousel */}
          <div className="relative">
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
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="hidden absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gold-500 w-8' 
                      : 'bg-earth-300/50 hover:bg-earth-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Food Carousel */}
          <div className="relative">
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
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleAccommodationPrev}
              className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleAccommodationNext}
              className="hidden absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {accommodationItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAccommodationIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentAccommodationIndex 
                      ? 'bg-gold-500 w-8' 
                      : 'bg-earth-300/50 hover:bg-earth-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Practice & Recovery Carousel */}
          <div className="relative">
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
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-normal text-[#e7dfd3] group-hover:text-gold-500 -mb-2 leading-tight transition-all duration-500 group-hover:-translate-y-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>

                      {/* Description - Revealed on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-[#e7dfd3] text-sm leading-relaxed mt-2 border-t border-gold-500/30 pt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleExperiencePrev}
              className="hidden absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleExperienceNext}
              className="hidden absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {experienceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExperienceIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentExperienceIndex 
                      ? 'bg-gold-500 w-8' 
                      : 'bg-earth-300/50 hover:bg-earth-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
