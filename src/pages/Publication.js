// src/pages/Home.js
import React from "react";
import PageLayout from "../components/PageLayout"; // Import the layout
// Import components from the 'Home' subfolder
import Hero from "./Projects/Hero";
import Publications from "./Projects/Publications";

const Publication = () => {
  return (
    <PageLayout>
        <Hero/>
        <Publications/>
    </PageLayout>
  );
};

export default Publication;