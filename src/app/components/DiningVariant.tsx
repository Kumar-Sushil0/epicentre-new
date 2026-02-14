"use client";

import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

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
      title: "Satvik Home Food",
      description: "Uncomplicated vegetarian meals prepared for ease.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Smoothies, Sandwiches & Salads",
      description: "Occasional lighter preparations",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5"
      ],
    },
    {
      id: 2,
      category: "",
      title: "Wood-Fired Pizza, Barbeque & Sushi",
      description: "Infrequent communal cooking, unhurried and shared.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d"
      ],
    },
  ];

  const accommodationItems = [
    {
      id: 0,
      category: "",
      title: "Private Rooms",
      description: "For complete withdrawal and uninterrupted rest. No shared space. No external interruption.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMEXUIh--EZP5fQBMot7ipsmQCI4w60rUmtgCRCv8ONulpWU6j4OW3PA4o0KwMtwDejXpiV3FqTXgT7nqoXoF607AHGqURe06tVE0AJJHiBNB4j2SnpOgEZPJF0pxIiDKFCMCXMgJNvaxTOEUvwCFdufEX0U71Q97lChwn8BYapAJ7AhXcZyouXA-0N-z17ZVe2XJLlN_HlI52GtQDyehXMU8BVLZgXkkHX6im_VJfSbOxCGyWsr8TyrlTTsuVxyxPSqfBw9r4Y8h"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Dorms",
      description: "Quiet coexistence with clear boundaries. No expectation of interaction or engagement.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_dFvHyP31JXbQRtNiZIUI94-8e_c0QShxJv1rmygbtridAA9K46Xa3QhUDB7a44eMqsv-s9HFVkx-o6wpN6WzGZo0WpEzDa285WmpQTAGbCzD1Tp-F9gThsXPoSRToC8oFd7uJnGoyIN_Sjm91MvJl0esPwg3ZmjulH3thRT0IQP81wmV2KshhQQAGu7dlmLU4FCvPYpIMWQcOHr_ot6fmFNikZK7soyC-7hY7XhmrrJeGaYljsrGvN5Ph4Zg71ul-P1-OCwhmPEl"
      ],
    },
    {
      id: 2,
      category: "",
      title: "Community Hall",
      description: "A transformable indoor space for co-living and stillness. Used collectively. Held in common.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo"
      ],
    },
    {
      id: 3,
      category: "",
      title: "Tents",
      description: "Minimal shelter close to land and weather. Exposure over insulation.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cp533rD2hQD7h4B-RpKKREBmm3s8x90hpO9pcXHR7Jj_t5Irxlyz92Hrm5LmCpp-_4wiRrD2igTCEBlSvWz9ZSIXh9rLXb5yANk7rWHOHLz7TfkkJfecRmovPUNnrruP-zbpoMFSueAEVvahR4K9I0KbmDplWZyocDTz6ebvHgdNgJ00Jidrk0zs5VuMdNEcRv3opfOO2ADL-3hlSX4BDN7SxBx8qQ3cpIgZhFKbikP7rtaljp_bYwXVa4ZIQrkl0QVmO7YJ4Dfg"
      ],
    },
  ];

  const experienceItems = [
    {
      id: 0,
      category: "",
      title: "Wellness",
      description: "Always-available practices that support the body and nervous system. Unscheduled and untracked.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T"
      ],
    },
    {
      id: 1,
      category: "",
      title: "Activities",
      description: "Guided sessions led by experienced practitioners. Offered by booking, individually or in small groups. Each session stands on its own.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb"
      ],
    },
    {
      id: 2,
      category: "",
      title: "Solitude",
      description: "Self-led, nature-based engagement. Resources are provided. Time is spent alone, without instruction or expectation.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd"
      ],
    },
    {
      id: 3,
      category: "",
      title: "Experiment",
      description: "Temporary containers for leaders and small groups testing ideas. Used for quiet iteration before public release. Nothing needs to be finished or shared.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR"
      ],
    },
    {
      id: 4,
      category: "",
      title: "Residency",
      description: "Multi-day immersions around a single question. Hosted by opinion leaders with a selective group. Designed for sustained inquiry and deeper conversation.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwCob9OLts6qzhSrAp3eGecAESNXcyBepcvKiD43IYeSQeZnKWVuCMxf2Em1PtMNEYmxk31bHbccgtnM7PlImtP3GGqHD8EkAwnRQ-0xJaDkpbAZlq87zjDkcVEyia-I8Qof9KGapcrL8UBqCCp5MUlsZ_xwtnbC3yH02WXO6nOH4VaPmqgUhGy5ji8U2Kd_cROe0lJLPalg7mRvnccU_ZlrTAQuU9IuFXmr4DuqqLNotB-Ey-0kbqiReB8HUzw2-yYrArpRYEVc-"
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
    <section ref={sectionRef} className="py-8 min-h-[100vh] bg-earth-900 flex items-center" id="dining">
      <div className="w-full px-4 md:px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-2 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Food</h3>
          <p className="text-[#e7dfd3] font-body text-lg max-w-full">
            Food is structured to support steadiness and attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Food Carousel */}
          <div className="relative">
            <div className="relative">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <CarouselCard
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    images={item.images}
                    className="rounded-lg"
                    titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                    overlayColor="gold-solid"
                    overlayHeight={45}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
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

          {/* Accommodation Carousel */}
          <div className="relative">
            <div className="relative">
              {accommodationItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentAccommodationIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <CarouselCard
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    images={item.images}
                    className="rounded-lg"
                    titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                    overlayColor="gold-solid"
                    overlayHeight={45}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleAccommodationPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleAccommodationNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
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

          {/* Experiences Carousel */}
          <div className="relative">
            <div className="relative">
              {experienceItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-opacity duration-700 ${
                    index === currentExperienceIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <CarouselCard
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    images={item.images}
                    className="rounded-lg"
                    titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                    overlayColor="gold-solid"
                    overlayHeight={45}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleExperiencePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleExperienceNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-earth-900/90 hover:bg-earth-800 border border-gold-500/50 hover:border-gold-500 flex items-center justify-center text-gold-500 hover:text-gold-400 transition-all z-20 shadow-lg"
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
