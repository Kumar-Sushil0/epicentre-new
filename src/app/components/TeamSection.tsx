export default function TeamSection() {
  return (
    <section className="py-16 bg-earth-900">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Meet Our Team
            </h2>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              We are a collective of creators, thinkers, and facilitators united by a shared vision of transformation through silence and intentional living.
            </p>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              Our team brings together expertise in architecture, wellness, culinary arts, and hospitality to craft experiences that nurture deep connection and personal growth.
            </p>
            <p className="text-earth-300 text-base leading-relaxed font-body">
              Each member contributes their unique perspective to creating a sanctuary where meaningful conversations emerge from shared silence.
            </p>
            
            <div className="pt-4">
              <button className="px-6 py-3 bg-gold-500 text-earth-950 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center gap-2">
                Learn More About Us
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Side - Flower Shaped Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Flower Shape Container */}
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <clipPath id="flowerShape">
                    {/* Center circle */}
                    <circle cx="250" cy="250" r="80" />
                    {/* Top petal */}
                    <ellipse cx="250" cy="140" rx="70" ry="90" />
                    {/* Top-right petal */}
                    <ellipse cx="340" cy="180" rx="70" ry="90" transform="rotate(60 340 180)" />
                    {/* Bottom-right petal */}
                    <ellipse cx="340" cy="320" rx="70" ry="90" transform="rotate(120 340 320)" />
                    {/* Bottom petal */}
                    <ellipse cx="250" cy="360" rx="70" ry="90" />
                    {/* Bottom-left petal */}
                    <ellipse cx="160" cy="320" rx="70" ry="90" transform="rotate(240 160 320)" />
                    {/* Top-left petal */}
                    <ellipse cx="160" cy="180" rx="70" ry="90" transform="rotate(300 160 180)" />
                  </clipPath>
                </defs>
                <image
                  href="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  width="500"
                  height="500"
                  clipPath="url(#flowerShape)"
                  className="object-cover"
                  style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
