import React from 'react';
import Squares from '../Backgrounds/Squares/Squares';
import ClickSpark from '../Animations/ClickSpark/ClickSpark';
import { animations, heroContent } from '../content';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import Orb from '../Backgrounds/Orb/Orb';

const Hero = () => {
  const { theme, toggleTheme, themeColors } = useTheme();

  return (
    <div className="w-full h-screen">
      <ClickSpark
        sparkColor={themeColors.sparkColor}
        sparkSize={animations.spark.size}
        sparkRadius={animations.spark.radius}
        sparkCount={animations.spark.count}
        duration={animations.spark.duration}
      >
        <div 
          className="relative w-full h-screen overflow-hidden transition-colors duration-300" 
          style={{ backgroundColor: themeColors.background }}
        >
          <Squares 
            speed={animations.grid.speed} 
            squareSize={animations.grid.squareSize}
            direction={animations.grid.direction}
            borderColor={themeColors.gridBorder}
            hoverFillColor={themeColors.gridHover}
            backgroundColor={themeColors.background}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
            {/* Left side content */}
            <div className="text-left md:w-1/2 mb-12 md:mb-0 mt-16 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: themeColors.text.primary }}>
                {heroContent.title}
              </h1>
              <p className="text-lg md:text-xl mb-8" style={{ color: themeColors.text.secondary }}>
                {heroContent.subtitle}
              </p>
              
              <div className="flex items-center space-x-4">
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  style={{ 
                    backgroundColor: themeColors.secondary,
                    color: '#FFFFFF'
                  }}
                >
                  {heroContent.cta}
                </button>
                
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full transition-colors duration-300 focus:outline-none"
                  style={{ 
                    backgroundColor: themeColors.accent,
                    color: themeColors.text.primary
                  }}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
              </div>
            </div>
            
            {/* Right side orb */}
            <div className="md:w-1/2 h-64 md:h-96 lg:h-[500px] relative">
              <div className="w-full h-full">
                <Orb 
                  hue={theme === 'light' ? 200 : 260} 
                  hoverIntensity={0.3}
                  rotateOnHover={true}
                  forceHoverState={false}
                />
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
};

export default Hero;