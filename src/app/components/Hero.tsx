"use client";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 18, 11, 0.4), rgba(26, 18, 11, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz")`,
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        <p className="text-gold-500 text-3xl md:text-4xl font-light leading-relaxed max-w-5xl mx-auto mb-4 font-body drop-shadow-md" style={{ fontFamily: 'Trirong, serif' }}>
          A quiet club designed to reduce noise,<br/> pressure, and performance.
        </p>
        <p className="text-earth-100/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 font-body drop-shadow-md">
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
