
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';

const Footer = () => {
  const { themeColors } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{ 
      backgroundColor: themeColors.background,
      borderTop: `1px solid ${themeColors.gridBorder}`,
    }}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <FaTruck className="text-2xl mr-2" style={{ color: themeColors.accent }} />
                <h3 className="text-xl font-bold" style={{ color: themeColors.text.primary }}>Transport</h3>
              </div>
              <p className="mb-4" style={{ color: themeColors.text.secondary }}>
                Providing premium transport and logistics solutions for businesses worldwide. 
                Reliable, efficient, and customer-focused service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: themeColors.accent }}>
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: themeColors.accent }}>
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: themeColors.accent }}>
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: themeColors.accent }}>
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: themeColors.text.primary }}>Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    onClick={scrollToTop}
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#destinations" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: themeColors.text.primary }}>Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#road-transport" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Road Transport
                  </a>
                </li>
                <li>
                  <a 
                    href="#sea-freight" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Sea Freight
                  </a>
                </li>
                <li>
                  <a 
                    href="#air-freight" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Air Freight
                  </a>
                </li>
                <li>
                  <a 
                    href="#warehousing" 
                    className="hover:underline transition-all" 
                    style={{ color: themeColors.text.secondary }}
                  >
                    Warehousing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: themeColors.text.primary }}>Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3" style={{ color: themeColors.accent }} />
                  <span style={{ color: themeColors.text.secondary }}>
                    123 Transport Street, Logistics City, LC 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3" style={{ color: themeColors.accent }} />
                  <span style={{ color: themeColors.text.secondary }}>
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3" style={{ color: themeColors.accent }} />
                  <span style={{ color: themeColors.text.secondary }}>
                    info@transportcompany.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          className="py-6 text-center border-t"
          style={{ borderColor: themeColors.gridBorder }}
        >
          <p style={{ color: themeColors.text.secondary }}>
            © {currentYear} Transport Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;