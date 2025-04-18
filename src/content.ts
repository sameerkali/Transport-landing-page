// Theme colors
export const colors = {
  light: {
    primary: '#1A365D',     // Deep Navy Blue - Conveys trust and reliability
    secondary: '#FF7F00',   // Vibrant Orange - For calls to action and energy
    accent: '#2A9D8F',      // Teal - Fresh and modern touch
    background: '#FFFFFF',  // White for backgrounds and clean spaces
    backgroundTransparent: 'rgba(26, 54, 93, 0.8)', // Semi-transparent primary
    gridBorder: 'rgba(26, 54, 93, 0.2)', // Light primary for grid
    gridHover: 'rgba(42, 157, 143, 0.2)', // Light accent for hover
    sparkColor: '#FF7F00',  // Vibrant orange for spark effect
    text: {
      primary: '#333333',   // Dark Gray for main text
      secondary: '#1A365D', // Deep Navy Blue for secondary text
      muted: '#F5F7FA',     // Light Gray for muted text
    }
  },
  dark: {
    primary: '#1A365D',     // Deep Navy Blue - Conveys trust and reliability
    secondary: '#FF7F00',   // Vibrant Orange - For calls to action and energy
    accent: '#2A9D8F',      // Teal - Fresh and modern touch
    background: '#333333',  // Dark Gray for backgrounds
    backgroundTransparent: 'rgba(26, 54, 93, 0.8)', // Semi-transparent primary
    gridBorder: 'rgba(255, 255, 255, 0.2)', // Light grid lines
    gridHover: 'rgba(42, 157, 143, 0.3)', // Light accent for hover
    sparkColor: '#FF7F00',  // Vibrant orange for spark effect
    text: {
      primary: '#FFFFFF',   // White for main text
      secondary: '#F5F7FA', // Light Gray for secondary text
      muted: '#CCCCCC',     // Muted gray for less important text
    }
  }
};

// Animation settings
export const animations = {
  spark: {
    size: 11,
    radius: 70,
    count: 16,
    duration: 1000,
  },
  grid: {
    speed: 0.3,
    squareSize: 40,
    direction: 'diagonal' as const,
  }
};

// Page content
export const heroContent = {
  title: 'Welcome to Transport',
  subtitle: 'Your journey begins here',
  cta: 'Get Started',
};

// Navigation
export const navigation = {
  logo: 'Transport',
  links: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
};

export const InfiniteMenuTrucks = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

export const partners = [
  {
    name: "GIVE FOUNDATION",
    description: "Wild Shaale - Transforming Conservation Education for Children Living Around India's Parks. Wild Shaale is a unique environmental and conservation education program that aims to foster interest and build awareness in rural children living in proximity to wildlife.",
    imageSrc: "/assets/partners/client-1.jpg"
  },
  {
    name: "UDAAN",
    description: "India's largest B2B Platform for businesses & shop-owners. Empowering businesses across India Hear what our customers have to say about their experience with udaan",
    imageSrc: "/assets/partners/client-2.png"
  },
  {
    name: "MAHINDRA LOGISTIC",
    description: "Mahindra Logistics Limited is a leading 3PL solutions provider with over a decade of experience. We have a strong presence across the country in our two distinct business segments – Supply Chain Management and Enterprise Mobility Solutions.",
    imageSrc: "/assets/partners/client-3.jpg"
  },
  {
    name: "NISA PRE-ENGINEERED METAL BUILDINGS",
    description: "Way back in the year 2002, Nisa Metal Buildings -Pre-engineered, Pre-fabricated, Fast track, Low cost steel buildings was launched under the leadership of our Managing Director Mr. N.Saroop , M.E..(Structural Engg.)Gold Medalist , a well known Structural Engineer with over 33 years of varied professional experience in India and abroad",
    imageSrc: "/assets/partners/client-4.png"
  },
  {
    name: "S. J. LADDERS",
    description: "The products range includes Aluminium Extension Ladders, Tilted Tower Ladders, Aluminium Wide Step Ladders, Aluminium Self Supporting Extension Ladders, Aluminium Round Pipe Ladders,",
    imageSrc: "/assets/partners/client-5.jpg"
  },
  {
    name: "Seven Star Trading Company",
    description: "we, \"Seven Star Trading Company\", are known as the prominent Authorised Distributor of a qualitative gamut of Battery Operated Loader And Electric Rickshaw.",
    imageSrc: "/assets/partners/client-6.png"
  },
  {
    name: "Matha Agrotech",
    description: "Wild Shaale - Transforming Conservation Education for Children Living Around India's Parks. Wild Shaale is a unique environmental and conservation education program that aims to foster interest and build awareness in rural children living in proximity to wildlife.",
    imageSrc: "/assets/partners/client-7.jpg"
  },
  {
    name: "Servokon System Ltd.",
    description: "A leading name in the power conditioning equipment and transformer manufacturing industry, Servokon was established in 1990 by Mr. Haji Kamruddin. His out-of-the-box ideas and farsightedness have led the company to witness continuous success in its niche market. Since its inception.",
    imageSrc: "/assets/partners/client-8.png"
  },
  {
    name: "Continental Carbon Company",
    description: "Carbon Black is used in various formulations with different rubber types to customize the performance properties of tires. Continental Carbon delivers high-performance carbon black for tires to rubber for motor mounts and conveyor mounts to name a few.",
    imageSrc: "/assets/partners/client-9.jpg"
  },
  {
    name: "Jai Auto",
    description: "Jai Auto is India's leading Manufacturers and Supplier of Differential Gear, Flanges and Agriculture Gear Boxes. We are a proactive organization engaged in manufacturing & supplying of quality products that meet customers' specific requirements and thus ensure complete satisfaction",
    imageSrc: "/assets/partners/client-10.jpg"
  },
  {
    name: "Shri Rama Industries",
    description: "Since our inception in the year 2002, Shri Ram Industries has been dominant in manufacturing, trading, distributing and supplying of an assorted collection of superior quality Pet Bottles, Pet Jars, Dry Fruit Jars, Cosmetics Jars, Spice Jars, Pet Cans, etc. We offer:",
    imageSrc: "/assets/partners/client-11.jpg"
  },
  {
    name: "Quantinox Pvt. Ltd.",
    description: "Quantinox is backed by seasoned professionals with first-hand experience and a keen understanding of the unique requirements of each industry and is committed towards making the entire procurement process seamless and efficient",
    imageSrc: "/assets/partners/client-12.jpg"
  },
  {
    name: "Bridgetech Structural Solutions",
    description: "Bridgetech Structural Solutions provides you the best range of expansion joints, crash barrier & post tensioning equipment with effective & timely delivery.",
    imageSrc: "/assets/partners/client-13.jpg"
  },
  {
    name: "RCC Developers Ltd.",
    description: "One of the most integrated infrastructure and construction services conglomerates in India. RCC Developers Limited is a leading infrastructure developer in Highway and building construction and registered as a private limited Company in October 2000.",
    imageSrc: "/assets/partners/client-1.jpg"
  },
  {
    name: "SMA POWER CONTROL PVT. LTD.",
    description: "SMA POWER CONTROLS is one of the leading manufacturer of custom Built Low Voltage & Medium Voltage Panels, Switch gears, Motor Starters & Automation and also executes Turnkey Projects",
    imageSrc: "/assets/partners/client-2.png"
  }
];