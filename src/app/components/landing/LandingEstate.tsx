export default function LandingEstate() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-16 bg-earth-950">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-6 md:mb-8"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          THE ESTATE
        </h2>
        
        <div className="space-y-4 text-earth-300 text-base md:text-lg font-body leading-relaxed">
          <p>
            The Silent Club is a physical estate designed around a single principle:
          </p>
          
          <p className="text-lg md:text-xl text-gold-500">
            Silence as infrastructure.
          </p>
          
          <p>
            Nature slows the nervous system. Architecture reduces cognitive load. Protocol protects attention.
          </p>
        </div>
      </div>
    </section>
  );
}
