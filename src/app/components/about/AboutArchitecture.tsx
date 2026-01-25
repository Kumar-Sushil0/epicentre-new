export default function AboutArchitecture() {
  return (
    <section className="py-24 bg-earth-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-earth-50 text-3xl md:text-5xl font-bold mb-6">Built to Recede</h2>
            <p className="text-earth-50/70 font-body text-lg">
              The structures at The Silent Club are meant to disappear into the landscape.
            </p>
            <p className="text-earth-50/70 font-body text-lg mt-4">
              Built with local stone and simple forms, they exist to support attention—not claim it.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-gold-500/40 text-6xl rotate-90">architecture</span>
          </div>
        </div>
        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {/* Large Image */}
          <div className="md:col-span-8 row-span-1 md:row-span-2 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDR_PVj57JzDf6nyJ_wmrzvPIF2apWWMS0aZUxvm-ILbl6V_Jy7D8w6STV_VtLHVmVxnasetbRn_DVzyUCG5F_8bhJZZeSJDVsa-PjdvMCTNAUlqYtWmaTdfwcEDeQmayPBEAF_tQrc4RGEc_E2lwk-Cm_mDPi7KxdXnv7TsCHFL5x7xUoYXCjl8F1Yi7SxX5EVJO5FTlT7GgVFd2weg4sINS1TmYMKu_k9QkUC50r1Js6Z4TaAE3vjIifLkLlhN7vfu0YaDjv7sAes')",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-earth-50 text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded">The Stone Corridor</p>
            </div>
          </div>
          {/* Small Image 1 */}
          <div className="md:col-span-4 row-span-1 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9IK9biEwJ1LmFR0SHiZblWaSPKUwUSW80xtjZ3x75mwT_s4jbsYT0qwAO7wTpE42KsU30deQnNdZVX0vZkSrOXUCLDPN2QlYTpBGW24jsbXdw8hevFUj7Q-V2gIXn5NMB86Hj5p6BYOdohsR4_-XX_7H6ciYzFimw9C40qgB3CkukQijRVfkgDYTZG_ZzQ7UCxu6fda6Wv5luRy0kKJoCSZrIYftsZdQFTLx04CnKYAe-IWE6byeaDOzQVY-HScfhmgFCdnqfbzlU')",
              }}
            ></div>
          </div>
          {/* Small Image 2 */}
          <div className="md:col-span-4 row-span-1 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLHNJj-QKIC8MJJnKXzcxZLCcf9Cn4-pNlV7V6M4ZZspTWyDyI-EbGWmnH6AWN5teQpoVfS0WbYd7u7OszyRGrjOKAEcqGMOrIznhJTfL-dARJJYc44monVpkaO3hSGAj_rUVJwNzYAyOe6IT0V8hpQ1YMC5tFKB9jN69w5Qia5DKeg5M-nPaqrdFRhk50SjAvKp7TWNj2okWUtGzJtKrldpXdbmShBSZOamBW1BVIkoRiF4cAsBJa_AsQE30eDhFTiI37Ff3bQ-wn')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
