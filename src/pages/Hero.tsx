import React from 'react';
import Squares from '../Backgrounds/Squares/Squares';
import ClickSpark from '../Animations/ClickSpark/ClickSpark';
import { animations, heroContent } from '../content';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

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
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center" style={{ color: themeColors.text.primary }}>
              <h1 className="text-5xl font-bold mb-4">{heroContent.title}</h1>
              <p className="text-xl mb-8" style={{ color: themeColors.text.secondary }}>
                {heroContent.subtitle}
              </p>
              
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
        </div>
      </ClickSpark>
    </div>
  );
};

export default Hero;