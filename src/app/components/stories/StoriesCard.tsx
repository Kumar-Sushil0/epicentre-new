import Image from "next/image";
import Link from "next/link";

interface StoriesCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author?: string;
  date?: string;
  badge?: string;
  href?: string;
}

export default function StoriesCard({ title, description, image, imageAlt, author, date, badge, href }: StoriesCardProps) {
  const CardContent = (
    <article className="group bg-earth-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 border border-transparent hover:border-gold-500/20 cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <Image
          alt={imageAlt}
          src={image}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-800 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-6 relative -mt-12">
        {badge && (
          <div className="bg-gold-500/90 text-earth-950 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 backdrop-blur">
            {badge}
          </div>
        )}
        <h3 className="text-2xl font-bold text-earth-50 mb-2">{title}</h3>
        {(author || date) && (
          <div className="flex items-center gap-4 text-earth-300 text-xs font-mono mb-4">
            {author && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">person</span> {author}
              </span>
            )}
            {date && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">calendar_today</span> {date}
              </span>
            )}
          </div>
        )}
        <p className="text-earth-400 text-sm leading-relaxed font-body">{description}</p>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}
