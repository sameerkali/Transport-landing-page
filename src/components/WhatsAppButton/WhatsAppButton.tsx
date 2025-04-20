import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import whatsappAnimation from '../../assets/truck-images/whatsapp.json';

const WhatsAppButton: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: whatsappAnimation
      });
      
      return () => {
        anim.destroy();
      };
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919639356395`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-8 right-4 md:bottom-10 md:right-6 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95 touch-manipulation"
      onClick={handleWhatsAppClick}
      style={{
        filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
      }}
    >
      <div 
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center  backdrop-blur-sm"
        ref={animationContainer}
      />
    </div>
  );
};

export default WhatsAppButton;