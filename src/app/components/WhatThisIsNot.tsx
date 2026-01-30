"use client";

import Image from "next/image";

export default function WhatThisIsNot() {
  const items = [
    {
      id: 0,
      title: "Designed Silence",
      description: "Sound, movement, and activity are intentionally shaped so attention can settle.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 1,
      title: "Non-Performative Space",
      description: "There is no pressure to speak, share, or present an identity. Presence is enough.",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    },
    {
      id: 2,
      title: "Environment-Led Experience",
      description: "Architecture, land, and rhythm do the work. There is no programming layer.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ];

  return (
    <section className="py-20 bg-earth-900">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4 text-gold-500" style={{ fontFamily: 'Trirong, serif' }}>Our Moat</h3>
          <p className="text-earth-300 font-body text-lg max-w-3xl">
            What makes The Silent Club distinct is not what happens here, but how the environment is held.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative h-[450px] rounded-xl overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl"
            >
              {/* Background Content (Hidden behind image initially) */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-end p-8 pb-10">
                <h4 className="text-xl font-bold text-white mb-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.title}</h4>
                <p className="text-earth-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {item.description}
                </p>
              </div>

              {/* Foreground Image Layer */}
              <div className="absolute inset-0 z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-[40%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay on Image for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Title overlay on the image (Visible initially) */}
                <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-2xl font-bold text-white font-serif drop-shadow-md">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
