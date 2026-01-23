import Image from "next/image";
import Link from "next/link";

interface WellnessCardProps {
  title: string;
  description: string;
  category: string;
  icon: string;
  image: string;
  imageAlt: string;
  aspectRatio: "4/5" | "wide" | "farm";
  spanColumns?: number;
  isFarmCard?: boolean;
  href?: string;
}

export default function WellnessCard({
  title,
  description,
  category,
  icon,
  image,
  imageAlt,
  aspectRatio,
  spanColumns,
  isFarmCard,
  href,
}: WellnessCardProps) {
  const aspectClass =
    aspectRatio === "4/5"
      ? "aspect-[4/5]"
      : aspectRatio === "wide"
      ? "aspect-[16/10] md:aspect-[2/1.33] lg:aspect-[2/1.25]"
      : "aspect-[16/9] lg:aspect-[4/3]";

  const getColSpanClass = () => {
    if (!spanColumns) return "";
    if (spanColumns === 2) return "md:col-span-2";
    if (spanColumns === 3) return "md:col-span-2 lg:col-span-3";
    return "";
  };
  
  const colSpanClass = getColSpanClass();

  if (isFarmCard) {
    const FarmCardContent = (
      <div className={`group flex flex-col gap-4 relative ${colSpanClass} lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 bg-white/5 rounded-xl p-0 lg:pr-8 overflow-hidden cursor-pointer`}>
        <div className={`${aspectClass} w-full overflow-hidden relative`}>
          <Image
            alt={imageAlt}
            src={image}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 lg:p-0">
          <div className="flex items-center gap-2 text-gold-500">
            <span className="material-symbols-outlined text-lg">{icon}</span>
            <span className="text-xs uppercase tracking-widest font-body">{category}</span>
          </div>
          <h3 className="text-3xl lg:text-4xl text-earth-50 font-medium">{title}</h3>
          <p className="text-earth-300/60 leading-relaxed text-base max-w-md font-body">{description}</p>
          <div className="pt-4">
            <button className="text-earth-50 border-b border-gold-500/50 hover:border-gold-500 pb-1 text-sm font-medium transition-colors font-body">
              Read about our harvest
            </button>
          </div>
        </div>
      </div>
    );

    if (href) {
      return <Link href={href}>{FarmCardContent}</Link>;
    }
    return FarmCardContent;
  }

  const RegularCardContent = (
    <div className={`group flex flex-col gap-4 relative ${colSpanClass} cursor-pointer`}>
      <div className={`${aspectClass} w-full overflow-hidden rounded-lg bg-earth-800 relative`}>
        <Image
          alt={imageAlt}
          src={image}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gold-500">
          <span className="material-symbols-outlined text-lg">{icon}</span>
          <span className="text-xs uppercase tracking-widest font-body">{category}</span>
        </div>
        <h3 className="text-2xl text-earth-50 font-medium">{title}</h3>
        <p className="text-earth-300/60 leading-relaxed text-sm font-body">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{RegularCardContent}</Link>;
  }
  return RegularCardContent;
}
