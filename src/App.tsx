
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Destinations from './pages/Destinations';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ClickSpark from './Animations/ClickSpark/ClickSpark';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { animations } from './content';

// Wrapper component to use theme context
const AppContent = () => {
  const { themeColors } = useTheme();
  
  useEffect(() => {
    // Set up scroll functionality
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if it's a navigation link
      if (target.hasAttribute('data-scroll-to')) {
        e.preventDefault();
        const sectionId = target.getAttribute('data-scroll-to');
        
        if (sectionId === 'top') {
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else if (sectionId) {
          // Scroll to section
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleNavigation);
    
    return () => {
      document.removeEventListener('click', handleNavigation);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor={themeColors.sparkColor || "#FF7F00"}
      sparkSize={animations.spark.size}
      sparkRadius={animations.spark.radius}
      sparkCount={animations.spark.count}
      duration={animations.spark.duration}
    >
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Services />
                  <Destinations />
                  <Contact />
                </>
              } />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ClickSpark>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;










