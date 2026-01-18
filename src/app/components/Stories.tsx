"use client";

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "STORY 01",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
    {
      id: 2,
      title: "STORY 01",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
    {
      id: 3,
      title: "STORY 01",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* STORIES Heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-black uppercase" style={{ fontFamily: 'serif' }}>
          STORIES
        </h1>
      </div>

      {/* Three Cards */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-gray-200 rounded-lg p-8 pb-12 flex flex-col items-center text-center gap-6 relative"
            >
              {/* Title */}
              <h2
                className="text-3xl font-bold text-black uppercase"
                style={{ fontFamily: 'serif' }}
              >
                {story.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-black uppercase leading-relaxed">
                {story.description}
              </p>

              {/* Button - Absolutely positioned at bottom border */}
              <button 
                className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase"
                style={{ height: '48px' }}
              >
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
