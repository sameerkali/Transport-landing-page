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