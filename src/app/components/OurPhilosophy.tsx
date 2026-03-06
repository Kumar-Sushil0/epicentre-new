export default function OurPhilosophy() {
  return (
    <section className="py-16 bg-earth-900">
      <div className="w-full px-4 md:px-16">
        <h2 className="text-3xl font-normal mb-4 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Philosophy
        </h2>
        <p className="text-earth-300 text-sm md:text-base font-body max-w-2xl mb-10">
          Four principles govern the design of The Silent Club.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clarity Through Subtraction */}
          <div className="group relative h-64 bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <div className="mb-4 transition-all duration-500 group-hover:-translate-y-2">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 16V48M16 32H48" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="32" cy="32" r="12" stroke="#C9A961" strokeWidth="2"/>
                </svg>
              </div>
              <h3
                className="text-gold-500 text-base font-normal mb-1 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-gold-400"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Clarity Through Subtraction
              </h3>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-300 text-sm font-body leading-relaxed">
                    We remove before we add. Noise is edited so that perception can stabilize. The environment works by taking away, not by providing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Constraint Creates Autonomy */}
          <div className="group relative h-64 bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <div className="mb-4 transition-all duration-500 group-hover:-translate-y-2">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="16" width="32" height="32" stroke="#C9A961" strokeWidth="2"/>
                  <path d="M24 24V40M32 24V40M40 24V40" stroke="#C9A961" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="text-gold-500 text-base font-normal mb-1 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-gold-400"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Constraint Creates Autonomy
              </h3>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-300 text-sm font-body leading-relaxed">
                    Freedom without structure drifts. The estate&apos;s structure is what creates genuine agency; it holds the conditions so you are not required to manage them yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Is Authored */}
          <div className="group relative h-64 bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <div className="mb-4 transition-all duration-500 group-hover:-translate-y-2">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 32L28 24M28 24L36 16M28 24V44M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="36" cy="16" r="4" stroke="#C9A961" strokeWidth="2"/>
                </svg>
              </div>
              <h3
                className="text-gold-500 text-base font-normal mb-1 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-gold-400"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Identity Is Authored
              </h3>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-300 text-sm font-body leading-relaxed">
                    Inherited roles pause here. The estate makes no demands on who you are in the outside world. Deliberate identity resumes at your own pace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Attention Is Sovereignty */}
          <div className="group relative h-64 bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <div className="mb-4 transition-all duration-500 group-hover:-translate-y-2">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="16" stroke="#C9A961" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="8" stroke="#C9A961" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="3" fill="#C9A961"/>
                </svg>
              </div>
              <h3
                className="text-gold-500 text-base font-normal mb-1 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-gold-400"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Attention Is Sovereignty
              </h3>
              <div className="mt-2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full border-t border-gold-500/30 pt-3">
                <div className="overflow-hidden">
                  <p className="text-earth-300 text-sm font-body leading-relaxed">
                    What you protect shapes you. Attention is the primary resource being safeguarded here—not comfort, not productivity, not experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
