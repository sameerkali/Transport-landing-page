import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../../context/ThemeContext';
import { indiaMapData } from './indiaMapData';

interface IndiaMapProps {
  width?: string;
  height?: string;
  className?: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ 
  width = "100%", 
  height = "auto",
  className = ""
}) => {
  const { themeColors } = useTheme();
  const mapRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const paths = mapRef.current.querySelectorAll('path');
      
      // Initial animation
      gsap.fromTo(
        paths, 
        { 
          opacity: 0,
          scale: 0.95,
          transformOrigin: 'center center'
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.01,
          ease: "power2.out"
        }
      );

      // Add hover animations for each state
      paths.forEach(path => {
        const stateName = path.getAttribute('data-state');
        
        path.addEventListener('mouseenter', () => {
          gsap.to(path, {
            fill: themeColors.secondary,
            duration: 0.3,
            scale: 1.02,
            transformOrigin: 'center center'
          });
        });
        
        path.addEventListener('mouseleave', () => {
          gsap.to(path, {
            fill: themeColors.accent,
            duration: 0.3,
            scale: 1
          });
        });
      });
    }
  }, [themeColors]);

  // Major cities/transport hubs with corrected positioning
  const transportHubs = [
    { name: "Delhi", x: 42, y: 31, size: 3 },
    { name: "Mumbai", x: 35, y: 60, size: 3 },
    { name: "Chennai", x: 52, y: 74, size: 3 },
    { name: "Kolkata", x: 69, y: 50, size: 3 },
    { name: "Bangalore", x: 46, y: 68, size: 2 },
    { name: "Hyderabad", x: 49, y: 61, size: 2 },
    { name: "Ahmedabad", x: 32, y: 48, size: 2 },
    { name: "Pune", x: 38, y: 61, size: 2 },
  ];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        ref={mapRef}
        width={width}
        height={height}
        viewBox="0 0 650 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {indiaMapData.map((state, index) => (
          <path
            key={index}
            d={state.path}
            style={{ 
              fill: themeColors.accent, 
              stroke: themeColors.text.primary, 
              strokeWidth: 1 
            }}
            data-state={state.name}
          />
        ))}
      </svg>
      
      {/* Transport hub dots with percentage-based positioning */}
      {transportHubs.map((hub, index) => (
        <div 
          key={index}
          className={`absolute w-${hub.size} h-${hub.size} rounded-full animate-ping`}
          style={{ 
            left: `${hub.x}%`, 
            top: `${hub.y}%`, 
            backgroundColor: themeColors.secondary,
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1.5s',
            width: `${hub.size * 4}px`,
            height: `${hub.size * 4}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
          title={hub.name}
        />
      ))}
      
      {/* Connection lines between hubs */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        {transportHubs.map((hub, i) => 
          transportHubs.slice(i + 1, i + 3).map((nextHub, j) => (
            <line 
              key={`${i}-${j}`}
              x1={`${hub.x}%`} 
              y1={`${hub.y}%`} 
              x2={`${nextHub.x}%`} 
              y2={`${nextHub.y}%`}
              style={{ 
                stroke: themeColors.secondary,
                strokeWidth: 1,
                strokeDasharray: '3,3',
                opacity: 0.4
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
};

export default IndiaMap;