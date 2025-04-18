
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './pages/Services';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import ClickSpark from './Animations/ClickSpark/ClickSpark';
import { animations } from './content';

function App() {
  const { themeColors } = useTheme();

  return (
    <ClickSpark
    sparkColor={themeColors.sparkColor}
    sparkSize={animations.spark.size}
    sparkRadius={animations.spark.radius}
    sparkCount={animations.spark.count}
    duration={animations.spark.duration}
  >

    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </ClickSpark>
  );
}

export default App;
