interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

interface SolitudeDetailsInfoProps {
  infoItems: InfoItem[];
}

export default function SolitudeDetailsInfo({ infoItems }: SolitudeDetailsInfoProps) {
  return (
    <section className="px-4 md:px-10 lg:px-40 py-12 bg-earth-900">
      <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border-r-0 md:border-r border-dashed border-earth-700 last:border-r-0"
          >
            <div className="text-gold-500 mb-4">
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-earth-50 text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-earth-300 text-sm" dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
        ))}
      </div>
    </section>
  );
}
