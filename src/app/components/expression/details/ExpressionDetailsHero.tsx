interface ExpressionDetailsHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function ExpressionDetailsHero({ title, subtitle, image }: ExpressionDetailsHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/70 via-earth-950/50 to-earth-950 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
      <div className="relative z-20 container px-16 text-center max-w-4xl pt-10">
        <div className="flex flex-col items-center gap-6">
          <span className="px-3 py-1 border border-gold-500/40 rounded-full text-xs font-body tracking-widest text-gold-500 uppercase bg-earth-950/50 backdrop-blur-sm">
            Expression Practice
          </span>
          <h1 className="text-earth-50 text-5xl md:text-7xl font-black leading-none tracking-tight drop-shadow-xl font-display">
            {title}
          </h1>
          <div className="w-24 h-[1px] bg-gold-500/80 my-2"></div>
          <p className="text-earth-50/90 text-xl md:text-2xl font-light italic leading-relaxed max-w-2xl font-display drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
