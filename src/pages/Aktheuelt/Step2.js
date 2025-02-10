// src/pages/Aktheuelt/Step2.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg2 from "./img/Steg2.png";

const StepContainer = styled.div`
  padding: 2rem;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StepContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Step2 = () => {
  return (
    <StepContainer>
      <StepTitle>Co-Creation og Idéutvikling</StepTitle>
      <StepContent>
        <p>
          I denne fasen settes kreativitet og samarbeid i fokus. Målet er å engasjere både interne og eksterne aktører for å utvikle innovative løsninger som møter de reelle behovene til brukerne. Ved å inkludere perspektiver fra ulike grupper, kan vi skape et bredt spekter av ideer og filtrere ut de mest lovende konseptene.
        </p>
        <ul>
          <li>
            <strong>Workshops og Samarbeid:</strong> Arranger interaktive workshops hvor brukere, ansatte og andre interessenter bidrar med ideer. Disse sesjonene legger grunnlaget for en felles visjon og åpner for tverrfaglig samarbeid.
          </li>
          <li>
            <strong>Brainstorming:</strong> Benytt brainstorming-teknikker for å generere et stort antall ideer. Her oppfordres alle til å tenke fritt og uten begrensninger.
          </li>
          <li>
            <strong>Co-design:</strong> Involver brukerne direkte i designprosessen. Ved å la dem bidra med sine erfaringer og ønsker, sikrer vi at løsningen tilpasses deres virkelighet.
          </li>
          <li>
            <strong>Idéutvikling:</strong> Bruk metoder som mindmapping og idédugnad for å organisere og utvikle de innledende ideene til konkrete konsepter. Dette gir et solid grunnlag for de neste fasene i prosessen.
          </li>
        </ul>
        <p>
          Denne fasen er avgjørende for å åpne opp for nye perspektiver og skape en innovativ tjeneste. Gjennom co-creation og idéutvikling sikres det at løsningene er brukersentrerte og har et sterkt fundament for videre utvikling.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg2} alt="Co-Creation og Idéutvikling" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step2;