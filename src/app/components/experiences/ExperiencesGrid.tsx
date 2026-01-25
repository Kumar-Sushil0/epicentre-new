import ExperienceCard from "./ExperienceCard";

interface Experience {
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

interface ExperiencesGridProps {
  experiences: Experience[];
}

export default function ExperiencesGrid({ experiences }: ExperiencesGridProps) {
  // Split experiences into two columns
  // Column 1: experiences at indices 0, 2, 4 (1st, 3rd, 5th)
  // Column 2: experiences at indices 1, 3, 5 (2nd, 4th, 6th) - staggered
  const column1 = experiences.filter((_, index) => index % 2 === 0);
  const column2 = experiences.filter((_, index) => index % 2 === 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      {/* Column 1 */}
      <div className="flex flex-col gap-16">
        {column1.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
      {/* Column 2 (Staggered) */}
      <div className="flex flex-col gap-16 md:mt-32">
        {column2.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
