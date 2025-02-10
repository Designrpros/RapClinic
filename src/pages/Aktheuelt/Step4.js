// src/pages/Aktheuelt/Step4.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg4 from "./img/Steg4.png";

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

const Step4 = () => {
  return (
    <StepContainer>
      <StepTitle>Testing og Iterasjon</StepTitle>
      <StepContent>
        <p>
          Etter at konseptene og prototypene er utviklet, er det avgjørende å teste disse med reelle brukere for å sikre at løsningen faktisk møter deres behov. Testing og iterasjon er en kontinuerlig prosess som sørger for at man fanger opp og retter opp i eventuelle feil og forbedringspotensial.
        </p>
        <ul>
          <li>
            <strong>Brukertesting:</strong> Gjennomfør tester med faktiske brukere – enten gjennom intervjuer, observasjoner eller spørreundersøkelser – for å samle innsikt i hva som fungerer og hva som kan forbedres.
          </li>
          <li>
            <strong>Evaluering av brukerreisen:</strong> Kartlegg hele brukerreisen (customer journey) for å identifisere kritiske berøringspunkter og smertepunkter.
          </li>
          <li>
            <strong>Iterasjon:</strong> Bruk tilbakemeldingene til å forbedre og justere prototypen. Gjenta testprosessen flere ganger for å oppnå en optimal løsning.
          </li>
          <li>
            <strong>Dokumentasjon:</strong> Samle og analyser all tilbakemelding for å kunne prioritere endringer og sikre at de riktige forbedringene blir implementert.
          </li>
        </ul>
        <p>
          Denne iterasjonsprosessen sikrer at tjenesten utvikles i samsvar med brukernes forventninger og behov, og at den til slutt blir både brukervennlig og bærekraftig.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg4} alt="Testing og Iterasjon" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step4;