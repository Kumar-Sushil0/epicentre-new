import { cohorts } from "../content";

export function StfSection() {
  return (
    <section className="stf">
      <div className="stf-idea">
        <div className="stf-idea-left">
          <div className="stf-label">Initiative</div>
          <h2 className="stf-heading">
            Silent Tourism
            <br />
            Foundation
          </h2>
        </div>
        <div className="stf-idea-right">
          <p className="stf-desc">
            An open-source research initiative documenting what happens when silence is made
            structurally accessible — not as a luxury, but as a condition for clearer thinking and
            better living. The findings belong to everyone.
          </p>
          <p
            className="stf-desc"
            style={{
              marginTop: 12,
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              color: "var(--text-3)",
            }}
          >
            The foundation tracks one question across five years and five different kinds of minds —
            what does silence make possible when the conditions are right?
          </p>
          <button className="stf-download" style={{ marginTop: 24 }}>
            Download White Paper →
          </button>
        </div>
      </div>
      <div className="stf-cycle-wrap">
        <h3 className="stf-cycle-heading">The Founding Five-Year Cycle</h3>
        <div className="stf-cycle-desc">
          <p>100 participants each year. Not to scale the system — but to study it without distortion.</p>
          <p>Different lives. Different pressures. Different relationships with silence.</p>
        </div>
        <div className="stf-cohorts-h">
          {cohorts.map(([year, title, desc, open]) => (
            <div className="stf-cohort-h" key={year}>
              <div className="stf-cohort-year-h">{year}</div>
              <div className={`stf-cohort-dot ${open ? "open" : ""}`} />
              <div className="stf-cohort-box-name">{title}</div>
              <div className="stf-cohort-box-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
