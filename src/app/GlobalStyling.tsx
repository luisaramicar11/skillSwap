'use client';
import { createGlobalStyle } from "styled-components";
import { Urbanist } from "next/font/google";
import { IGlobalTheme } from "../models/globalTheme.model";
const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// Define los labels que deberían establecer el tema en oscuro
export const darkThemeLabels = ['MATCH', 'DISCOVER', 'SIGN UP', 'ADMIN'];

// Setting our Global Theme
export const GlobalTheme: IGlobalTheme = {
    colors: {
        bgNavbar:'#222222',
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
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E',
        textGreenDark: '#1E892F60',
        textBlue: '1E6F8960',
        textBrown: '#A3761E60',
        gradientText: 'linear-gradient(90deg, #fec841 11%,  #d38301 56%, #ea2424 100% )',
        gradientPrimary: ' linear-gradient(90deg, #ea2424b3 3%, #d38301b3 47%,#fec841b3 100% )',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgNavbar: 'rgba(255, 255, 255, 0.025)',
        bgPrimary: '#222222',
        textPrimary: '#222222',
        bgSecondary: '#FFFFFF',
        bgTertiary: '#F5F5F5',
        textSecondary: '#ffffff',
        textBlack: '#00000020',
        textWhite: '#ffffff',
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#DD5B0A',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E60',
        textGreenDark: '#1E892F60',
        textBlue: '1E6F8960',
        textBrown: '#A3761E60',
        gradientText: 'linear-gradient(90deg, #fefb41 0%,  #d38301 60%, #ea2424 100% )',
        gradientPrimary: ' linear-gradient(90deg, #ea2424 3%, #d38301 47%,#fefb41 90% )',
    }
};


// Global styling for essential HTML elements
export const GlobalStyle = createGlobalStyle`

/* styles/globals.css */
@import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css');

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
    font-weight: lighter;
    margin: 0;
} */

.gradient-bg-primary {
    background-color: ${({ theme }) => theme.colors.gradientPrimary};
}

.gradient-bg-secondary {
    background-color: ${({ theme }) => theme.colors.gradientSecondary};
}
input, textarea, button {
    font-family: ${urbanist.style.fontFamily};
}
`;


