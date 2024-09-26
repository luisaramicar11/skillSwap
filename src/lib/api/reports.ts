import apiClient from './apiClient';

export const createReport = async (reportData: any) => {  // Ajusta el tipo según tu interfaz
    try {
        const response = await apiClient('ReportsPost/PostReportCreate', {  // Cambia la ruta al endpoint correcto
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportData),
        });

        return response; // Ajusta según la estructura de respuesta de tu API
    } catch (error: any) {
        throw new Error(error.message || 'Error desconocido al crear el reporte');
    }
};

