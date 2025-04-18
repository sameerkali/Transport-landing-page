import React from 'react';
import Hero from './pages/Hero';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}

export default App;
