import Image from "next/image";

const footerLinks: Record<string, string> = {
  Home: "/",
  About: "/about",
  "The Estate": "/estate",
  Journal: "/blogs",
  Events: "/events",
  FAQ: "/faq",
  Instagram: "#",
  Substack: "#",
  "Request Invite": "/daydesigner",
  "Work as Volunteer": "/thesilentclub/volunteer",
  "Host an Event": "/thesilentclub/hostevent",
};

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[#0f0b08]">
      <div className="grid gap-px border-b border-[#2a1f17] bg-[#2a1f17] md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="flex h-full flex-col bg-[#0f0b08] px-7 py-9">
          <a href="/" className="mb-2 inline-flex h-12 w-44 items-center">
            <Image
              src="/the-silent-club-logo.png"
              alt="The Silent Club"
              width={200}
              height={75}
              className="h-full w-full object-contain"
            />
          </a>
          <p className="text-sm font-bold text-[#7a6048]">Silence as a Service · Bhigwan, Pune</p>
          <div className="mt-4 h-px w-full bg-[#2a1f17]" />

          <div className="mt-auto pt-5">
            <p className="mb-3 text-sm font-bold leading-[1.5] text-[#7a6048]">
              Artist, musician, or experience creator?
            </p>
            <a
              href="/thesilentclub/creator"
              className="inline-block border border-[#3a2a1f] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c5a065]"
            >
              Experiment with us →
            </a>
          </div>
        </div>

        {[
          {
            heading: "Explore",
            items: ["Home", "The Estate", "About", "Events", "Journal", "FAQ"],
          },
          {
            heading: "Stay",
            items: ["Day Cycle", "Weekend Cycle", "Weekday Cycle", "Full Cycle"],
          },
          {
            heading: "Connect",
            items: ["Instagram", "Substack", "Request Invite", "Work as Volunteer", "Host an Event"],
          },
        ].map(({ heading, items }) => (
          <div key={heading} className="bg-[#0f0b08] px-7 py-9">
            <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.22em] text-[#e8d5b0]">{heading}</p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>
                  {footerLinks[item] ? (
                    <a
                      href={footerLinks[item]}
                      className="group flex w-fit items-center gap-2 py-1 text-sm font-bold text-[#7a6048] transition-colors duration-200 hover:text-[#c5a065]"
                    >
                      {item}
                      <span className="h-px w-0 bg-[#c5a065] transition-all duration-200 group-hover:w-3" />
                    </a>
                  ) : (
                    <p className="py-1 text-sm font-bold text-[#7a6048]">{item}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-7 py-3.5">
        <p className="text-[10px] tracking-[0.04em] text-[#b09070]">© 2026 The Silent Club. All rights reserved.</p>
        <p className="text-[10px] tracking-[0.04em] text-[#b09070]">Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</p>
        <p className="text-[10px] tracking-[0.04em] text-[#b09070]">A registered initiative of Silent Tourism Foundation.</p>
      </div>
    </footer>
  );
}
