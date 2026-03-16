import React, { useState, useRef, useEffect } from 'react';
import styles from './game.module.css';
import CharacterWidthFlippingWords from '../../components/Flipping_words/CharacterWidthFlippingWords';

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ 
  value, 
  onChange, 
  min = -3, 
  max = 3 
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate thumb position based on value (6 positions mapped to 7 visual slots)
  const calculateThumbPosition = () => {
    const validValues = [-3, -2, -1, 1, 2, 3];
    const valueIndex = validValues.indexOf(value);
    
    // Map to 7-slot system: positions 0, 1, 2, skip 3, then 4, 5, 6
    let percentage;
    if (valueIndex >= 0) {
      if (valueIndex <= 2) {
        // -3, -2, -1 map to slots 0, 1, 2
        percentage = (valueIndex / 6) * 100;
      } else {
        // 1, 2, 3 map to slots 4, 5, 6 (skipping slot 3 which is the placeholder)
        percentage = ((valueIndex + 1) / 6) * 100;
      }
    } else {
      percentage = 100; // Default to +3 position
    }
    
    // Get actual slider width and calculate bounds
    if (sliderRef.current && sliderRef.current.offsetWidth > 0) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = 40; // thumb width in pixels
      const thumbWidthPercent = (thumbWidth / sliderWidth) * 100;
      const minPosition = thumbWidthPercent / 2;
      const maxPosition = 100 - thumbWidthPercent / 2;
      
      return `${Math.max(minPosition, Math.min(maxPosition, percentage))}%`;
    }
    
    // Fallback with estimated bounds for initial render
    const estimatedThumbWidthPercent = 8; // Approximate 40px/500px * 100
    const estimatedMinPosition = estimatedThumbWidthPercent / 2;
    const estimatedMaxPosition = 100 - estimatedThumbWidthPercent / 2;
    
    return `${Math.max(estimatedMinPosition, Math.min(estimatedMaxPosition, percentage))}%`;
  };

  // Get text based on value (6 positions, no neutral)
  const getTextForValue = (val: number) => {
    switch (val) {
      case -3: return '💀';
      case -2: return '😵';
      case -1: return '😞';
      case 1: return '🙂';
      case 2: return '😄';
      case 3: return '🤩';
      default: return '🤩'; // Default to +3
    }
  };

  // Calculate text position - simple centering
  const calculateTextPosition = () => {
    return '50%';
  };

  // Calculate marker positions (6 positions mapped to 7 visual slots)
  const calculateMarkerPosition = (markerValue: number) => {
    const validValues = [-3, -2, -1, 1, 2, 3];
    const valueIndex = validValues.indexOf(markerValue);
    
    // Map to 7-slot system: positions 0, 1, 2, skip 3, then 4, 5, 6
    let percentage;
    if (valueIndex >= 0) {
      if (valueIndex <= 2) {
        // -3, -2, -1 map to slots 0, 1, 2
        percentage = (valueIndex / 6) * 100;
      } else {
        // 1, 2, 3 map to slots 4, 5, 6 (skipping slot 3 which is the placeholder)
        percentage = ((valueIndex + 1) / 6) * 100;
      }
    } else {
      percentage = 0;
    }
    
    if (sliderRef.current && sliderRef.current.offsetWidth > 0) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = 40; // thumb width in pixels
      const thumbWidthPercent = (thumbWidth / sliderWidth) * 100;
      const minPosition = thumbWidthPercent / 2;
      const maxPosition = 100 - thumbWidthPercent / 2;
      
      return `${Math.max(minPosition, Math.min(maxPosition, percentage))}%`;
    }
    
    // Fallback with estimated bounds for initial render
    const estimatedThumbWidthPercent = 8; // Approximate 40px/500px * 100
    const estimatedMinPosition = estimatedThumbWidthPercent / 2;
    const estimatedMaxPosition = 100 - estimatedThumbWidthPercent / 2;
    
    return `${Math.max(estimatedMinPosition, Math.min(estimatedMaxPosition, percentage))}%`;
  };

  // Convert pixel position to value (6 positions, skip 0)
  const pixelToValue = (pixelX: number) => {
    if (!sliderRef.current) return value;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const sliderWidth = rect.width;
    const clickX = pixelX - rect.left;
    const percentage = (clickX / sliderWidth) * 100;
    
    // Define the 6 valid positions: -3, -2, -1, 1, 2, 3
    const validValues = [-3, -2, -1, 1, 2, 3];
    const stepSize = 100 / (validValues.length - 1);
    const step = Math.round(percentage / stepSize);
    const clampedStep = Math.max(0, Math.min(validValues.length - 1, step));
    
    return validValues[clampedStep];
  };

  // Handle mouse/touch events
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    const newValue = pixelToValue(clientX);
    onChange(newValue);
  };

  const handleMove = (clientX: number) => {
    if (isDragging) {
      const newValue = pixelToValue(clientX);
      onChange(newValue);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Initialize slider positioning after mount
  useEffect(() => {
    const initializeSlider = () => {
      if (sliderRef.current && sliderRef.current.offsetWidth > 0) {
        setIsInitialized(true);
      }
    };

    // Try to initialize immediately
    initializeSlider();

    // Also try after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeSlider, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add/remove event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        {/* Tooltip positioned outside the track */}
        <div 
          className={styles.neutralTooltip} 
          style={{ 
            position: 'absolute',
            top: '-50px',
            left: '50%',
            opacity: showTooltip ? 1 : 0,
            visibility: showTooltip ? 'visible' : 'hidden',
            transform: showTooltip ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)',
            zIndex: 100
          }}
        >
          Choosing neutral is not allowed
        </div>
        
        {/* Left extreme label */}
        <div className={styles.sliderExtremeLabel} style={{ left: '-220px' }}>
          <div style={{ 
            fontSize: '24px', 
            marginTop: '-20px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            🤌
          </div>
          <div className={styles.stronglyText}>
            STRONGLY
          </div>
          <div className={styles.sliderFlippingWords}>
            <CharacterWidthFlippingWords 
              currentWord="LIFEIDESIGN" 
              fontSize="60px" 
              tiltScore={value}
              eyeSize={{ width: '60px', height: '30px' }}
              eyePosition="down"
            />
          </div>
        </div>
        
        {/* Right extreme label */}
        <div className={styles.sliderExtremeLabel} style={{ right: '-220px' }}>
          <div style={{ 
            fontSize: '24px', 
            marginTop: '-20px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            🤘
          </div>
          <div className={styles.stronglyText}>
            STRONGLY
          </div>
          <div className={styles.sliderFlippingWords}>
            <CharacterWidthFlippingWords 
              currentWord="LIFEIDESIGN" 
              fontSize="60px" 
              tiltScore={value}
              eyeSize={{ width: '60px', height: '30px' }}
              eyePosition="up"
            />
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className={styles.customSliderTrack}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Dotted line through the middle */}
          <div className={styles.sliderDottedLine}></div>
          
          {/* Grey markers for each position (6 active + 1 placeholder) */}
          <div className={styles.sliderMarkers}>
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(-3) }}></div>
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(-2) }}></div>
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(-1) }}></div>
            <div 
              className={styles.sliderMarkerCenter} 
              style={{ left: '50%' }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              ✕
            </div> {/* X marker for center */}
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(1) }}></div>
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(2) }}></div>
            <div className={styles.sliderMarker} style={{ left: calculateMarkerPosition(3) }}></div>
          </div>
          
          <div 
            className={styles.customSliderThumb}
            style={{ left: calculateThumbPosition() }}
          >
            <div 
              className={styles.customSliderText}
              style={{ left: calculateTextPosition() }}
            >
              {getTextForValue(value)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider; 