import WellnessCard from "./WellnessCard";

interface WellnessPractice {
  title: string;
  description: string;
  category: string;
  icon: string;
  images: string[];
  imageAlt: string;
  aspectRatio: "4/5" | "wide" | "farm";
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
        <WellnessCard key={index} {...practice} />
      ))}
    </div>
  );
}
