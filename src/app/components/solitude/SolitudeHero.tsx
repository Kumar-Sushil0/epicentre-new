export default function SolitudeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 25, 17, 0.4) 0%, rgba(33, 25, 17, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA66C5-27IzMig79x6lBr8ASU7hB4sRgfqstGXIOge10DYYCaZZqMYVKBGNXicWrl63SDlJmI3KBFlPkI49dbmujXej7YmxpX22Bva1Qh06b8JwOHykLDYMv5QCoop-QznsDT4Qx8ETJYUSeUwwp9qu9Dbd1eLJhuIs9eqLaxLtAZlwrLtkC0t55ZWgHILOGZzRJ4yko3UQuwIe1fshdVQQsw58pM0Tni9l-HxFU_tW4JQffp-JPUF4aRp2-eH-hn1fdpw3tMz613lW")`,
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-20 flex flex-col items-center text-center gap-8 mt-16">
        <h1 className="text-earth-50 text-5xl md:text-7xl font-display font-black leading-tight tracking-tight max-w-4xl drop-shadow-2xl">
          The Practice of Being
        </h1>
        <div className="w-24 h-1 bg-gold-500 rounded-full my-2"></div>
        <p className="text-earth-50/90 text-lg md:text-xl font-display font-light leading-relaxed max-w-2xl">
          Self-guided time at <span className="italic text-gold-500">The Silent Club</span>
        </p>
        <div className="mt-8">
          <button className="group flex items-center justify-center gap-3 overflow-hidden rounded-full h-14 px-8 border border-white/20 bg-white/5 hover:bg-gold-500 hover:border-gold-500 backdrop-blur-sm transition-all duration-300 text-earth-50 text-base font-bold leading-normal tracking-wide">
            <span>Begin Journey</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_downward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
