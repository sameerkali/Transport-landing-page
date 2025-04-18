
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './pages/Services';
import Destinations from './pages/Destinations';
// import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/destinations" element={<Destinations />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
