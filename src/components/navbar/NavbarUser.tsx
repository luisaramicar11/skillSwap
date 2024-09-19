'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/utils/handlePageTheme";
import InfoIcon from "@/public/svg/InfoIcon";
import ListIcon from "@/public/svg/ListIcon";
import SettingsIcon from "@/public/svg/SettingsIcon";
import SideBarProfile from "../sidebars/SidebarFloatingProfile"

// Styled components
const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index:10000;
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
    align-items: center;
    font-size: 14px;
    width: max-content;
    transition: 0.4s;
    gap: 10px;

    & small {
        margin: 0;
        padding: 0;
    }

    &:hover, :focus, :active {
        transition: 0.4s;
        font-weight: 600;
        border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const SidebarLinkContainer = styled.li`
    width: 100px;
    cursor: pointer;
    list-style: none;
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

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <SideBarProfile name="Martín Elías"
                    skills={["JavaScript", "HTML", "Adobe"]}
                    rating={4.1}
                    rejected={["Juliana Mina"]}
                    accepted={["Andrea Mira"]}
                    pending={["Claudio Ponce"]}
                    inbox={["Carolina Rojas"]}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    />
            <SidebarLinkContainer>
                <SidebarLink onClick={openModal}>+ <small>¿Quieres ver tu información?</small></SidebarLink>
            </SidebarLinkContainer>
            <HamburgerMenu onClick={toggleMenu}>
                <StyledIconNavLink href="#" icon={<ListIcon />} />
            </HamburgerMenu>
            <NavList isOpen={isOpen}>
                <NavItem onClick={() => handlePageChange('INICIO')}>
                    <StyledNavLink href="/" label="INICIO" />
                </NavItem>
            </NavList>

            <IconsContainer>
                <StyledIconNavLink href="/settings" label="CONFIGURA" icon={<SettingsIcon />} />
                <StyledIconNavLink href="/legal" label="LEGAL" icon={<InfoIcon />} />
            </IconsContainer>
        </NavbarContainer>
    );
};