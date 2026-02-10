"use client";

import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    text: "My experience at Osho Himalayas was absolutely amazing. Entire staff is so welcoming and they always greet you with a smile. The property has its own charm and positive vibes. The owners make you feel as part of family. They have 3 playful and friendly dogs. The meditation sessions were well organized and peaceful so befitting the overall environment. We wish we had spend more days here!!",
    author: "Swati Khator",
    location: "India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
  {
    text: "A truly transformative place. The silence, the nature, and the guidance from the facilitators allowed me to connect with myself on a deeper level. I left feeling refreshed, centered, and with a new perspective on life. Highly recommended for anyone seeking inner peace.",
    author: "John Doe",
    location: "USA",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
  {
    text: "The perfect escape from the chaos of city life. The serene environment and the carefully curated programs helped me to disconnect from the outside world and reconnect with my inner self. The food was delicious and healthy, and the staff was incredibly attentive.",
    author: "Jane Smith",
    location: "UK",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-earth-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

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

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="flex flex-col items-center bg-earth-800/50 p-8 rounded-2xl aspect-square">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gold-500">
                      <Image
                        src={review.image}
                        alt={review.author}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-md text-earth-200 mb-6 leading-relaxed text-left overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                      {review.text}
                    </p>
                    <div className="mt-auto text-center">
                      <p className="font-bold text-gold-500 text-xl">{review.author}</p>
                      <p className="text-earth-300">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
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

        
      </div>
    </section>
  );
};

export default Reviews;
