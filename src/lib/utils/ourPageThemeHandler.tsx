'use client';
import { darkThemeLabels } from "@/src/app/GlobalStyling";
export function handlePageTheme(label: string) {
    if (typeof window !== 'undefined') {
        if (label !== 'DEFAULT_LABEL') {
            localStorage.setItem('currentPage', label);

            const theme = darkThemeLabels.includes(label) ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        }

        window.dispatchEvent(new Event('storage'));
    }
}