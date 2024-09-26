import apiClient from './apiClient';
import { IUserCardProps } from '../../models/userCards.model';
import { IUser } from '../../models/user.model'; // Importa la interfaz de IUser si aún no está
import { IUserCarouselProps } from "../../models/userCards.model";

// Función para obtener los usuarios con imágenes
export const getUsersForImages = async (): Promise<IUserCardProps[]> => {
    try {
        const response = await apiClient('UsersGet/GetUsersForImages', {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        });

        return response.data.response;  // Asegúrate de devolver los datos correctos
    } catch (error) {
        throw error;
    }
};

// Nueva función para obtener todos los usuarios ordenados
export const getAllUsersSorted = async (): Promise<IUserCarouselProps[]> => {
    try {
        const response = await apiClient('UsersGet/GetUserSortedCreated', {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        });

        return response;  // Asegúrate de devolver los datos correctos
    } catch (error) {
        throw error;
    }
};

// Función para obtener un usuario por su ID
export const getUserById = async (userId: number): Promise<IUser> => {
    try {
        const response = await apiClient(`UsersGet/GetUserById/${userId}`, {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        });

        return response.data.response;  // Devuelve los datos del usuario
    } catch (error) {
        throw error;
    }
};

export const toggleUserAccountState = async (id: number, action: string) => {
    try {
        const response = await apiClient(`UsersPut/PutUserByAction?id=${id}&action=${action}`, {
            method: 'PUT',
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        });

        return response.data.response.estado; // Ajusta según la estructura de respuesta de tu API
    } catch (error) {
        throw error;
    }
};

export const getRequestById = async (userId: number) => {
    try {
        const response = await apiClient(`RequestsGet/GetRequestById/${userId}`, {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        });

        return response; // Asegúrate de que esta ruta es correcta
    } catch (error) {
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await apiClient('UsersGet/GetUsersAll', {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        });

        return response.data.response;  
    } catch (error) {
        throw error;
    }
};



