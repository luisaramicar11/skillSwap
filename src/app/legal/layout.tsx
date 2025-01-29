'use client';
import React from 'react';
import styled from 'styled-components';
import ScrollContainer from '@/src/components/scroll/Scroll';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ContentContainer = styled.div`
    flex: 1; 
    overflow: auto; 
`;

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <ContentContainer>
                <ScrollContainer overflowY="auto"  overflowX='auto' marginY='54px' style={{ height: '100%' }}>
                    {children}
                </ScrollContainer>
            </ContentContainer>
        </LayoutContainer>
    );
}

