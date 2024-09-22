'use client'; // Indica que este componente debe renderizarse del lado del cliente
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Estilos que ya tienes...
const PageContainer = styled.section`
  // Tus estilos aquí
`;

const PageContentContainer = styled.article`
  // Tus estilos aquí
`;

const Banner = styled.article`
  // Tus estilos aquí
`;

const BannerBody = styled.div`
  // Tus estilos aquí
`;

const SkillsPageContainer = styled.div`
  // Tus estilos aquí
`;

const PageContent = styled.div`
  // Tus estilos aquí
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Estilos adicionales para los botones y el contenedor de los mensajes
const MessageContainer = styled.div`
  width: 50%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
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
    const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/RequestsPatch/PatchRequestState/${idRequest}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idStateRequest
      }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el estado de la solicitud');
    }

    const data = await response.json();
    console.log('Estado de la solicitud actualizado:', data);
  } catch (error) {
    console.error('Error al hacer el PATCH:', error);
  }
};

// Componente principal de la página de mensajes
const UserMessagess = () => {
  const [messages, setMessages] = useState<any[]>([]); // Estado para almacenar los mensajes
  const userId = localStorage.getItem("userId"); // Obtener el userId desde localStorage

  useEffect(() => {
    // Fetch para obtener los mensajes desde la API
    const fetchMessages = async () => {
      try {
        const userIdNumber = Number(userId); // Convertir el userId a número
        if (isNaN(userIdNumber)) {
          console.error("userId no es un número válido.");
          return;
        }

        const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestMessagesById/${userIdNumber}`);
        const data = await response.json();

        if (data?.message === "Success") {
          setMessages(data.data.response); // Guardar los mensajes en el estado
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (userId) {
      fetchMessages();
    }
  }, [userId]);

  const handleAccept = (id: number) => {
    updateRequestState(id, 2); // Actualizar con idStateRequest = 2 (Aceptar)
  };

  const handleReject = (id: number) => {
    updateRequestState(id, 3); // Actualizar con idStateRequest = 3 (Rechazar)
  };

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Messages</h1>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <SkillsPageContainer>
          <PageContent>
            <PageBody>
              {messages.length > 0 ? (
                messages.map((message) => (
                  <MessageContainer key={message.id}>
                    <div>
                      <h3>{message.userNameRequesting}</h3>
                      <p>{message.description}</p>
                    </div>
                    <ButtonsContainer>
                      <Button onClick={() => handleAccept(message.id)}>Aceptar</Button>
                      <Button onClick={() => handleReject(message.id)}>Rechazar</Button>
                    </ButtonsContainer>
                  </MessageContainer>
                ))
              ) : (
                <p>No hay mensajes disponibles.</p>
              )}
            </PageBody>
          </PageContent>
        </SkillsPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserMessagess;


