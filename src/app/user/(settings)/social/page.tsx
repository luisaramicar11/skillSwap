'use client';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import Reports from "../reports/page";

// Estilos
const PageContainer = styled.section`
  width: 100%;
  margin: 54px 0;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const PageContentContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Banner = styled.article`
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  height:200px;
  display: flex;
  justify-content: center;
`;

const BannerBody = styled.div`
    width: 1000px !important;
    display: flex;
    justify-content: space-between;
    
  & h1{
    padding-left: 1.7rem;
      margin: 0;
      height: min-content;
      translate: 0 30px;
      font-size: 100px;
      width: 30vw;
      min-width: 300px !important;
      border-bottom: solid 5px  ${({ theme }) => theme.colors.textYellow};
      background: ${({ theme }) => theme.colors.gradientSecondary};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
  }
`;

const RequestPageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ReportsPageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;


const RequestPageContainer = styled.div`
  padding-top: 200px;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Estilos para los botones y el contenedor de las solicitudes
const RequestContainer = styled.div`
  width: 50%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #000;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgButtonHover};
  }
`;

// Función para enviar la actualización del estado de la solicitud
const updateRequestState = async (idRequest: number, idStateRequest: number) => {
  try {
    const response = await fetch(
      `https://skillswapriwi.azurewebsites.net/api/RequestsPatch/PatchRequestState/${idRequest}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idStateRequest }),
      }
    );

    if (!response.ok) {
      throw new Error('Error al actualizar el estado de la solicitud');
    }

    const data = await response.json();
    console.log('Estado de la solicitud actualizado:', data);
    return data;
  } catch (error) {
    console.error('Error al hacer el PATCH:', error);
    throw error;
  }
};

// Componente principal de la página de solicitudes
const UserRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const userId = localStorage.getItem("userId"); 
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    // Fetch para obtener las solicitudes desde la API
    const fetchRequests = async () => {
      try {
        const userIdNumber = Number(userId); 
        if (isNaN(userIdNumber)) {
          console.error("userId no es un número válido.");
          return;
        }

        const response = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestMessagesById/${userIdNumber}`
        );
        const data = await response.json();

        if (data?.message === "Success") {
          setRequests(data.data.response); // Guardar las solicitudes en el estado
          setLoading(false);
        }
      } catch (error) {
        console.error("Error obteniendo solicitudes:", error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchRequests();
    }
  }, [userId]);

  const handleAccept = async (id: number) => {
    try {
      await updateRequestState(id, 2); // Actualizar con idStateRequest = 2 (Aceptar)
      setRequests((prevRequests) => prevRequests.filter((request) => request.id !== id)); // Eliminar la solicitud aceptada
    } catch (error) {
      console.error('Error al aceptar la solicitud:', error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      await updateRequestState(id, 3); // Actualizar con idStateRequest = 3 (Rechazar)
      setRequests((prevRequests) => prevRequests.filter((request) => request.id !== id)); // Eliminar la solicitud rechazada
    } catch (error) {
      console.error('Error al rechazar la solicitud:', error);
    }
  };

  // Muestra loading, error o los datos del usuario
  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Social</h1>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <RequestPageContainer>
          <RequestPageContent>
            <PageBody>
              {requests.length > 0 ? (
                requests.map((request) => (
                  <RequestContainer key={request.id}>
                    <div>
                      <h3>{request.userNameRequesting}</h3>
                      <p>{request.description}</p>
                    </div>
                    <ButtonsContainer>
                      <Button onClick={() => handleAccept(request.id)}>ACEPTAR</Button>
                      <Button onClick={() => handleReject(request.id)}>RECHAZAR</Button>
                    </ButtonsContainer>
                  </RequestContainer>
                ))
              ) : (
                <p>No hay solicitudes disponibles.</p>
              )}
            </PageBody>
            
          </RequestPageContent>
          <ReportsPageContent>
            <Reports />
          </ReportsPageContent>
        </RequestPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserRequests;