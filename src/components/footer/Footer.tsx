'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "../ui/links/NavLinks";
import { handlePageChange } from "@/src/utils/handlePageTheme";

// Estilos para el footer
const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  a {
    color:${({ theme }) => theme.colors.textPrimary};
    margin: 20px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  .social-icons {
    display: flex;
    gap: 10px;

    span {
      width: 20px;
      height: 20px;
      border: 2px solid ${({ theme }) => theme.colors.textPrimary};
      border-radius: 50%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.textPrimary};
  padding-top: 50px;
  width: 80%;
`;

const FooterNavItem = styled.li`
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
`;

export const Footer: React.FC = () => {
    return (

        <FooterStyled>
        <div>
          <FooterNavItem onClick={() => handlePageChange('INICIO')}>
            <StyledNavLink href="/" label="INICIO" />
          </FooterNavItem>
          <FooterNavItem onClick={() => handlePageChange('MATCH')}>
            <StyledNavLink href="/match" label="MATCH" />
          </FooterNavItem>
          <FooterNavItem onClick={() => handlePageChange('DESCUBRE')}>
            <StyledNavLink href="/discover" label="DESCUBRE" />
          </FooterNavItem>
          <FooterNavItem onClick={() => handlePageChange('USER')}>
            <StyledNavLink href="/settings" label="USER" />
          </FooterNavItem>
          <FooterNavItem onClick={() => handlePageChange('LEGAL')}>
            <StyledNavLink href="/legal" label="LEGAL" />
          </FooterNavItem>
        </div>
        <Box>
          <p>
            © {new Date().getFullYear()} SkillSwap, Inc. Todos los derechos reservados.
          </p>
          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Box>
      </FooterStyled>
       
    );
};
