"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../../../../components/modals/ModalSafety";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registramos los elementos de ChartJS para Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Estilos y containers del componente (sin cambios)
const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 54px 0;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  & h1 {
      margin: 0;
      height: min-content;
      translate: 0 30px;
      font-size: 100px;
      opacity: 0.15;
      padding-left: 1.7rem;
    }

  & h2 {
      margin: 0;
      padding-bottom: 10px;
      margin-bottom: 20px;
      width: 70%;
      font-size: 40px;
      border-bottom: 2px solid  ${({ theme }) => theme.colors.textYellow};
      background: ${({ theme }) => theme.colors.gradientSecondary};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  & h3 {
      margin: 0;
      padding: 10px 30px;
      width: 100% !important;
      font-size: 25px;
      border-bottom: 1px solid  ${({ theme }) => theme.colors.textBlack};
    }

  & h4 {
      margin: 0;
      margin-bottom: 10px;
      width: 100%;
      font-size: 25px;
    }

  & p{
      margin: 0;
      width: 100%;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Banner = styled.article`
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  height:200px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgBanner};
`;

const BannerBody = styled.div`
    width: 1000px !important;
    display: flex;
    justify-content: space-between;
`;

const PageContentContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const InfoPageContainer = styled.div`
  padding-top: 200px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
`;

const WidgetBody = styled.div`
  padding: 20px 30px;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const SecurityButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    transform: scale(1.05);
  }
`;

const Security = styled.div`
  width: 50%;
  height: 100%;
`;

const Metrics: React.FC = () => {
  const [requestData, setRequestData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const userIdString = localStorage.getItem("userId");
    const userId = userIdString ? Number(userIdString) : null;

    if (userId === null) {
      setError("ID de usuario no encontrado");
      setLoading(false);
      return;
    }

    const fetchRequestData = async () => {
      try {
        const response = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestById/${userId}`,
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        setRequestData(data.data.response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  // Datos para el gráfico de barras (Bar Chart)
  const barData = {
    labels: ["Aceptadas", "Pendientes", "Canceladas", "Enviadas"],
    datasets: [
      {
        label: "Conteo de Solicitudes",
        data: [
          requestData.solicitudes.conteoAceptadas,
          requestData.solicitudes.conteoPendientes,
          requestData.solicitudes.conteoCanceladas,
          requestData.solicitudes.conteoEnviadas,
        ],
        backgroundColor: [
          "rgba(15, 200, 49, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(15, 200, 49, 0.5)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Metricas</h1>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <InfoPageContainer>
          <PageContent>
            <PageBody>
              <WidgetBody>
                <h2>Conteo de Solicitudes</h2>

                {/* Gráfico de Barras (Bar Chart) */}
                <Bar data={barData} options={{ responsive: true }} />

                {/* Botón de seguridad */}
                <SecurityButton onClick={openModal}>Seguridad</SecurityButton>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
              </WidgetBody>
            </PageBody>
          </PageContent>
        </InfoPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default Metrics;
