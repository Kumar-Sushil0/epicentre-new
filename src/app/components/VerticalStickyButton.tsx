"use client";

import { useEventCalendar } from "../contexts/EventCalendarContext";

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
  const { openCalendar } = useEventCalendar();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // If href is provided, navigate normally
      window.location.href = href;
    } else {
      // Default: open timeline modal using context
      openCalendar();
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

  return (
    <div className={buttonClasses} style={buttonStyle} onClick={handleButtonClick}>
      <span className="font-medium tracking-wider text-[10px] uppercase whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
