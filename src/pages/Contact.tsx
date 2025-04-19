import { useState } from 'react';
import Stepper, { Step } from '../components/Stepper/Stepper';
import { useTheme } from '../context/ThemeContext';
import AwsButton from '../components/AwsButton/AwsButton';

const Contact = () => {
  const { themeColors } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = () => {
    console.log({ name, email, subject, message });
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
  };

  // Add this at the beginning of your Contact component
  return (
    <section id="contact-section" className="py-16 md:py-24" style={{ backgroundColor: themeColors.background }}>
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: [themeColors.accent, themeColors.secondary, themeColors.text.primary][Math.floor(Math.random() * 3)]
              }}
            />
          ))}
        </div>
      )}
      
      <style>{`
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          opacity: 0.7;
          animation: confetti-fall 3s linear forwards;
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100%) rotate(0deg);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-3xl mb-10 gap-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full" style={{ 
            backgroundColor: `${themeColors.accent}20`,
            color: themeColors.accent,
            border: `1px solid ${themeColors.accent}40`
          }}>
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: themeColors.text.primary }}>
            Contact Us
          </h2>
          
          
        </div>

        {/* Added margin-top to create gap between heading and stepper */}
        <div className="p-6 mt-8">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={handleSubmit}
            backButtonText="Previous"
            nextButtonText="Next"
            submitButton={(props) => (
              <AwsButton {...props}>
                Submit
              </AwsButton>
            )}
            nextButtonComponent={(props) => (
              <AwsButton {...props}>
                Next
              </AwsButton>
            )}
            backButtonComponent={(props) => (
              <button 
                {...props} 
                className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 mr-4"
                style={{ 
                  backgroundColor: 'transparent',
                  color: themeColors.text.primary,
                  border: `1px solid ${themeColors.gridBorder}`
                }}
              >
                Previous
              </button>
            )}
          >
        {/* Step 1: Name */}
        <Step>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
              Let's get to know you
            </h2>
            <p className="mb-6" style={{ color: themeColors.text.secondary }}>
              Please provide your name so we can address you properly.
            </p>
            
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className="block mb-2 font-medium"
                style={{ color: themeColors.text.primary }}
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: themeColors.background,
                  color: themeColors.text.primary,
                  borderColor: themeColors.gridBorder,
                  focusRing: themeColors.secondary
                }}
                required
              />
            </div>
          </div>
        </Step>
        
        {/* Step 2: Transport Services */}
        <Step>
          <div className="mb-8">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: themeColors.text.primary }}
            >
              Our Transport Services
            </h2>
            <img
              style={{
                height: "100px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center -70px",
                borderRadius: "15px",
                marginTop: "1em"
              }}
              src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
              alt="Transport Services"
            />

            <p className="mb-6" style={{ color: themeColors.text.secondary }}>
              We provide nationwide transport services with a focus on
              reliability and customer satisfaction.
            </p>
          </div>
        </Step>
        
        {/* Step 3: Email */}
        <Step>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
              Contact Information
            </h2>
            <p className="mb-6" style={{ color: themeColors.text.secondary }}>
              Please provide your email so we can get back to you.
            </p>
            
            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block mb-2 font-medium"
                style={{ color: themeColors.text.primary }}
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: themeColors.background,
                  color: themeColors.text.primary,
                  borderColor: themeColors.gridBorder,
                  focusRing: themeColors.secondary
                }}
                required
              />
            </div>
          </div>
        </Step>
        
        {/* Step 4: Message */}
        <Step>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
              Your Message
            </h2>
            <p className="mb-6" style={{ color: themeColors.text.secondary }}>
              Please provide details about your inquiry.
            </p>
            
            <div className="mb-4">

            
              
              <label 
                htmlFor="message" 
                className="block mb-2 font-medium"
                style={{ color: themeColors.text.primary }}
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: themeColors.background,
                  color: themeColors.text.primary,
                  borderColor: themeColors.gridBorder,
                  focusRing: themeColors.secondary
                }}
                required
              />
            </div>
          </div>
        </Step>
        
        {/* Final Step: Thank You with Graffiti */}
        <Step>
          <div className="mb-8 text-center">
            {submitted ? (
              <>
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
                  Thank You, {name}!
                </h2>
                <div className="graffiti-container my-6" style={{
                  perspective: '1000px',
                  transform: 'translateZ(0)'
                }}>
                  <div className="graffiti-art p-4 rounded-lg" style={{ 
                    backgroundColor: `${themeColors.accent}30`,
                    border: `2px solid ${themeColors.accent}`,
                    boxShadow: `0 4px 12px ${themeColors.accent}40`,
                    animation: 'celebrate 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
                    transformOrigin: 'center center'
                  }}>
                    <div className="text-6xl mb-2" style={{ 
                      fontFamily: "'Permanent Marker', cursive",
                      transform: 'rotate(-2deg)'
                    }}>THANK YOU!</div>
                    <div className="text-xl" style={{ 
                      fontFamily: "'Permanent Marker', cursive", 
                      color: themeColors.text.primary,
                      transform: 'rotate(1deg)'
                    }}>
                      We've received your message
                    </div>
                    <div className="graffiti-decoration mt-4" style={{ 
                      height: "4px", 
                      background: `linear-gradient(90deg, ${themeColors.accent}, transparent)`,
                      width: "80%",
                      margin: "0 auto",
                      animation: 'lineGrow 0.6s 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) forwards'
                    }}></div>
                  </div>
                </div>
                <style>{`
                  @keyframes celebrate {
                    0% {
                      transform: scale(0.5) rotate(-5deg);
                      opacity: 0;
                    }
                    50% {
                      transform: scale(1.1) rotate(2deg);
                    }
                    100% {
                      transform: scale(1) rotate(0deg);
                      opacity: 1;
                    }
                  }
                  @keyframes lineGrow {
                    0% {
                      transform: scaleX(0);
                    }
                    100% {
                      transform: scaleX(1);
                    }
                  }
                `}</style>
                <p className="mb-6" style={{ color: themeColors.text.secondary }}>
                  Your message has been submitted successfully. We'll get back to you at {email} as soon as possible.
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">📨</div>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>
                  Ready to Submit
                </h2>
                <p style={{ color: themeColors.text.secondary }}>
                  Click Submit to send your message. We'll get back to you soon!
                </p>
              </>
            )}
          </div>
        </Step>
        </Stepper>
        </div>
        </div>
        </section>
      );
    };

    // Export as both default and named export to make it available for Home page
    export { Contact };
    export default Contact;
