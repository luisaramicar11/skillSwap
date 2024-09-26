import { useState, useEffect } from 'react';
import { GlobalDarkTheme, GlobalTheme } from '../app/GlobalStyling';
import { darkThemeLabels } from '../lib/utils/handlePageTheme';
import { IGlobalTheme } from '../models/globalTheme.model';

// Custom hook to manage theme
export function useTheme(): [IGlobalTheme, (theme: 'dark' | 'light') => void] {
    const [theme, setTheme] = useState<IGlobalTheme>(GlobalTheme);

    useEffect(() => {
        const handleStorageChange = () => {
            const currentPage = localStorage.getItem('currentPage') || 'HOME';
            const newTheme = darkThemeLabels.includes(currentPage) ? GlobalDarkTheme : GlobalTheme;
            setTheme(newTheme);
        };

        // Initialize theme based on localStorage
        handleStorageChange();

        // Listen for storage changes
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const setPageTheme = (theme: 'dark' | 'light') => {
        const newTheme = theme === 'dark' ? GlobalDarkTheme : GlobalTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', theme);
    };

    return [theme, setPageTheme];
}