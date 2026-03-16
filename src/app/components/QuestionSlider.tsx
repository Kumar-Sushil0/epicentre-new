'use client';

import { useState, useRef, useEffect } from 'react';

// Exactly 3 valid values: -1, 0, 1
const VALID_VALUES = [-1, 0, 1];

const getEmoji = (val: number) => {
  switch (val) {
    case -1: return '😞';
    case  0: return '😐';
    case  1: return '🙂';
    default: return '😐';
  }
};

interface QuestionSliderProps {
  value: number;           // always a number, default 0
  onChange: (value: number) => void;
}

export default function QuestionSlider({ value, onChange }: QuestionSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // ── position helpers ────────────────────────────────────────────────────────

  // Map value → percentage (0%, 50%, 100%)
  const calculateThumbPosition = () => {
    const idx = VALID_VALUES.indexOf(value);
    const percentage = (idx / (VALID_VALUES.length - 1)) * 100; // 0, 50, 100

    if (sliderRef.current && sliderRef.current.offsetWidth > 0) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = 40;
      const thumbWidthPercent = (thumbWidth / sliderWidth) * 100;
      const minPos = thumbWidthPercent / 2;
      const maxPos = 100 - thumbWidthPercent / 2;
      return `${Math.max(minPos, Math.min(maxPos, percentage))}%`;
    }

    // Fallback before DOM is measured
    const est = 8;
    return `${Math.max(est / 2, Math.min(100 - est / 2, percentage))}%`;
  };

  const calculateMarkerPosition = (markerValue: number) => {
    const idx = VALID_VALUES.indexOf(markerValue);
    const percentage = (idx / (VALID_VALUES.length - 1)) * 100;

    if (sliderRef.current && sliderRef.current.offsetWidth > 0) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = 40;
      const thumbWidthPercent = (thumbWidth / sliderWidth) * 100;
      const minPos = thumbWidthPercent / 2;
      const maxPos = 100 - thumbWidthPercent / 2;
      return `${Math.max(minPos, Math.min(maxPos, percentage))}%`;
    }

    const est = 8;
    return `${Math.max(est / 2, Math.min(100 - est / 2, percentage))}%`;
  };

  // ── pixel → value ───────────────────────────────────────────────────────────

  const pixelToValue = (pixelX: number) => {
    if (!sliderRef.current) return value;
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = ((pixelX - rect.left) / rect.width) * 100;
    const stepSize = 100 / (VALID_VALUES.length - 1); // 50
    const step = Math.round(percentage / stepSize);
    const clamped = Math.max(0, Math.min(VALID_VALUES.length - 1, step));
    return VALID_VALUES[clamped];
  };

  // ── event handlers ──────────────────────────────────────────────────────────

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    onChange(pixelToValue(e.clientX));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    onChange(pixelToValue(e.touches[0].clientX));
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => { if (isDragging) onChange(pixelToValue(e.clientX)); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging) onChange(pixelToValue(e.touches[0].clientX)); };
    const onUp = () => setIsDragging(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onUp);
    };
  }, [isDragging]);

  // ── initialize after mount so DOM width is available ───────────────────────

  useEffect(() => {
    const init = () => {
      if (sliderRef.current && sliderRef.current.offsetWidth > 0) setIsInitialized(true);
    };
    init();
    const t = setTimeout(init, 100);
    return () => clearTimeout(t);
  }, []);

  // ── render ──────────────────────────────────────────────────────────────────

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 1rem' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>

        {/* Track */}
        <div
          ref={sliderRef}
          style={{
            position: 'relative',
            width: '100%',
            height: '44px',
            backgroundColor: '#000000',
            borderRadius: '22px',
            cursor: 'pointer',
            userSelect: 'none',
            overflow: 'hidden',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Dotted center line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '2px',
            transform: 'translateY(-50%)',
            background: 'repeating-linear-gradient(to right,#666 0px,#666 4px,transparent 4px,transparent 8px)',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.6,
          }} />

          {/* Markers — plain grey circles, always visible */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            {VALID_VALUES.map((v) => (
              <div
                key={v}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: calculateMarkerPosition(v),
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  background: '#000000',
                  borderRadius: '50%',
                  border: '2px dashed rgba(102,102,102,0.6)',
                }}
              />
            ))}
          </div>

          {/* Thumb — always rendered, shows emoji */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: calculateThumbPosition(),
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              background: '#000000',
              border: '2px solid #C5A065',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(197,160,101,0.3)',
              transition: 'left 0.15s ease',
              cursor: isDragging ? 'grabbing' : 'grab',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '22px',
              pointerEvents: 'none',
              zIndex: 10,
              lineHeight: 1,
            }}>
              {getEmoji(value)}
            </span>
          </div>
        </div>
      </div>

      {/* Tick labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '8px', padding: '0 4px' }}>
        {[['No', '-1'], ['Neutral', '0'], ['Yes', '1']].map(([label, v]) => (
          <span
            key={v}
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: String(value) === v ? '#C5A065' : '#3E2A20',
              transition: 'color 0.15s',
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
