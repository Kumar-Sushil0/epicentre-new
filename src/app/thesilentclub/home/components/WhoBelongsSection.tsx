import { whoMembers } from "../content";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  whoReviewIndex: number[];
  setWhoReviewIndex: Dispatch<SetStateAction<number[]>>;
};

export function WhoBelongsSection({ whoReviewIndex, setWhoReviewIndex }: Props) {
  return (
    <section className="border-b border-[#2a1f17]">
      <div className="grid gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
        <div>
          <div className="mb-4 h-px w-10 bg-[#8a6e42]" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">
            Who belongs here
          </p>
          <h2 className="font-serif text-4xl">
            Built for people whose
            <br /> best work requires solitude
          </h2>
        </div>
        <p className="text-sm leading-8 text-[#b09070]">
          # This is not a wellness retreat.
          <br /> # Not a co-working space.
          <br /> # Not a place that added the word silence to its marketing.
          <br /> # It is the place that quietly curious people have always needed.
        </p>
      </div>
      <div className="grid gap-px bg-[#2a1f17] md:grid-cols-3">
        {whoMembers.map((member, memberIndex) => (
          <article key={member.type} className="flex flex-col bg-[#0f0b08] p-8">
            <h3 className="mb-3 font-serif text-3xl">{member.type}</h3>
            <p className="mb-7 flex-1 text-sm leading-7 text-[#b09070]">{member.desc}</p>
            <div className="rounded-sm border border-[#2a1f17] bg-[#160f0a] p-4">
              <p className="min-h-[88px] font-serif text-sm italic leading-7 text-[#e8d5b0]">
                {member.reviews[whoReviewIndex[memberIndex]].quote}
              </p>
              <p className="mt-3 text-right text-xs font-medium uppercase tracking-[0.14em] text-[#b09070]">
                {member.reviews[whoReviewIndex[memberIndex]].name}
              </p>
              <div className="mt-4 flex justify-end gap-2">
                {member.reviews.map((review, reviewIndex) => (
                  <button
                    key={review.quote}
                    onClick={() =>
                      setWhoReviewIndex((prev) =>
                        prev.map((value, idx) => (idx === memberIndex ? reviewIndex : value)),
                      )
                    }
                    className={`h-2 w-2 rounded-full transition-all ${
                      whoReviewIndex[memberIndex] === reviewIndex
                        ? "scale-125 bg-[#8a6e42]"
                        : "bg-[#3a2a1f] hover:bg-[#7a6048]"
                    }`}
                    aria-label={`Show review ${reviewIndex + 1} for ${member.type}`}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
