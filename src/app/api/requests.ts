import apiClient from './apiClient';

export const getRequestById = async (userId: number) => {
  try {
    const response = await apiClient(`RequestsGet/GetRequestById/${userId}`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
      },
    });

    return response.data.response; 
  } catch (err) {
    console.error(err);
  }
};

export const updateRequestById = async (idRequest: number, idStateRequest: number) => {
  try {
    const response = await apiClient(`RequestsPatch/PatchRequestState/${idRequest}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        // Serializamos el body aquí
        body: JSON.stringify({ idStateRequest }),
      }
    );

    console.log('Estado de la solicitud actualizado:', response.details);
    return response;
  } catch (error) {
    console.error('Error al hacer el PATCH:', error);
    throw error;
  }
};



// src/api/request.ts
export const getRequestsMessagesById = async (userId: number) => {
  try {
    const response = await apiClient(`RequestsGet/GetRequestMessagesById/${userId}`
    );

    if (response?.message === "Success") {
      return response.data.response; // Retorna las data para entrar a las solicitudes si la respuesta es exitosa
    } else {
      throw new Error(response?.message || 'Error al obtener solicitudes');
    }
  } catch (error) {
    console.error("Error obteniendo solicitudes:", error);
    throw error;
  }
};

export const checkUserConnection = async (currentId: number, requestId: number) => {
  try {
    const response = await apiClient(
      `RequestsGet/GetRequestViewDetails?currectId=${currentId}&requestId=${requestId}`,
      {
        method: 'GET',
        headers: {
          'accept': '*/*',
        },
      }
    );
    return response.data.response; // Retorna el estado de la conexión
  } catch (err) {
    console.error("Error al verificar conexión:", err);
    throw err;
  }
};

export const createConnectionRequest = async (idReceivingUser: number, message: string) => {
  const idRequestingUser = parseInt(localStorage.getItem("userId") as string, 10);

  const requestBody = {
    disponibilitySchedule: "string",
    description: message,
    idReceivingUser,
    idRequestingUser,
  };

  try {
    const response = await apiClient('RequestsPost/PostRequestCreate', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};