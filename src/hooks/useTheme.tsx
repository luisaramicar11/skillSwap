import { useState, useEffect } from 'react';
import { GlobalDarkTheme, GlobalTheme } from '../app/GlobalStyling';
import { darkThemeLabels } from '../lib/utils/handlePageTheme';
import { IGlobalTheme } from '../models/globalTheme.model';

// Hook personalizado para manejar el tema
export function useTheme(): [IGlobalTheme, (theme: 'dark' | 'light') => void] {
    const [theme, setTheme] = useState<IGlobalTheme>(GlobalTheme);

    useEffect(() => {
        const handleStorageChange = () => {
            const currentPage = localStorage.getItem('currentPage') ?? 'HOME';
            const newTheme = darkThemeLabels.includes(currentPage) ? GlobalDarkTheme : GlobalTheme;

            // Retraso de 3 segundos para aplicar el nuevo tema
            setTimeout(() => {
                setTheme(newTheme);
            }, 3000);
        };

        handleStorageChange();
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const setPageTheme = (theme: 'dark' | 'light') => {
        const newTheme = theme === 'dark' ? GlobalDarkTheme : GlobalTheme;

        setTimeout(() => {
            setTheme(newTheme);
            localStorage.setItem('theme', theme);
        }, 3000);
    };

    return [theme, setPageTheme];
}