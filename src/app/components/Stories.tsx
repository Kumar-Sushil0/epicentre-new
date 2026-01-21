"use client";

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: "STORY 01",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
      video: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/toolVideos/LID+V1.mp4",
    },
    {
      id: 2,
      title: "STORY 02",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
      video: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/toolVideos/LID+V1.mp4",
    },
    {
      id: 3,
      title: "STORY 03",
      description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
      video: "https://lidbucketnew.s3.ap-south-1.amazonaws.com/toolVideos/LID+V1.mp4",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F0] py-20">
      {/* STORIES Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black uppercase" style={{ fontFamily: 'serif' }}>
          STORIES
        </h1>
      </div>

      {/* Three Cards with Videos */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative rounded-lg overflow-hidden h-[600px] group"
            >
              {/* Video Background */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={story.video} type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <img src="/banner.jpg" alt={story.title} className="w-full h-full object-cover" />
              </video>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-8 text-center">
                <h2
                  className="text-3xl font-bold text-white uppercase mb-4"
                  style={{ fontFamily: 'serif' }}
                >
                  {story.title}
                </h2>
                <p className="text-sm text-white uppercase leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
