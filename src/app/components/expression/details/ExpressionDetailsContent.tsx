interface HowItWorksItem {
  title: string;
  description: string;
}

interface WhatWeProvideItem {
  title: string;
  description: string;
}

interface DesignConstraint {
  icon: string;
  title: string;
  description: string;
}

interface ExpressionDetailsContentProps {
  intro: string;
  whatItIs: string;
  howItWorks: HowItWorksItem[];
  whatWeProvide: WhatWeProvideItem[];
  designConstraints: DesignConstraint[];
}

export default function ExpressionDetailsContent({
  intro,
  whatItIs,
  howItWorks,
  whatWeProvide,
  designConstraints,
}: ExpressionDetailsContentProps) {
  return (
    <div className="lg:col-span-7 space-y-16 pt-10 lg:pt-0">
      <div>
        <p className="text-xl leading-relaxed text-earth-50/90 font-display mb-8 border-l-2 border-gold-500 pl-6">{intro}</p>
      </div>
      <div className="group">
        <h3 className="flex items-center gap-3 text-2xl font-bold text-earth-50 mb-4 font-display">
          <span className="material-symbols-outlined text-gold-500">auto_stories</span>
          What it is
        </h3>
        <p className="text-earth-50/70 leading-loose font-body">{whatItIs}</p>
      </div>
      <div className="group">
        <h3 className="flex items-center gap-3 text-2xl font-bold text-earth-50 mb-4 font-display">
          <span className="material-symbols-outlined text-gold-500">schedule</span>
          How it works
        </h3>
        <ul className="space-y-4 text-earth-50/70 font-body leading-relaxed">
          {howItWorks.map((item, index) => (
            <li key={index} className="flex gap-4">
              <span className="block w-1.5 h-1.5 mt-2.5 rounded-full bg-gold-500 flex-shrink-0"></span>
              <span>
                <strong>{item.title}:</strong> {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h3 className="flex items-center gap-3 text-2xl font-bold text-earth-50 mb-4 font-display">
          <span className="material-symbols-outlined text-gold-500">coffee</span>
          What we provide
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whatWeProvide.map((item, index) => (
            <div key={index} className="bg-earth-800 p-4 rounded border border-earth-700">
              <h4 className="text-earth-50 font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-earth-50/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="group bg-earth-800/30 p-8 border-l-4 border-earth-700 rounded-r-lg">
        <h3 className="flex items-center gap-3 text-xl font-bold text-gold-500 mb-4 font-display">
          <span className="material-symbols-outlined">block</span>
          Design Constraints
        </h3>
        <p className="text-earth-50/70 mb-4 font-body text-sm uppercase tracking-wider font-bold">Strictly Enforced</p>
        <div className="space-y-4">
          {designConstraints.map((constraint, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-earth-50/40 text-lg pt-1">{constraint.icon}</span>
              <div>
                <strong className="text-earth-50 block">{constraint.title}</strong>
                <span className="text-earth-50/60 text-sm">{constraint.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
