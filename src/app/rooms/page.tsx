import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

export default function RoomsPage() {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`;

  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      
      {/* Reserve Rooms Section */}
      <section className="w-full bg-white py-16">
        {/* Header Section */}
        <div className="text-center mb-12 px-8">
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
            RESERVE ROOMS
          </h1>
          <p className="text-base text-black max-w-3xl mx-auto">
            {loremIpsum}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8 items-center">
            {/* Left Column - Image Placeholder */}
            <div className="w-[45%]">
              <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-[55%] flex flex-col gap-8">
              {/* DORMS Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  DORMS
                </h2>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed">
                  {loremIpsum}
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Alternate Layout - Reversed */}
        <div className="max-w-7xl mx-auto px-8 mt-16">
          <div className="flex gap-8 items-center">
            {/* Left Column - Content */}
            <div className="w-[55%] flex flex-col gap-8">
              {/* ROOMS Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  ROOMS
                </h2>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
                </p>
              </div>

              {/* AMENITIES Section */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  AMENITIES
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="text-base text-black">
                      • KING BED
                    </div>
                  ))}
                </div>
                <p className="text-base text-black leading-relaxed uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA
                </p>
              </div>

              {/* Book Now Button */}
              <button className="w-fit px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
                BOOK NOW
              </button>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="w-[45%]">
              <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
