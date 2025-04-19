
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Destinations from './pages/Destinations';
import { ThemeProvider } from './context/ThemeContext';

function App() {
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
    <ThemeProvider>
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
