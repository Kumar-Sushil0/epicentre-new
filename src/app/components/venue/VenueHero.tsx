export default function VenueHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8TvSF_6qQYT0sf1Z3QeDGPpedh3fFfoLu0xYEOVs4B-3yAdulyHspPVbw5A_jiNj8YyH-fB6Zrd1At6C_Dpr10Dp0zkPKpZNISmKy6obJPax1cVlyk35I9Je4qtWZQN9XhH-VmJMZXXGgG8x64v4oy9B3vkjNJhb-RZNqem3OaDqxOhIf3z7_TF48J-Km9ipy9oDRORSuxs3foTCuPvAU45bY8Co7UAqKqkWMEFchPTcX2tPhut34xCRmtQ0oyIjX5NCUmxRAaI0")`,
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(33, 25, 17, 0.3) 0%, rgba(33, 25, 17, 0.8) 60%, rgba(33, 25, 17, 1) 100%)",
        }}
      ></div>
      <div className="relative z-20 max-w-[960px] w-full px-4 sm:px-10 text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-gold-500 text-3xl md:text-4xl font-black leading-tight tracking-tighter drop-shadow-2xl" style={{ fontFamily: 'Trirong, serif' }}>
            A setting for gatherings that require focus, quiet, and containment.
          </h1>
          <p className="text-earth-300/80 text-lg font-body leading-relaxed max-w-2xl mt-4">
            The venue supports different group formats without imposing programming or performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gold-500 text-earth-950 px-6 py-3 rounded-lg font-medium hover:bg-gold-400 transition-colors duration-300"
            >
              <span className="material-symbols-outlined">download</span>
              Download Brochure
            </a>
            <a
              href="https://maps.google.com/?q=Bird+Sanctuary+Kumbhargaon+Bhigwan+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-gold-500 text-gold-500 px-6 py-3 rounded-lg font-medium hover:bg-gold-500 hover:text-earth-950 transition-colors duration-300"
            >
              <span className="material-symbols-outlined">location_on</span>
              View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
