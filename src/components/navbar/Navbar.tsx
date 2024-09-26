'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledIconNavLink from "../ui/links/IconNavLink";
import InfoIcon from "@/public/svg/InfoIcon";
import OfflineProfileSidebar from "../sidebars/SidebarFloatingOffline";

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
    cursor: pointer;

    & small {
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    &:hover {
        transition: 0.4s;
        transform: scale(0.95);
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
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <NavbarContainer>
            <OfflineProfileSidebar isOpen={isModalOpen} onClose={closeModal} />
            <SidebarLinkContainer>
                <SidebarLink onClick={openModal}>+ <small>SkillSwap</small></SidebarLink>
            </SidebarLinkContainer>
            <IconsContainer>
                <StyledIconNavLink href="/auth" label="AUTH" icon={<AuthLink><small>Iniciar sesión</small></AuthLink>} />
                <StyledIconNavLink href="/legal" label="LEGAL" icon={<InfoIcon />} />
            </IconsContainer>
        </NavbarContainer>
    );
};
