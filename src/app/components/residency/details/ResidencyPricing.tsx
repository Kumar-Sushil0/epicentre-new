interface PricingRow {
  category: string;
  occupancy: string;
  price: string;
  isHighlighted?: boolean;
}

export default function ResidencyPricing() {
  const pricing: PricingRow[] = [
    { category: "Luxury Tent", occupancy: "Single", price: "₹70,800", isHighlighted: true },
    { category: "Private Suite", occupancy: "Single", price: "₹90,800" },
    { category: "Shared Dorm", occupancy: "Per Bed", price: "₹45,000" },
  ];

  return (
    <section className="space-y-8" id="prices">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500"></span>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Investment</span>
      </div>
      <h2 className="text-3xl font-bold text-earth-50">Residency Pricing</h2>
      <div className="overflow-hidden border border-earth-700 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-earth-800 text-earth-100 border-b border-earth-700">
              <th className="p-4 font-bold">Room Category</th>
              <th className="p-4 font-bold">Occupancy</th>
              <th className="p-4 font-bold text-right">Price (INR)</th>
            </tr>
          </thead>
          <tbody className="text-earth-300 text-sm font-body">
            {pricing.map((row, index) => (
              <tr
                key={index}
                className={`${index < pricing.length - 1 ? "border-b border-earth-700/50" : ""} hover:bg-earth-800/30 transition-colors`}
              >
                <td className="p-4">{row.category}</td>
                <td className="p-4">{row.occupancy}</td>
                <td className={`p-4 text-right font-bold ${row.isHighlighted ? "text-gold-500" : "text-earth-100"}`}>
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-earth-300/60 italic font-body">* Prices include all taxes and meals for 7 days.</p>
    </section>
  );
}
