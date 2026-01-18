"use client";

export default function HowToGetHere() {
  const loremIpsum = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA`;

  return (
    <section className="w-full bg-white py-16">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black uppercase" style={{ fontFamily: 'serif' }}>
          HOW TO GET HERE?
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-8 items-center">
          {/* Left Column: Image Placeholder (55-60% width) */}
          <div className="w-[58%]">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>

          {/* Right Column: Text Content (40-45% width) */}
          <div className="w-[42%] flex flex-col gap-6 justify-center">
            <h2 className="text-3xl font-bold text-black uppercase" style={{ fontFamily: 'serif' }}>
              HEADING HERE
            </h2>
            <p className="text-base text-black leading-relaxed" style={{ fontFamily: 'serif' }}>
              {loremIpsum}
            </p>
            <button className="w-fit px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
