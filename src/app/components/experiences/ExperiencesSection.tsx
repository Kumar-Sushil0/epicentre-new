import ExperienceCard from "./ExperienceCard";

interface Experience {
  id?: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  images: string[];
  imageAlt: string;
  aspectRatio: "4/3" | "3/4" | "video";
  minimumGuests?: number;
  minimumGuestsText?: string;
  price?: string;
  href?: string;
}

interface ExperiencesSectionProps {
  id: string;
  title: string;
  experiences: Experience[];
}

export default function ExperiencesSection({ id, title, experiences }: ExperiencesSectionProps) {
  // Split experiences into two columns
  const column1 = experiences.filter((_, index) => index % 2 === 0);
  const column2 = experiences.filter((_, index) => index % 2 === 1);

  return (
    <section id={id} className="scroll-mt-32 mb-24">
      <h2 className="text-3xl md:text-4xl font-display font-medium text-earth-50 mb-12 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Column 1 */}
        <div className="flex flex-col gap-16">
          {column1.map((experience, index) => (
            <ExperienceCard key={experience.id || index} {...experience} />
          ))}
        </div>
        {/* Column 2 (Staggered) */}
        <div className="flex flex-col gap-16 md:mt-32">
          {column2.map((experience, index) => (
            <ExperienceCard key={experience.id || index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
