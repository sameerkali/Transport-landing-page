import Hero from "./Hero";
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import WhyUs from "./WhyUs";
import Partners from "./Partners";
import NationwideCoverage from "../components/NationwideCoverage/NationwideCoverage";
import { useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <div className="pb-20">
      <Hero />
      <ScrollVelocity
        texts={["Transport Solutions", "Reliable Service"]}
        velocity={50}
        className="custom-scroll-text"
      />
      <WhyUs />
      <Partners />
      <NationwideCoverage />
    </div>
  );
};

export default Home;
