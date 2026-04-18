import { depthCards, type DepthId } from "../content";
import type { Dispatch, SetStateAction } from "react";

type DepthVariant = {
  residency: "dorm" | "room";
  solitude: "dorm" | "room";
  creation: "weekday" | "weekend";
};

type Props = {
  selectedDepth: DepthId | null;
  setSelectedDepth: Dispatch<SetStateAction<DepthId | null>>;
  depthVariant: DepthVariant;
  setDepthVariant: Dispatch<SetStateAction<DepthVariant>>;
  depthLabel: string;
  getDepthPrice: (id: DepthId) => { price: string; note: string };
  onOpenModal: () => void;
};

export function DepthSection({
  selectedDepth,
  setSelectedDepth,
  depthVariant,
  setDepthVariant,
  depthLabel,
  getDepthPrice,
  onOpenModal,
}: Props) {
  return (
    <section className="border-y border-[#2a1f17]">
      <div className="border-b border-[#2a1f17] px-[56px] py-16 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">
          Choose your depth
        </p>
        <h2 className="font-serif text-4xl">The environment stays the same. The depth changes.</h2>
      </div>
      <div className="grid gap-px bg-[#2a1f17] lg:grid-cols-4">
        {depthCards.map((card) => {
          const selected = selectedDepth === card.id;
          const pricing = getDepthPrice(card.id);
          return (
            <article
              key={card.id}
              onClick={() => setSelectedDepth(card.id)}
              className={`flex cursor-pointer flex-col border-b-2 p-7 transition ${
                selected ? "border-[#c5a065] bg-[#160f0a]" : "border-transparent bg-[#0f0b08]"
              }`}
            >
              <p className="mb-4 font-serif text-4xl text-[#3a2a1f]">{card.num}</p>
              <h3 className="font-serif text-3xl">{card.name}</h3>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-[#b09070]">
                {card.cycle}
              </p>
              <p className="mb-5 text-sm text-[#7a6048]">{card.forText}</p>
              <ul className="mb-5 space-y-2 text-sm text-[#7a6048]">
                {card.features.map((feature) => (
                  <li key={feature} className="border-b border-[#2a1f17] pb-2">
                    — {feature}
                  </li>
                ))}
              </ul>
              {card.id === "residency" && (
                <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                  {(["dorm", "room"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setDepthVariant((state) => ({ ...state, residency: key }));
                      }}
                      className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                        depthVariant.residency === key
                          ? "bg-[#8a6e42] text-[#0f0b08]"
                          : "bg-[#1c1410] text-[#7a6048]"
                      }`}
                    >
                      {card.toggles[key].label}
                    </button>
                  ))}
                </div>
              )}
              {card.id === "solitude" && (
                <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                  {(["dorm", "room"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setDepthVariant((state) => ({ ...state, solitude: key }));
                      }}
                      className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                        depthVariant.solitude === key
                          ? "bg-[#8a6e42] text-[#0f0b08]"
                          : "bg-[#1c1410] text-[#7a6048]"
                      }`}
                    >
                      {card.toggles[key].label}
                    </button>
                  ))}
                </div>
              )}
              {card.id === "creation" && (
                <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                  {(["weekday", "weekend"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setDepthVariant((state) => ({ ...state, creation: key }));
                      }}
                      className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                        depthVariant.creation === key
                          ? "bg-[#8a6e42] text-[#0f0b08]"
                          : "bg-[#1c1410] text-[#7a6048]"
                      }`}
                    >
                      {card.toggles[key].label}
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-auto pt-2">
                <p className="font-serif text-3xl text-[#c5a065]">{pricing.price}</p>
                <p className="text-xs font-medium text-[#b09070]">{pricing.note}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#160f0a] px-[56px] py-6">
        <p className="font-serif italic text-[#7a6048]">
          {selectedDepth ? (
            <>
              You've selected{" "}
              <span className="not-italic text-[#e8d5b0]">
                {depthLabel.replace("You've selected ", "")}
              </span>
            </>
          ) : (
            depthLabel
          )}
        </p>
        <button
          disabled={!selectedDepth}
          onClick={() => { if (selectedDepth) onOpenModal(); }}
          className="bg-[#c5a065] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f0b08] disabled:cursor-not-allowed disabled:bg-[#3a2a1f] disabled:text-[#7a6048]"
        >
          Request Invite →
        </button>
      </div>
    </section>
  );
}
