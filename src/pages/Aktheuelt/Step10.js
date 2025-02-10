// src/pages/Aktheuelt/Step10.js
import React from "react";
import styled from "styled-components";

// Import the image correctly
import Steg10 from "./img/Steg10.png";

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

const Step10 = () => {
  return (
    <StepContainer>
      <StepTitle>Fokus på Kundefokus og Verdi</StepTitle>
      <StepContent>
        <p>
          Dette siste steget i Aktheuelt-prosessen understreker viktigheten av å sette brukeren og den reelle verdien de oppnår i sentrum for all tjenesteutvikling. Det handler om å sørge for at alle tiltak og forbedringer i tjenesten prioriteres ut fra deres innvirkning på brukeropplevelsen.
        </p>
        <ul>
          <li>
            <strong>Brukersentrert Prioritering:</strong> Evaluer alle oppgaver og forbedringsforslag ut fra hvordan de påvirker brukeren. Tiltakene bør gi målbar verdi og forbedre opplevelsen for den enkelte.
          </li>
          <li>
            <strong>Fleksibilitet:</strong> Vær forberedt på å endre retning basert på nye tilbakemeldinger og innsikter. Bruk data og brukerfeedback for kontinuerlig å revidere prioriteringene.
          </li>
          <li>
            <strong>Kontinuerlig Forbedring:</strong> Skap en kultur der man aldri anser tjenesten som “ferdig”. Hver tilbakemelding er en mulighet for forbedring, og hver iterasjon skal føre til en mer verdifull og brukervennlig løsning.
          </li>
          <li>
            <strong>Verdi og Resultatmåling:</strong> Sett opp klare KPI-er og mål for å måle effekten av hver funksjon og oppgave. Disse målingene skal brukes for å evaluere suksess og identifisere forbedringsområder.
          </li>
          <li>
            <strong>Samarbeid med Brukerne:</strong> Involver brukerne kontinuerlig i beslutningsprosessen, slik at de er med på å definere hva som virkelig gir verdi. Dette sikrer at tjenesten tilpasses deres behov og forventninger.
          </li>
        </ul>
        <p>
          Målet med dette steget er å sikre at alle aktiviteter og løsninger ikke bare er teknisk gjennomførbare, men også gir reell og målbar verdi for brukeren. Ved å holde kundefokus i alle ledd skaper vi en dynamisk og bærekraftig tjeneste som kontinuerlig tilpasses nye behov og utfordringer.
        </p>
      </StepContent>

      <ImageContainer>
        <Image src={Steg10} alt="Fokus på Kundefokus og Verdi" />
      </ImageContainer>
    </StepContainer>
  );
};

export default Step10;