// src/pages/Home/About.js
import React from "react";
import styled from "styled-components";

// Container for About-seksjonen uten egen bakgrunnsfarge.
const AboutSection = styled.section`
  /* Ingen egen bakgrunnsfarge, så den overordnede siden vises */
  color: ${({ theme }) => theme.textColor};
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
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
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

// IntroCard med ekstra marg nederst for å skille tittelen/intro fra kortene.
// På store skjermer begrenses bredden til 80% og kortet sentreres.
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

const About = () => {
  return (
    <AboutSection>
      <IntroCard>
        <AboutTitle>Om Studio 51</AboutTitle>
        <IntroParagraph>
          Velkommen til Studio 51 – et kreativt knutepunkt for musikk, lyddesign og kunstnerisk innovasjon.
          Vårt studio er designet for artister, produsenter og kreative sjeler som brenner for å utfordre
          grensene for sitt håndverk.
        </IntroParagraph>
      </IntroCard>
      
      <CardGrid>
        <Card>
          <CardTitle>Musikkproduksjon</CardTitle>
          <CardContent>
            Våre moderne innspillingsfasiliteter og produksjonstjenester sikrer at dine musikalske ideer blir
            fanget med høyeste kvalitet og presisjon.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Lyddesign</CardTitle>
          <CardContent>
            Utforsk innovative lydlandskap og opplev immersive lydopplevelser med vårt ekspertteam innen lyddesign,
            dedikert til å skape unike lydreiser.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Kreative Workshops</CardTitle>
          <CardContent>
            Delta i interaktive workshops og mesterkurs ledet av bransjeeksperter, designet for å inspirere og
            løfte din kreative prosess.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Samarbeidsrom</CardTitle>
          <CardContent>
            Studio 51 er mer enn bare et studio – det er et fellesskap. Vårt samarbeidsrom er ideelt for
            nettverksbygging, felleskaping og å skape varige kunstneriske partnerskap.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Live Arrangementer</CardTitle>
          <CardContent>
            Opplev spenningen ved liveopptredener, jam sessions og eksklusive arrangementer som feirer musikk og
            kunst i et dynamisk, engasjerende miljø.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Live Arrangementer</CardTitle>
          <CardContent>
            Opplev spenningen ved liveopptredener, jam sessions og eksklusive arrangementer som feirer musikk og
            kunst i et dynamisk, engasjerende miljø.
          </CardContent>
        </Card>
      </CardGrid>
    </AboutSection>
  );
};

export default About;