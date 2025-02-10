// src/pages/Aktheuelt/Step1.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg1 from "./img/Steg1.png";

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

const Step1 = () => {
  return (
    <StepContainer>
      <StepTitle>Forstå Brukerne og Konteksten</StepTitle>
      <StepContent>
        <p>
          For å utvikle en tjeneste som virkelig møter brukernes behov, er det avgjørende å starte med å forstå hvem brukerne er, hvilke utfordringer de møter, og i hvilken kontekst de opererer. Dette steget utgjør fundamentet for hele prosessen.
        </p>
        <ul>
          <li>
            <strong>Innsiktsinnhenting:</strong> Gjennomfør både kvalitative og kvantitative undersøkelser. Dette inkluderer dybdeintervjuer, spørreundersøkelser, fokusgrupper og observasjoner for å samle detaljert informasjon om brukernes erfaringer, behov og smertepunkter.
          </li>
          <li>
            <strong>Personas:</strong> Utarbeid realistiske personas basert på innsamlet data. Disse fiktive karakterene representerer de ulike segmentene av målgruppen og hjelper teamet med å holde brukersentreringen i fokus gjennom hele designprosessen.
          </li>
          <li>
            <strong>Brukerreiser:</strong> Kartlegg komplette brukerreiser (customer journey mapping) for å visualisere hele opplevelsen fra start til slutt. Identifiser kritiske øyeblikk, smertepunkter og muligheter for forbedringer.
          </li>
          <li>
            <strong>Kontekstuell Analyse:</strong> Analyser den sosiale, kulturelle og fysiske konteksten der tjenesten skal leveres. Dette innebærer å se på eksterne faktorer (som lokalmiljø, infrastruktur og sosiale nettverk) samt interne prosesser som kan påvirke brukeropplevelsen.
          </li>
        </ul>
        <p>
          Resultatet av dette steget skal gi et solid kunnskapsgrunnlag, som teamet kan bygge videre på i de neste fasene av prosessen. Innsikten danner basis for å skape en tjeneste som ikke bare er funksjonell, men også meningsfull og tilpasset de virkelige behovene til brukerne.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg1} alt="Forstå Brukerne og Konteksten" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step1;