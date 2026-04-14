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
        <div>
          <div className="why-label">The thinking behind it</div>
          <h2 className="why-heading">
            Why it's built
            <br />
            the way it is
          </h2>
        </div>
        <div className="why-intro">
          Four questions. The honest answers to each one are what became The Silent Club.
        </div>
      </div>
      <div className="accordion">
        {accordionItems.map((item) => {
          const isOpen = openAcc === item.id;
          return (
            <div key={item.id} className={`acc-item ${isOpen ? "open" : ""}`}>
              <button className="acc-trigger" onClick={() => setOpenAcc(isOpen ? "" : item.id)}>
                <div className="acc-num">{item.num}</div>
                <div className="acc-title">{item.title}</div>
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
