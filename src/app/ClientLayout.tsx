'use client';
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import ProfileCard from "../components/cards/CardMatchProfile";

const Pages = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 30px;
`
const SideBar = styled.div`
    display: flex;
`

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
`

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme] = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Pages>
                <SideBar>
                    <ProfileCard
                        name="Martín Elías"
                        skills={["JavaScript", "HTML", "Adobe"]}
                        rating={4.1}
                        rejected={["Juliana Mina"]}
                        accepted={["Andrea Mira"]}
                        pending={["Claudio Ponce"]}
                        inbox={0}
                    />
                </SideBar>
                {children}
            </Pages>
            <Foot>
                <h1>SkillSwap</h1>
            </Foot>
        </ThemeProvider>
    );
};

export default ClientLayout;
