// src/themeContext.js
import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme as appLightTheme, darkTheme as appDarkTheme } from "./theme";

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState(appLightTheme);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "dark" ? appLightTheme : appDarkTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode: theme.mode === "dark" }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useThemeContext = () => useContext(ThemeContext);