// src/pages/Aktheuelt/Step3.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg3 from "./img/Steg3.png";

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

const Step3 = () => {
  return (
    <StepContainer>
      <StepTitle>Konseptualisering og Prototyping</StepTitle>
      <StepContent>
        <p>
          I denne fasen omformes de innledende ideene til konkrete konsepter. Gjennom konseptualisering og prototyping skapes en visuell og funksjonell representasjon av tjenesten – både “bak kulissene” og i kontakt med brukeren.
        </p>
        <ul>
          <li>
            <strong>Service Blueprinting:</strong> Kartlegg tjenestens flyt ved å lage detaljerte oversikter som viser både frontstage (brukeropplevelse) og backstage (interne prosesser). Dette hjelper med å identifisere kritiske berøringspunkter og forbedringsmuligheter.
          </li>
          <li>
            <strong>Konseptutforming:</strong> Utvikle klare konseptbeskrivelser og visuelle modeller for hvordan tjenesten skal fungere. Her benyttes verktøy som skisser, diagrammer og storyboards.
          </li>
          <li>
            <strong>Prototyping:</strong> Lag både lav- og høyoppløselige prototyper. Lavoppløselige prototyper (for eksempel papirprototyper eller enkle digitale modeller) gjør det raskt mulig å teste ideer, mens høyoppløselige prototyper gir en nærmere simulering av den endelige tjenesten.
          </li>
          <li>
            <strong>Iterasjon:</strong> Prototypene testes med brukere, og tilbakemeldingene brukes til å forbedre konseptet. Denne iterasjonsprosessen sikrer at løsningen blir så brukervennlig og funksjonell som mulig.
          </li>
        </ul>
        <p>
          Denne fasen er kritisk for å validere idéene før full implementering. Ved å kombinere service blueprinting med rask prototyping kan teamet identifisere og rette opp eventuelle feil tidlig, og sikre at den endelige løsningen møter både brukerens og forretningsmessige behov.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg3} alt="Konseptualisering og Prototyping" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step3;