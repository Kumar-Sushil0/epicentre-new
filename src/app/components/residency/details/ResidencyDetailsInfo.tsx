interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

interface ResidencyDetailsInfoProps {
  infoItems: InfoItem[];
}

export default function ResidencyDetailsInfo({ infoItems }: ResidencyDetailsInfoProps) {
  // Function to format description with bullet points if it contains •
  const formatDescription = (description: string) => {
    if (description.includes('•')) {
      const items = description.split('•').filter(item => item.trim());
      return (
        <div className="space-y-2 text-left">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-gold-500 mt-1">•</span>
              <span>{item.trim()}</span>
            </div>
          ))}
        </div>
      );
    }
    return <p className="text-earth-300 text-sm text-left">{description}</p>;
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-earth-900">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start text-left p-6 border-r-0 ${
              (index + 1) % 3 !== 0 ? 'md:border-r' : ''
            } border-dashed border-earth-700`}
          >
            <div className="text-gold-500 mb-4">
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-earth-50 text-lg font-bold mb-2">{item.title}</h3>
            <div className="text-earth-300 text-sm w-full">
              {formatDescription(item.description)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
