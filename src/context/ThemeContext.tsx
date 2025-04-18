import React, { createContext, useState, useContext, useEffect } from 'react';
import { colors } from '../content';

type ThemeType = 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  themeColors: typeof colors.light;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  themeColors: colors.light,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if user has a theme preference in localStorage
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeType) || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const themeColors = theme === 'light' ? colors.light : colors.dark;

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
    document.body.style.backgroundColor = themeColors.background;
    document.body.style.color = themeColors.text.primary;
  }, [theme, themeColors]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);