import ResidencyCard from "./ResidencyCard";

interface Residency {
  category: string;
  title: string;
  description: string;
  speakers?: string[];
  checkIn?: string;
  checkOut?: string;
  href?: string;
}

interface ResidencyGridProps {
  residencies: Residency[];
}

export default function ResidencyGrid({ residencies }: ResidencyGridProps) {
  return (
    <section className="py-10 bg-earth-950">
      <div className="w-full px-16">
        <div className="mb-16">
          <h2 className="text-gold-500 text-3xl font-medium mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Available Immersions</h2>
          <p className="text-earth-300 font-body">Choose your path of inquiry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residencies.map((residency, index) => (
            <ResidencyCard key={index} {...residency} />
          ))}
        </div>
      </div>
    </section>
  );
}
