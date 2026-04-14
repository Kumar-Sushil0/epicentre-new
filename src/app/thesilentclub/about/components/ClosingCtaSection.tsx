type Props = {
  onOpenModal: () => void;
};

export function ClosingCtaSection({ onOpenModal }: Props) {
  return (
    <section className="closing-cta">
      <div className="closing-quote">
        "Unfinished thinking takes up space like a thief.
        <br />
        <em style={{ color: "var(--gold)" }}>It robs you of the moment you're actually in.</em>"
      </div>
      <button className="closing-btn" onClick={onOpenModal}>
        Request Invite →
      </button>
      <div className="closing-sub">Two questions. A short conversation. Your first invite.</div>
    </section>
  );
}
