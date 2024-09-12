'use client';
import { createGlobalStyle } from "styled-components";
import { Urbanist } from "next/font/google";
import { IGlobalTheme } from "../models/globalTheme.model";
const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

// Define los labels que deberían establecer el tema en oscuro
export const darkThemeLabels = ['MATCH', 'DISCOVER', 'SIGN UP', 'ADMIN'];

// Setting our Global Theme
export const GlobalTheme: IGlobalTheme = {
    colors: {
        bgPrimary: '#FFFFFF',               
        textPrimary: '#222222',             
        bgSecondary: '#222222', 
        bgTertiary: '#F5F5F5',            
        textSecondary: '#555555', 
        textBlack: '#00000020',             
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#DD5B0A',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E60',
        textGreenDark: '#1E892F60',
        textBlue:'1E6F8960',
        textBrown: '#A3761E60',     
        gradientPrimary: 'linear-gradient(90deg, #B6CB65 0%, #37A879 52%, #4A54AE 100%)', 
        gradientSecondary: 'linear-gradient(90deg, #7D93FF 0%, #F093C0 85%, #EFC7C5 100%)', 
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgPrimary: '#222222',               
        textPrimary: '#FFFFFF',             
        bgSecondary: '#FFFFFF', 

        bgTertiary: '#F5F5F5',            
        textSecondary: '#555555', 
        textBlack: '#00000020',             
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#DD5B0A',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E60',
        textGreenDark: '#1E892F60',
        textBlue:'1E6F8960',
        textBrown: '#A3761E60',     
        gradientPrimary: 'linear-gradient(90deg, #B6CB65 0%, #37A879 52%, #4A54AE 100%)', 
        gradientSecondary: 'linear-gradient(90deg, #7D93FF 0%, #F093C0 85%, #EFC7C5 100%)', 
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgPrimary: '#222222',               
        textPrimary: '#FFFFFF',             
        bgSecondary: '#FFFFFF', 

        bgTertiary: '#F5F5F5',            
        textSecondary: '#555555', 
        textBlack: '#00000020',             
        textTertiary: '#00000050',
        textPurple: '#965AC6',
        textOrange: '#DD5B0A',
        textBlueLight: '#2D68FF',
        textBlueDark: '#093A98',
        textYellow: '#F0AC27',
        textGreen: '#34DD0A',
        textRed: '#891E1E60',
        textGreenDark: '#1E892F60',
        textBlue:'1E6F8960',
        textBrown: '#A3761E60',     
        gradientText: 'linear-gradient(90deg, #fefb41 11%,  #d38301 56%, #ea2424 100% )', 
        gradientPrimary: ' linear-gradient(90deg, #ea2424b3 3%, #d38301b3 47%,#fefb41b3 100% )', 
        
        gradientSecondary: 'linear-gradient(90deg, #7D93FF 0%, #F093C0 85%, #EFC7C5 100%)', 
        
    }
};

// Global styling for essential HTML elements
export const GlobalStyle = createGlobalStyle`

html {
    width: 100% !important;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100% !important;
}

h1, h2, h3, h4, h5, h6 {
    color: ${GlobalTheme.colors.textTertiary};
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


