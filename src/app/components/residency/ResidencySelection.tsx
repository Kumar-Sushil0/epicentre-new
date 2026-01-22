import Image from "next/image";

export default function ResidencySelection() {
  return (
    <section className="py-24 bg-earth-900 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto h-[500px] border border-earth-700">
          <Image
            alt="Tranquil workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 to-transparent"></div>
          <div className="absolute bottom-10 left-10">
            <p className="text-earth-50 font-display italic text-xl">The Study, Room 14</p>
          </div>
        </div>
        <div>
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block">The Selection Process</span>
          <h2 className="text-3xl font-display text-earth-50 mb-6">Intentional Groupings</h2>
          <p className="text-earth-300 leading-relaxed mb-8 font-body">
            To ensure the quality of deep work, each residency is limited to 12 participants. Applicants are selected based on their specific interest in the residency question and their commitment to the shared silent hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-earth-100">
              <span className="material-symbols-outlined text-gold-500">done_all</span>
              <span className="font-body">Full board vegetarian meals included</span>
            </div>
            <div className="flex items-center gap-4 text-earth-100">
              <span className="material-symbols-outlined text-gold-500">done_all</span>
              <span className="font-body">Private workstation for every resident</span>
            </div>
            <div className="flex items-center gap-4 text-earth-100">
              <span className="material-symbols-outlined text-gold-500">done_all</span>
              <span className="font-body">Curated physical reading materials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
