import { useState } from "react";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import { useTheme } from "../context/ThemeContext";
import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus";
import AwsButton from "../components/AwsButton/AwsButton";
import { partners } from "../content";

const Partners = () => {
  const { themeColors } = useTheme();
  const [showAll, setShowAll] = useState(false);



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
                altText={`${partners.name} Logo`}
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
