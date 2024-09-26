'use client';
import { createGlobalStyle } from "styled-components";
import { Urbanist, Baskervville } from "next/font/google";
import { IGlobalTheme } from "../models/globalTheme.model";

const urbanist = Urbanist({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

const baskervville = Baskervville({
    weight: '400',
    subsets: ['latin'],
    style: 'normal'
});

// Define los labels que deberían establecer el tema en oscuro
export const darkThemeLabels = ['MATCH', 'DISCOVER', 'SIGN UP', 'ADMIN'];

// Setting our Global Theme
export const GlobalTheme: IGlobalTheme = {
    colors: {
        bgNavbar:'#222222',
        bgBanner: 'rgba(0, 0, 0, 0.0)',
        bgMainOpacity:'#0000007f',
        bgSidebar: '#ffffff',
        bgPink: '#FFF4F4',
        bgPrimary: '#FFFFFF',               
        textPrimary: '#ffffff',
        textDark: '#555555',             
        bgSecondary: '#222222', 
        bgTertiary: '#F5F5F5',            
        textSecondary: '#222222', 
        textBlack: '#00000020',  
        textWhite: '#ffffff',            
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#DD5B0A',
        textOrange2: '#ea2424',
        textOrangeO: '#ea242450',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E',
        textGreenDark: '#1E892F60',
        textBlue:'#1E6F8960',
        textBrown: '#A3761E60', 
        textPink: '#EFC7C5', 
        borderAuthLeft: '#2222220', 
        borderAuthRight: '#F0AC27',  
        gradientText: 'linear-gradient(90deg, #F0AC27 0%,  #da731e 60%, #ea2424 100% )', 
        gradientPrimary: 'linear-gradient(90deg, #F0AC27 0%,  #da731e 60%, #ea2424 100% )', 
        gradientSecondary: 'linear-gradient(270deg, #F0AC2799 20%,  #da731e99 80%, #ea242499 100% )', 
        backgroundPink: 'linear-gradient(90deg, #7D93FF 0%, #F093C0 85%, #EFC7C5 100%)',
        backgroundGreen: 'linear-gradient(90deg, #B6CB65 0%, #37A879 52%, #4A54AE 100%)',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgNavbar:'#222222',
        bgBanner: 'rgba(0, 0, 0, 0.1)',
        bgMainOpacity:'#0000007f',
        bgSidebar: 'rgba(255, 255, 255)',
        bgPrimary: '#222222',   
        bgPink: '#FFF4F4',            
        textPrimary: '#222222',             
        bgSecondary: '#FFFFFF', 
        bgTertiary: '#F5F5F5',            
        textSecondary: '#ffffff', 
        textBlack: '#00000020',
        textPink: '#EFC7C5',
        textWhite: '#ffffff',      
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#da731e',
        textOrange2: '#ea2424',
        textOrangeO: '#ea242450',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E60',
        textGreenDark: '#1E892F60',
        textBlue:'1E6F8960',
        textBrown: '#A3761E60',  
        borderAuthLeft: '#FFFFFF', 
        borderAuthRight: '#FFFFFF',     
        gradientText: 'linear-gradient(90deg, #F0AC27 0%,  #da731e 60%, #ea2424 100% )', 
        gradientPrimary: 'linear-gradient(90deg, #F0AC27 0%,  #da731e 60%, #ea2424 100% )', 
        gradientSecondary: 'linear-gradient(270deg, #F0AC27 0%,  #da731e 60%, #ea2424 100% )', 
        backgroundPink: 'linear-gradient(90deg, #7D93FF 0%, #F093C0 85%, #EFC7C5 100%)',
        backgroundGreen: 'linear-gradient(90deg, #B6CB65 0%, #37A879 52%, #4A54AE 100%)',
    }
};


// Global styling for essential HTML elements
export const GlobalStyle = createGlobalStyle`

/* styles/globals.css */
html {

    background-color: ${({ theme }) => theme.colors.bgPrimary};
    width: 100vw !important;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after{
    font-family: ${urbanist.style.fontFamily};
    box-sizing: inherit;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    width: 100% !important;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bolder;
}

p {
    color: ${({ theme }) => theme.colors.bgPrimary};
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
    hyphens: auto; /* Activa la inserción automática de guiones */
    word-wrap: break-word; /* Asegura que las palabras largas se dividan */
    overflow-wrap: break-word; /* Para compatibilidad adicional */
} */

.gradient-bg-primary {
    background-color: ${({ theme }) => theme.colors.gradientPrimary};
}

.gradient-bg-secondary {
    background-color: ${({ theme }) => theme.colors.gradientSecondary};
}
input, select, textarea, button {
    font-family: ${urbanist.style.fontFamily};
}

span{
    font-family: ${baskervville.style.fontFamily};
    font-style: italic;
    font-weight: normal;
}
`;


