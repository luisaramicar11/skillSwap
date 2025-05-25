'use client';
import { useState, useEffect } from 'react';
import { GlobalDarkTheme, GlobalTheme, darkThemeLabels } from '../app/GlobalStyling';
import { IGlobalTheme } from '../models/globalTheme.model';

// Hook personalizado para manejar el tema 
export function useThemeAuth(): [IGlobalTheme, (theme: 'dark' | 'light') => void] {
    const [theme, setTheme] = useState<IGlobalTheme>(GlobalTheme);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleStorageChange = () => {
                const currentPage = localStorage.getItem('currentPage') ?? 'HOME';
                const newTheme = darkThemeLabels.includes(currentPage) ? GlobalDarkTheme : GlobalTheme;

                setTheme(newTheme);
            };

            handleStorageChange();
            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }
    }, []);

    const setPageTheme = (theme: 'dark' | 'light') => {
        const newTheme = theme === 'dark' ? GlobalDarkTheme : GlobalTheme;

        setTheme(newTheme);
        localStorage.setItem('theme', theme);
    };

    return [theme, setPageTheme];
}
