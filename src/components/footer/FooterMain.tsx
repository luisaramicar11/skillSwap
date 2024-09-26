'use client';
import styled from "styled-components";
import React from "react";

const PageWrapper = styled.div`
   margin-top: 150px;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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

const DividerLine = styled.div`
    margin: 10 50px;
    border-top: 1px solid ${({ theme }) => theme.colors.bgSecondary};
    margin-bottom: 10px;


    @media (max-width: 768px) {
        margin-bottom: 8px;
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
