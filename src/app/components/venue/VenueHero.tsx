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
          <h1 className="text-earth-50 text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-2xl">
            Spaces at <span className="italic text-gold-500">The Silent Club</span>
          </h1>
          <div className="h-1 w-24 bg-gold-500 mb-2 mx-auto sm:mx-0"></div>
          <h2 className="text-earth-300 text-xl md:text-2xl font-light italic leading-relaxed max-w-2xl">
            Designed for different states of attention.
          </h2>
          <p className="text-earth-300/80 text-lg font-body leading-relaxed max-w-2xl mt-4">
            Each space exists to support a specific way of being — alone, together, moving, or still. They are simple, flexible, and held without programming.
          </p>
        </div>
      </div>
    </section>
  );
}
