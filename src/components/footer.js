import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s;
`;

const FooterItem = styled.p`
  margin: 0 20px;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const RenderFooter = () => {
  return (
    <FooterContainer>
      <FooterItem>Tous droits réservés</FooterItem>
      <FooterItem>Contact</FooterItem>
      <FooterItem>&copy; 2023 Gaoui Mounir</FooterItem>
    </FooterContainer>
  );
};

export default RenderFooter;
