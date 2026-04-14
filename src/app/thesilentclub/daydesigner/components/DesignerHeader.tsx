type Props = {
  stepClass: (n: number) => string;
  onBackToSite: () => void;
};

export function DesignerHeader({ stepClass, onBackToSite }: Props) {
  return (
    <>
      <div className="hdr">
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem" }}>The Silent Club</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem" }}>Design Your Day</div>
        <button className="btn-g" onClick={onBackToSite}>← Back to site</button>
      </div>

      <div className="steps">
        <div className={stepClass(1)}><div className="step-n">1</div>Choose your stay</div>
        <div className={stepClass(2)}><div className="step-n">2</div>How to design</div>
        <div className={stepClass(3)} style={{ borderRight: "none" }}><div className="step-n">3</div>Design your days</div>
      </div>
    </>
  );
}
