import AsSeenOn from './AsSeenOn';

export default function Philosophy() {
  return (
    <>
      {/* Philosophy Quote Section */}
      <section className="py-12 md:py-16 bg-gold-500 flex items-center min-h-[60vh] md:min-h-[80vh]" id="philosophy" >
        <div className="max-w-5xl mx-auto px-4 md:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-6 md:mb-8 text-[#261B14] uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Interference Is Constant
          </h2>
          <div className="relative py-6 md:py-8">
            <p className="text-sm md:text-[15px] leading-relaxed md:leading-loose text-[#261B14] relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Most people don't lack answers.<br />
              They lack uninterrupted attention.<br />
              Distraction is constant.<br />
              This environment removes it.
            </p>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
    
    </>
  );
}
