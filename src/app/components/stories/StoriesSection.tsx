import StoriesCard from "./StoriesCard";

interface Story {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author?: string;
  date?: string;
  badge?: string;
  href?: string;
}

interface StoriesSectionProps {
  id: string;
  title: string;
  icon: string;
  stories: Story[];
  expanded: boolean;
  onToggle: () => void;
}

export default function StoriesSection({ id, title, icon, stories, expanded, onToggle }: StoriesSectionProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <StoriesCard key={index} {...story} />
          ))}
        </div>
      )}
    </section>
  );
}
