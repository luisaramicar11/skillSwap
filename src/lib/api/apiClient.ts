const BASE_URL = 'https://skillswapriwi.azurewebsites.net/api';

const apiClient = async (endpoint: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('authToken');
    
    const headers: Record<string, string> = {};

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
        body: options.body ? options.body : undefined,
    };

    const response = await fetch(`${BASE_URL}/${endpoint}`, config);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // Manejar si el JSON está vacío
        throw new Error(errorData.message || 'API request failed');
    }

    // Verifica si el cuerpo de la respuesta no está vacío
    const responseText = await response.text();
    if (responseText) {
        return JSON.parse(responseText);  // Solo parsear si hay contenido
    }

    return {};  // Devolver un objeto vacío si no hay contenido en la respuesta
};

export default apiClient;


