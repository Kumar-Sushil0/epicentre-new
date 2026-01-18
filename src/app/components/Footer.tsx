"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase">EMAIL</span>
            <span className="text-white uppercase">INSTAGRAM</span>
            <span className="text-white uppercase">INSTAGRAM</span>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase">EMAIL</span>
            <span className="text-white uppercase">INSTAGRAM</span>
            <span className="text-white uppercase">INSTAGRAM</span>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase">EMAIL</span>
            <span className="text-white uppercase">INSTAGRAM</span>
            <span className="text-white uppercase">INSTAGRAM</span>
          </div>

          {/* Fourth Column - Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white uppercase mb-2">JOIN OUR NEWSLETTER</h3>
            <button className="w-fit px-8 py-3 bg-[#8B4513] text-white rounded-lg font-medium hover:bg-[#6B3410] transition-colors uppercase">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
