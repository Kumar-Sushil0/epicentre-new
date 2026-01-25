"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DiningVariant() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      id: 0,
      title: "Satvik Home Food",
      description: "Locally sourced vegetarian meals. Light, steady, uncomplicated.",
      availability: "Daily",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2",
    },
    {
      id: 1,
      title: "Smoothie, Shakes, Sandwiches",
      description: "Shared meals from the farm to the buffet, Freshly prepared.",
      availability: "Wed & Fri",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5",
    },
    {
      id: 2,
      title: "Wood-Fired Pizza, Barbeque & Sushi",
      description: "A restrained culinary practice. Minimal, balanced, occasional.",
      availability: "Weekend Special",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="py-24 bg-earth-900" id="dining">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Nourishment</span>
          <h2 className="text-3xl font-bold text-earth-50">Wholesome Dining</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                className="flex gap-6 group cursor-pointer"
              >
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-earth-700">
                  <Image
                    alt={item.title}
                    src={item.thumbnail}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 py-1 border-b border-earth-800 group-hover:border-gold-500 transition-colors">
                  <span className="text-gold-500 text-sm font-medium block mb-1">{item.availability}</span>
                  <h3 className="text-xl font-bold text-earth-100 mb-2">{item.title}</h3>
                  <p className="text-earth-300 text-sm font-body line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2 h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden relative shadow-2xl border border-earth-700 group">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6 backdrop-blur-sm bg-earth-900/40 rounded-xl border border-earth-100/10">
                <h3 className="text-2xl font-bold mb-2 text-earth-50">Communal Dining</h3>
                <p className="text-sm font-body text-earth-100">Meals are shared. Conversations are gentle.</p>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
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
