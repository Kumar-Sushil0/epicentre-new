import Link from "next/link";

interface ResidencyCardProps {
  category: string;
  title: string;
  description: string;
  speakers?: string[];
  checkIn?: string;
  checkOut?: string;
  href?: string;
}

export default function ResidencyCard({ category, title, description, speakers, checkIn, checkOut, href = "#" }: ResidencyCardProps) {
  return (
    <div className="bg-earth-800 border border-earth-700 p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 flex flex-col">
      <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">{category}</span>
      <h3 className="text-2xl font-display text-earth-50 mb-3">{title}</h3>

      {speakers && speakers.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {speakers.map((speaker, idx) => (
            <span key={idx} className="text-xs text-earth-400 bg-earth-700/50 px-3 py-1 rounded-full">
              {speaker}
            </span>
          ))}
        </div>
      )}

      <p className="text-earth-300 mb-6 font-light leading-relaxed font-body flex-grow">{description}</p>

      <div className="flex items-center justify-between gap-4 pt-4 border-t border-earth-700">
        <Link className="inline-flex items-center text-gold-500 font-bold text-sm hover:gap-2 transition-all flex-shrink-0" href={href}>
          Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
        </Link>

        {checkIn && checkOut && (
          <div className="flex flex-col gap-1 text-xs text-earth-400 flex-shrink-0 items-end">
            <span className="whitespace-nowrap">
              <span className="font-medium">Checkin:</span> {checkIn}
            </span>
            <span className="whitespace-nowrap">
              <span className="font-medium">Checkout:</span> {checkOut}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
