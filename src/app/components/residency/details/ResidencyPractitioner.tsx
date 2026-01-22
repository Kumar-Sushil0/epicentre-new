import Image from "next/image";

export default function ResidencyPractitioner() {
  return (
    <section className="space-y-8" id="practitioners">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Your Guide</span>
      </div>
      <div className="bg-earth-800 rounded-xl overflow-hidden border border-earth-700 shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            alt="Neel Kothari"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgW2JCfQUk6WD7IrZgbpH-HhZ78gEK4Yb__SnaCaVXXfO0790-IVySsIsLDIClfkM2uY2lpKzrnz57Teh49lJe8h_MzJU6o5LAor-XHzM0yB2wQh1gIvdWMGs0GM18aOu-hbH50xvZZgXqd8is_NGa6LOJQZdL5kc36XN1qwYeLT0dO_5yNBz1HQGVDfmL0xyVqW8LnShVfj7IUfO37xXh-LFD9Xosn02Oo3AlYiWBy4PNcxBx3tQEYpHEgvVPybpFeVHcSWkFNwHL"
            fill
            className="object-cover grayscale-[20%] sepia-[10%]"
          />
        </div>
        <div className="md:w-2/3 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-earth-50 mb-2">Neel Kothari</h3>
          <p className="text-gold-500 text-sm font-medium mb-4 uppercase tracking-wider">Lead Practitioner</p>
          <p className="text-earth-300 font-body mb-6 leading-relaxed">
            With over two decades of experience in Vipassana and somatic healing, Neel brings a grounded, non-dogmatic approach to silence. His sessions focus on "active stillness"—teaching residents how to observe the mind without engaging with its chaos.
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-bold bg-earth-900 border border-earth-700 px-3 py-1 rounded text-earth-300">Meditation</span>
            <span className="text-xs font-bold bg-earth-900 border border-earth-700 px-3 py-1 rounded text-earth-300">Somatic Work</span>
            <span className="text-xs font-bold bg-earth-900 border border-earth-700 px-3 py-1 rounded text-earth-300">Breath</span>
          </div>
        </div>
      </div>
    </section>
  );
}
