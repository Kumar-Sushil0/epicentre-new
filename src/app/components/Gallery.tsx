"use client";

import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: "Quiet Gatherings", flex: 1.2 },
    { id: 2, title: "Shared Evenings", flex: 0.96 },
    { id: 3, title: "Live Expression", flex: 0.48 },
    { id: 4, title: "Marking Moments", flex: 0.72 },
    { id: 5, title: "Film & Reflection", flex: 0.96 },
    { id: 6, title: "Food in Process", flex: 2.4 },
    { id: 7, title: "Material Play", flex: 1.2 },
    { id: 8, title: "Seasonal Living", flex: 1.2 },
    { id: 9, title: "Leadership in Quiet", flex: 0.72 },
  ];

  return (
    <section className="w-full bg-black py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white uppercase" style={{ fontFamily: 'serif' }}>GALLERY</h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gray-200 p-4">
          <div className="grid grid-cols-3 gap-4 h-[1080px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <Link
                href="/gallery"
                className="flex-[1.2] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 1.2 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[0].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[0].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[0.72] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 0.72 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[3].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[3].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[1.2] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 1.2 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[6].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[6].title}
                  </span>
                </div>
              </Link>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-4">
              <Link
                href="/gallery"
                className="flex-[0.96] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 0.96 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[1].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[1].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[0.96] relative bg-black border-4 border-blue-500 overflow-hidden group min-h-0"
                style={{ flex: 0.96 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[4].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[4].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[1.2] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 1.2 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[7].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[7].title}
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <Link
                href="/gallery"
                className="flex-[0.48] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 0.48 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[2].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-sm font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[2].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[2.4] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 2.4 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[5].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[5].title}
                  </span>
                </div>
              </Link>
              <Link
                href="/gallery"
                className="flex-[0.72] relative bg-black border-2 border-black overflow-hidden group min-h-0"
                style={{ flex: 0.72 }}
              >
                <Image
                  src="/banner.png"
                  alt={galleryItems[8].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                  <span className="text-white text-lg font-semibold text-center px-4" style={{ fontFamily: 'serif' }}>
                    {galleryItems[8].title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
