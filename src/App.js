// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Toolbar from "./components/Toolbar";
import { ThemeProviderWrapper } from "./themeContext";
import Home from "./pages/Home";
import Akthe from "./pages/Akthe";
import Services from "./pages/Services";
import Publication from "./pages/Publication";
import Contact from "./pages/Contact";
import Aktheuelt from "./pages/Aktheuelt";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  * {
    box-sizing: border-box; /* Ensures elements don't unintentionally overflow */
    max-width: 150vw; /* Prevents elements from exceeding screen width */
  }
`;

const App = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <Router>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Publication />} />
          <Route path="/akthe" element={<Akthe />} />
          <Route path="/aktheuelt" element={<Aktheuelt />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;