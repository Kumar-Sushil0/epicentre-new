import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
  const experiences = [
    {
      title: "Solitude",
      description: "Structured silent hours and guided practices to help declutter the mind and reconnect with inner stillness.",
      href: "/solitude",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
      imageAlt: "Moody shot of a simple wooden fishing rod resting by a misty water's edge",
    },
    {
      title: "Expression",
      description: "Discover your authentic voice through creative practices in writing, language play, and artistic reflection.",
      href: "/expression",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
      imageAlt: "Close up of scattered vintage letters or notebook pages with scribbles",
    },
    {
      title: "Residency",
      description: "7-day immersive retreats for deep work, renewal, and structured periods of withdrawal from modern noise.",
      href: "/residency",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwCob9OLts6qzhSrAp3eGecAESNXcyBepcvKiD43IYeSQeZnKWVuCMxf2Em1PtMNEYmxk31bHbccgtnM7PlImtP3GGqHD8EkAwnRQ-0xJaDkpbAZlq87zjDkcVEyia-I8Qof9KGapcrL8UBqCCp5MUlsZ_xwtnbC3yH02WXO6nOH4VaPmqgUhGy5ji8U2Kd_cROe0lJLPalg7mRvnccU_ZlrTAQuU9IuFXmr4DuqqLNotB-Ey-0kbqiReB8HUzw2-yYrArpRYEVc-",
      imageAlt: "Meditation cushion in a peaceful setting",
    },
    {
      title: "Wellness",
      description: "Movement, mindfulness, and outdoor activities designed for self-paced exertion and reconnection with nature.",
      href: "/wellness",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
      imageAlt: "Person lifting weights in a dark moody gym setting",
    },
  ];

  return (
    <section className="py-24 bg-earth-800 border-t border-earth-700" id="experiences">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Activities</span>
          <h2 className="text-3xl font-bold text-earth-50">Curated Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience) => (
            <Link key={experience.href} href={experience.href} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] border border-earth-700">
                <Image
                  alt={experience.imageAlt}
                  src={experience.image}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-earth-100 group-hover:text-gold-500 transition-colors">
                {experience.title}
              </h3>
              <p className="text-sm text-earth-300 font-body">{experience.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
