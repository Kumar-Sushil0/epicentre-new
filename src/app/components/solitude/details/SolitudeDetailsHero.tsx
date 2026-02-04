interface SolitudeDetailsHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function SolitudeDetailsHero({ title, subtitle, image }: SolitudeDetailsHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 25, 17, 0.4) 0%, rgba(33, 25, 17, 1) 100%), url('${image}')`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col gap-4 text-center px-16 max-w-4xl">
        <span className="text-gold-500 font-body text-sm font-bold tracking-widest uppercase mb-2">Solitude Series</span>
        <h1 className="text-earth-50 text-5xl md:text-7xl font-black leading-tight tracking-tight font-display">{title}</h1>
        <div className="h-px w-24 bg-gold-500 mx-auto my-2"></div>
        <h2 className="text-earth-200 text-lg md:text-xl font-normal leading-relaxed italic max-w-lg mx-auto">"{subtitle}"</h2>
      </div>
    </section>
  );
}
