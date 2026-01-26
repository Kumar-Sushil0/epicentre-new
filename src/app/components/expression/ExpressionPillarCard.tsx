import Image from "next/image";
import Link from "next/link";

interface ExpressionPillarCardProps {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  icon: string;
  href?: string;
}

export default function ExpressionPillarCard({ title, description, image, imageAlt, icon, href = "#" }: ExpressionPillarCardProps) {
  return (
    <div className="group flex flex-col bg-earth-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
        <Image
          alt={imageAlt}
          src={image}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 bg-earth-950/80 backdrop-blur p-2 rounded-full text-gold-500">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1 border-t border-earth-700">
        <h3 className="text-2xl font-bold text-earth-50 mb-3 group-hover:text-gold-500 transition-colors">{title}</h3>
        <p className="text-earth-300 text-base leading-relaxed font-body mb-6 flex-1">{description}</p>
        <Link className="inline-flex items-center text-sm font-bold text-gold-500 tracking-wide uppercase hover:text-earth-50 transition-colors gap-2" href={href}>
          Discover More <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
