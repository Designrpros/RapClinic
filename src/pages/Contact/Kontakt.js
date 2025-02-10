// src/pages/ContactPage.js
import React from 'react';
import styled from 'styled-components';
import studio51Logo from './img/Studio51Logo.png'; // Ensure this image is inside src/...

// Full-page Contact Section styling
const ContactSection = styled.section`
  height: 95vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background}; /* Full dark/light background */
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  padding: 2rem;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  font-size: 1.125rem;
  margin-bottom: 20px;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }

  .material-icons {
    margin-right: 10px;
  }
`;

const Address = styled.div`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8;
  margin-top: 20px;

  .material-icons {
    vertical-align: middle;
    margin-right: 10px;
  }

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 1.125rem;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

// Centered Logo styling
const Logo = styled.img`
  display: block;
  margin: 20px auto;
  filter: ${({ theme }) => theme.mode === 'dark' ? 'invert(1)' : 'none'};
  width: 200px;
`;

// Footer styling
const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.mode === 'dark' ? '#000' : '#fff'};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  padding: 20px;
  font-family: 'Old English Text MT', serif;
  box-sizing: border-box;
`;

const FooterText = styled.p`
  margin: 0;
`;

const ContactPage = () => {
  return (
    <>
      <ContactSection>
        <ContactTitle>Kontakt Oss</ContactTitle>
        <ContactText>
          Ta gjerne kontakt med oss via e-post eller telefon, eller besøk oss på en av våre adresser.
        </ContactText>
        <ContactLink href="mailto:home@rapclinic.no">
          <span className="material-icons">email</span>
          home@rapclinic.no
        </ContactLink>
        <ContactLink href="tel:+4797739908">
          <span className="material-icons">phone</span>
          +47 977 39 908
        </ContactLink>
        <Address>
          <div>
            <a
              href="https://www.google.com/maps?q=Gamle+Drammensvei+25,+1369+Stabekk,+Norge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gamle Drammensvei 25, 1369 Stabekk, Norge
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com/maps?q=Anthon+Walles+vei+37,+1337+Sandvika,+Norge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthon Walles vei 37, 1337 Sandvika, Norge
            </a>
          </div>
        </Address>
        <SocialLinks>
          <a href="https://instagram.com/rapclinic" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/rapclinic" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/rapclinic" target="_blank" rel="noopener noreferrer">Twitter</a>
        </SocialLinks>
        <Logo src={studio51Logo} alt="Studio 51 Logo" />
      </ContactSection>

      <Footer>
        <FooterText>© 2025 Studio 51</FooterText>
      </Footer>
    </>
  );
};

export default ContactPage;