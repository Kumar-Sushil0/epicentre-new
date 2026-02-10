import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/logos/1.webp', alt: 'Vogue' },
  { src: '/logos/2.webp', alt: 'The Hindu' },
  { src: '/logos/3.webp', alt: 'Condé Nast Traveller' },
  { src: '/logos/4.webp', alt: 'Business Standard' },
  { src: '/logos/5.webp', alt: 'Condé Nast' },
  { src: '/logos/6.webp', alt: 'Outlook' },
  { src: '/logos/7.webp', alt: 'Roar' },
  { src: '/logos/8.webp', alt: 'Hindustan Times' },
  { src: '/logos/9.webp', alt: 'Homegrown' },
  { src: '/logos/10.webp', alt: 'Red Bull' },
];

const AsSeenOn = () => {
  return (
    <section className="py-16 bg-gold-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-earth-950 mb-12" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Featured In
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative h-24 w-64">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
