import React from 'react';
import { useTheme } from '../context/ThemeContext';
import TrueFocus from '../TextAnimations/TrueFocus/TrueFocus';

const WhyUs = () => {
  const { themeColors } = useTheme();

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: themeColors.background }}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
      <div className="text-center mb-12">

      <TrueFocus
            sentence="Why Us"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
            </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img 
              src="/assets/truck-side.jpg" 
              alt="Transport Truck" 
              className="rounded-lg shadow-lg w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/1A365D/FFFFFF?text=Transport+Truck";
              }}
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <p className="text-xl mb-4" style={{ color: themeColors.text.primary }}>
                I'm Sameer Faridi and I'm a <span style={{ color: themeColors.secondary }}>transporter</span>
              </p>
              <p className="mb-4" style={{ color: themeColors.text.secondary }}>
                Our work is done on time and with accuracy. All our partners [drivers] are well trained and known about their work. Together we have earned the trust of our customers for a long time, hope it remains the same in future also.
              </p>
              <p className="mb-4" style={{ color: themeColors.text.secondary }}>
                We have got 5 years of amazing skills working in this field, we have achieved many successes and achievements. We will continue to do this work with the same dedication so that we can earn your trust. Please give us a chance to serve you once. Thank you.
              </p>
            </div>
            <button
              className="px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              style={{ 
                backgroundColor: themeColors.secondary,
                color: '#FFFFFF'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;