type Props = {
  stepClass: (n: number) => string;
  onBackToSite: () => void;
  stepOneLabel?: string;
  stepTwoLabel?: string;
};

export function DesignerHeader({
  stepClass,
  onBackToSite,
  stepOneLabel = "Choose your stay",
  stepTwoLabel = "How to design",
}: Props) {
  return (
    <>
      <div className="hdr">
        <div />
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem" }}>Design Your Day</div>
        <button className="btn-g" onClick={onBackToSite}>← Back to site</button>
      </div>

      <div className="steps">
        <div className={stepClass(1)}><div className="step-n">1</div>{stepOneLabel}</div>
        <div className={stepClass(2)}><div className="step-n">2</div>{stepTwoLabel}</div>
        <div className={stepClass(3)} style={{ borderRight: "none" }}><div className="step-n">3</div>Design your days</div>
      </div>
    </>
  );
}
