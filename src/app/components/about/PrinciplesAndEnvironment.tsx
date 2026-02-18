export default function PrinciplesAndEnvironment() {
  return (
    <section className="relative py-16 px-16 bg-earth-950 border-b border-earth-800">
      <div className="max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Side - Sustainable Pratices */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-6 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Sustainable Pratices
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Intentional Simplicity - Every element serves a purpose
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Respect for Silence - Silence as a valuable resource
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Collective Responsibility - Everyone maintains the space
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Continuous Evolution - Open to change while staying true
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Giving Back */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-6 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Giving Back
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Natural Materials - Wood, stone, and earth tones
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Minimal Distractions - Clean lines and uncluttered spaces
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Seasonal Rhythms - Spaces that change with nature
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="shrink-0 w-1.5 h-1.5 bg-gold-500 rotate-45 mt-2 transition-colors duration-300"></span>
                <span className="text-earth-200 leading-relaxed text-sm">
                  Thoughtful Lighting - Soft, warm illumination
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}