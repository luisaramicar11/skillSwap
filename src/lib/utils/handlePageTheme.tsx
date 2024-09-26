// Define the labels that should set the dark theme
export const darkThemeLabels = ['REGISTRO', 'ADMIN/POSTS']; //Aqui deben ir las vistas del Admin, 
                                                            //igual como esten escritas en la NavLink

// Function to update the theme based on the current page
export function handlePageChange(label: string) {
    if (typeof window !== 'undefined') {
        // Store the current page in localStorage
        localStorage.setItem('currentPage', label);

        // Determine the theme based on the current page
        const theme = darkThemeLabels.includes(label) ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        // Dispatch a storage event to trigger theme updates
        window.dispatchEvent(new Event('storage'));
    }
}


