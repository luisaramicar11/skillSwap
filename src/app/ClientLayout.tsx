'use client';
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { Logobar } from "../components/logobar/Logobar";
import { usePathname } from 'next/navigation';

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const pathname = usePathname(); // Obtenemos la ruta actual

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [theme] = useTheme();

    // Verificamos si estamos en la ruta /auth
    const isAuthPage = pathname === '/auth';

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {!isAuthPage && <Navbar />} {/* Renderizamos el Navbar solo si no estamos en /auth */}
            {children}
            {!isAuthPage && <Logobar />}
        </ThemeProvider>
    );
};

export default ClientLayout;
