import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import TiltedCard from '../components/TiltedCard/TiltedCard';
import TrueFocus from '../TextAnimations/TrueFocus/TrueFocus';
import { indianStates, unionTerritories } from '../content';





const Destinations = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { themeColors } = useTheme();
  const [activeTab, setActiveTab] = useState('states');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Define regions for filtering
  const regions = {
    all: 'All Regions',
    north: 'North India',
    south: 'South India',
    east: 'East India',
    west: 'West India',
    central: 'Central India',
    northeast: 'Northeast India',
  };

  // Map states to regions (simplified for example)
  const getRegionStates = (region: string) => {
    if (region === 'all') return indianStates;
    
    const regionMap: Record<string, string[]> = {
      north: ['Jammu and Kashmir', 'Himachal Pradesh', 'Punjab', 'Uttarakhand', 'Haryana', 'Delhi', 'Rajasthan', 'Uttar Pradesh', 'Ladakh'],
      south: ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana', 'Puducherry', 'Lakshadweep'],
      east: ['Bihar', 'Jharkhand', 'Odisha', 'West Bengal', 'Andaman and Nicobar Islands'],
      west: ['Gujarat', 'Goa', 'Maharashtra', 'Dadra and Nagar Haveli and Daman and Diu'],
      central: ['Madhya Pradesh', 'Chhattisgarh'],
      northeast: ['Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'],
    };
    
    return indianStates.filter(state => regionMap[region].includes(state.name));
  };

  const getRegionUTs = (region: string) => {
    if (region === 'all') return unionTerritories;
    
    const regionMap: Record<string, string[]> = {
      north: ['Chandigarh', 'Delhi', 'Jammu and Kashmir', 'Ladakh'],
      south: ['Puducherry', 'Lakshadweep'],
      east: ['Andaman and Nicobar Islands'],
      west: ['Dadra and Nagar Haveli and Daman and Diu'],
      central: [],
      northeast: [],
    };
    
    return unionTerritories.filter(ut => regionMap[region].includes(ut.name));
  };

  const displayedItems = activeTab === 'states' 
    ? getRegionStates(selectedRegion) 
    : getRegionUTs(selectedRegion);

  return (
    <section id="destinations" className="py-16 md:py-24" style={{ backgroundColor: themeColors.background }}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        <div className="text-center mb-12">
          <TrueFocus 
            sentence="Our Destinations"
            manualMode={false}
            blurAmount={5}
            borderColor={themeColors.secondary}
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="mt-4 text-lg" style={{ color: themeColors.text.secondary }}>
            Explore the states and union territories where we provide our transport services
          </p>
        </div>

        {/* Region Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.entries(regions).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedRegion(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedRegion === key ? 'text-white' : ''
                }`}
                style={{ 
                  backgroundColor: selectedRegion === key ? themeColors.secondary : 'transparent',
                  color: selectedRegion === key ? '#FFFFFF' : themeColors.text.primary,
                  border: `1px solid ${themeColors.secondary}`
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs for States and UTs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-l-lg transition-colors duration-300`}
              style={{ 
                backgroundColor: activeTab === 'states' ? themeColors.secondary : 'transparent',
                color: activeTab === 'states' ? '#FFFFFF' : themeColors.text.primary,
                border: `1px solid ${themeColors.secondary}`
              }}
              onClick={() => setActiveTab('states')}
            >
              States
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-r-lg transition-colors duration-300`}
              style={{ 
                backgroundColor: activeTab === 'uts' ? themeColors.secondary : 'transparent',
                color: activeTab === 'uts' ? '#FFFFFF' : themeColors.text.primary,
                border: `1px solid ${themeColors.secondary}`
              }}
              onClick={() => setActiveTab('uts')}
            >
              Union Territories
            </button>
          </div>
        </div>

        {/* India Map SVG Placeholder */}
        <div className="mb-12 p-6 rounded-lg text-center" style={{ border: `1px dashed ${themeColors.text.secondary}` }}>
          <p style={{ color: themeColors.text.secondary }}>
            Interactive India Map Coming Soon
          </p>
          <p className="text-sm mt-2" style={{ color: themeColors.text.secondary }}>
            Click on states to see details about our services in that region
          </p>
        </div>

        {/* States/UTs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <TiltedCard
                imageSrc={item.image}
                altText={`${item.name}`}
                captionText={item.name}
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-white mt-1">Capital: {item.capital}</p>
                  </div>
                }
             
              />
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
};

export default Destinations;
