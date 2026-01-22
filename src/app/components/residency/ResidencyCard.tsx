import Link from "next/link";

interface ResidencyCardProps {
  category: string;
  title: string;
  description: string;
  href?: string;
}

export default function ResidencyCard({ category, title, description, href = "#" }: ResidencyCardProps) {
  return (
    <div className="bg-earth-800 border border-earth-700 p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
      <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">{category}</span>
      <h3 className="text-2xl font-display text-earth-50 mb-4">{title}</h3>
      <p className="text-earth-300 mb-8 font-light leading-relaxed font-body">{description}</p>
      <Link className="inline-flex items-center text-gold-500 font-bold text-sm hover:gap-2 transition-all" href={href}>
        Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
      </Link>
    </div>
  );
}
