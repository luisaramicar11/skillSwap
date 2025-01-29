'use client';
import React from 'react';
import { NavbarUser } from '../../components/navbar/NavbarUser';
import styled from 'styled-components';
import ScrollContainer from '@/src/components/scroll/Scroll';
import { Logobar } from '@/src/components/logobar/Logobar';

const LayoutContainer = styled.div`
    display: flex;
    padding: 0;         
    margin: 0;
    flex-direction: column;
    height: 100%;
`;

const ContentContainer = styled.div`
    flex: 1; 
    overflow: auto; 
`;

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <ContentContainer>
                <NavbarUser />
                <ScrollContainer overflowY="auto" overflowX='auto' marginY='54px' style={{ height: '100%' }}>
                    {children}
                    <Logobar />
                </ScrollContainer>
            </ContentContainer>
        </LayoutContainer>
    );
}

