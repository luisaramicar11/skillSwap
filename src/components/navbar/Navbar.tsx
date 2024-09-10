'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "@/src/components/ui/links/NavLinks"
import { handlePageChange } from "@/src/utils/handlePageTheme";

// Styled components
const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.bgSecondary};
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
  font-size: 20px;
  cursor: pointer;
`;

// Navbar component
export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem onClick={() => handlePageChange('HOME')}>
                    <StyledNavLink href="/" label="HOME" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('MATCH')}>
                    <StyledNavLink href="/match" label="MATCH" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('DISCOVER')}>
                    <StyledNavLink href="/discover" label="DISCOVER" />
                </NavItem>
                <NavItem onClick={() => handlePageChange('USER')}>
                    <StyledNavLink href="/user" label="USER" />
                </NavItem>
            </NavList>
        </NavbarContainer>
    );
};
