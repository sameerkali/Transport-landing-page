import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const { theme, toggleTheme, themeColors } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Function to handle scrolling to contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      window.location.href = '/#contact-section';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
      }`}
      style={{ 
        backgroundColor: scrolled ? `${themeColors.background}80` : 'transparent'
      }}
    >
      <div className="text-xl font-extrabold tracking-wide" style={{ color: themeColors.text.primary }}>
        Expendifii      </div>
      
      <div className="flex items-center space-x-8">
        <NavLink to="/" active={location.pathname === '/'} themeColors={themeColors}>
          Home
        </NavLink>
        <NavLink to="/services" active={location.pathname === '/services'} themeColors={themeColors}>
          Services
        </NavLink>
        <NavLink to="/destinations" active={location.pathname === '/destinations'} themeColors={themeColors}>
          Destinations
        </NavLink>
        {/* Modified Contact link to use the scroll function instead of navigation */}
        <a 
          href="#contact-section"
          onClick={scrollToContact}
          className={`relative font-bold text-base transition-all duration-300 hover:scale-105 ${
            location.hash === '#contact-section' ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
          }`}
          style={{ color: themeColors.text.primary }}
        >
          Contact
          <span 
            className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
              location.hash === '#contact-section' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
            style={{ backgroundColor: themeColors.secondary }}
          ></span>
        </a>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-300 focus:outline-none hover:scale-110"
          style={{ 
            backgroundColor: themeColors.accent,
            color: themeColors.text.primary
          }}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>
      </div>
    </header>
  );
};

// Custom NavLink component for interactive navigation links
const NavLink = ({ to, active, children, themeColors }: { 
  to: string; 
  active: boolean; 
  children: React.ReactNode;
  themeColors: any;
}) => {
  return (
    <Link 
      to={to} 
      className={`relative font-bold text-base transition-all duration-300 hover:scale-105 ${
        active ? 'text-opacity-100' : 'text-opacity-80 hover:text-opacity-100'
      }`}
      style={{ color: themeColors.text.primary }}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
        style={{ backgroundColor: themeColors.secondary }}
      ></span>
    </Link>
  );
};

export default Header;