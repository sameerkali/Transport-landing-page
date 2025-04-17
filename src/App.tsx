import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Navbar,
  Button,
  Card,
  Carousel,
  Accordion,
  Input,
  Typography,
  Form,
  Rating
} from 'reactbits';
import { Truck, Package, Clock, Shield, Phone, MapPin, Star, ArrowRight, ChevronDown } from 'lucide-react';

// Color palette
const colors = {
  primary: '#1A365D',
  secondary: '#FF7F00',
  accent: '#2A9D8F',
  lightGray: '#F5F7FA',
  darkGray: '#333333',
  white: '#FFFFFF',
};

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data
  const services = [
    {
      title: "Last Mile Delivery",
      icon: <Truck size={32} />,
      description: "Fast and reliable delivery to the final destination, ensuring your packages arrive on time and in perfect condition."
    },
    {
      title: "Express Freight",
      icon: <Clock size={32} />,
      description: "Expedited shipping solutions when time is critical. Our express service guarantees delivery within tight timeframes."
    },
    {
      title: "Specialized Transport",
      icon: <Package size={32} />,
      description: "Custom handling for delicate, oversized, or valuable items requiring special care and equipment."
    },
    {
      title: "Logistics Planning",
      icon: <MapPin size={32} />,
      description: "End-to-end supply chain solutions with optimal routing and resource allocation for maximum efficiency."
    },
  ];

  // Customer reviews
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "Their delivery service has transformed our supply chain. On-time deliveries increased by 28% since switching to them."
    },
    {
      name: "Mark Williams",
      company: "Global Retail",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "The tracking technology they provide gives us complete visibility. We no longer have to worry about lost shipments."
    },
    {
      name: "Alex Chen",
      company: "Artisan Goods",
      rating: 4,
      image: "/api/placeholder/80/80",
      text: "Excellent care with our fragile products. Their specialized transport options have reduced damage claims by 95%."
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What areas do you service?",
      answer: "We provide nationwide delivery services with specialized coverage in major metropolitan areas. Our international shipping partners extend our reach to over 120 countries worldwide."
    },
    {
      question: "How do I track my shipment?",
      answer: "Tracking is simple with our real-time tracking system. Once your shipment is confirmed, you'll receive a unique tracking code via email. Enter this code on our website or mobile app to get instant updates on your delivery status."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "Our standard delivery timeframes range from 1-2 business days for local deliveries, 2-3 days for regional, and 3-5 days for nationwide. Express options can reduce these timeframes to same-day or next-day delivery in many areas."
    },
    {
      question: "How do you handle delicate items?",
      answer: "Delicate items receive special handling with custom packaging, climate-controlled vehicles when necessary, and trained personnel. We offer specialized crating, suspension packaging, and other protective measures based on the specific requirements of your items."
    }
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar
        fixed
        className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Truck color={colors.primary} size={32} />
            <Typography.Title level={4} className="ml-2 text-primary">TransportPro</Typography.Title>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-secondary">Services</a>
            <a href="#about" className="text-gray-700 hover:text-secondary">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-secondary">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-secondary">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-secondary">Contact</a>
          </div>
          <Button type="primary" style={{ backgroundColor: colors.secondary }}>
            Get a Quote
          </Button>
        </div>
      </Navbar>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-2xl text-white"
          >
            <motion.h1 variants={fadeIn} className="text-5xl font-bold mb-4">
              Reliable Transport Solutions For Your Business
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl mb-8">
              Fast, secure, and on-time delivery across the nation. We make logistics simple so you can focus on your business.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button type="primary" size="large" style={{ backgroundColor: colors.secondary }}>
                Get a Quote
              </Button>
              <Button type="default" size="large" className="bg-white text-primary">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeIn} 
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <Typography.Title level={2} className="text-white">500K+</Typography.Title>
                <p>Deliveries Completed</p>
              </div>
              <div className="text-center">
                <Typography.Title level={2} className="text-white">98.7%</Typography.Title>
                <p>On-Time Rate</p>
              </div>
              <div className="text-center">
                <Typography.Title level={2} className="text-white">24/7</Typography.Title>
                <p>Customer Support</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
              Our Transport Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet all your transportation and logistics needs with efficiency and reliability.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card hoverable className="h-full text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full" style={{ backgroundColor: colors.lightGray }}>
                    {React.cloneElement(service.icon, { color: colors.primary })}
                  </div>
                  <Typography.Title level={4} className="mb-3">{service.title}</Typography.Title>
                  <Typography.Text className="text-gray-600">{service.description}</Typography.Text>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <img src="/api/placeholder/600/400" alt="Transport fleet" className="rounded-lg shadow-lg" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="md:w-1/2"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                Why Choose TransportPro?
              </motion.h2>
              
              <motion.div variants={fadeIn} className="mb-6 flex items-start">
                <div className="mr-4 p-3 rounded-full" style={{ backgroundColor: colors.accent }}>
                  <Shield color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Safety Measures</h3>
                  <p className="text-gray-600">Our fleet is equipped with the latest safety technology, and our drivers undergo rigorous training to ensure your cargo is in safe hands.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-6 flex items-start">
                <div className="mr-4 p-3 rounded-full" style={{ backgroundColor: colors.accent }}>
                  <Clock color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timely Deliveries</h3>
                  <p className="text-gray-600">We pride ourselves on our punctuality with a 98.7% on-time delivery rate, helping you maintain your supply chain efficiency.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="mr-4 p-3 rounded-full" style={{ backgroundColor: colors.accent }}>
                  <Phone color="white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600">Our dedicated team is always available to assist you with any questions or concerns about your shipments.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes shipping with us simple and efficient
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { title: "Request a Quote", icon: <ArrowRight size={32} />, description: "Fill out our simple form with your shipping details" },
              { title: "Schedule Pickup", icon: <ArrowRight size={32} />, description: "We'll arrange a convenient time to collect your items" },
              { title: "Track Shipment", icon: <ArrowRight size={32} />, description: "Monitor your delivery in real-time through our system" },
              { title: "Delivery Confirmation", icon: <ArrowRight size={32} />, description: "Receive notification when your package arrives safely" }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full" style={{ backgroundColor: colors.secondary }}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 -ml-4" style={{ backgroundColor: colors.lightGray }}></div>
                  )}
                </div>
                <Typography.Title level={4} className="mb-3">{step.title}</Typography.Title>
                <Typography.Text className="text-gray-600">{step.description}</Typography.Text>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: colors.primary }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-white opacity-80 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          <Carousel
            className="pb-12"
            dots
            arrows
            autoplay
            slidesToShow={window.innerWidth < 768 ? 1 : 3}
          >
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <Card className="h-full p-6">
                  <div className="flex items-center mb-4">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <Typography.Title level={5} className="mb-0">{review.name}</Typography.Title>
                      <Typography.Text className="text-gray-500">{review.company}</Typography.Text>
                    </div>
                  </div>
                  <Rating disabled defaultValue={review.rating} className="mb-4" />
                  <Typography.Text className="text-gray-600">"{review.text}"</Typography.Text>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            <Accordion>
              {faqItems.map((item, index) => (
                <Accordion.Item key={index} header={item.question}>
                  <Typography.Text className="text-gray-600">
                    {item.answer}
                  </Typography.Text>
                </Accordion.Item>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20" style={{ backgroundColor: colors.accent }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Simplify Your Transport Needs?
              </h2>
              <p className="mb-6">
                Get in touch with our team for a free quote or to learn more about how we can help streamline your logistics operations.
              </p>
              <ul className="mb-8">
                <li className="flex items-center mb-3">
                  <Phone size={20} className="mr-3" />
                  <span>1-800-TRANSPORT</span>
                </li>
                <li className="flex items-center mb-3">
                  <MapPin size={20} className="mr-3" />
                  <span>123 Logistics Way, Transport City</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:w-1/2"
            >
              <Card className="p-6">
                <Typography.Title level={4} className="mb-6">Get a Free Quote</Typography.Title>
                <Form layout="vertical">
                  <Form.Item label="Full Name">
                    <Input placeholder="Your name" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input placeholder="Your email" />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input placeholder="Your phone number" />
                  </Form.Item>
                  <Form.Item label="Service Required">
                    <Input placeholder="What service are you interested in?" />
                  </Form.Item>
                  <Button type="primary" block style={{ backgroundColor: colors.secondary }}>
                    Request Quote
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Truck size={24} />
                <Typography.Title level={4} className="ml-2 text-white mb-0">TransportPro</Typography.Title>
              </div>
              <Typography.Text className="text-gray-400">
                Your reliable partner for all transportation and logistics needs.
              </Typography.Text>
            </div>
            
            <div>
              <Typography.Title level={5} className="text-white mb-4">Quick Links</Typography.Title>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <Typography.Title level={5} className="text-white mb-4">Services</Typography.Title>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Last Mile Delivery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Express Freight</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Specialized Transport</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Logistics Planning</a></li>
              </ul>
            </div>
            
            <div>
              <Typography.Title level={5} className="text-white mb-4">Newsletter</Typography.Title>
              <Typography.Text className="text-gray-400 mb-4 block">
                Subscribe to receive updates and special offers.
              </Typography.Text>
              <div className="flex">
                <Input placeholder="Your email" className="mr-2" />
                <Button type="primary" style={{ backgroundColor: colors.secondary }}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} TransportPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;



// import { Card } from './components/ui/Card';
// import { HeroParallax } from './components/ui/hero-parallax'

// const App = () => {
//   return (
//     <div>
//        <HeroParallax products={products} />
//        <Card />
//     </div>
//   )
// }

// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cursor.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },
 
//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },
 
//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },
 
//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
// ];

// export default App