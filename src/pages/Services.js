// src/pages/Home.js
import React from "react";
import PageLayout from "../components/PageLayout"; // Import the layout
// Import components from the 'Home' subfolder
import Tjeneste from "./Services/Tjeneste"

const Services = () => {
  return (
    <PageLayout>
        <Tjeneste />
    </PageLayout>
  );
};

export default Services;