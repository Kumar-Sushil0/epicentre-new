import Link from "next/link";

interface SolitudePracticeProps {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonIcon: string;
  imagePosition?: "left" | "right";
  practiceId: string;
}

export default function SolitudePractice({
  number,
  category,
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonIcon,
  imagePosition = "right",
  practiceId,
}: SolitudePracticeProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <article className="flex flex-col max-w-[1200px] mx-auto w-full group">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Image Side */}
        <div className={`w-full lg:w-[60%] ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay z-10"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url("${image}")` }}
              role="img"
              aria-label={imageAlt}
            ></div>
          </div>
        </div>
        {/* Text Side */}
        <div className={`flex flex-1 flex-col gap-6 ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
          <div className="flex flex-col gap-3 border-l-2 border-gold-500/30 pl-6">
            <span className="text-gold-500 text-xs font-bold tracking-[0.15em] uppercase">
              {number}. {category}
            </span>
            <h2 className="text-earth-50 text-4xl font-bold leading-tight font-display">{title}</h2>
            <p className="text-earth-50/70 text-lg font-light leading-relaxed font-body">{description}</p>
          </div>
          <div className="pl-6">
            <Link
              href={`/solitude/details?id=${practiceId}`}
              className="flex items-center gap-2 text-gold-500 hover:text-earth-50 transition-colors duration-300 group/btn w-fit"
            >
              <span className="text-sm font-bold tracking-wider uppercase border-b border-transparent group-hover/btn:border-earth-50 pb-0.5">
                {buttonText}
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                {buttonIcon}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
