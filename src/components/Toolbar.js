// src/components/Toolbar.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../themeContext";

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.toolbarBackground}; /* semi-transparent */
  color: ${({ theme }) => theme.textColor};
  backdrop-filter: blur(10px);
  z-index: 1000;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0 15px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
  flex-shrink: 0; /* Prevent links from shrinking */

  &:hover {
    color: ${({ theme }) => theme.waveformColor};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  margin-right: 10px;

  &:hover {
    color: ${({ theme }) => theme.waveformColor};
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  white-space: nowrap; /* Prevent links from wrapping */
  gap: 20px;
`;

const Toolbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <ToolbarContainer>
      <ToggleButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </ToggleButton>
      <NavContainer>
        <Nav>
          <StyledLink to="/">Studio 51</StyledLink>
          <StyledLink to="/services">Tjenester</StyledLink>
          <StyledLink to="/projects">Utgivelser</StyledLink>
          <StyledLink to="/akthe">Akthe</StyledLink>
          <StyledLink to="/aktheuelt">Aktheuelt</StyledLink>
          <StyledLink to="/contact">Kontakt</StyledLink>
        </Nav>
      </NavContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;