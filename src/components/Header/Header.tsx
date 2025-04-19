import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme, themeColors } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = theme === 'dark';

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    } else {
      // If section doesn't exist yet, try again after a short delay
      // This helps when components are still loading
      setTimeout(() => {
        const delayedSection = document.getElementById(sectionId);
        if (delayedSection) {
          delayedSection.scrollIntoView({ behavior: 'smooth' });
        } else if (location.pathname !== '/') {
          // If still not found and not on home page, redirect to home with hash
          window.location.href = `/#${sectionId}`;
        } else {
          // If on home page but section not found, scroll to top as fallback
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMobileMenu();
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-md" : "py-4"
      }`}
      style={{
        backgroundColor: scrolled ? `${themeColors.background}80` : 'transparent',
        borderBottom: scrolled ? `1px solid ${themeColors.gridBorder}` : 'none',
      }}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl md:text-2xl font-bold transition-colors duration-300"
              style={{ color: themeColors.text.primary }}
            >
              Transport
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="transition-colors duration-300 hover:text-opacity-80"
              style={{ color: themeColors.text.primary }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="transition-colors duration-300 hover:text-opacity-80"
              style={{ color: themeColors.text.primary }}
            >
              Services
            </a>
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('destinations');
              }}
              className="transition-colors duration-300 hover:text-opacity-80"
              style={{ color: themeColors.text.primary }}
            >
              Destinations
            </a>
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact-section');
              }}
              className="transition-colors duration-300 hover:text-opacity-80"
              style={{ color: themeColors.text.primary }}
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              style={{ color: themeColors.text.primary }}
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md"
              style={{ color: themeColors.text.primary }}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden py-4 px-6 backdrop-blur-md"
          style={{
            backgroundColor: `${themeColors.background}90`,
            borderTop: `1px solid ${themeColors.gridBorder}`,
          }}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMobileMenu();
              }}
              className="transition-colors duration-300"
              style={{ color: themeColors.text.primary }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="transition-colors duration-300"
              style={{ color: themeColors.text.primary }}
            >
              Services
            </a>
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('destinations');
              }}
              className="transition-colors duration-300"
              style={{ color: themeColors.text.primary }}
            >
              Destinations
            </a>
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact-section');
              }}
              className="transition-colors duration-300"
              style={{ color: themeColors.text.primary }}
            >
              Contact
            </a>
            <button
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
              className="flex items-center"
              style={{ color: themeColors.text.primary }}
            >
              {isDarkMode ? (
                <>
                  <FaSun className="h-5 w-5 mr-2" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon className="h-5 w-5 mr-2" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;