import { useState } from 'react';
import { createContext, ReactNode, useContext } from 'react';

type ThemeType = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  // console.log('Current theme : ', currentTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
