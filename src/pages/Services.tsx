import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaTruck, FaShip, FaPlane, FaWarehouse, FaGlobeAmericas, FaBoxOpen, FaLock } from 'react-icons/fa';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const { themeColors, theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Set up intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
    
    return () => {
      serviceCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const services = [
    {
      id: 'road-transport',
      title: 'Road Transport',
      description: 'Our fleet of modern trucks provides reliable road transport services across the country. We offer full truckload, less than truckload, and specialized transport options.',
      icon: <FaTruck />,
      features: ['Full truckload services', 'Less than truckload options', 'Temperature-controlled transport', 'GPS tracking']
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      description: 'We offer comprehensive sea freight solutions for international shipping needs. Our partnerships with major shipping lines ensure competitive rates and reliable service.',
      icon: <FaShip />,
      features: ['FCL & LCL shipping', 'Port-to-port services', 'Door-to-door delivery', 'Customs clearance']
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      description: 'When time is critical, our air freight services provide the fastest shipping solution. We work with leading airlines to ensure your cargo reaches its destination quickly.',
      icon: <FaPlane />,
      features: ['Express delivery', 'Scheduled air freight', 'Charter services', 'Dangerous goods handling']
    },
    {
      id: 'warehousing',
      title: 'Warehousing',
      description: 'Our strategically located warehouses offer secure storage solutions with advanced inventory management systems to keep your goods safe and accessible.',
      icon: <FaWarehouse />,
      features: ['Short & long-term storage', 'Inventory management', 'Order fulfillment', 'Cross-docking services']
    },
    {
      id: 'global-logistics',
      title: 'Global Logistics',
      description: 'Our end-to-end global logistics solutions handle the complexity of international shipping, customs, and compliance to ensure smooth operations across borders.',
      icon: <FaGlobeAmericas />,
      features: ['International shipping', 'Customs brokerage', 'Trade compliance', 'Supply chain consulting']
    },
    {
      id: 'packaging',
      title: 'Packaging & Distribution',
      description: 'We provide professional packaging and distribution services to ensure your products are properly protected and efficiently delivered to their destinations.',
      icon: <FaBoxOpen />,
      features: ['Custom packaging solutions', 'Labeling services', 'Distribution network', 'Last-mile delivery']
    }
  ];

  // Calculate spotlight color from accent color
  const getSpotlightColor = () => {
    try {
      return `rgba(${parseInt(themeColors.accent.slice(1,3), 16)}, ${parseInt(themeColors.accent.slice(3,5), 16)}, ${parseInt(themeColors.accent.slice(5,7), 16)}, 0.3)`;
    } catch (e) {
      return 'rgba(255, 255, 255, 0.3)';
    }
  };

  // Determine button text color - always white for better contrast
  const buttonTextColor = '#fff';

  return (
    <div id="services" className="py-16 md:py-24" style={{ backgroundColor: themeColors.background }}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-4 py-1 mb-4 rounded-full" style={{ 
            backgroundColor: `${themeColors.accent}20`,
            color: themeColors.accent,
            border: `1px solid ${themeColors.accent}40`
          }}>
            <span className="text-sm font-medium">What We Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: themeColors.text.primary }}>
            Our Transport Services
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto" style={{ color: themeColors.text.primary }}>
            We provide comprehensive transport and logistics solutions tailored to meet your specific needs.
            From road transport to global logistics, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              id={service.id}
              key={index} 
              className="service-card opacity-0 translate-y-10 transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <SpotlightCard 
                className="h-full" 
                spotlightColor={getSpotlightColor()}
                backgroundColor={theme === 'dark' ? '#1a1a1a' : '#ffffff'}
                borderColor={themeColors.gridBorder}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4" style={{ color: themeColors.accent }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: themeColors.text.primary }}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="mb-6" style={{ color: themeColors.text.primary }}>
                    {service.description}
                  </p>
                  
                  <ul className="mb-6 space-y-2 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1" style={{ color: themeColors.accent }}>•</span>
                        <span style={{ color: themeColors.text.secondary }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:opacity-90"
                    style={{ 
                      backgroundColor: themeColors.accent,
                      color: buttonTextColor,
                      boxShadow: `0 4px 14px ${themeColors.accent}40`
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: themeColors.text.primary }}>
            Need a Custom Solution?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: themeColors.text.primary }}>
            We understand that every business has unique logistics requirements.
            Contact us to discuss how we can tailor our services to meet your specific needs.
          </p>
          <Link to={`/contact`}>
          <button 
            className="px-6 py-3 rounded-md text-base font-medium transition-all duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: themeColors.accent,
              color: buttonTextColor,
              boxShadow: `0 4px 14px ${themeColors.accent}50`
            }}
          >
            Contact Us
          </button></Link>
        </div>
      </div>
      
      <style>{`
        .service-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Services;