import Image from "next/image";

type HeaderPage = "home" | "about" | "estate" | "faq" | "journal";

type Props = {
  active?: HeaderPage;
};

const links: { id: HeaderPage; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "/thesilentclub/home" },
  { id: "about", label: "About", href: "/thesilentclub/about" },
  { id: "estate", label: "The Estate", href: "/thesilentclub/estate" },
  { id: "faq", label: "FAQ", href: "/thesilentclub/faq" },
  { id: "journal", label: "Journal", href: "/thesilentclub/blogs" },
];

export function SiteHeader({ active = "home" }: Props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a1f17] bg-[#0f0b08]/95 backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-4 md:px-6">
        <a href="/thesilentclub/home" className="flex h-10 w-40 items-center justify-center">
          <Image
            src="/the-silent-club-logo.png"
            alt="The Silent Club"
            width={200}
            height={75}
            className="object-contain"
            priority
          />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                  active === link.id
                    ? "text-[#c5a065]"
                    : "text-[#7a6048] hover:text-[#c5a065]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/book-a-call"
          className="inline-flex h-10 items-center bg-[#c5a065] px-4 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a]"
        >
          Request Invite →
        </a>
      </div>
    </nav>
  );
}
