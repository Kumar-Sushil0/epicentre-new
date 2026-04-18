import { faqItems } from "../content";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  openFaq: number | null;
  setOpenFaq: Dispatch<SetStateAction<number | null>>;
};

export function FaqSection({ openFaq, setOpenFaq }: Props) {
  return (
    <section className="grid gap-y-12 border-y border-[#2a1f17] px-[56px] py-20 md:grid-cols-[1fr,1.8fr] md:gap-x-[100px]">
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">Before you come</p>
        <h2 className="mb-4 font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.02]">
          <span className="block whitespace-nowrap">Most people arrive with questions.</span>
          <em className="block text-[#c5a065]">Few leave with the same ones.</em>
        </h2>
        <p className="max-w-[54ch] text-sm leading-[1.8] text-[#7a6048]">
          Everything you need to know before you arrive — from what to pack to what to expect on day four.
          Read through at your own pace. If a question isn't answered here, it probably gets answered by the
          experience itself.
        </p>
      </div>
      <div>
        {faqItems.map((item, index) => {
          const open = openFaq === index;
          return (
            <div key={item.q} className="border-b border-[#2a1f17] first:border-t first:border-[#2a1f17]">
              <button
                className={`flex w-full items-start justify-between gap-6 py-5 text-left font-serif text-[1.15rem] leading-[1.3] transition-colors ${
                  open ? "text-[#e8d5b0]" : "text-[#b09070] hover:text-[#e8d5b0]"
                }`}
                onClick={() => setOpenFaq(open ? null : index)}
              >
                <span>{item.q}</span>
                <span className={`mt-1 text-[#8a6e42] transition-transform ${open ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`${open ? "max-h-80" : "max-h-0"} overflow-hidden transition-all duration-300`}
              >
                <p className="pb-6 pr-6 text-[0.9rem] leading-[1.85] text-[#d4c4a8] md:pr-12">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
        <div className="mt-8">
          <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#8a6e42] transition-colors hover:text-[#c5a065]">
            More FAQ
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
