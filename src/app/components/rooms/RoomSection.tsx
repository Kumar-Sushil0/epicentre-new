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
  return (
    <section className="scroll-mt-32 group" id={id}>
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-earth-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 ${
            imagePosition === "right" 
              ? "bg-gradient-to-l from-black/90 via-black/50 to-transparent" 
              : "bg-gradient-to-r from-black/90 via-black/50 to-transparent"
          }`} />
        </div>

        {/* Badge */}
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

        {/* Content Overlay */}
        <div className={`absolute inset-0 p-8 flex ${imagePosition === "right" ? "justify-end" : "justify-start"} items-center`}>
          <div className={`flex flex-col gap-6 max-w-lg ${imagePosition === "right" ? "text-right" : "text-left"}`}>
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className={`flex items-center gap-2 text-gold-500/80 uppercase tracking-widest text-xs font-bold ${imagePosition === "right" ? "justify-end" : "justify-start"}`}>
                {number} / {category}
              </div>
              <h2 className="text-gold-500 text-4xl font-bold leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
              <p className="text-[#e7dfd3] text-base leading-relaxed font-light font-body">{description}</p>
            </div>

            {/* Features */}
            {features && (
              <div className="border-t border-gold-500/30 pt-4">
                {featuresStyle === "grid" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-3 text-sm text-[#e7dfd3] ${imagePosition === "right" ? "justify-end" : "justify-start"}`}>
                        {imagePosition === "right" ? (
                          <>
                            <span>{feature.text}</span>
                            <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                            <span>{feature.text}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {featuresStyle === "list" && (
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-3 text-sm text-[#e7dfd3] ${imagePosition === "right" ? "justify-end" : "justify-start"}`}>
                        {imagePosition === "right" ? (
                          <>
                            <span>{feature.text}</span>
                            <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-gold-500 text-lg">{feature.icon}</span>
                            <span>{feature.text}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Special Features */}
            {specialFeatures && (
              <div className="border-t border-gold-500/30 pt-4">
                <div className="flex flex-col gap-3">
                  {specialFeatures.map((feature, idx) => (
                    <div key={idx} className={`flex items-start gap-3 ${imagePosition === "right" ? "justify-end" : "justify-start"}`}>
                      {imagePosition === "right" ? (
                        <>
                          <div className="text-right">
                            <h4 className="text-[#e7dfd3] text-sm font-bold">{feature.title}</h4>
                            <p className="text-xs text-[#e7dfd3]/80 mt-1 font-body">{feature.description}</p>
                          </div>
                          <span className="material-symbols-outlined text-gold-500 mt-0.5">{feature.icon}</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-gold-500 mt-0.5">{feature.icon}</span>
                          <div>
                            <h4 className="text-[#e7dfd3] text-sm font-bold">{feature.title}</h4>
                            <p className="text-xs text-[#e7dfd3]/80 mt-1 font-body">{feature.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlight Box */}
            {highlightBox && (
              <div className="relative p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-gold-500/30">
                <h4 className="text-[#e7dfd3] font-bold text-lg mb-2">{highlightBox.title}</h4>
                <p className="text-[#e7dfd3]/80 text-sm mb-3 font-body">{highlightBox.description}</p>
                {highlightBox.linkText && highlightBox.linkHref && (
                  <Link
                    href={highlightBox.linkHref}
                    className="text-gold-500 underline decoration-gold-500 underline-offset-4 text-sm font-medium hover:text-gold-400 transition-colors"
                  >
                    {highlightBox.linkText}
                  </Link>
                )}
              </div>
            )}

            {/* Buttons */}
            {buttons && (
              <div className={`flex flex-col sm:flex-row gap-3 ${imagePosition === "right" ? "justify-end" : "justify-start"}`}>
                {buttons.map((button, idx) => (
                  <Link
                    key={idx}
                    href={button.href || "#"}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                      button.variant === "primary"
                        ? "bg-gold-500 text-earth-950 hover:bg-gold-400"
                        : "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-950"
                    }`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
