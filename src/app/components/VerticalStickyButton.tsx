"use client";

import Link from "next/link";

interface VerticalStickyButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function VerticalStickyButton({
  text,
  onClick,
  href,
  className = "",
}: VerticalStickyButtonProps) {

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // If href is provided, navigate normally
      window.location.href = href;
    } else {
      // Default: navigate to events page
      window.location.href = "/events";
    }
  };

  const buttonClasses = `
    fixed right-0 top-1/2 -translate-y-1/2 z-50
    bg-earth-900/95 text-earth-50 
    px-2 py-2 
    rounded-l-lg 
    shadow-md shadow-black/20
    border-l border-gold-500/40
    hover:border-gold-500
    hover:bg-earth-800
    transition-all duration-300
    cursor-pointer
    group
    ${className}
  `;

  const buttonStyle = {
    writingMode: "vertical-rl" as const,
    textOrientation: "mixed" as const,
  };

  // If it's just a link without custom onClick, use Link component
  if (!onClick && (href || !href)) {
    const linkHref = href || "/events";
    return (
      <Link href={linkHref}>
        <div className={buttonClasses} style={buttonStyle}>
          <span className="font-medium tracking-wider text-[10px] uppercase whitespace-nowrap">
            {text}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div className={buttonClasses} style={buttonStyle} onClick={handleButtonClick}>
      <span className="font-medium tracking-wider text-[10px] uppercase whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
