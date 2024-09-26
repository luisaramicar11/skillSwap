'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import InfoIcon from "@/public/svg/InfoIcon";
import ListIcon from "@/public/svg/ListIcon";
import SettingsIcon from "@/public/svg/SettingsIcon";
import OnlineProfileSidebar from "../sidebars/SidebarFloatingOnline";
import SettingsFloatingSidebar from "../sidebars/SidebarFloatingSettings";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";

// Styled components
const NavbarContainer = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    background-color: ${({ theme }) => theme.colors.bgNavbar};
    color: ${({ theme }) => theme.colors.textWhite};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    gap: 50px;

    @media (max-width: 790px) {
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
    cursor: pointer;
    gap: 10px;

    & small {
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    &:hover {
        transform: scale(0.95);
        transition: 0.4s;

    }

    @media (max-width: 790px) {
        display: none;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 790px) {
        gap: 10px;
    }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
    list-style: none;
    text-align: center;
    display: flex;
    gap: 50px;
    padding: 0;

    @media (max-width: 790px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items: start;
        height: 100%;
        width: 50%;
        position: fixed;
        margin: 0;
        top: 54px;
        left: 0;
        transition: 1s ease-in-out;
        background-color: ${({ theme }) => theme.colors.bgPrimary};
        border: 1px solid ${({ theme }) => theme.colors.textBlack};
        padding: 0 !important;
        gap: 20px;
        animation: move 1s ease-in-out;
        z-index: 100;

        & a{
            font-size: 18px;
            color: ${({ theme }) => theme.colors.textSecondary} !important;
        }
    
        @keyframes move {
            from {
                translate: -510px;
            }
            to {
                translate: 0;
            };
        }
    }
`;

const NavItem = styled.li`
    display: inline-block;
    font-size: 15px;
    cursor: pointer;
`;

const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    justify-content: center;

    @media (max-width: 790px) {
        display: block;
    }
`;

// Navbar component
export const NavbarUser: React.FC = () => {
    const [isOpenToggle, setIsOpenToggle] = useState(false);
    const [isSidebarProfileOpen, setIsSidebarProfileOpen] = useState<boolean>(false);
    const [isSidebarSettingsOpen, setIsSidebarSettingsOpen] = useState<boolean>(false);

    const openSidebarProfile = () => setIsSidebarProfileOpen(true);
    const closeSidebarProfile = () => setIsSidebarProfileOpen(false);
    const openSidebarSettings = () => setIsSidebarSettingsOpen(true);
    const closeSidebarSettings = () => setIsSidebarSettingsOpen(false);

    const toggleMenu = () => {
        setIsOpenToggle(!isOpenToggle);
    };

    return (
        <NavbarContainer>
            <OnlineProfileSidebar isOpen={isSidebarProfileOpen} onClose={closeSidebarProfile}/>
            <SettingsFloatingSidebar isOpen={isSidebarSettingsOpen} onClose={closeSidebarSettings}/>
            <SidebarLink onClick={openSidebarProfile}>+ <small>¿Quieres ver tu información?</small></SidebarLink>
            <HamburgerMenu onClick={toggleMenu}>
                <StyledIconNavLink href="#" icon={<ListIcon />} />
            </HamburgerMenu>
            <NavList isOpen={isOpenToggle}>
                <NavItem onClick={() => handlePageChange('INICIO')}>
                    <StyledNavLink href="/user/" label="INICIO" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('DESCUBRE')}>
                    <StyledNavLink href="/user/discover" label="DESCUBRE" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('MATCH')}>
                    <StyledNavLink href="/user/match" label="MATCH" />
                </NavItem>
            </NavList>

            <IconsContainer>
                <StyledIconNavLink onClick={openSidebarSettings} href="#" icon={<SettingsIcon />} />
                <StyledIconNavLink href="/user/legal" label="LEGAL" icon={<InfoIcon />} />
            </IconsContainer>
        </NavbarContainer>
    );
};