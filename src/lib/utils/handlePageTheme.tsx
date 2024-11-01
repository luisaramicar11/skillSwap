export const darkThemeLabels = ['REGISTRO', 'ADMIN/POSTS','ADMIN/LEGAL'];

export function handlePageChange(label: string) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('currentPage', label);

        const theme = darkThemeLabels.includes(label) ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        window.dispatchEvent(new Event('storage'));
    }
}


