"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from "../../../../components/modals/ModalSafety";
import { getRequestById } from "../../../api/requests"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { FooterMain } from '@/src/components/footer/FooterMain';

// Registramos los elementos de ChartJS para Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Container = styled.div`
  margin: 54px 0;
  flex-direction: column;
  display: flex;
`

const PageContainer = styled.section`
  width: 100%;
  height: 100%;
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
  height: 200px;
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
`;

const WidgetBody = styled.div`
  padding: 20px 30px;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const SecurityButton = styled.button`
  width: 20%;
  padding: 10px;
  font-size: 14px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  border: none;
  color: ${({ theme }) => theme.colors.textWhite};
  transition: 0.6s ease-in-out;

  &:hover {
    transition: 0.6s ease-in-out;
    transform: scale(1.05);
  }
`;

const DivSec = styled.div`
  margin-top: 1.5rem;
`

interface IUserResponse {
  idUsuario: number;
  nombreUsuario: string;
  solicitudes: ISolicitudes;
}

interface ISolicitudes {
  ultimaAceptada: string;
  ultimaPendiente: string;
  ultimaCancelada: string;
  ultimoEnviado: string;
  conteoConexiones: number;
  conteoAceptadas: number;
  conteoPendientes: number;
  conteoCanceladas: number;
  conteoEnviadas: number;
}

const Metrics: React.FC = () => {
  const [requestData, setRequestData] = useState<IUserResponse | null>(null);
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
        const data = await getRequestById(userId);
        setRequestData(data);
      } catch (err) {
        setError(err as string);
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
          requestData?.solicitudes.conteoAceptadas,
          requestData?.solicitudes.conteoPendientes,
          requestData?.solicitudes.conteoCanceladas,
          requestData?.solicitudes.conteoEnviadas,
        ],
        backgroundColor: [
          "rgba(237, 226, 176, 0.5)",
          "rgba(214, 192, 49, 0.5)",
          "rgba(228, 138, 81, 0.5)",
          "rgba(200, 15, 15, 0.5)",
        ],
        borderColor: [
          "rgb(237, 226, 176)",
          "rgb(214, 192, 49)",
          "rgb(228, 138, 81)",
          "rgb(200, 15, 15)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <PageContainer>
        <Banner>
          <BannerBody>
            <h1>Métricas</h1>
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
                  <DivSec>
                    <h2>Seguridad</h2>
                  </DivSec>
                  <p>Aquí podrás ver información para mayor seguridad y protección a la hora de interactuar con otros usuarios.</p>
                  <SecurityButton onClick={openModal}> ★ Tips de Seguridad</SecurityButton>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </WidgetBody>
              </PageBody>
            </PageContent>
          </InfoPageContainer>
        </PageContentContainer>
      </PageContainer>
      <FooterMain />
    </Container >
  );


};

export default Metrics;