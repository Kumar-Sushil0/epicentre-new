import { providesSlides, stripItems } from "../content";
import type { Dispatch, SetStateAction } from "react";

type SlideIndex = {
  spaces: number;
  food: number;
  activities: number;
};

type Props = {
  provideSlideIndex: SlideIndex;
  setProvideSlideIndex: Dispatch<SetStateAction<SlideIndex>>;
};

export function ProvidesSection({ provideSlideIndex, setProvideSlideIndex }: Props) {
  return (
    <section className="border-y border-[#2a1f17]">
      <div className="grid gap-8 border-b border-[#2a1f17] px-6 py-16 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">
            What the estate provides
          </p>
          <h2 className="font-serif text-4xl">
            Everything included.
            <br />
            Nothing to decide.
          </h2>
        </div>
        <p className="text-sm leading-8 text-[#b09070]">
          Every stay includes accommodation, all meals, and full access to the estate and
          activities.
          <br /> <em className="font-serif text-[#e8d5b0]">There is nothing to add.</em>
        </p>
      </div>
      <div className="grid gap-6 px-6 py-8 md:px-10 lg:grid-cols-3">
        {[
          {
            key: "spaces" as const,
            heading: "Spaces to sit, think & withdraw",
            cards: providesSlides.spaces,
          },
          {
            key: "food" as const,
            heading: "Food that doesn't demand attention",
            cards: providesSlides.food,
          },
          {
            key: "activities" as const,
            heading: "Environments that regulate, not stimulate",
            cards: providesSlides.activities,
          },
        ].map(({ key, heading, cards }) => {
          const activeIndex = provideSlideIndex[key];
          const card = cards[activeIndex];
          return (
            <div
              key={heading}
              className="overflow-hidden rounded-sm border border-[#2a1f17] bg-[#0f0b08]"
            >
              <p className="border-b border-[#2a1f17] px-6 py-4 font-serif text-lg">{heading}</p>
              <div className="relative aspect-[4/3] bg-[#1c1410]">
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08]/90 via-[#0f0b08]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-2xl">{card.name}</p>
                  <p className="mt-1 text-xs text-[#b09070]">{card.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-[#2a1f17] px-6 py-3">
                {cards.map((slide, idx) => (
                  <button
                    key={slide.name}
                    onClick={() =>
                      setProvideSlideIndex((prev) => ({
                        ...prev,
                        [key]: idx,
                      }))
                    }
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === activeIndex ? "scale-125 bg-[#8a6e42]" : "bg-[#3a2a1f]"
                    }`}
                    aria-label={`Show ${slide.name}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid gap-px bg-[#2a1f17] sm:grid-cols-2 lg:grid-cols-4">
        {stripItems.map((item) => (
          <div key={item.name} className="bg-[#160f0a] p-6">
            <p className="mb-1 font-serif text-xl">{item.name}</p>
            <p className="text-xs text-[#7a6048]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
