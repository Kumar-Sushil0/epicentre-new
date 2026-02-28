interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

import Image from "next/image";

interface ExpressionDetailsTestimonialsProps {
  testimonials: Testimonial[];
  images: Array<{ src: string; alt: string; label: string }>;
}

export default function ExpressionDetailsTestimonials({ testimonials, images }: ExpressionDetailsTestimonialsProps) {
  return (
    <section className="py-24 bg-earth-950 border-t border-earth-700">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-500 text-sm font-bold uppercase tracking-widest font-body mb-4 block">
              The Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-earth-50 mb-10 font-display">What people usually notice</h2>
            <div className="space-y-10">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="relative pl-8">
                  <span className="absolute top-0 left-0 text-6xl text-earth-700 font-display leading-none opacity-50">"</span>
                  <p className="text-xl md:text-2xl text-earth-50/80 font-display italic leading-relaxed">{testimonial.quote}</p>
                  <footer className="mt-4 text-sm text-gold-500 font-body font-bold">
                    — {testimonial.author}, {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="relative bg-earth-800 h-64 rounded-lg overflow-hidden shadow-xl">
                <Image
                  alt={images[0]?.alt || ""}
                  src={images[0]?.src || ""}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100"
                />
              </div>
              <div className="p-4">
                <p className="text-earth-50/50 text-xs font-body uppercase tracking-widest text-right">{images[0]?.label || ""}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4">
                <p className="text-earth-50/50 text-xs font-body uppercase tracking-widest">{images[1]?.label || ""}</p>
              </div>
              <div className="relative bg-earth-800 h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  alt={images[1]?.alt || ""}
                  src={images[1]?.src || ""}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
