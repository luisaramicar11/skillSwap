'use client';
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
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
        // Accedemos a localStorage solo en el cliente
        const storedToken = localStorage.getItem("authToken");
        setToken(storedToken);
        
        // Limpia el localStorage solo si no hay token
        if (!storedToken) {
            clearStorage();
        }
    }, []); // Solo se ejecuta una vez al montar el componente
    console.log(token)
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
