import Image from "next/image";

export default function Dining() {
  return (
    <section className="py-24 bg-earth-900" id="dining">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Nourishment</span>
          <h2 className="text-3xl font-bold text-earth-50">Wholesome Dining</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="flex gap-6 group">
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-earth-700">
                <Image
                  alt="Home cooked meal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 py-1 border-b border-earth-800 group-hover:border-gold-500 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-earth-100">Satvik Home Food</h3>
                  <span className="text-gold-500 text-sm font-medium">Daily</span>
                </div>
                <p className="text-earth-300 text-sm font-body line-clamp-2">
                  Locally sourced, organic vegetarian meals prepared with mindfulness. Light on the stomach, rich for the soul.
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-earth-700">
                <Image
                  alt="Sushi platter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 py-1 border-b border-earth-800 group-hover:border-gold-500 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-earth-100">Sushi Experience</h3>
                  <span className="text-gold-500 text-sm font-medium">Weekend Special</span>
                </div>
                <p className="text-earth-300 text-sm font-body line-clamp-2">
                  A touch of zen culinary art. Fresh, vegetarian sushi rolls made in-house for a unique dining texture.
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-earth-700">
                <Image
                  alt="Wood fired pizza"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 py-1 border-b border-earth-800 group-hover:border-gold-500 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-earth-100">Wood-Fired Pizza</h3>
                  <span className="text-gold-500 text-sm font-medium">Wed & Fri</span>
                </div>
                <p className="text-earth-300 text-sm font-body line-clamp-2">
                  Gather around our clay oven for rustic, thin-crust pizzas topped with garden-fresh herbs and cheese.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden relative shadow-2xl border border-earth-700">
            <Image
              alt="Communal dining table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS9cVLuUfAK9LC6TU2t5Fy8YWjcodkyfPsbXD-qPNPKIUN_NDHQtef45vFHIGgKTf6Rt0DIYTDftRJ3RZ1n59ZEvn0uP4LRqHqzRBwjnb-Q4iTWm6qu-8WNNMg241THentdnSdOPJ4MGAcgkHyTwZxA3Jz9uH110lgezEFMNu6rxhTvJL6Ci5McHsiXA8TS0klRlA6yENDeBJckTkx0q-TwyDUZjM11mRzn7vc0zWNwuyid6OVbEcdzw3xwR_jHQ4kR_671VGGSN1_"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6 backdrop-blur-sm bg-earth-900/40 rounded-xl border border-earth-100/10">
                <h3 className="text-2xl font-bold mb-2 text-earth-50">Communal Dining</h3>
                <p className="text-sm font-body text-earth-100">Meals are shared. Conversations are gentle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
