'use client';
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import { Navbar } from "../components/navbar/Navbar";
import { useTheme } from "../hooks/useTheme"; // Import the custom hook

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme] = useTheme(); // Use the custom hook to get the current theme

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            {children}
        </ThemeProvider>
    );
};

export default ClientLayout;
