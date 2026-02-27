import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 md:px-16">
      <ol className="flex items-center gap-2 text-sm">
        {/* Home Link */}
        <li>
          <Link 
            href="/" 
            className="text-earth-400 hover:text-gold-500 transition-colors"
          >
            Home
          </Link>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center gap-2">
              {/* Separator */}
              <span className="text-earth-600">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-earth-600"
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {/* Link or Current Page */}
              {isLast ? (
                <span 
                  className="text-gold-500 font-normal" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-earth-400 hover:text-gold-500 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
