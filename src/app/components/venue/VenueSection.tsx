import VenueCard from "./VenueCard";

interface Venue {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  area: string;
  capacity: string;
  badge?: string;
  href?: string;
}

interface VenueSectionProps {
  id: string;
  title: string;
  icon: string;
  venues: Venue[];
}

export default function VenueSection({ id, title, icon, venues }: VenueSectionProps) {
  return (
    <section className="scroll-mt-32" id={id}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
        <div className="h-[1px] bg-earth-700 flex-grow"></div>
        <span className="material-symbols-outlined text-gold-500 text-3xl">{icon}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </div>
    </section>
  );
}
