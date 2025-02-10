// src/pages/Aktheuelt/Step8.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg8 from "./img/Steg8.png";

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

const Step8 = () => {
  return (
    <StepContainer>
      <StepTitle>Hyppig Leveranse og Tilbakemelding</StepTitle>
      <StepContent>
        <p>
          Denne fasen handler om å levere små, fungerende inkrementer av tjenesten med jevne mellomrom. Målet er å
          få rask og kontinuerlig tilbakemelding fra brukere og interessenter slik at vi kan iterere og forbedre løsningen fortløpende.
        </p>
        <ul>
          <li>
            <strong>Regelmessige Inkrementer:</strong> Arbeidet deles opp i små leveranser (sprints) der
            konkrete deler av løsningen utvikles, testes og evalueres.
          </li>
          <li>
            <strong>Umiddelbar Tilbakemelding:</strong> Hver leveranse evalueres med direkte tilbakemeldinger fra
            brukere, som kan komme via intervjuer, brukertesting eller digitale skjemaer.
          </li>
          <li>
            <strong>Rask Iterasjon:</strong> Tilbakemeldingene brukes til å raskt iterere løsningen, identifisere
            forbedringsområder og implementere nødvendige endringer i neste sprint.
          </li>
          <li>
            <strong>Kvalitetsfokus:</strong> Hyppige leveranser gir en mulighet til å oppdage og løse problemer
            tidlig, noe som bidrar til en mer robust og brukersentrert tjeneste.
          </li>
        </ul>
        <p>
          Ved å kombinere hyppige leveranser med kontinuerlig tilbakemelding, skaper vi en dynamisk prosess der
          tjenesten stadig tilpasses og forbedres i takt med brukernes behov og markedets krav.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg8} alt="Hyppig Leveranse og Tilbakemelding" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step8;