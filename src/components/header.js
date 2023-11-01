import React from "react";
import styled from "styled-components";
import "../styles/header.css";

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s;
`;

const HeaderItem = styled.p`
  margin: 0 20px;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const RenderHeader = () => {
  return (
    <HeaderContainer>
      <HeaderItem>A propos</HeaderItem>
      <HeaderItem>Mes projets</HeaderItem>
    </HeaderContainer>
  );
};

export default RenderHeader;
