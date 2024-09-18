'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/utils/handlePageTheme";
import InfoIcon from "@/public/svg/InfoIcon";
import SettingsIcon from "@/public/svg/SettingsIcon";

// Styled components
const NavbarContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.bgNavbar};
    color: ${({ theme }) => theme.colors.textWhite};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    gap: 50px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const SidebarLink = styled.p`
    font-weight: 300;
    font-style: italic;
    display: flex;
    font-size: 14px;
    width: max-content;
    transition: 0.4s ease-in-out;
    gap: 10px;

    & span {
        text-decoration: underline;
    }

    &:hover, :focus, :active {
        transition: 0.4s ease-in-out;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        display: none;
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
    gap: 20px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
    list-style: none;
    text-align: center;
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        background-color: ${({ theme }) => theme.colors.bgNavbar};
        padding: 20px;
        gap: 20px;
        z-index: 100;
    }
`;

const NavItem = styled.li`
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
`;

const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    justify-content: center;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Line = styled.div`
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textWhite};
    margin: 4px 0;
`;

// Navbar component
export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <SidebarLinkContainer>
                <SidebarLink>+ <span>¿Quieres ver tu información?</span></SidebarLink>
            </SidebarLinkContainer>

            <HamburgerMenu onClick={toggleMenu}>
                <Line />
                <Line />
                <Line />
            </HamburgerMenu>

            <NavList isOpen={isOpen}>
                <NavItem onClick={() => handlePageChange('INICIO')}>
                    <StyledNavLink href="/" label="INICIO" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('DESCUBRE')}>
                    <StyledNavLink href="/discover" label="DESCUBRE" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('MATCH')}>
                    <StyledNavLink href="/match" label="MATCH" />
                </NavItem>
            </NavList>

            <IconsContainer>
                <StyledIconNavLink href="/settings" label="CONFIGURA" icon={<SettingsIcon />} />
                <StyledIconNavLink href="/legal" label="LEGAL" icon={<InfoIcon />} />
            </IconsContainer>
        </NavbarContainer>
    );
};
