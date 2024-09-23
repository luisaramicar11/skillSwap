'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";
import InfoIcon from "@/public/svg/InfoIcon";
import ListIcon from "@/public/svg/ListIcon";
import ProfileSidebar from "../sidebars/SidebarFloatingProfile";

// Styled components
const NavbarContainer = styled.div<{ isOpen: boolean }>`
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
        justify-content: end;
    }
`;

const AuthLink = styled.p`
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

    &:hover {
        transition: 0.4s;
        font-weight: 600;
        border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
    }
`;

const SidebarLink = styled.p`
    font-weight: 300;
    font-style: italic;
    display: flex;
    align-items: center;
    font-size: 15px;
    width: max-content;
    transition: 0.4s;
    gap: 10px;

    & small {
        margin: 0;
        padding: 0;
    }

    &:hover {
        transition: 0.4s;
        font-weight: 600;
        border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};
    }
`;

const SidebarLinkContainer = styled.li`
    width: 100px;
    cursor: pointer;
    list-style: none;

    @media (max-width: 768px) {
        display: none;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;


    > * {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
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
        <NavbarContainer isOpen={isOpen}>
            <ProfileSidebar isOpen={isModalOpen} onClose={closeModal}/>
            <SidebarLinkContainer>
                <SidebarLink onClick={openModal}>+ <small>SkillSwap</small></SidebarLink>
            </SidebarLinkContainer>

            <IconsContainer>
                <StyledIconNavLink href="/auth" label="AUTH" icon={<AuthLink><small>Iniciar sesión</small></AuthLink>} />
                <StyledIconNavLink href="/user/legal" label="LEGAL" icon={<InfoIcon />} />
            </IconsContainer>
        </NavbarContainer>
    );
};