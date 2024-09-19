'use client';
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer"
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { Logobar } from "../components/logobar/Logobar";

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
                <Logobar />
        </ThemeProvider>
    );
};

export default ClientLayout;