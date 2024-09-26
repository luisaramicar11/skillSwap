'use client';

import styled from "styled-components";

import React, { useState } from "react";

import StyledNavLink from "@/src/components/ui/links/NavLinks";

import StyledIconNavLink from "../ui/links/IconNavLink";

import { handlePageChange } from "@/src/lib/utils/handlePageTheme";

import InfoIcon from "@/public/svg/InfoIcon";

import ListIcon from "@/public/svg/ListIcon";



import SettingsFloatingSidebar from "../sidebars/SidebarFloatingSettings";

import ProfileSidebarAdmin from "../sidebars/SidebarFloatingAdmin";




// Styled components

const NavbarContainer = styled.div`
    z-index: 10;
    position: fixed;

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

    gap: 10px;

    color: ${({ theme }) => theme.colors.textWhite};
    cursor: pointer;




    & small {

        margin: 0;
        cursor: pointer;

        padding: 0;

    }




    &:hover {
        transform: scale(0.95);
        transition: 0.4s;

    }




    @media (max-width: 790px) {

        display: none;

    }

`;




const SidebarLinkContainer = styled.li`

    width: 100px;

    cursor: pointer;

    list-style: none;




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

        padding: 20px;

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

export const NavbarAdmin: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isSidebarSettingsOpen, setIsSidebarSettingsOpen] = useState<boolean>(false);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);



    const closeSidebarSettings = () => setIsSidebarSettingsOpen(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);




    const toggleMenu = () => {

        setIsOpen(!isOpen);

    };




    return (
        <NavbarContainer>

            <ProfileSidebarAdmin isOpen={isModalOpen} onClose={closeModal} />

            <SettingsFloatingSidebar isOpen={isSidebarSettingsOpen} onClose={closeSidebarSettings} />

            <SidebarLinkContainer>

                <SidebarLink onClick={openModal}>+ <small>SkillSwap</small></SidebarLink>

            </SidebarLinkContainer>

            <HamburgerMenu onClick={toggleMenu}>

                <StyledIconNavLink href="#" icon={<ListIcon />} />

            </HamburgerMenu>

            <NavList isOpen={isOpen}>

                <NavItem onClick={() => handlePageChange('ADMIN/INICIO')}>

                    <StyledNavLink href="/admin/" label="INICIO" />

                </NavItem>

                <NavItem onClick={() => handlePageChange('ADMIN/REPORTES')}>

                    <StyledNavLink href="/admin/reports" label="REPORTES" />

                </NavItem>

                <NavItem onClick={() => handlePageChange('ADMIN/USUARIOS')}>

                    <StyledNavLink href="/admin/users" label="USUARIOS" />

                </NavItem>

                <NavItem onClick={() => handlePageChange('ADMIN/POSTS')}>
                    <StyledNavLink href="/admin/posts" label="POSTS" />
                </NavItem>

            </NavList>




            <IconsContainer>

                <StyledIconNavLink href="/admin/legal" label="LEGAL" icon={<InfoIcon />} />

            </IconsContainer>

        </NavbarContainer>

    );

};