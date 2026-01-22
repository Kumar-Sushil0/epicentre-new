import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  description: string;
  time: string;
  icon: string;
  image: string;
  imageAlt: string;
  aspectRatio: "4/3" | "3/4" | "video";
}

export default function ExperienceCard({ title, description, time, icon, image, imageAlt, aspectRatio }: ExperienceCardProps) {
  const aspectClass =
    aspectRatio === "4/3" ? "aspect-[4/3]" : aspectRatio === "3/4" ? "aspect-[3/4]" : "aspect-video";

  return (
    <div className="group cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-xl bg-earth-800 mb-4 shadow-2xl">
        <div className={`w-full ${aspectClass} relative`}>
          <Image
            alt={imageAlt}
            src={image}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 to-transparent opacity-60"></div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-gold-500 text-sm">{icon}</span>
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest font-body">{time}</span>
        </div>
        <h3 className="text-earth-50 text-2xl font-medium font-display group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-earth-300 text-base font-body">{description}</p>
      </div>
    </div>
  );
}
