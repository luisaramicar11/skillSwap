"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  margin: 54px 0;
`;

const Metrics: React.FC = () => {
  const [requestData, setRequestData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userIdString = localStorage.getItem('userId');
    const userId = userIdString ? Number(userIdString) : null; // Convertir a número

    if (userId === null) {
      setError('ID de usuario no encontrado');
      setLoading(false);
      return;
    }

    const fetchRequestData = async () => {
      try {
        const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestById/${userId}`, {
          method: 'GET',
          headers: {
            'accept': '*/*',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
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

  return (
    <MetricsContainer>
      <h2>Metricas de {requestData.nombreUsuario}</h2>
      <ul>
        <li>Última Aceptada: {requestData.solicitudes.ultimaAceptada}</li>
        <li>Última Pendiente: {requestData.solicitudes.ultimaPendiente}</li>
        <li>Última Cancelada: {requestData.solicitudes.ultimaCancelada || 'N/A'}</li>
        <li>Último Enviado: {requestData.solicitudes.ultimoEnviado || 'N/A'}</li>
        <li>Conteo de Conexiones: {requestData.solicitudes.conteoConexiones}</li>
        <li>Conteo Aceptadas: {requestData.solicitudes.conteoAceptadas}</li>
        <li>Conteo Pendientes: {requestData.solicitudes.conteoPendientes}</li>
        <li>Conteo Canceladas: {requestData.solicitudes.conteoCanceladas}</li>
        <li>Conteo Enviadas: {requestData.solicitudes.conteoEnviadas}</li>
      </ul>
    </MetricsContainer>
  );
};

export default Metrics;
