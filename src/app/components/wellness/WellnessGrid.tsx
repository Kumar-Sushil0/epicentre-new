import CarouselCard from "../CarouselCard";

interface WellnessPractice {
  title: string;
  description: string;
  category: string;
  icon: string;
  images: string[];
  imageAlt: string;
  // Keeping these in interface to avoid type errors from parent, but ignoring them in render
  aspectRatio?: any;
  spanColumns?: number;
  isFarmCard?: boolean;
  href?: string;
}

interface WellnessGridProps {
  practices: WellnessPractice[];
}

export default function WellnessGrid({ practices }: WellnessGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {practices.map((practice, index) => (
        <CarouselCard
          key={index}
          title={practice.title}
          description={practice.description}
          images={practice.images}
          icon={practice.icon}
          category={practice.category}
        />
      ))}
    </div>
  );
}
