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
}

export default function StoriesSection({ id, title, icon, stories }: StoriesSectionProps) {
  return (
    <section className="scroll-mt-32" id={id}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-500 tracking-tight" style={{ fontFamily: 'Trirong, serif' }}>{title}</h2>
        <div className="h-[1px] bg-earth-700 flex-grow"></div>
        <span className="material-symbols-outlined text-gold-500 text-3xl">{icon}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <StoriesCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
}
