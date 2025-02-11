// src/pages/Aktheuelt/AktheueltTabs.js
import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1.5rem 0;
  margin-bottom: 2.5rem;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor || "#ddd"};
`;

const TabButton = styled.button`
  background: ${({ active, theme }) =>
    active ? theme.primaryColor || "#007BFF" : theme.inactiveTabColor || "#f0f0f0"};
  
  color: ${({ active, theme }) =>
    active 
      ? theme.activeTextColor || "#fff" 
      : theme.mode === "dark" 
        ? "#000"  /* Set text to black in dark mode */
        : theme.textColor || "#333"}; 
  
  font-size: 1.25rem;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s ease;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none"};

  &:hover {
    background: ${({ theme }) => theme.primaryColor || "#0056b3"};
    color: #fff;
    transform: translateY(-2px);
  }
`;

const AktheueltTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          active={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default AktheueltTabs;