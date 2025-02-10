// src/pages/Aktheuelt/Step7.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg7 from "./img/Steg7.png";

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

const Step7 = () => {
  return (
    <StepContainer>
      <StepTitle>Tverrfaglige Team</StepTitle>
      <StepContent>
        <p>
          Et tverrfaglig team er en nøkkelkomponent for å utvikle innovative og helhetlige tjenester. Ved å kombinere ekspertise fra ulike fagområder oppnås en bredere forståelse av utfordringene, noe som gjør det mulig å skape løsninger som både er teknisk robuste og dypt forankret i brukerens virkelighet.
        </p>
        <ul>
          <li>
            <strong>Variert Kompetanse:</strong> Teamet bør inkludere designere, utviklere, helsearbeidere, miljøterapeuter og andre relevante fagpersoner for å dekke alle aspekter av tjenesten.
          </li>
          <li>
            <strong>Samarbeid og Kommunikasjon:</strong> Gjennom regelmessige møter og tverrfaglig dialog sikres det at alle perspektiver blir hørt og integrert i beslutningsprosessen.
          </li>
          <li>
            <strong>Erfaringseksperter:</strong> Involver personer med egenerfaring fra psykisk helse og rus for å bidra med verdifull innsikt og brukersentrert kunnskap.
          </li>
          <li>
            <strong>Fleksibilitet og Læring:</strong> Et tverrfaglig team er bedre rustet til å tilpasse seg endringer og lære underveis, noe som fremmer en kultur for kontinuerlig forbedring.
          </li>
          <li>
            <strong>Felles Mål:</strong> Når alle medlemmer arbeider mot et felles mål – for eksempel å skape helsefremmende aktiviteter som forebygger utenforskap – oppstår synergier som fører til bedre løsninger.
          </li>
        </ul>
        <p>
          Ved å bygge et solid tverrfaglig team, legges grunnlaget for en helhetlig og bærekraftig tjenesteutvikling der både brukersentrerte designprinsipper og teknologiske løsninger ivaretas.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg7} alt="Tverrfaglige Team" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step7;