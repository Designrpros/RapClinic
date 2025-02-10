// src/pages/Aktheuelt/Step9.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg9 from "./img/Steg9.png";

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

const Step9 = () => {
  return (
    <StepContainer>
      <StepTitle>Sprint Planlegging og Stand-ups</StepTitle>
      <StepContent>
        <p>
          Denne fasen handler om å strukturere og koordinere teamets arbeid gjennom korte, intensive arbeidsøkter – såkalte sprints – og gjennom daglige stand-up møter. Denne tilnærmingen sikrer at alle er oppdatert, at eventuelle hindringer blir identifisert tidlig, og at teamet jobber effektivt mot felles mål.
        </p>
        <ul>
          <li>
            <strong>Sprint Planlegging:</strong> I starten av hver sprint samles teamet for å definere sprintens mål og identifisere hvilke oppgaver som skal prioriteres. Dette innebærer:
            <ul>
              <li>Gjennomgang og prioritering av produktbacklogen.</li>
              <li>Oppdeling av større oppgaver i mindre, håndterbare deler.</li>
              <li>Definering av klare mål for hva som skal leveres i sprinten.</li>
            </ul>
          </li>
          <li>
            <strong>Daglige Stand-ups:</strong> Hver dag møtes teamet i korte (vanligvis 15 minutter) stand-up møter. Her deler alle hva de har gjort, hva de planlegger å gjøre den dagen, og om det er noen hindringer de trenger hjelp med. Dette møtet er essensielt for:
            <ul>
              <li>Å opprettholde kontinuerlig kommunikasjon.</li>
              <li>Å identifisere og løse problemer raskt.</li>
              <li>Å justere planer om nødvendig.</li>
            </ul>
          </li>
          <li>
            <strong>Sprint Review:</strong> Ved slutten av hver sprint gjennomgår teamet hva som er oppnådd. Leveransen blir demonstrert for interessenter, og tilbakemeldinger samles inn for å vurdere om sprintens mål er nådd.
          </li>
          <li>
            <strong>Retrospektiv:</strong> Etter sprint review møtes teamet for å evaluere arbeidsprosessen. Her diskuteres hva som fungerte bra, hvilke utfordringer som oppstod, og hvordan prosessen kan forbedres i neste sprint. Denne evalueringen bidrar til kontinuerlig læring og forbedring.
          </li>
        </ul>
        <p>
          Ved å strukturere arbeidet med sprint planlegging og daglige stand-ups oppnår man en effektiv arbeidsflyt, rask tilpasning til endrede krav, og et sterkt fokus på kontinuerlig forbedring. Denne metoden sikrer at teamet hele tiden beveger seg mot en mer optimal og brukersentrert løsning.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg9} alt="Sprint Planlegging og Stand-ups" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step9;