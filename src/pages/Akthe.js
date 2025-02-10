// src/pages/Home.js
import React from "react";
import PageLayout from "../components/PageLayout"; // Import the layout
// Import components from the 'Home' subfolder
import Hero from "./Akthe/Hero";
import AktheInfo from "./Akthe/AktheInfo";

const Akthe = () => {
  return (
    <PageLayout>
        <Hero />
        <AktheInfo />
    </PageLayout>
  );
};

export default Akthe;