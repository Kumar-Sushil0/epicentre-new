"use client";

export default function VenueCategoryNav() {
  const categories = [
    { id: "collective", label: "Collective" },
    { id: "intimate", label: "Intimate" },
    { id: "physical", label: "Physical" },
    { id: "creative", label: "Creative" },
    { id: "living", label: "Living" },
    { id: "nature", label: "Nature" },
  ];

  return (
    <nav className="sticky top-[72px] z-40 bg-earth-950/95 backdrop-blur border-b border-earth-700 shadow-xl overflow-x-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10">
        <div className="flex whitespace-nowrap min-w-full sm:justify-center">
          {categories.map((category) => (
            <a
              key={category.id}
              className="group flex items-center justify-center border-b-2 border-transparent hover:border-gold-500 py-4 px-6 transition-all"
              href={`#${category.id}`}
            >
              <span className="text-earth-300 group-hover:text-earth-50 text-sm font-bold tracking-wide font-body">
                {category.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
