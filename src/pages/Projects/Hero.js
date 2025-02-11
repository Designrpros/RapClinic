// src/components/Hero.js
import React from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// Import images from inside src/Images
import MusicCircleImage from '../../Images/MusicCircle.png';
import MusicCircleWhite from '../../Images/MusicCircleWhite.png';
import studio51Logo from '../../Images/Studio51.png';
import studio51LogoWhite from '../../Images/Studio51LogoWhite.png';

const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.textColor};
`;

const FixedBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 1500px;
  background-image: url(${({ theme }) =>
    theme.mode === 'dark' ? MusicCircleImage : MusicCircleWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  padding: 2rem;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  line-height: 1.2;
  word-wrap: break-word;

  /* Responsive Scaling */
  @media (max-width: 1200px) {
    font-size: 65px;
  }

  @media (max-width: 992px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 600px) {
    font-size: 35px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }
`;

// Define a bounce keyframes animation for the arrow
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  } 
  40% {
    transform: translateY(-10px);
  } 
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;

  .chevron-icon {
    font-size: 24px;
    color: ${({ theme }) => theme.textColor};
    animation: ${bounce} 2s infinite;
  }
`;

const Hero = () => {
  const theme = useTheme();
  // Choose the appropriate logo based on theme mode
  const logo = theme.mode === 'dark' ? studio51LogoWhite : studio51Logo;
  return (
    <HeroSection>
      <FixedBackground />
      <FullScreenIntro>
        <LogoWrapper>
          <Title>UTGIVELSER</Title>
        </LogoWrapper>
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>
    </HeroSection>
  );
};

export default Hero;