import React, { useEffect, useRef, useState } from 'react';
import { animations, heroContent } from '../content';
import { useTheme } from '../context/ThemeContext';
import VariableProximity from '../TextAnimations/VariableProximity/VariableProximity';
import AwsButton from '../components/AwsButton/AwsButton';
import { FaTruck, FaShippingFast, FaMapMarkedAlt, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const { themeColors } = useTheme();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full h-screen">
      <div 
        className="relative w-full h-screen overflow-hidden transition-colors duration-300 flex items-center justify-center" 
        style={{ 
          backgroundColor: themeColors.background,
        }}
      >
        {/* Background image with reduced opacity */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b" 
            style={{ 
              backgroundImage: `linear-gradient(to bottom, ${themeColors.background}90, ${themeColors.background})`,
              zIndex: 1 
            }}
          ></div>
          <img 
            src="/assets/partners/hero-banner.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.15 }}
          />
        </div>
        
        {/* Floating elements with reduced quantity */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="floating-element absolute"
              style={{
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 90}%`,
                opacity: 0.1 + (Math.random() * 0.1),
                fontSize: `${1.5 + Math.random() * 1.5}rem`,
                color: i % 2 === 0 ? themeColors.accent : themeColors.secondary,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(${scrollPosition * 0.2}px)`
              }}
            >
              {i % 3 === 0 ? <FaTruck /> : i % 3 === 1 ? <FaShippingFast /> : <FaMapMarkedAlt />}
            </div>
          ))}
        </div>
        
        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transform: `translateY(-${scrollPosition * 0.15}px)` }}
          >
            <div className="inline-block px-4 py-1 mb-4 rounded-full" style={{ 
              backgroundColor: `${themeColors.accent}20`,
              color: themeColors.accent,
              border: `1px solid ${themeColors.accent}40`
            }}>
              <span className="text-sm font-medium">Premium Transport Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: themeColors.text.primary }}>
              <VariableProximity
                label={heroContent.title}
                className="variable-proximity-demo font-sans"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef as unknown as React.RefObject<HTMLElement>}
                radius={100}
                falloff='linear'
                style={{ color: themeColors.text.primary }}
              />
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" style={{ color: themeColors.text.secondary }}>
              Experience seamless logistics and transportation services tailored to your needs. 
              Our expert team ensures your cargo reaches its destination safely and on time, 
              every time. With our global network and cutting-edge tracking systems, 
              you'll always know where your shipment is.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0 mb-12">
              <AwsButton>
                Get Started
              </AwsButton>
              
              <AwsButton variant="secondary">
                Our Services
              </AwsButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { 
                  label: "Fast Delivery", 
                  icon: <FaShippingFast />,
                  description: "Express shipping options available for urgent deliveries"
                },
                { 
                  label: "Global Network", 
                  icon: <FaMapMarkedAlt />,
                  description: "Connected to major shipping routes across 6 continents"
                },
                { 
                  label: "24/7 Support", 
                  icon: <FaTruck />,
                  description: "Our team is always available to assist with your shipments"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg" style={{
                  backgroundColor: `${themeColors.accent}10`,
                  border: `1px solid ${themeColors.accent}20`,
                }}>
                  <div className="text-3xl mb-2" style={{ color: themeColors.accent }}>{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: themeColors.text.primary }}>{item.label}</h3>
                  <p className="text-sm text-center" style={{ color: themeColors.text.secondary }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToContent}
            style={{ 
              opacity: Math.max(0, 1 - scrollPosition / 300),
              visibility: scrollPosition > 300 ? 'hidden' : 'visible'
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2" style={{ color: themeColors.text.secondary }}>Scroll to explore</span>
              <FaArrowDown style={{ color: themeColors.accent }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Reference element for VariableProximity */}
      <div
        ref={containerRef}
        className="hidden"
        style={{ position: 'absolute' }}
      ></div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;