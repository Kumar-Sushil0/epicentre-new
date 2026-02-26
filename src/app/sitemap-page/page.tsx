import Link from "next/link";

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about-us" },
        { name: "Estate", url: "/venue" },
        { name: "Services", url: "/services" },
        { name: "Stories", url: "/stories" },
      ]
    },
    {
      category: "Information",
      links: [
        { name: "Blogs", url: "/blogs" },
        { name: "Events", url: "/events" },
        { name: "FAQ", url: "/faq" },
        { name: "Contact Us", url: "/contact" },
      ]
    },
    {
      category: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Sitemap", url: "/sitemap-page" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-earth-50 py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display text-earth-950 mb-8">Sitemap</h1>
        <p className="text-earth-600 mb-12 font-body">
          Navigate through all pages of The Silent Club website
        </p>

        <div className="space-y-12">
          {siteStructure.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-earth-200">
              <h2 className="text-2xl font-display text-earth-950 mb-6">{section.category}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.url}
                      className="text-earth-700 hover:text-gold-500 transition-colors font-body flex items-center gap-2 group"
                    >
                      <span className="material-symbols-outlined text-sm text-earth-400 group-hover:text-gold-500">arrow_forward</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-earth-100 rounded-lg">
          <h3 className="text-xl font-display text-earth-950 mb-4">Need Help?</h3>
          <p className="text-earth-700 font-body mb-4">
            If you can't find what you're looking for, please don't hesitate to contact us.
          </p>
          <div className="space-y-2 text-sm text-earth-600 font-body">
            <p><strong>Email:</strong> hello@thesilent.club</p>
            <p><strong>Phone:</strong> +91 98903 22494</p>
          </div>
        </div>
      </div>
    </div>
  );
}
