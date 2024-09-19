'use client';
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer"
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

const Foot = styled.div`
    z-index: 1000;
    bottom: 0;
    position: fixed;
    width: 100%;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    border-top: solid 0.5px ${({ theme }) => theme.colors.textSecondary};

    & h1 {
        background: ${({ theme }) => theme.colors.gradientText};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [theme] = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                <Navbar />
                {children}
            <Foot>
                <h1>SkillSwap</h1>
            </Foot>
        </ThemeProvider>
    );
};

export default ClientLayout;