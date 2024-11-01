'use client';
import React from 'react';
import styled from 'styled-components';
import ScrollContainer from '@/src/components/scroll/Scroll';
import { FooterMain } from '@/src/components/footer/FooterMain';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ContentContainer = styled.div`
    flex: 1; 
    overflow: auto; 
`;

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <ContentContainer>
                <ScrollContainer overflowY="auto" overflowX='auto' marginY='20px' style={{ height: '100%' }}>
                    {children}
                    <FooterMain /> 
                </ScrollContainer>
            </ContentContainer>
        </LayoutContainer>
    );
}

