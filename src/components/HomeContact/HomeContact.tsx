
import { Contact } from '../../pages/Contact';
import { useTheme } from '../../context/ThemeContext';

const HomeContact = () => {
  const { themeColors } = useTheme();
  
  return (
    // Add id="contact-section" to the section element
    <section id="contact-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[-6rem]">
          <h2 className="text-3xl font-bold mb-4" style={{ color: themeColors.text.primary }}>
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: themeColors.text.secondary }}>
            Have questions about our transport services? Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="">
          <div className="p-1" style={{ backgroundColor: themeColors.background }}>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;