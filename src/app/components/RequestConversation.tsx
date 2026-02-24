'use client';

import { usePathname } from 'next/navigation';

const whatsappNumber = '919890322494';

interface RequestConversationProps {
  message?: string;
  pageName?: string;
}

export default function RequestConversation({ message, pageName }: RequestConversationProps) {
  const pathname = usePathname();
  
  // Generate page name from pathname if not provided
  const getPageName = () => {
    if (pageName) return pageName;
    if (message) return null; // If custom message provided, use it as is
    
    // Extract page name from pathname
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';
    
    // Capitalize and format the last segment
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const finalMessage = message || `Hey I saw the ${getPageName()} page on your website im interesed`;
  const whatsappMessage = encodeURIComponent(finalMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-8 px-4 md:px-16 bg-earth-950">
      <div className="text-center mb-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-6 py-2"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Request a conversation
        </a>
      </div>
        {/* Bottom Notice */}
        <div className="text-center ">
          <p className="text-earth-300 text-xs md:text-sm leading-snug max-w-full mx-auto px-4">
            Access is based on alignment with the nature of the estate.
          </p>
        </div>
    </section>
  );
}
