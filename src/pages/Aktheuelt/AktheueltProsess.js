// src/pages/Aktheuelt/AktheueltProsess.js
import React, { useState } from "react";
import styled from "styled-components";
import AktheueltTabs from "./AktheueltTabs";
import Intro from "./Intro";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  padding: 2rem;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBackground || "#f9f9f9"};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.cardTextColor || theme.textColor};
`;

const AktheueltProsess = () => {
  // Vi definerer en state for å holde styr på hvilken fane som er aktiv.
  const [activeTab, setActiveTab] = useState(0);

  // Vi definerer en liste over de enkelte stegene med en tittel og en komponent.
  const tabs = [
    { label: "Introduksjon", component: <Intro /> },
    { label: "Forstå Brukerne", component: <Step1 /> },
    { label: "Co-Creation", component: <Step2 /> },
    { label: "Prototyping", component: <Step3 /> },
    { label: "Testing", component: <Step4 /> },
    { label: "Implementering", component: <Step5 /> },
    { label: "Iterativ Utvikling", component: <Step6 /> },
    { label: "Tverrfaglige Team", component: <Step7 /> },
    { label: "Leveranse & Tilbakemelding", component: <Step8 /> },
    { label: "Sprint Planlegging", component: <Step9 /> },
    { label: "Kundefokus", component: <Step10 /> },
  ];

  return (
    <Container>
      <AktheueltTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContentContainer>
        {tabs[activeTab].component}
      </ContentContainer>
    </Container>
  );
};

export default AktheueltProsess;