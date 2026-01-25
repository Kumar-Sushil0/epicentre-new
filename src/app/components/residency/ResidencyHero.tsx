export default function ResidencyHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 18, 11, 0.7), rgba(26, 18, 11, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz")`,
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-earth-50 text-5xl md:text-7xl font-display font-light tracking-tight mb-4">
          The Held Immersion
        </h1>
        <div className="w-24 h-1 bg-gold-500 rounded-full mx-auto mb-6"></div>
        <p className="text-earth-50/90 text-lg md:text-xl font-bold tracking-widest uppercase mb-4 font-body">
          THE SILENT CLUB RESIDENCY
        </p>
        <p className="text-earth-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic font-display">
          Multi-day immersions at <span className="text-gold-500">The Silent Club</span>
        </p>
      </div>
    </section>
  );
}
