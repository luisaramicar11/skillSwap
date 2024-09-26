'use client';
import styled from "styled-components";
import React from "react";

const PageWrapper = styled.div`
   margin-top: 150px;
`;

const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.bgSecondary};
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 1rem ;

    @media (max-width: 768px) {
        padding: 8px 0;
    }
`;

const FooterText = styled.p`
    font-size: 0.875rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.bgSecondary};

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const FooterMain: React.FC = () => {
    return (
        <PageWrapper>
            <FooterContainer>
                {/* <DividerLine /> */}
                <FooterText>© SkillSwap, Inc. All rights reserved</FooterText>
            </FooterContainer>
        </PageWrapper>
    );
};
