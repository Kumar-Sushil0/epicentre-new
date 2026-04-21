export function ClosingCtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="closing-cta">
      <div className="closing-quote">
        "Unfinished thinking takes up space like a thief.
        <br />
        <em style={{ color: "var(--gold)" }}>It robs you of the moment you're actually in.</em>"
      </div>
      <button onClick={onOpenModal} className="closing-btn">
        Request Invite →
      </button>
      <div className="closing-sub">Two questions. A short conversation. Your first invite.</div>
    </section>
  );
}
