'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "../ui/links/NavLinks";
import StyledIconNavLink from "../ui/links/IconNavLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";


const FooterContainer = styled.div`
    position: absolute;
    bottom: 4rem;
`;

const Riwi = styled.div`
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.bgSecondary};
    border-right: none;
    border-bottom: none;
    padding: 20px 250px;
    width: 100%;
    color: ${({ theme }) => theme.colors.bgSeconday};

`;

export const FooterMain: React.FC = () => {
    return (
        <FooterContainer>
            <Riwi>
                © SkiilSwap, Inc. All rights reserved
            </Riwi>
        </FooterContainer>
    );
};



