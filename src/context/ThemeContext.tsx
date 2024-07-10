import { useState, createContext, ReactNode, useContext } from "react";
import { lightTheme, darkTheme, Theme } from "../assets/theme";

interface ThemeContextType {
  theme: Theme;
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme, isLightTheme: theme === lightTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}

export {ThemeProvider, useTheme}