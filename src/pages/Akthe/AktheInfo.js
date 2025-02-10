// src/pages/Home/Akthe.js
import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  color: ${({ theme }) => theme.textColor};
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 3;
  
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    max-width: 90%;
  }
`;

const IntroParagraph = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.cardTextColor};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: left;
  position: relative;
  z-index: 3;
  
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const IntroCard = styled(Card)`
  margin-bottom: 3rem;
  
  @media (min-width: 1024px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.cardTextColor};
  
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const CardContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.cardTextColor};
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Akthe = () => {
  return (
    <AboutSection>
      <IntroCard>
        <SectionTitle>AKTHE</SectionTitle>
        <IntroParagraph>
          Aktivitetsbasert Helsehjelp (AKTHE) er en nyopprettet avdeling innen psykisk helse og rus, tilrettelagte boliger og akutte tjenester fra 01.01.2022. Vårt felles mål er å tilby helsefremmende aktiviteter som bidrar til bedring, forebygger og reverserer utenforskap – slik at den enkelte kan mestre de aktivitetene de ønsker, enten det gjelder sosialt samhold, arbeidstrening, betalt arbeid eller kompetanseheving.
        </IntroParagraph>
        <IntroParagraph>
          AKTHE bygger på et recoveryorientert perspektiv, Supported Employment, IPS og erfaringskompetanse, og drives med sosialt entreprenørskap. Prosjektene, som Høl-i-CV-en, Rap Clinic, The Music Truck og DSA Groups, skapes i samarbeid med offentlige og private aktører for å gi meningsfulle aktiviteter og arbeidsplasser.
        </IntroParagraph>
        <SectionTitle>Faglig Fundament & Sosialt Entreprenørskap</SectionTitle>
        <IntroParagraph>
        Vår tilnærming er basert på recovery, Supported Employment, IPS og erfaringskompetanse. Gjennom innovasjon og samarbeid sikrer vi at alle midler reinvesteres i tiltak som fremmer sosial inkludering og meningsfulle aktiviteter.
        </IntroParagraph>
      </IntroCard>
      
      <CardGrid>
        <Card>
          <CardTitle>Studio 51 / Rap Clinic</CardTitle>
          <CardContent>
            Et musikkbasert tiltak for å gjenopprette kontakten til musikk og sosiale relasjoner – med mottoet «Beats for Recovery».
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Høl i CV-en</CardTitle>
          <CardContent>
            Et brukerstyrt tilbud med kafé, kaffebrenneri og foodtruck, der pasienter utvikler en positiv identitet gjennom meningsfullt arbeid.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>The Music Truck</CardTitle>
          <CardContent>
            En ambulerende musikkterapitjeneste som bruker musikk for å uttrykke tanker og følelser, med mål om bedre livskvalitet.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>DSA Groups</CardTitle>
          <CardContent>
            Et arbeidstilbud rettet mot personer på autismespekteret, med praktiske oppgaver i naturen og tett samarbeid med offentlige aktører.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Bjørnegård</CardTitle>
          <CardContent>
            Bjørnegård Helse Senter i Bærum kommune er et moderne helsesenter som tilbyr et bredt spekter
            av helsetjenester til lokalbefolkningen. Senteret har et tverrfaglig team bestående av leger,
            sykepleiere, fysioterapeuter og andre helsearbeidere som fokuserer på forebygging, behandling og
            rehabilitering. Med et pasientsentrert tilbud legger Bjørnegård Helse Senter vekt på rask og
            effektiv tilgang til helsetjenester, samt utvikling av forebyggende tiltak og livsstilsprogrammer.
            Senteret samarbeider tett med både kommunale og private aktører for å sikre helhetlig omsorg,
            og fungerer som et viktig kontaktpunkt for både akutte og langsiktige helsebehov i regionen.
          </CardContent>
        </Card>
      </CardGrid>
    </AboutSection>
  );
};

export default Akthe;