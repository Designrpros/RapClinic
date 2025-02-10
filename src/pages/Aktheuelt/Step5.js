// src/pages/Aktheuelt/Step5.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg5 from "./img/Steg5.png";

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

const Step5 = () => {
  return (
    <StepContainer>
      <StepTitle>Implementering og Evaluering</StepTitle>
      <StepContent>
        <p>
          Etter at konseptene og prototypene er testet og iterert, er neste steg å implementere den endelige løsningen. Dette steget handler om å rulle ut tjenesten i en reell setting, samtidig som man kontinuerlig evaluerer og forbedrer tilbudet basert på faktiske resultater og tilbakemeldinger.
        </p>
        <ul>
          <li>
            <strong>Implementering:</strong> Rull ut tjenesten med et dedikert, tverrfaglig team. Dette innebærer opplæring av ansatte, oppsett av nødvendige systemer og tilpasning av arbeidsprosesser for å sikre en smidig overgang fra prototype til fullverdig tjeneste.
          </li>
          <li>
            <strong>Overvåking og Måling:</strong> Etabler måleparametere og verktøy for å følge med på hvordan tjenesten fungerer i praksis. Dette kan inkludere brukerundersøkelser, KPI-er og tilbakemeldinger fra både ansatte og brukere.
          </li>
          <li>
            <strong>Evaluering:</strong> Analyser data og tilbakemeldinger regelmessig for å vurdere tjenestens effekt og identifisere forbedringsområder. Evalueringen bør se både på kvantitative mål (for eksempel antall brukere, responstid) og kvalitative tilbakemeldinger.
          </li>
          <li>
            <strong>Justering og Forbedring:</strong> Basert på evalueringen skal tjenesten kontinuerlig tilpasses og forbedres. Dette kan innebære mindre endringer eller større iterasjoner for å optimalisere brukeropplevelsen og tjenestens effektivitet.
          </li>
          <li>
            <strong>Langsiktig Oppfølging:</strong> Sikre at det etableres rutiner for jevnlig oppfølging og vedlikehold. Tjenesten skal ikke bare lanseres, men også utvikles over tid i takt med nye behov og utfordringer.
          </li>
        </ul>
        <p>
          Ved å kombinere en strukturert implementeringsprosess med kontinuerlig evaluering, kan man sikre at den endelige løsningen ikke bare leveres, men også opprettholder høy kvalitet og tilpasningsevne i møte med endrede behov og omstendigheter.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg5} alt="Implementering og Evaluering" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step5;