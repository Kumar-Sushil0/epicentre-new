import Image from "next/image";

export default function Accommodation() {
  return (
    <section className="py-24 bg-earth-800 border-t border-earth-700" id="accommodation">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Stay</span>
            <h2 className="text-4xl font-bold text-earth-50">Our Spaces</h2>
          </div>
          <p className="text-earth-300 max-w-md text-right hidden md:block font-body mt-4 md:mt-0">
            From private sanctuaries to communal living, choose the level of solitude that speaks to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-xl cursor-pointer shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <Image
              alt="Spacious private room with minimalist decor"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMEXUIh--EZP5fQBMot7ipsmQCI4w60rUmtgCRCv8ONulpWU6j4OW3PA4o0KwMtwDejXpiV3FqTXgT7nqoXoF607AHGqURe06tVE0AJJHiBNB4j2SnpOgEZPJF0pxIiDKFCMCXMgJNvaxTOEUvwCFdufEX0U71Q97lChwn8BYapAJ7AhXcZyouXA-0N-z17ZVe2XJLlN_HlI52GtQDyehXMU8BVLZgXkkHX6im_VJfSbOxCGyWsr8TyrlTTsuVxyxPSqfBw9r4Y8h"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-2xl font-bold mb-1">Private Suites</h3>
              <p className="text-earth-200 text-sm font-body">Complete seclusion with en-suite facilities.</p>
            </div>
          </div>
          <div className="lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-xl cursor-pointer shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <Image
              alt="Cozy glamping tent structure"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6cp533rD2hQD7h4B-RpKKREBmm3s8x90hpO9pcXHR7Jj_t5Irxlyz92Hrm5LmCpp-_4wiRrD2igTCEBlSvWz9ZSIXh9rLXb5yANk7rWHOHLz7TfkkJfecRmovPUNnrruP-zbpoMFSueAEVvahR4K9I0KbmDplWZyocDTz6ebvHgdNgJ00Jidrk0zs5VuMdNEcRv3opfOO2ADL-3hlSX4BDN7SxBx8qQ3cpIgZhFKbikP7rtaljp_bYwXVa4ZIQrkl0QVmO7YJ4Dfg"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-xl font-bold mb-1">Luxury Tents</h3>
              <p className="text-earth-200 text-sm font-body">Closer to nature, without compromising comfort.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <Image
              alt="Clean dormitory style room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_dFvHyP31JXbQRtNiZIUI94-8e_c0QShxJv1rmygbtridAA9K46Xa3QhUDB7a44eMqsv-s9HFVkx-o6wpN6WzGZo0WpEzDa285WmpQTAGbCzD1Tp-F9gThsXPoSRToC8oFd7uJnGoyIN_Sjm91MvJl0esPwg3ZmjulH3thRT0IQP81wmV2KshhQQAGu7dlmLU4FCvPYpIMWQcOHr_ot6fmFNikZK7soyC-7hY7XhmrrJeGaYljsrGvN5Ph4Zg71ul-P1-OCwhmPEl"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-lg font-bold">Dorms</h3>
              <p className="text-earth-200 text-xs font-body">Shared simplicity.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <Image
              alt="Community hall with cushions"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNDFyy20o-AQkYEp2O4BNf_Wnz1guCpCA4Bk3m648Rjg2YfCdJnHgR9fm5nzNC0F0gIppMLs2N085b7oM_9PopUtIbw38rF_gcp8cte1qkzDEV2s6l5ZdLpyZPP7FAuXW6FRRIp0_r8l7Yuu-A7e1Op1T-SKetBfop6u8yOdUgreDTiOFj2BpfE4rtVk_D-8eQaBDZqL6mkQuDno1Asagcz1c-jI_tRFZ-nQuEECF0HxQ20-2aaellFwYLjOgzVHUi9xoJky4qDIMp"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-lg font-bold">Community Hall</h3>
              <p className="text-earth-200 text-xs font-body">For groups & workshops.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
