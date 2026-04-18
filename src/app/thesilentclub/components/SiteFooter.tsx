import Image from "next/image";

const footerLinks: Record<string, string> = {
  Home: "/thesilentclub/home",
  About: "/thesilentclub/about",
  "The Estate": "/thesilentclub/estate",
  Journal: "/thesilentclub/blogs",
  Events: "/thesilentclub/events",
  FAQ: "/thesilentclub/faq",
  Instagram: "#",
  Substack: "#",
  "Request Invite": "/thesilentclub/daydesigner",
  "Work as Volunteer": "/thesilentclub/volunteer",
  "Host an Event": "/thesilentclub/events",
};

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[#0f0b08]">
      <div className="grid gap-px border-b border-[#2a1f17] bg-[#2a1f17] md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="bg-[#0f0b08] px-7 py-9">
          <a href="/thesilentclub/home" className="mb-2 inline-flex h-10 w-40 items-center">
            <Image
              src="/the-silent-club-logo.png"
              alt="The Silent Club"
              width={200}
              height={75}
              className="h-full w-full object-contain"
            />
          </a>
          <p className="mb-5 text-[10px] tracking-[0.06em] text-[#7a6048]">Silence as a Service · Bhigwan, Pune</p>
          <p className="mb-2.5 text-[11px] font-light leading-[1.5] text-[#b09070]">
            Artist, musician, or experience creator?
          </p>
          <a
            href="/thesilentclub/events"
            className="inline-block border border-[#3a2a1f] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#c5a065]"
          >
            Experiment with us →
          </a>
        </div>

        {[
          {
            heading: "Explore",
            items: ["Home", "About", "The Estate", "Journal", "Events", "FAQ"],
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
            <p className="mb-3.5 text-[9px] uppercase tracking-[0.22em] text-[#7a6048]">{heading}</p>
            {items.map((item) =>
              footerLinks[item] ? (
                <a key={item} href={footerLinks[item]} className="block py-1 text-xs font-light text-[#7a6048]">
                  {item}
                </a>
              ) : (
                <p key={item} className="py-1 text-xs font-light text-[#7a6048]">{item}</p>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-7 py-3.5">
        <p className="text-[10px] tracking-[0.04em] text-[#3a2a1f]">© 2026 The Silent Club. All rights reserved.</p>
        <p className="text-[10px] tracking-[0.04em] text-[#3a2a1f]">Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</p>
        <p className="text-[10px] tracking-[0.04em] text-[#3a2a1f]">A registered initiative of Silent Tourism Foundation.</p>
      </div>
    </footer>
  );
}
