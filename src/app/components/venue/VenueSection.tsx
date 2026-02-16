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
  expanded: boolean;
  onToggle: () => void;
  introText?: string;
  usedFor?: string;
  closingText?: string;
}

export default function VenueSection({ id, title, icon, venues, expanded, onToggle, introText, usedFor, closingText }: VenueSectionProps) {
  return (
    <section className="scroll-mt-32" id={id}>
      <div 
        className={`flex items-center gap-4 cursor-pointer ${expanded ? 'mb-8' : ''}`} 
        onClick={onToggle}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gold-500 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
        <div className="h-[1px] bg-earth-700 flex-grow"></div>
        <span className="material-symbols-outlined text-gold-500 text-3xl">{icon}</span>
        <button className="text-gold-500 hover:text-gold-400 transition-colors">
          <span className="material-symbols-outlined text-3xl">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>
      {expanded && (
        <>
          {/* Introductory Text */}
          {(introText || usedFor || closingText) && (
            <div className="mb-8 space-y-4">
              {introText && (
                <p className="text-earth-300 text-base leading-relaxed">
                  {introText}
                </p>
              )}
              {usedFor && (
                <p className="text-earth-300 text-base leading-relaxed">
                  <span className="text-gold-500">Used for:</span> {usedFor}
                </p>
              )}
              {closingText && (
                <p className="text-earth-300 text-base italic border-t border-earth-700 pt-4 mt-4">
                  {closingText}
                </p>
              )}
            </div>
          )}
          
          {/* Venue Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <VenueCard key={index} {...venue} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
