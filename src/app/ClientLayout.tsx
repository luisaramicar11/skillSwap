'use client';
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import { Logobar } from "../components/logobar/Logobar";
import { usePathname } from 'next/navigation';
import { clearStorage } from "../lib/services/storageService";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname(); // Obtenemos la ruta actual
    const [theme] = useTheme();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Limpia el localStorage al montar el componente
        clearStorage();

        // Accedemos a localStorage solo en el cliente
        const storedToken = localStorage.getItem("authToken");
        setToken(storedToken);
    }, []); // Solo se ejecuta una vez al montar el componente

    useEffect(() => {
        // Limpia el localStorage solo si no hay token
        if (!token) {
            clearStorage(); 
        }
    }, [token]); // Dependencia en token

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