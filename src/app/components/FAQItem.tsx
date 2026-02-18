"use client";

interface FAQItemProps {
  question: string;
  answer: string;
  category?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, category, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-earth-900/50 rounded-lg border border-earth-800 overflow-hidden transition-all duration-300 hover:border-earth-700">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-3 px-4 text-left hover:bg-earth-900/70 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-sm md:text-base font-normal text-earth-100 leading-relaxed">
            {question}
          </h3>
        </div>
        <span 
          className={`material-symbols-outlined text-2xl text-earth-400 transition-transform duration-300 ml-4 ${
            isOpen ? 'rotate-180 text-gold-500' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-3 border-t border-earth-800/50">
          <div className="pt-3 text-earth-300/80 leading-relaxed font-light whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}