"use client";

import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

export default function DiningVariant() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [forceHover, setForceHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setForceHover(true);
            
            // Remove forced hover state after 1.5 seconds
            setTimeout(() => {
              setForceHover(false);
            }, 1500);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
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

  const items = [
    {
      id: 0,
      title: "Daily — Satvik Home Food",
      description: "everyday, uncomplicated vegetarian food",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2"
      ],
    },
    {
      id: 1,
      title: "Wed & Fri — Smoothies, Shakes, Sandwiches & Salads",
      description: "occasional lighter preparations",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5"
      ],
    },
    {
      id: 2,
      title: "Weekend Special — Wood-Fired Pizza, Barbeque & Sushi",
      description: "Infrequent communal cooking, held without hurry",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d"
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-8 min-h-[100vh] bg-earth-900 flex items-center" id="dining">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-2 text-gold-500" style={{ fontFamily: 'Quicksand, sans-serif' }}>Food</h3>
          <p className="text-[#e7dfd3] font-body text-lg max-w-full">
            Food here supports steadiness and attention.<br />
            Meals follow a simple rhythm:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className={forceHover ? 'force-hover' : ''}>
              <CarouselCard
                title={item.title}
                description={item.description}
                images={item.images}
                className="rounded-lg !aspect-[5/4]"
                titlePosition={{ left: '1.5rem', bottom: '1rem' }}
                overlayColor="gold-solid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
