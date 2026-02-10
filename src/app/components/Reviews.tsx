"use client";

import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    text: "My experience at Osho Himalayas was absolutely amazing. Entire staff is so welcoming and they always greet you with a smile. The property has its own charm and positive vibes. The owners make you feel as part of family. They have 3 playful and friendly dogs. The meditation sessions were well organized and peaceful so befitting the overall environment. We wish we had spend more days here!!",
    author: "Swati Khator",
    location: "India",
    image: "/path/to/your/image.jpg", // Replace with actual image path
  },
  {
    text: "A truly transformative place. The silence, the nature, and the guidance from the facilitators allowed me to connect with myself on a deeper level. I left feeling refreshed, centered, and with a new perspective on life. Highly recommended for anyone seeking inner peace.",
    author: "John Doe",
    location: "USA",
    image: "/path/to/another/image.jpg", // Replace with actual image path
  },
  {
    text: "The perfect escape from the chaos of city life. The serene environment and the carefully curated programs helped me to disconnect from the outside world and reconnect with my inner self. The food was delicious and healthy, and the staff was incredibly attentive.",
    author: "Jane Smith",
    location: "UK",
    image: "/path/to/a-third/image.jpg", // Replace with actual image path
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-earth-900 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-all hover:bg-blue-700 hover:shadow-lg mb-16">
          Full Schedule
        </button>

        <h2 className="text-4xl font-bold text-gold-500 mb-12" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Reviews
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-earth-800 hover:bg-earth-700 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all border border-gold-500/30 hover:border-gold-500"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>

          <div className="w-full max-w-3xl">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gold-500">
                <Image
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].author}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-earth-200 mb-6 leading-relaxed">
                {reviews[currentIndex].text}
              </p>
              <p className="font-bold text-gold-500 text-xl">{reviews[currentIndex].author}</p>
              <p className="text-earth-300">{reviews[currentIndex].location}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-earth-800 hover:bg-earth-700 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all border border-gold-500/30 hover:border-gold-500"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <p className="text-earth-300">Google rating: 4.8 out of 5 stars (800+ reviews)</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.2 6.42,22 12.19,22C17.6,22 21.7,18.35 21.7,12.33C21.7,11.63 21.35,11.1 21.35,11.1V11.1Z" /></svg>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
