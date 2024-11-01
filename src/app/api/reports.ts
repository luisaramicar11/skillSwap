import apiClient from './apiClient';
export interface IReport {
    id: number;
    titleReport: string;
    description: string;
    dateReport: string; // Puedes usar Date si lo prefieres: Date;
    actionTaken: string;
    idState: number;
    idUser: number;
    idReportedUser: number;
  }

export const createReport = async (reportData: IReport) => {  // Ajusta el tipo según tu interfaz
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
    } catch (error) {
        console.log(error)
    }
};

