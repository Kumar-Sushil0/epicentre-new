import ExpressionPillarCard from "./ExpressionPillarCard";

interface Pillar {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  icon: string;
  href?: string;
}

interface ExpressionPillarsProps {
  pillars: Pillar[];
}

export default function ExpressionPillars({ pillars }: ExpressionPillarsProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-earth-950">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-earth-700 pb-4">
          <div>
            <h3 className="text-gold-500 text-sm font-bold uppercase tracking-widest font-body mb-2">Our Pillars</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>The Silent Club Method</h2>
          </div>
          <div className="hidden md:block text-earth-50/50 text-sm font-body">Curated spaces for every stage of expression.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <ExpressionPillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
