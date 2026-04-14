export function FooterSection() {
  return (
    <footer className="border-t border-[#2a1f17]">
      <div className="grid gap-px border-b border-[#2a1f17] bg-[#2a1f17] md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#0f0b08] p-8">
          <p className="font-serif text-2xl">The Silent Club</p>
          <p className="mt-1 text-xs text-[#7a6048]">Silence as a Service · Bhigwan, Pune</p>
        </div>
        {[
          ["Explore", "Home", "About", "The Estate", "Journal", "FAQ"],
          [
            "Stay",
            "Silence Day Cycle",
            "Residency Weekend",
            "Solitude Weekday",
            "Creation Full Estate",
          ],
          ["Connect", "Instagram", "Substack", "Request Invite", "Host an Event"],
        ].map(([heading, ...items]) => (
          <div key={heading} className="bg-[#0f0b08] p-8">
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">{heading}</p>
            <div className="space-y-1">
              {items.map((item) => (
                <p key={item} className="text-sm text-[#7a6048]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 px-6 py-5 text-xs text-[#7a6048] md:px-10">
        <p>© 2026 The Silent Club. All rights reserved.</p>
        <p>The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</p>
      </div>
    </footer>
  );
}
