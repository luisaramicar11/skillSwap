'use client';
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, GlobalTheme } from "./GlobalStyling";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default ClientLayout;
