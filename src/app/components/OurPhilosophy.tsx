export default function OurPhilosophy() {
  return (
    <section className="py-16 bg-earth-900">
      <div className="w-full px-4 md:px-16">
        <h2 className="text-3xl font-normal mb-12 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Philosophy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clarity Through Subtraction */}
          <div className="flex flex-col items-start text-center md:text-left bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16V48M16 32H48" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="12" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-gold-500 text-base font-normal mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Clarity Through Subtraction
            </h3>
            <p className="text-earth-300 text-sm font-body leading-relaxed">
              We remove before we add.<br />
              Noise is edited so perception can stabilize.
            </p>
          </div>

          {/* Constraint Creates Autonomy */}
          <div className="flex flex-col items-start text-center md:text-left bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="16" width="32" height="32" stroke="#C9A961" strokeWidth="2"/>
                <path d="M24 24V40M32 24V40M40 24V40" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-gold-500 text-base font-normal mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Constraint Creates Autonomy
            </h3>
            <p className="text-earth-300 text-sm font-body leading-relaxed">
              Freedom without structure is drift.<br />
              Structure protects agency.
            </p>
          </div>

          {/* Identity Is Authored */}
          <div className="flex flex-col items-start text-center md:text-left bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 32L28 24M28 24L36 16M28 24V44M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="36" cy="16" r="4" stroke="#C9A961" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-gold-500 text-base font-normal mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Identity Is Authored
            </h3>
            <p className="text-earth-300 text-sm font-body leading-relaxed">
              You are not here to perform inherited roles.<br />
              You are here to decide deliberately.
            </p>
          </div>

          {/* Attention Is Sovereignty */}
          <div className="flex flex-col items-start text-center md:text-left bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="16" stroke="#C9A961" strokeWidth="2"/>
                <circle cx="32" cy="32" r="8" stroke="#C9A961" strokeWidth="2"/>
                <circle cx="32" cy="32" r="3" fill="#C9A961"/>
              </svg>
            </div>
            <h3 className="text-gold-500 text-base font-normal mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Attention Is Sovereignty
            </h3>
            <p className="text-earth-300 text-sm font-body leading-relaxed">
              What you protect shapes who you become.<br />
              We protect attention first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
