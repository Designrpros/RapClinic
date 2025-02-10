// src/pages/Home.js
import React from "react";
import PageLayout from "../components/PageLayout"; // Import the layout
// Import components from the 'Home' subfolder
import Hero from "./Contact/Hero";
import Kontakt from "./Contact/Kontakt";

const Contact = () => {
  return (
    <PageLayout>
        <Hero/>
        <Kontakt/>
    </PageLayout>
  );
};

export default Contact;