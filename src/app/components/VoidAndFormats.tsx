import Link from 'next/link';

export default function VoidAndFormats() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-16 bg-earth-950">
      <div className="w-full">
        
        {/* How It Works - Top Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-gold-500 mb-6 md:mb-8 uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
            How It Works
          </h2>
          
          <div className="space-y-3 px-4">
            <p className="text-earth-300 text-base md:text-lg leading-normal">
              You step into a low-stimulation environment. External roles pause. Input reduces. 
            </p>
            
            <p className="text-earth-300 text-base md:text-lg leading-normal">
             Attention stabilizes. From that stability, decisions surface. Silence is not the goal. Clarity is.
            </p>
           
          </div>
        </div>

        {/* Modes of Use - Bottom Section */}
        <div className="text-center">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solitude */}
            <Link href="/services" className="block">
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-4 md:p-6 hover:border-gold-500 transition-colors cursor-pointer h-full">
                <span className="material-symbols-outlined text-gold-500 text-3xl md:text-4xl mb-3 md:mb-4 block">self_improvement</span>
                <h3 className="text-lg md:text-xl font-normal text-gold-500 mb-2 md:mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Solitude as a Service
                </h3>
                <p className="text-earth-300 text-xs md:text-sm leading-relaxed">
                  Self-directed silence for deep work and decision space.
                </p>
              </div>
            </Link>

            {/* Experiments */}
            <Link href="/services" className="block">
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 hover:border-gold-500 transition-colors cursor-pointer h-full">
                <span className="material-symbols-outlined text-gold-500 text-4xl mb-4 block">science</span>
                <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Experiments as a Service
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Controlled sessions for testing ideas without public pressure.
                </p>
              </div>
            </Link>

            {/* Clarity Residency */}
            <Link href="/services" className="block">
              <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 hover:border-gold-500 transition-colors cursor-pointer h-full">
                <span className="material-symbols-outlined text-gold-500 text-4xl mb-4 block">school</span>
                <h3 className="text-xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Residency as a Service
                </h3>
                <p className="text-earth-300 text-sm leading-relaxed">
                  Small-group immersion around a single high-stakes question.
                </p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
