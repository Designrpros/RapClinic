// src/pages/Home.js
import React from "react";
import PageLayout from "../components/PageLayout"; // Import the layout
// Import components from the 'Home' subfolder
import Hero from "./Aktheuelt/Hero";
import AktheueltProsess from "./Aktheuelt/AktheueltProsess";

const Aktheuelt = () => {
  return (
    <PageLayout>
        <Hero/>
        <AktheueltProsess />
    </PageLayout>
  );
};

export default Aktheuelt;