// src/pages/Aktheuelt/Step6.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg6 from "./img/Steg6.png";

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

const Step6 = () => {
  return (
    <StepContainer>
      <StepTitle>Iterativ og Inkrementell Utvikling</StepTitle>
      <StepContent>
        <p>
          I denne fasen deles utviklingsarbeidet opp i små, håndterbare iterasjoner – ofte referert til som sprints. Hver iterasjon leverer et inkrement av tjenesten, noe som gir mulighet for rask evaluering og justering. Denne tilnærmingen reduserer risikoen, gir hyppig tilbakemelding og gjør det lettere å tilpasse løsningen basert på endrede krav og innsikt.
        </p>
        <ul>
          <li>
            <strong>Små Sprints:</strong> Arbeidet planlegges i korte sprints (for eksempel 2–4 uker) der konkrete deler av tjenesten utvikles og leveres.
          </li>
          <li>
            <strong>Kontinuerlig Evaluering:</strong> Etter hver sprint gjennomføres evalueringer og tilbakemeldingsrunder med både interne og eksterne interessenter. Dette sikrer at løsningen stadig forbedres.
          </li>
          <li>
            <strong>Rask Tilpasning:</strong> Gjennom hyppig leveranse kan teamet raskt reagere på tilbakemeldinger, identifisere feil og implementere endringer – noe som gjør det mulig å levere en løsning som virkelig møter brukernes behov.
          </li>
          <li>
            <strong>Risiko Reduksjon:</strong> Ved å fokusere på små, inkrementelle forbedringer reduseres risikoen ved å lansere en fullskala løsning uten at det er testet i mindre deler først.
          </li>
          <li>
            <strong>Fleksibilitet:</strong> Iterativ utvikling gir muligheten til å endre retning basert på nye innsikter og markedskrav, noe som er essensielt for å skape en bærekraftig og brukersentrert tjeneste.
          </li>
        </ul>
        <p>
          Denne metoden gjør det mulig å bygge løsningen gradvis, der hver iterasjon fungerer som en byggestein som til sammen utgjør en komplett og optimalisert tjeneste. Målet er å skape en dynamisk prosess hvor kontinuerlig forbedring og tilpasning er en naturlig del av utviklingssyklusen.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg6} alt="Iterativ og Inkrementell Utvikling" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step6;