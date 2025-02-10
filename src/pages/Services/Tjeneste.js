// src/pages/Home.js
import React from "react";

// Import components from the 'Home' subfolder
import Hero from "./Hero";
import Tjenester from "./Tjenester"; // Import the About component

const Tjeneste = () => {
  return (
    <div>
      <Hero />
      <Tjenester />
    </div>

  );
};

export default Tjeneste;