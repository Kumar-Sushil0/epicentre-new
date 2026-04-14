import { navLinks } from "../content";

export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a1f17] bg-[#0f0b08]/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6">
        <a
          href="/thesilentclub/home"
          className="font-serif text-lg transition-colors hover:text-[#c5a065]"
        >
          The Silent Club
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] text-[#7a6048] transition-colors hover:text-[#c5a065]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/book-a-call"
          className="bg-[#c5a065] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a]"
        >
          Request Invite →
        </a>
      </div>
    </nav>
  );
}
