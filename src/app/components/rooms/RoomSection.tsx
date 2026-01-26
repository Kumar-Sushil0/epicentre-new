import Image from "next/image";
import Link from "next/link";

interface RoomSectionProps {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  features?: Array<{ icon: string; text: string }>;
  featuresStyle?: "grid" | "list";
  specialFeatures?: Array<{ icon: string; title: string; description: string }>;
  badge?: { text: string; position: "top-left" | "top-right" | "bottom-left" | "bottom-right" };
  highlightBox?: { title: string; description: string; linkText?: string; linkHref?: string };
  buttons?: Array<{ text: string; href?: string; variant: "primary" | "secondary" }>;
}

export default function RoomSection({
  id,
  number,
  category,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  features,
  featuresStyle = "grid",
  specialFeatures,
  badge,
  highlightBox,
  buttons,
}: RoomSectionProps) {
  const imageComponent = (
    <div className="w-full xl:w-7/12 aspect-[4/3] relative overflow-hidden rounded-lg group">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
      <Image alt={imageAlt} src={image} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      {badge && (
        <div className={`absolute ${badge.position === "top-left" ? "top-4 left-4" : badge.position === "top-right" ? "top-4 right-4" : badge.position === "bottom-left" ? "bottom-4 left-4" : "bottom-4 right-4"} z-20`}>
          <span
            className={`text-xs px-3 py-1 rounded-full ${badge.position === "top-right"
              ? "bg-gold-500 text-earth-950 font-bold uppercase tracking-wider shadow-lg"
              : "bg-black/50 backdrop-blur-md text-earth-100 border border-white/10 flex items-center gap-1"
              }`}
          >
            {badge.position === "bottom-left" && <span className="material-symbols-outlined text-[14px]">photo_camera</span>}
            {badge.text}
          </span>
        </div>
      )}
    </div>
  );

  const contentComponent = (
    <div className="flex flex-col gap-8 xl:w-5/12 xl:sticky xl:top-32 self-start">
      {features ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-2 text-gold-500/80 uppercase tracking-widest text-xs font-bold">
              {number} / {category}
            </div>
            <h2 className="text-earth-50 text-4xl font-bold leading-tight">{title}</h2>
            <p className="text-earth-300 text-base leading-loose font-light font-body">{description}</p>
          </div>

          {featuresStyle === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-earth-700 py-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-earth-100/90">
                  <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          )}

          {featuresStyle === "list" && (
            <ul className="space-y-3 border-t border-b border-earth-700 py-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-earth-100/90">
                  <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          )}

          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, idx) => (
                <Link
                  key={idx}
                  href={button.href || "#"}
                  className="text-sm text-earth-200 hover:text-gold-500 underline underline-offset-4 transition-colors duration-300"
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-2 text-gold-500/80 uppercase tracking-widest text-xs font-bold">
            {number} / {category}
          </div>
          <h2 className="text-earth-50 text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-earth-300 text-base leading-loose font-light font-body">{description}</p>
        </div>
      )}

      {!features && buttons && (
        <div className="flex flex-col sm:flex-row gap-4">
          {buttons.map((button, idx) => (
            <Link
              key={idx}
              href={button.href || "#"}
              className="text-sm text-earth-200 hover:text-gold-500 underline underline-offset-4 transition-colors duration-300"
            >
              {button.text}
            </Link>
          ))}
        </div>
      )}

      {specialFeatures && (
        <div className="flex flex-col gap-3 border-l-2 border-earth-700 pl-6 py-2">
          {specialFeatures.map((feature, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${idx > 0 ? "mt-4" : ""}`}>
              <span className="material-symbols-outlined text-gold-500 mt-0.5">{feature.icon}</span>
              <div>
                <h4 className="text-earth-50 text-sm font-bold">{feature.title}</h4>
                <p className="text-xs text-earth-300 mt-1 font-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {highlightBox && (
        <div className="relative p-6 bg-earth-700 rounded-lg mt-2 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">local_cafe</span>
          </div>
          <h4 className="text-earth-50 font-bold text-lg mb-2 relative z-10">{highlightBox.title}</h4>
          <p className="text-earth-300 text-sm relative z-10 mb-4 font-body">{highlightBox.description}</p>
          {highlightBox.linkText && highlightBox.linkHref && (
            <Link
              href={highlightBox.linkHref}
              className="text-earth-50 underline decoration-gold-500 underline-offset-4 text-sm font-medium hover:text-gold-500 transition-colors relative z-10"
            >
              {highlightBox.linkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section className="scroll-mt-32 group" id={id}>
      <div
        className={`flex flex-col ${imagePosition === "right" ? "xl:flex-row-reverse" : "xl:flex-row"} gap-10 xl:gap-16 items-start`}
      >
        {imageComponent}
        {contentComponent}
      </div>
    </section>
  );
}
