'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "../ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";
import InstagramIcon from "@/public/svg/InstagramIcon";
import FigmaIcon from "@/public/svg/FigmaIcon";
import GitHubIcon from "@/public/svg/GitHubIcon";

// Estilos para el footer
const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 120px 40px 100px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  article {
    display: flex;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 679px) {
    article {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    div {
      justify-content: center;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  .social-icons {
    height: min-content;
    display: flex;
    gap: 20px;
  }
`;

const Box = styled.article`
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.textPrimary};
  padding-top: 30px;
  width: 80%;
`;

const FooterNavItem = styled.li`
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const FooterUser: React.FC = () => {
  return (
    <FooterStyled>
      <article>
        <FooterNavItem onClick={() => handlePageChange('INICIO')}>
          <StyledNavLink href="/user" label="INICIO" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('MATCH')}>
          <StyledNavLink href="/user/match" label="MATCH" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('DESCUBRE')}>
          <StyledNavLink href="/user/discover" label="DESCUBRE" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('PERFIL')}>
          <StyledNavLink href="/user/profile" label="PERFIL" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('LEGAL')}>
          <StyledNavLink href="/user/legal" label="LEGAL" />
        </FooterNavItem>
      </article>
      <Box>
        <p>
          © {new Date().getFullYear()} SkillSwap, Inc. Todos los derechos reservados.
        </p>
        <div className="social-icons">
          <StyledIconNavLink 
            target="_blank" 
            href="https://www.figma.com/design/FEDH5WgaGXBLSr2xBBA8OV/rutaAvanzada.ts-Mockup?node-id=0-1&node-type=canvas&t=SONsdrpY89xVseme-0" 
            label="Figma" 
            icon={<FigmaIcon />} 
          />
          <StyledIconNavLink 
            target="_blank" 
            href="https://github.com/luisaramicar11/skillSwap" 
            label="GitHub" 
            icon={<GitHubIcon />} 
          />
          <StyledIconNavLink 
            target="_blank" 
            href="https://www.instagram.com/" 
            label="Instagram" 
            icon={<InstagramIcon />} 
          />
        </div>
      </Box>
    </FooterStyled>
  );
};

