// users/layout.tsx
'use client';
import React from 'react';
import { NavbarUser } from '../../components/navbar/NavbarUser'; // Asegúrate de que la ruta sea la correcta
import styled from 'styled-components';

const LayoutContainer = styled.div`
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
            <NavbarUser />
            <ContentContainer>{children}</ContentContainer>
        </LayoutContainer>
    );
}

