export default function OurPhilosophy() {
  return (
    <section className="py-16 bg-earth-900">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
          OUR PHILOSOPHY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Handpicked */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 32L28 24M28 24L36 16M28 24V44M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="36" cy="16" r="4" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Handpicked
            </h3>
            <p className="text-earth-300 text-sm font-body">
              We handpick and curate unique experiences
            </p>
          </div>

          {/* Immersive */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16V24M32 40V48M16 32H24M40 32H48M22 22L28 28M36 36L42 42M42 22L36 28M28 36L22 42" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="8" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Immersive
            </h3>
            <p className="text-earth-300 text-sm font-body">
              We ensure an immersive experience that nourishes your curiosity
            </p>
          </div>

          {/* Uplifting */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 12V20M32 12L28 16M32 12L36 16M20 20L26 26M20 20L16 24M44 20L38 26M44 20L48 24M12 32H20M12 32L16 28M12 32L16 36M52 32H44M52 32L48 28M52 32L48 36M20 44L26 38M20 44L16 40M44 44L38 38M44 44L48 40M32 52V44M32 52L28 48M32 52L36 48" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="6" fill="#C9A961"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Uplifting
            </h3>
            <p className="text-earth-300 text-sm font-body">
              We foster beautiful stories and activate possibilities
            </p>
          </div>

          {/* Considerate */}
          <div className="flex flex-col items-start text-center md:text-left">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 28C40 28 42 24 42 20C42 16 40 14 38 14C36 14 35 16 35 18C35 16 34 14 32 14C30 14 29 16 29 18C29 16 28 14 26 14C24 14 22 16 22 20C22 24 24 28 24 28M24 28V40C24 44 26 46 30 46H34C38 46 40 44 40 40V28M24 28H40" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Considerate
            </h3>
            <p className="text-earth-300 text-sm font-body">
              We cherish meaningful connections with like-minded individuals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
