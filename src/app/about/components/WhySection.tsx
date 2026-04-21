import { accordionItems } from "../content";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  openAcc: string;
  setOpenAcc: Dispatch<SetStateAction<string>>;
};

export function WhySection({ openAcc, setOpenAcc }: Props) {
  return (
    <section className="why-section">
      <div className="why-header">
        <div className="why-header-main">
          <div className="why-tag-line" />
          <div className="why-label">The thinking behind it</div>
          <h2 className="why-heading" style={{ whiteSpace: "nowrap" }}>
            Why it's built the way it is
          </h2>
          <div className="why-intro" style={{ marginTop: 12 }}>
            Four questions. The honest answers to each one are what became The Silent Club.
          </div>
        </div>
      </div>
      <div className="accordion">
        {accordionItems.map((item) => {
          const isOpen = openAcc === item.id;
          return (
            <div key={item.id} className={`acc-item ${isOpen ? "open" : ""}`}>
              <button className="acc-trigger" onClick={() => setOpenAcc(isOpen ? "" : item.id)}>
                <div className="acc-num-title">
                  <div className="acc-num">{item.num}</div>
                  <div className="acc-sep">—</div>
                  <div className="acc-title">{item.title}</div>
                </div>
                <div className="acc-icon">+</div>
              </button>
              <div className="acc-body">
                <div className="acc-body-inner">
                  <div className="acc-body-text">
                    {item.body.map((p, idx) => (
                      <p key={p} style={{ marginBottom: idx === item.body.length - 1 ? 0 : 16 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
