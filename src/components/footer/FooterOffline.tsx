'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "../ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";
import { FaCode } from "react-icons/fa6";
import { FaFigma, FaInstagram } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

// Estilos para el footer
const FooterStyled = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGrey};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 120px 40px 100px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ul{
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    text-align: start;
    list-style: none;
  }

  section {
    display: flex;
    gap: 20px;
    text-align: start;
  }

  @media (max-width: 679px) {
    padding: 80px 40px 50px 40px;
    
    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    ul {
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    div {
      justify-content: center;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;
    font-size: 12px;

    &:hover {
      color: ${({ theme }) => theme.colors.textWhite};
    }
  }

  .social-icons {
    height: min-content;
    display: flex;
    gap: 20px;

    @media (max-width: 979px) {
      gap: 10px;
    }
  }
`;

const Box = styled.section`
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.textWhite};
  padding-top: 30px;
  width: 80%;

  > * {
    color: ${({ theme }) => theme.colors.textWhite};
    hyphens: none;
    word-wrap: normal;
    overflow-wrap: normal;
    font-size: 15px;
  }

  @media (max-width: 679px) {
    width: 95%;

    > * {
      font-size: 12px;
    }
  }
`;

const FooterNavItem = styled.li`
    display: inline-block;
    font-size: 15px;
    max-height: 54px;
    cursor: pointer;
    margin-top: 10px;

    a{
        padding: 0 15px;

        & svg{
            width: 50px;
            height: auto;
        }
    }
`;

export const FooterOffline: React.FC = () => {
  return (
    <FooterStyled>
      <ul>
        <FooterNavItem onClick={() => handlePageChange('INICIO')}>
          <StyledNavLink href="/" label="INICIO" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('AUTH')}>
          <StyledNavLink href="/auth" label="AUTH" />
        </FooterNavItem>
        <FooterNavItem onClick={() => handlePageChange('LEGAL')}>
          <StyledNavLink href="/legal" label="LEGAL" />
        </FooterNavItem>
      </ul>
      <Box>
        <p>
          © {new Date().getFullYear()} SkillSwap. Todos los derechos reservados.
        </p>
        <div className="social-icons">
          <StyledIconNavLink
            target="_blank"
            href="https://www.instagram.com/franccoina"
            label="Instagram"
            icon={<FaInstagram />}
          />
          <StyledIconNavLink
            target="_blank"
            href="https://www.figma.com/design/FEDH5WgaGXBLSr2xBBA8OV/SkillSwap.ts-Mockup?t=O8A7L1zQEFkpy70a-1"
            label="Figma"
            icon={<FaFigma />}
          />
          <StyledIconNavLink
            target="_blank"
            href="https://github.com/luisaramicar11/skillSwap"
            label="GitHub-Frontend"
            icon={<VscGithubAlt />}
          />
          <StyledIconNavLink
            target="_blank"
            href="https://github.com/medi77na/SkillSwap"
            label="GitHub-Backend"
            icon={<FaCode />}
          />
        </div>
      </Box>
    </FooterStyled>
  );
};

