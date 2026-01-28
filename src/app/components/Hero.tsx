"use client";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 18, 11, 0.6), rgba(26, 18, 11, 0.7)), url("/banner.jpg")`,
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <p className="text-gold-500 text-3xl md:text-4xl font-bold leading-relaxed max-w-5xl mx-auto mb-4 font-body" style={{ fontFamily: 'Trirong, serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
          A quiet club designed to reduce noise,<br/> pressure, and performance.
        </p>
        <p className="text-earth-100/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 font-body" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
          Not a hotel. Not a retreat. A shared space for those who value stillness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/bookings"
            className="bg-gold-500 text-earth-950 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl"
          >
            Explore Membership
          </a>
          <a
            href="/bookings"
            className="bg-transparent border-2 border-earth-100 text-earth-100 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-earth-100/10 transition-all"
          >
            Book a Tour
          </a>
        </div>

      </div>
    </section>
  );
}
