"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../../../../components/modals/ModalReport";
import ModalTips from "../../../../components/modals/ModalTips";
import CarouselNewUsers from "../../../../components/carousels/CarouselNewUsers";
import CarouselFeature from "../../../../components/carousels/CarouselFeature"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { updateRequestById, getRequestsMessagesById, getRequestById } from "../../../api/requests";
import { FooterMain } from "@/src/components/footer/FooterMain";
import { IRequestsResponseItem, IUserMetrics } from "@/src/models/requests.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { Bar } from "react-chartjs-2";
import { PiUserCirclePlus } from "react-icons/pi";
import { IoTrashBinOutline } from "react-icons/io5";

// We register the elements from ChartJS for the Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ------------------------------------------------------------------------------

// Container for the whole page.tsx
const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;

  & h1 {
    margin: 0;
    height: min-content;
    translate: 0 1rem;
    font-size: 70px;
    opacity: 0.15;
    padding-left: 1rem;
  }

  & h3 {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textDark};
  }

  & p {
    margin: 0;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & strong {
    font-weight: bold;
  }
`;

const PageContent = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 769px) {
    padding-bottom: 0;
  }
`;

//Container for page.tsx content
const Container = styled.div`
  width: 100%;
  margin: 54px 0;
`;

//Containers for banner
const Banner = styled.article`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
`;

const BannerBody = styled.div`
  width: 1000px !important;
  display: flex;
  justify-content: space-between;
`;

const PageBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
`;

const DoubleDiv = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  & div {
    width: 50% !important;
  }

  @media (max-width: 769px) {
    flex-direction: column;

    & div {
      width: 100% !important;
    }

    & aside{
      max-width: 288px !important;
      min-height: 10rem !important;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem !important;
    }
  }
`;

//Containers for Widgets and Aside
const WidgetBody = styled.div`
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 0.9rem !important;
  hyphens: unset;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textOrange};
`;

// Estilos para los botones y el contenedor de las solicitudes
const WidgetContainer = styled.div`
  padding: 1.5rem 2rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const WidgetContainer2 = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: 1.5rem 2rem;

  @media (max-width: 400px) {
    padding: 0.8rem;
    padding-bottom: 1.5rem;

    .need-padding{
    padding: 1.5rem 1.2rem;
  }
  }
`;

const RequestCard = styled.div`
  width: 48.5%;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const RequestBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & p {
    font-size: 14px !important;
    padding: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & h3 {
    font-size: 16px !important;
    background: ${({ theme }) => theme.colors.gradientSecondary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    padding: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 10px;
  padding: 15px;
`;

const RequestButton = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 8px 14px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f0bca0;
  border: none;
  color: ${({ theme }) => theme.colors.textWhite};
  transition: 0.6s ease;

  & * {
    color: ${({ theme }) => theme.colors.textWhite};
  }

  &:hover {
    transform: scale(0.95);
    transition: 0.6s ease;
    background-color: #e48d5e;
  }
`;

const NoRequestButton = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 8px 14px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e48080;
  border: none;
  color: ${({ theme }) => theme.colors.textWhite};
  transition: 0.6s ease;

  & * {
    color: ${({ theme }) => theme.colors.textWhite};
  }

  &:hover {
    transform: scale(0.95);
    transition: 0.6s ease;
    background-color: #df5151;
  }
`;

// Función para enviar la actualización del estado de la solicitud
const updateRequestState = async (
  idRequest: number,
  idStateRequest: number
) => {
  try {
    const data = await updateRequestById(idRequest, idStateRequest);
    return data;
  } catch (error) {
    console.error("Error al hacer el PATCH:", error);
    throw error;
  }
};

const UserRequests = () => {
  const [requests, setRequests] = useState<IRequestsResponseItem[]>([]);
  const [requestData, setRequestData] = useState<IUserMetrics | null>(null);
  const [userId, setUserId] = useState<number | null>(null); // Guardar el userId de manera segura
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalTipsOpen, setIsModalTipsOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModalTips = () => setIsModalTipsOpen(true);
  const closeModalTips = () => setIsModalTipsOpen(false);

  useEffect(() => {
    // Asegurarnos de que estamos en el cliente antes de acceder a localStorage
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        const userIdNumber = Number(storedUserId);
        console.log(userIdNumber);
        if (!isNaN(userIdNumber)) {
          setUserId(userIdNumber);
        } else {
          console.error("userId no es un número válido.");
        }
      }
    }
  }, []);

  useEffect(
    () => {
      const fetchRequests = async () => {
        if (!userId) return;

        try {
          const requestsData: IRequestsResponseItem[] = await getRequestsMessagesById(userId);
          setRequests(requestsData);

          const data = await getRequestById(userId);
          setRequestData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error al obtener solicitudes:", error);
          setLoading(false);
        }
      };

      fetchRequests();
    }, [userId]
  );

  const handleAccept = async (id: number) => {
    try {
      await updateRequestState(id, 2); // Actualizar con idStateRequest = 2 (Aceptar)
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== id)
      ); // Eliminar la solicitud aceptada
    } catch (error) {
      console.error("Error al aceptar la solicitud:", error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      await updateRequestState(id, 3); // Actualizar con idStateRequest = 3 (Rechazar)
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== id)
      ); // Eliminar la solicitud rechazada
    } catch (error) {
      console.error("Error al rechazar la solicitud:", error);
    }
  };

  // Datos para el gráfico de barras (Bar Chart)
  const barData = {
    labels: ["Aceptadas", "Pendientes", "Canceladas", "Enviadas"],
    datasets: [
      {
        label: "Conteo de Solicitudes",
        data: [
          requestData?.solicitudes.conteoAceptadas,
          requestData?.solicitudes.conteoPendientes,
          requestData?.solicitudes.conteoCanceladas,
          requestData?.solicitudes.conteoEnviadas,
        ],
        backgroundColor: [
          "rgb(246, 241, 214)",
          "rgb(234, 222, 142)",
          "rgb(240, 188, 160)",
          "rgb(228, 128, 128)",
        ],
        borderRadius: 10,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'line',
        },
      },
    },
  };

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  return (
    <Container>
      <PageContainer>
        <PageContent>
          <Banner>
            <BannerBody>
              <h1>Social</h1>
            </BannerBody>
          </Banner>
          <PageBody>
            <WidgetContainer>
              <WidgetBody>
                <h3>Conectar</h3>
                <p>
                  Actualmente has conectado con <strong>{requestData?.solicitudes.conteoConexiones} usuarios</strong>. Revisa tus solicitudes de conexión y decide con quién intercambiar conocimientos, destrezas y experiencia.
                </p>
              </WidgetBody>
            </WidgetContainer>
            <WidgetContainer>
              <WidgetBody>
                <PageBody>
                  {requests.length > 0 ? (
                    requests.map((request) => (
                      <RequestCard key={request.id}>
                        <RequestBody>
                          <h3>{request.userNameRequesting}</h3>
                          <p>{request.description}</p>
                        </RequestBody>
                        <ButtonsContainer>
                          <NoRequestButton
                            onClick={() => handleReject(request.id)}
                          >
                            <IoTrashBinOutline />Rechazar
                          </NoRequestButton>
                          <RequestButton
                            onClick={() => handleAccept(request.id)}
                          >
                            <PiUserCirclePlus />Aceptar
                          </RequestButton>
                        </ButtonsContainer>
                      </RequestCard>
                    ))
                  ) : (
                    <P>◕ No hay solicitudes por responder.</P>
                  )}
                </PageBody>
              </WidgetBody>
            </WidgetContainer>
            <WidgetContainer2>
              <WidgetBody className="need-padding">
                <h3>Novedades</h3>
                <p>
                  SkillSwap sigue creciendo con nuevos profesionales digitales cada día. Descubre los perfiles <strong>más recientes</strong>, conecta con personas afines y aprovecha nuevas oportunidades de colaboración dentro de la comunidad.
                </p>
              </WidgetBody>
              <br />
              <CarouselNewUsers />
            </WidgetContainer2>
            <DoubleDiv>
              <WidgetContainer>
                <h3>Actividad</h3>
                <p>
                  Observa aquí los detalles estadísticos de tus solicitudes y conexiones. Manténte al tanto de tu red y sigue construyendo experiencias.
                </p>
              </WidgetContainer>
              <WidgetContainer>
                <aside>
                  <Bar data={barData} options={barOptions} />
                </aside>
              </WidgetContainer>
            </DoubleDiv>
            <WidgetContainer>
              <WidgetBody>
                <h3>Seguridad</h3>
                <p>
                  En este espacio podrás realizar reportes a usuarios con conductas sospechosas o inadecuadas.
                </p>
              </WidgetBody>
            </WidgetContainer>
            <CarouselFeature openModal={openModal} openModalTips={openModalTips} />
          </PageBody>
        </PageContent>
      </PageContainer>
      <ModalTips isOpen={isModalTipsOpen} onClose={closeModalTips} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <FooterMain />
    </Container>
  );
};

export default UserRequests;
