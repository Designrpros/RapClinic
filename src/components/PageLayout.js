// src/components/PageLayout.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

// Import your background images
import MusicCircleImage from '../Images/MusicCircle.png';
import MusicCircleWhite from '../Images/MusicCircleWhite.png';

// This component renders the fixed background image based on the current theme.
const FixedBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 1500px;
  background-image: url(${({ theme }) => theme.mode === 'dark' ? MusicCircleImage : MusicCircleWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; /* Keep the background behind content */
`;

// The PageWrapper holds the page content.
const PageWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const PageLayout = ({ children }) => {
  // Optionally, you can use the theme here if needed.
  const theme = useTheme();

  return (
    <>
      <FixedBackground />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};

export default PageLayout;