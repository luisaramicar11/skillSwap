'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks"
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/utils/handlePageTheme";
import { Baskervville } from "next/font/google";
import InfoIcon from "@/public/svg/InfoIcon";
import SettingsIcon from "@/public/svg/SettingsIcon";

const baskervville = Baskervville({
    weight: '400',
    subsets: ['latin'],
    style: 'normal'
});

// Styled components
const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  color: ${({ theme }) => theme.colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  gap: 50px;
`;

const SidebarLink = styled.p`
    font-family: ${baskervville.style.fontFamily};
    font-style: italic;
    font-size: 14px;
    width: max-content;

    & span {
        text-decoration: underline;
    }

    &:hover {
        font-weight: bold;
    }
`;

const SidebarLinkContainer = styled.div`
  width: 100px;
  cursor: pointer;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  gap: 50px;
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

// Navbar component
export const Navbar: React.FC = () => {
    return (

        
        <NavbarContainer>
            <SidebarLinkContainer>
                <SidebarLink>+ <span>¿Quieres ver tu información?</span></SidebarLink>
            </SidebarLinkContainer>
            <NavList>
                <NavItem onClick={() => handlePageChange('INICIO')}>
                    <StyledNavLink href="/" label="INICIO" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('MATCH')}>
                    <StyledNavLink href="/match" label="MATCH" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('DESCUBRE')}>
                    <StyledNavLink href="/discover" label="DESCUBRE" />
                </NavItem>
            </NavList>
            <IconsContainer>
                <StyledIconNavLink href="/settings" label="CONFIGURA" icon={<SettingsIcon />} />
                <StyledIconNavLink
                    href="/legal"
                    label="LEGAL"
                    icon={<InfoIcon />}
                />
            </IconsContainer>
        </NavbarContainer>
    );
};
