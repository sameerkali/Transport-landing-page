
import Hero from "./Hero";
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import WhyUs from "./WhyUs";
import Partners from "./Partners";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { themeColors } = useTheme();

  return (
    <div>
      <Hero />
      <ScrollVelocity
        texts={["Transport Solutions", "Reliable Service"]}
        velocity={50}
        className="custom-scroll-text"
      />
      <WhyUs />
      <Partners />
      
      {/* Destinations Teaser */}
      <div className="py-16 text-center" style={{ backgroundColor: themeColors.background }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: themeColors.text.primary }}>
          Nationwide Coverage
        </h2>
        <p className="mb-6 max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
          We provide transport services across all states and union territories in India.
        </p>
        <Link 
          to="/destinations" 
          className="inline-block px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          style={{ 
            backgroundColor: themeColors.secondary,
            color: '#FFFFFF'
          }}
        >
          Explore Our Destinations
        </Link>
      </div>
    </div>
  );
};

export default Home;
