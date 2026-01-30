"use client";

import Image from "next/image";

export default function DiningVariant() {
  const items = [
    {
      id: 0,
      title: "Satvik Home Food",
      description: "Locally sourced vegetarian meals. Light, steady, and uncomplicated. Available Daily.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2",
    },
    {
      id: 1,
      title: "Fresh Harvest",
      description: "Smoothies, Shakes, Sandwiches & Salads. Freshly prepared, farm-led meals shared without excess. (Wed & Fri)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5",
    },
    {
      id: 2,
      title: "Weekend Specials",
      description: "Wood-Fired Pizza, Barbeque & Sushi. Occasional, restrained cooking practices. Minimal, balanced, and unhurried.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d",
    },
  ];

  return (
    <section className="py-24 bg-earth-900" id="dining">
      <div className="max-w-full mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gold-500" style={{ fontFamily: 'Trirong, serif' }}>Food</h2>
          <p className="text-earth-300 font-body text-lg max-w-full">
            Food here is designed to support steadiness and attention. It is familiar, seasonal, and shared.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative h-[450px] rounded-xl overflow-hidden bg-gold-500 border border-earth-800/50 shadow-xl"
            >
              {/* Background Content (Hidden behind image initially) */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-end p-8 pb-10">
                <h4 className="text-xl font-bold text-earth-950 mb-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.title}</h4>
                <p className="text-earth-900 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {item.description}
                </p>
              </div>

              {/* Foreground Image Layer */}
              <div className="absolute inset-0 z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-[40%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay on Image for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Title overlay on the image (Visible initially) */}
                <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-2xl font-bold text-white font-serif drop-shadow-md">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
