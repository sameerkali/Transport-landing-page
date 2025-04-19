import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import IndiaMap from '../IndiaMap/IndiaMap';
import AwsButton from '../../components/AwsButton/AwsButton';
import CountUp from '../../TextAnimations/CountUp/CountUp';

const NationwideCoverage: React.FC = () => {
  const { themeColors } = useTheme();
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/destinations');
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-10 text-center" style={{ backgroundColor: themeColors.background }}>
      <h2 className="text-3xl font-bold mb-3" style={{ color: themeColors.text.primary }}>
        Nationwide Coverage
      </h2>
      <p className="mb-4 max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
        We provide transport services across all states and union territories in India.
      </p>
      
      {/* India Map Component with improved layout */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="md:w-3/5 relative">
          <IndiaMap 
            width="100%" 
            height="auto" 
            className="rounded-lg"
          />
        </div>
        
        <div className="md:w-2/5 text-left">
          <h3 className="text-xl font-semibold mb-3" style={{ color: themeColors.text.primary }}>
            Our Transport Network
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: themeColors.secondary }}></span>
              <span style={{ color: themeColors.text.secondary }}>Major transport hubs in metropolitan cities</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: themeColors.accent }}></span>
              <span style={{ color: themeColors.text.secondary }}>Extensive coverage across all states</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: themeColors.primary }}></span>
              <span style={{ color: themeColors.text.secondary }}>Dedicated routes for time-sensitive deliveries</span>
            </li>
          </ul>
          <div onClick={handleNavigate}>
            <AwsButton>
              Explore Our Destinations
            </AwsButton>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 px-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: themeColors.background, border: `1px solid ${themeColors.gridBorder}` }}>
          <div className="text-3xl font-bold mb-1" style={{ color: themeColors.secondary }}>


          <CountUp
  from={0}
  to={28}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+
  </div>
          <div className="text-sm" style={{ color: themeColors.text.secondary }}>States Covered</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: themeColors.background, border: `1px solid ${themeColors.gridBorder}` }}>
          <div className="text-3xl font-bold mb-1" style={{ color: themeColors.secondary }}>          <CountUp
  from={0}
  to={8}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+</div>
          <div className="text-sm" style={{ color: themeColors.text.secondary }}>Union Territories</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: themeColors.background, border: `1px solid ${themeColors.gridBorder}` }}>
          <div className="text-3xl font-bold mb-1" style={{ color: themeColors.secondary }}>          <CountUp
  from={0}
  to={500}
  separator=","
  direction="up"
  duration={3}
  className="count-up-text"
/>+</div>
          <div className="text-sm" style={{ color: themeColors.text.secondary }}>Cities & Towns</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: themeColors.background, border: `1px solid ${themeColors.gridBorder}` }}>
          <div className="text-3xl font-bold mb-1" style={{ color: themeColors.secondary }}>
          <CountUp
  from={0}
  to={1100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+
          </div>
          <div className="text-sm" style={{ color: themeColors.text.secondary }}>Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default NationwideCoverage;