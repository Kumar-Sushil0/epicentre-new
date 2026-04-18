const footerLinks: Record<string, string> = {
  "Home": "/thesilentclub/home",
  "About": "/thesilentclub/about",
  "The Estate": "/thesilentclub/estate",
  "Journal": "/thesilentclub/blogs",
  "FAQ": "/thesilentclub/faq",
  "Request Invite": "/thesilentclub/daydesigner",
  "Work as Volunteer": "/thesilentclub/volunteer",
};

export function SiteFooter() {
  return (
    <footer className="border-t border-[#2a1f17] bg-[#0f0b08]">
      <div className="grid gap-px border-b border-[#2a1f17] bg-[#2a1f17] md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#0f0b08] p-8">
          <p className="font-serif text-2xl text-[#e8d5b0]">The Silent Club</p>
          <p className="mt-1 text-xs text-[#7a6048]">Silence as a Service · Bhigwan, Pune</p>
          <div className="mt-6 border border-[#3a2a1f] p-4">
            <p className="text-xs text-[#7a6048] leading-relaxed mb-2">
              Artist, musician, or experience creator? Host an event here.
            </p>
            <a href="/thesilentclub/events" className="text-[0.6rem] uppercase tracking-[0.14em] text-[#8a6e42] hover:text-[#c5a065] transition-colors">
              Collaborate with us →
            </a>
          </div>
        </div>

        {[
          {
            heading: "Explore",
            items: ["Home", "About", "The Estate", "Journal", "FAQ"],
          },
          {
            heading: "Stay",
            items: ["Silence Day Cycle", "Residency Weekend", "Solitude Weekday", "Creation Full Estate"],
          },
          {
            heading: "Connect",
            items: ["Instagram", "Substack", "Request Invite", "Work as Volunteer", "Host an Event"],
          },
        ].map(({ heading, items }) => (
          <div key={heading} className="bg-[#0f0b08] p-8">
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">{heading}</p>
            <div className="space-y-1">
              {items.map((item) =>
                footerLinks[item] ? (
                  <a key={item} href={footerLinks[item]} className="block text-sm text-[#7a6048] hover:text-[#c5a065] transition-colors py-0.5">
                    {item}
                  </a>
                ) : (
                  <p key={item} className="text-sm text-[#7a6048] py-0.5">{item}</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-[56px] py-4">
        <p className="text-xs text-[#7a6048]">© 2026 The Silent Club. All rights reserved.</p>
        <p className="text-xs text-[#7a6048]">The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</p>
        <p className="text-xs text-[#7a6048]">A registered initiative of Silent Tourism Foundation.</p>
      </div>
    </footer>
  );
}
