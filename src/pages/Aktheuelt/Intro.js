// src/pages/Aktheuelt/Intro.js
import React from "react";
import styled from "styled-components";

import Aktheuelt1 from "./img/Aktheuelt1.png";
import Aktheuelt2 from "./img/Aktheuelt2.png";
import Aktheuelt3 from "./img/Aktheuelt3.png";

const StepContainer = styled.div`
  padding: 2rem;
  text-align: left;
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StepContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 30%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Intro = () => {
  return (
    <StepContainer>
      <StepTitle>Introduksjon til Aktheuelt Prosess</StepTitle>
      <StepContent>
        Aktheuelt Prosess kombinerer prinsipper fra service design og agile metoder for å
        skape en helhetlig og brukersentrert tilnærming til helsefremmende aktiviteter. Prosessen
        fokuserer på å forstå brukerne, co-creation, prototyping, testing, implementering og kontinuerlig
        forbedring – alt med mål om å øke deltakelsen, redusere utenforskap og tilby meningsfulle tjenester.
      </StepContent>

      <ImageContainer>
        <Image src={Aktheuelt1} alt="Aktheuelt prosess steg 1" />
        <Image src={Aktheuelt2} alt="Aktheuelt prosess steg 2" />
        <Image src={Aktheuelt3} alt="Aktheuelt prosess steg 3" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Intro;