export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}) {
  return (
    <div className="bg-earth-800 rounded-2xl overflow-hidden border border-earth-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[25/20] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold-500/90 backdrop-blur-sm text-earth-950 rounded-full text-xs font-normal">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-3 mb-3 text-sm text-earth-400">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span>{date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-normal text-gold-500 mb-3 leading-tight group-hover:text-gold-400 transition-colors line-clamp-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-earth-300 text-sm leading-relaxed font-body mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-gold-500 text-sm font-normal group-hover:gap-3 transition-all">
          <span>Read More</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </div>
      </div>
    </div>
  );
}
