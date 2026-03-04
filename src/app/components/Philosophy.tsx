import AsSeenOn from './AsSeenOn';

export default function Philosophy() {
  return (
    <>
      {/* Philosophy Quote Section */}
      <section className="py-12 md:py-16 bg-gold-500 flex items-top " id="philosophy" >s
        <div className="max-w-5xl mx-auto px-4 md:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6  text-[#261B14]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Interference Is Constant
          </h2>
          <div className="relative">
            <div className="text-sm md:text-[15px] leading-relaxed md:leading-loose text-[#261B14] relative z-10 space-y-3 md:space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <p>
                Most people don’t lack answers.<br />
                They lack uninterrupted attention.<br />
                Distraction is constant.
                Input is relentless.
                Noise is normalized.
                <br />
                Very few environments are designed to remove it. 
                This one is.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
    
    </>
  );
}
