type Props = {
  scrolled: boolean;
  onOpenModal: () => void;
};

export function TopNav({ scrolled, onOpenModal }: Props) {
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="/thesilentclub/home">
          The Silent Club
        </a>
        <ul className="nav-links">
          <li>
            <a href="/thesilentclub/home">Home</a>
          </li>
          <li>
            <a href="/thesilentclub/about" className="active">
              About
            </a>
          </li>
          <li>
            <a href="/thesilentclub/estate">The Estate</a>
          </li>
          <li>
            <a href="/thesilentclub/faq">FAQ</a>
          </li>
          <li>
            <a href="/blogs">Journal</a>
          </li>
        </ul>
        <button className="nav-cta" onClick={onOpenModal}>
          Request Invite →
        </button>
      </div>
    </nav>
  );
}
