// src/pages/Home.js
import React from "react";

// Import components from the 'Home' subfolder
import Hero from "./Home/Hero";
import About from "./Home/About"; // Import the About component

const Home = () => {
  return (
    <div>
      <Hero />
     <About />
    </div>

  );
};

export default Home;