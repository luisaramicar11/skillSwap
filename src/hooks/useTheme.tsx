'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GlobalDarkTheme, GlobalTheme, darkThemeLabels } from '../app/GlobalStyling';
import { IGlobalTheme } from '../models/globalTheme.model';

// Hook personalizado para manejar el tema 
export function useTheme(): [IGlobalTheme, (theme: 'dark' | 'light') => void] {
    const pathname = usePathname();
    const [theme, setTheme] = useState<IGlobalTheme>(GlobalTheme);

    // Utilidad para obtener el label según el pathname
    const getLabelFromPath = (path: string): string => {
        if (path.includes('auth')) return 'REGISTRO';
        return 'DEFAULT_PATH';
    };

    const compareLabels = (path: string, currentPage: string): string => {
        if (path == currentPage) return 'REGISTRO';
        return 'DEFAULT_LABEL';
    }

    useEffect(() => {
        const handleThemeChange = () => {
            const currentPage = localStorage.getItem('currentPage') ?? 'DEFAULT_LABEL';
            const currentPath = getLabelFromPath(pathname);
            const currentLabel = compareLabels(currentPath, currentPage);
            const newTheme = darkThemeLabels.includes(currentLabel) ? GlobalDarkTheme : GlobalTheme;
            
            // Aplicar el nuevo tema con retardo
            setTimeout(() => {
                setTheme(newTheme);
            }, 3000);
        };

        // Llamar cuando cambia el pathname
        handleThemeChange(); 

        // Escuchar cambios en el almacenamiento local para actualizar el tema
        window.addEventListener('themechange', handleThemeChange);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('themechange', handleThemeChange);
        };

    }, [pathname]);

    // Método manual por si quieres cambiarlo desde otro lado
    const setPageTheme = (theme: 'dark' | 'light') => {
        const newTheme = theme === 'dark' ? GlobalDarkTheme : GlobalTheme;
        
        setTimeout(() => {
            setTheme(newTheme);
            localStorage.setItem('theme', theme);
        }, 3000);
    };

    return [theme, setPageTheme];
}