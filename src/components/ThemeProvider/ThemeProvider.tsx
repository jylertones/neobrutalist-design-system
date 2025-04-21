import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../../styles/themes/theme.css';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'light' 
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

  // Check if user has a theme preference in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('neobrutalist-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  // Update local storage when theme changes
  useEffect(() => {
    localStorage.setItem('neobrutalist-theme', theme);
    document.body.className = theme === 'light' ? lightTheme : darkTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;