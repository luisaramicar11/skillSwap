'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks"
import { handlePageChange } from "@/src/utils/handlePageTheme";

// Styled components
const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  color: ${({ theme }) => theme.colors.textWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
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
                <NavItem onClick={() => handlePageChange('USUARIO')}>
                    <StyledNavLink href="/user" label="USUARIO" />
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};
