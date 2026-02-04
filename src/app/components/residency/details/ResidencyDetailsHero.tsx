export default function ResidencyDetailsHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden border-b border-earth-700">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[30%]"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 18, 11, 0.7), rgba(26, 18, 11, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nAb96Exmu9QhCiRKqZU5CxnQDk3iDJqkw73Va-rbUXZBaBBnvTyr_8X9npg6Yn_5wIi69Dz69sf6mT479dvp0WNVf3LQfzJm3Kxbwc_HmgBXOA1XsRvHtLaBLc_tK6eOcug7ZaFeINjj6YvwfPR7D2-h2b9_YcgV5fig53664CLwWblDWeRmIb3M53NPs8mrHn-SgfqLwHoeBmfHUnlks9IPXg-3KFucSJ8xkj_HMuyqAZ0SnWgdK65Pkzlf72e6F38Wc899wJz")`,
        }}
      />
      <div className="relative z-10 text-center px-16 max-w-4xl">
        <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Residency Program</span>
        <h1 className="text-earth-50 text-4xl md:text-6xl font-display font-black tracking-tight mb-4 shadow-sm drop-shadow-lg">
          The Silent Immersion
        </h1>
        <p className="text-earth-300 text-lg font-light tracking-wide max-w-xl mx-auto font-body">
          7 days of guided solitude, deep work, and renewal.
        </p>
      </div>
    </section>
  );
}
