"use client";

export default function Gallery() {
  return (
    <section className="w-full bg-black py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white uppercase">GALLERY</h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gray-200 p-4">
          <div className="grid grid-cols-3 gap-4 h-[1080px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Top-left: Tall rectangle */}
              <div className="flex-[1.2] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 1</span>
              </div>
              {/* Middle-left: Short wide rectangle */}
              <div className="flex-[0.72] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 4</span>
              </div>
              {/* Bottom-left: Tall rectangle */}
              <div className="flex-[1.2] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 7</span>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-4">
              {/* Top-middle: Square */}
              <div className="flex-[0.96] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 2</span>
              </div>
              {/* Middle-middle: Square with blue border (highlighted) */}
              <div className="flex-[0.96] bg-black border-4 border-blue-500 flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 5</span>
              </div>
              {/* Bottom-middle: Tall rectangle */}
              <div className="flex-[1.2] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 8</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Top-right: Small wide rectangle */}
              <div className="flex-[0.48] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 3</span>
              </div>
              {/* Middle-right: Very tall rectangle */}
              <div className="flex-[2.4] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 6</span>
              </div>
              {/* Bottom-right: Short wide rectangle */}
              <div className="flex-[0.72] bg-black border-2 border-black flex items-center justify-center min-h-0">
                <span className="text-white">Gallery Item 9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
