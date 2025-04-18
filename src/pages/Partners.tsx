import { useState } from "react";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import { useTheme } from "../context/ThemeContext";
import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus";
import AwsButton from "../components/AwsButton/AwsButton";

const Partners = () => {
  const { themeColors } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const partners = [
    {
      name: "GIVE FOUNDATION",
      description: "Wild Shaale - Transforming Conservation Education for Children Living Around India's Parks. Wild Shaale is a unique environmental and conservation education program that aims to foster interest and build awareness in rural children living in proximity to wildlife.",
      imageSrc: "/assets/partners/give-foundation.jpg"
    },
    {
      name: "UDAAN",
      description: "India's largest B2B Platform for businesses & shop-owners. Empowering businesses across India Hear what our customers have to say about their experience with udaan",
      imageSrc: "/assets/partners/udaan.jpg"
    },
    {
      name: "MAHINDRA LOGISTIC",
      description: "Mahindra Logistics Limited is a leading 3PL solutions provider with over a decade of experience. We have a strong presence across the country in our two distinct business segments – Supply Chain Management and Enterprise Mobility Solutions.",
      imageSrc: "/assets/partners/mahindra.jpg"
    },
    {
      name: "NISA PRE-ENGINEERED METAL BUILDINGS",
      description: "Way back in the year 2002, Nisa Metal Buildings -Pre-engineered, Pre-fabricated, Fast track, Low cost steel buildings was launched under the leadership of our Managing Director Mr. N.Saroop , M.E..(Structural Engg.)Gold Medalist , a well known Structural Engineer with over 33 years of varied professional experience in India and abroad",
      imageSrc: "/assets/partners/nisa.jpg"
    },
    {
      name: "S. J. LADDERS",
      description: "The products range includes Aluminium Extension Ladders, Tilted Tower Ladders, Aluminium Wide Step Ladders, Aluminium Self Supporting Extension Ladders, Aluminium Round Pipe Ladders,",
      imageSrc: "/assets/partners/sj-ladders.jpg"
    },
    {
      name: "Seven Star Trading Company",
      description: "we, \"Seven Star Trading Company\", are known as the prominent Authorised Distributor of a qualitative gamut of Battery Operated Loader And Electric Rickshaw.",
      imageSrc: "/assets/partners/seven-star.jpg"
    },
    {
      name: "Matha Agrotech",
      description: "Wild Shaale - Transforming Conservation Education for Children Living Around India's Parks. Wild Shaale is a unique environmental and conservation education program that aims to foster interest and build awareness in rural children living in proximity to wildlife.",
      imageSrc: "/assets/partners/matha.jpg"
    },
    {
      name: "Servokon System Ltd.",
      description: "A leading name in the power conditioning equipment and transformer manufacturing industry, Servokon was established in 1990 by Mr. Haji Kamruddin. His out-of-the-box ideas and farsightedness have led the company to witness continuous success in its niche market. Since its inception.",
      imageSrc: "/assets/partners/servokon.jpg"
    },
    {
      name: "Continental Carbon Company",
      description: "Carbon Black is used in various formulations with different rubber types to customize the performance properties of tires. Continental Carbon delivers high-performance carbon black for tires to rubber for motor mounts and conveyor mounts to name a few.",
      imageSrc: "/assets/partners/continental.jpg"
    },
    {
      name: "Jai Auto",
      description: "Jai Auto is India's leading Manufacturers and Supplier of Differential Gear, Flanges and Agriculture Gear Boxes. We are a proactive organization engaged in manufacturing & supplying of quality products that meet customers' specific requirements and thus ensure complete satisfaction",
      imageSrc: "/assets/partners/jai-auto.jpg"
    },
    {
      name: "Shri Rama Industries",
      description: "Since our inception in the year 2002, Shri Ram Industries has been dominant in manufacturing, trading, distributing and supplying of an assorted collection of superior quality Pet Bottles, Pet Jars, Dry Fruit Jars, Cosmetics Jars, Spice Jars, Pet Cans, etc. We offer:",
      imageSrc: "/assets/partners/shri-rama.jpg"
    },
    {
      name: "Quantinox Pvt. Ltd.",
      description: "Quantinox is backed by seasoned professionals with first-hand experience and a keen understanding of the unique requirements of each industry and is committed towards making the entire procurement process seamless and efficient",
      imageSrc: "/assets/partners/quantinox.jpg"
    },
    {
      name: "Bridgetech Structural Solutions",
      description: "Bridgetech Structural Solutions provides you the best range of expansion joints, crash barrier & post tensioning equipment with effective & timely delivery.",
      imageSrc: "/assets/partners/bridgetech.jpg"
    },
    {
      name: "RCC Developers Ltd.",
      description: "One of the most integrated infrastructure and construction services conglomerates in India. RCC Developers Limited is a leading infrastructure developer in Highway and building construction and registered as a private limited Company in October 2000.",
      imageSrc: "/assets/partners/rcc.jpg"
    },
    {
      name: "SMA POWER CONTROL PVT. LTD.",
      description: "SMA POWER CONTROLS is one of the leading manufacturer of custom Built Low Voltage & Medium Voltage Panels, Switch gears, Motor Starters & Automation and also executes Turnkey Projects",
      imageSrc: "/assets/partners/sma.jpg"
    }
  ];

  const displayedPartners = showAll ? partners : partners.slice(0, 6);

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        <div className="text-center mb-12">
          <TrueFocus 
            sentence="Our Partners"
            manualMode={false}
            blurAmount={5}
            borderColor={themeColors.secondary}
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPartners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <TiltedCard
                // imageSrc={partner.imageSrc}
                 imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText={`${partner.name} Logo`}
                captionText={partner.name}
                containerHeight="250px"
                containerWidth="300px"
                imageHeight="250px"
                imageWidth="300px"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                  </div>
                }
            
              />
            </div>
          ))}
        </div>

        {!showAll && partners.length > 6 && (
          <div className="mt-12 text-center">
            <AwsButton onClick={() => setShowAll(true)}>
              Show More Partners
            </AwsButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
