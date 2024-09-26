// users/layout.tsx
'use client';
import React from 'react';
import {NavbarAdmin} from '../../components/navbar/NavbarAdmin'; // Asegúrate de que la ruta sea la correcta
import styled from 'styled-components';

const LayoutContainer = styled.div`
    padding-top: 80px; // Para que no se superponga con el Navbar
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    padding: 0; 
    margin: 0;
`;

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <NavbarAdmin />
            <ContentContainer>{children}</ContentContainer>
        </LayoutContainer>
    );
}
