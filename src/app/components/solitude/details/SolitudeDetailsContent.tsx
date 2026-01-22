interface ProvisionItem {
  title: string;
  description: string;
}

interface SolitudeDetailsContentProps {
  title: string;
  description: string[];
  provisioningTitle: string;
  provisioningSubtitle: string;
  provisions: ProvisionItem[];
}

export default function SolitudeDetailsContent({
  title,
  description,
  provisioningTitle,
  provisioningSubtitle,
  provisions,
}: SolitudeDetailsContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold text-earth-50 font-display">{title}</h3>
        {description.map((para, index) => (
          <p key={index} className="text-earth-300 leading-relaxed text-lg">
            {para}
          </p>
        ))}
      </div>
      <div className="h-px w-full bg-earth-700"></div>
      <div className="flex flex-col gap-6">
        <h4 className="text-xl font-bold text-earth-50 font-display">{provisioningTitle}</h4>
        <p className="text-sm text-earth-400 font-body">{provisioningSubtitle}</p>
        <div className="space-y-4">
          {provisions.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-earth-800 border border-earth-700">
              <span className="material-symbols-outlined text-gold-500 mt-0.5">check_circle</span>
              <div>
                <p className="text-earth-50 font-medium">{item.title}</p>
                <p className="text-xs text-earth-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
