import React from "react";
import styled from "styled-components";
import { FaCheck, FaTimes, FaClock, FaArrowUp } from "react-icons/fa";
import CardProfileLink from "../cards/CardProfileLink";
import LogoutButton from "../Logout"
import { FaSignOutAlt } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { IUserCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/utils/ourAlertsText";

const ProfileSidebarContainer = styled.div`
    z-index: -1;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.bgMainOpacity};
    width: 100%;
    height: 100%;
    transition: 1s ease-in-out;
    animation: appear 1s ease-in-out;
    
    @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    };
  }
`;

const ProfileSidebarContent = styled.div`
  z-index: 1;
  background: ${({ theme }) => theme.colors.bgSidebar};
  width: 300px !important;
  height: 75%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin-left: 20px;
  overflow: hidden;
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  animation: move-right 1s ease-in-out;

    @keyframes move-right {
    from {
      translate: -510px;
    }
    to {
      translate: 0;
    }
  }
`;

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 10px;
  gap: 1rem;
  padding-left: 2rem;

  @media (max-height: 550px) {
    display:none; /* Reduce el tamaño del texto en móviles */
  }

  .status-item {
    display: flex;
    flex-direction: column;
  }

  .status-content {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
  }

  .rejected {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textRed};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textRed};
    }
  }

  .accepted {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textBlueDark};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textBlueDark};
    }
  }

  .sent {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textSecondary};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  .inbox {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textYellow};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textYellow};
    }
  }
`;

const H2StatusSection = styled.h2`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.1rem;
  font-size: 0.9rem;
`;

const ModalCloseButton = styled.button`
  z-index: 1;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgSidebar};
  color: ${({ theme }) => theme.colors.textDark};
  border: none;
  margin: 0;
  text-align: center;
  cursor: pointer;
  position: fixed;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 330px;

  & p{
    font-size: 20px;
    font-weight: 400;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BoxLogout = styled.h2`
  position: fixed;
  display: flex;
  align-items: end !important;
  height: 75%;
  left: 20px;
  animation: appearBottom 2s ease-in-out;

  @keyframes appearBottom {
    from {
      translate: 0 500px;
    }
    to {
      translate: 0 0;
    }
  }
`;

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const [userData, setUserData] = useState<any>(null);
  const [userMetrics, setUserMetrics] = useState<IUserCardProps | null>(null); // Estado para habilidades
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const idString = localStorage.getItem('userId');
      const idNumber = idString ? parseInt(idString, 10) : null;

      if (!idNumber) {
        setError('ID de usuario no encontrado');
        setLoading(false);
        return;
      }

      try {
        // Fetch para obtener datos de usuario
        const userResponse = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestById/${idNumber}`,
          {
            method: "GET",
            headers: {
              "accept": "*/*"
            },
          }
        );
        const userData = await userResponse.json();

        // Fetch para obtener habilidades del usuario
        const metricsResponse = await fetch(
          'https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersForImages',
          {
            method: "GET",
            headers: {
              "accept": "*/*",
            },
          }
        );
        const metricsData = await metricsResponse.json();

        if (userResponse.ok && metricsResponse.ok) {
          setUserData(userData.data.response);

          // Busca las habilidades del usuario por su nombre completo o ID
          const matchedUser = metricsData.data.response.find((user: any) => user.id === idNumber);
          setUserMetrics(matchedUser ? matchedUser : null);

        } else {
          setError('Error al cargar los datos');
        }
      } catch (err) {
        setError('Hubo un problema con la solicitud');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (!isOpen) return null;

  if (loading) return <OurAlertsText>Cargando...</OurAlertsText>;

  const timer = setTimeout(() => {
    if (error) {
      return <OurAlertsText>Error: {error}</OurAlertsText>;
    }
  }, 3000);

  return (
    <ProfileSidebarContainer>
      <ProfileSidebarContent>
        <ModalCloseButton onClick={onClose}>x</ModalCloseButton>
        {userData && userMetrics && (
          <>
            <CardProfileLink
              fullName={userData.nombreUsuario}
              userMetrics={userMetrics}
            />
            <StatusSection>
              <div className="status-item rejected">
                <H2StatusSection>Rechazadas</H2StatusSection>
                <div className="status-content">
                  <FaTimes className="icon" />
                  <p>
                    {userData.solicitudes.conteoCanceladas}:{" "}
                    {userData.solicitudes.ultimaCancelada || "N/A"}
                  </p>
                </div>
              </div>
              <div className="status-item accepted">
                <H2StatusSection>Aceptadas</H2StatusSection>
                <div className="status-content">
                  <FaCheck className="icon" />
                  <p>
                    {userData.solicitudes.conteoAceptadas}:{" "}
                    {userData.solicitudes.ultimaAceptada || "N/A"}
                  </p>
                </div>
              </div>
              <div className="status-item sent">
                <H2StatusSection>Enviadas</H2StatusSection>
                <div className="status-content">
                  <FaArrowUp className="icon" />
                  <p>
                    {userData.solicitudes.conteoEnviadas}:{" "}
                    {userData.solicitudes.ultimoEnviado || "N/A"}

                  </p>
                </div>
              </div>
              <div className="status-item inbox">
                <H2StatusSection>Recibidas</H2StatusSection>
                <div className="status-content">
                  <FaClock className="icon" />
                  <p>
                    {userData.solicitudes.conteoPendientes}:{" "}
                    {userData.solicitudes.ultimaPendiente || "N/A"}
                  </p>
                </div>
              </div>
            </StatusSection>
          </>
        )}
        <BoxLogout>
          <LogoutButton icon={<FaSignOutAlt />} />
        </BoxLogout>
      </ProfileSidebarContent>
    </ProfileSidebarContainer>
  );
};

export default ProfileSidebar;