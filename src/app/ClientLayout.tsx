'use client';
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import { useThemeAuth } from "../hooks/useThemeAuth";
import { Logobar } from "../components/logobar/Logobar";
import { usePathname, useRouter } from 'next/navigation';
import { clearStorage } from "../lib/services/storageService";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import { IGlobalTheme } from "../models/globalTheme.model";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;         
    padding: 0;
    overflow: hidden;
`;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [themeAuth] = useThemeAuth();
    const [theme] = useTheme();

    const CurrentPage = localStorage!.getItem("currentPage") ? localStorage.getItem("currentPage") : "DEFAULT_PAGE";
    const DefinedTheme: IGlobalTheme = (CurrentPage === "INICIAR SESIÓN" || CurrentPage === "REGISTRO") ? themeAuth : theme;

    useEffect(() => {
        const storedToken = localStorage!.getItem("authToken");
        setToken(storedToken);
        console.log(token);

        if (!storedToken) {
            clearStorage();
        }

        const handleStart = () => setLoading(true);
        const handleComplete = () => {
            setTimeout(() => setLoading(false), 3000);
        };

        router.prefetch(pathname);

        return () => {
            handleStart();
            handleComplete();
        };
    }, [pathname, router, token]);

    const isAuthPage = pathname === '/auth';

    if (loading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <ThemeProvider theme={DefinedTheme}>
            <GlobalStyle />
            <LayoutContainer>
                {!isAuthPage && <Navbar />}
                {children}
                {!isAuthPage && <Logobar />}
            </LayoutContainer>
        </ThemeProvider>
    );
};

export default ClientLayout;
