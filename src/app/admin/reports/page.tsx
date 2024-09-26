"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReports,
  createReport,
  updateReport,
  deleteReport,
} from "../../redux/slices/reportsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { IReport } from "../../../models/admin.reports.model";
import CreateForm from "../../../components/forms/FormAdminReports";
import Table from "../../../components/tables/TableReports";
import styled from "styled-components";
import { toast } from "react-toastify";

const Title = styled.h2`
  margin-top: 0 !important;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 40px;
  background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  color: transparent;
  border-bottom: solid 5px ${({ theme }) => theme.colors.textOrange};
`;

const Reports: React.FC = () => {
  const reports = useSelector((state: RootState) => state.reports.reports);
  const dispatch = useDispatch<AppDispatch>();
  const [editedReport, setEditedReport] = useState<IReport | null>(null);

  console.log(reports);

  // Llamar a la acción asíncrona para obtener reportes
  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  // Función para obtener el token
  const getToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token no disponible. Inicia sesión.");
      throw new Error("Token no disponible");
    }
    return token;
  };

  // Crear reporte
  const handleCreateReport = async (newReport: Omit<IReport, "id">) => {
    try {
      const token = getToken();
      const reportToPost: Omit<IReport, "id"> = {
        titleReport: newReport.titleReport,
        description: newReport.description,
        dateReport: newReport.dateReport,
        actionTaken: newReport.actionTaken,
        idState: newReport.idState,
        idUser: newReport.idUser,
        idReportedUser: newReport.idReportedUser,
      };

      const response = await fetch(
        "https://skillswapriwi.azurewebsites.net/api/ReportsPost/PostReportCreate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(reportToPost),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creando reporte:", errorData);
        toast.error(`Error al crear el reporte: ${errorData.message}`);
        return;
      }

      const createdReport: IReport = await response.json();
      dispatch(createReport(createdReport));
      toast.success("Reporte creado exitosamente!");
    } catch (error) {
      console.error("Error creando reporte:", error);
      toast.error("Error al crear el reporte");
    }
  };
  // Actualizar reporte
  const handleUpdateReport = async (reportToUpdate: IReport) => {
    // Cambia el nombre aquí
    try {
      const response = await fetch(
        `https://skillswapriwi.azurewebsites.net/api/ReportPut/PutReportByAction`,
        {
          method: "PUT",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            //"Authorization": `Bearer ${token}`, // Asegúrate de descomentar esta línea
          },
          body: JSON.stringify(reportToUpdate), // Usa la información del reporte que quieres actualizar
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error actualizando reporte:", errorData);
        toast.error("Error al actualizar el reporte.");
        return;
      }

      dispatch(updateReport(reportToUpdate)); // Aquí usas la acción de Redux
      setEditedReport(null);
      toast.success("Reporte actualizado exitosamente!");
    } catch (error) {
      console.error("Error actualizando reporte:", error);
      toast.error("Error al actualizar el reporte.");
    }
  };

  // Eliminar reporte
  const handleDeleteReport = async (reportId: number) => {
    console.log(reportId);
    try {
      const response = await fetch(
        `https://skillswapriwi.azurewebsites.net/api/ReportDelete/DeleteReportById/${reportId}`,
        {
          method: "DELETE",
          headers: {
            accept: "*/*",
            //"Authorization": `Bearer ${token}`, // Usar token
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error eliminando reporte:", errorData);
        toast.error("Error al eliminar el reporte.");
        return;
      }

      dispatch(deleteReport(reportId));
      toast.success("Reporte eliminado exitosamente!");
    } catch (error) {
      console.error("Error eliminando reporte:", error);
      toast.error("Error al eliminar el reporte.");
    }
  };

  return (
    <>
      <Title>Formulario de Reportes</Title>
      <CreateForm
        createData={handleCreateReport}
        updateData={handleUpdateReport}
        dataToEdit={editedReport}
        setDataToEdit={setEditedReport}
      />
      <Table
        data={reports}
        setDataToEdit={setEditedReport}
        deleteData={handleDeleteReport}
      />
    </>
  );
};

export default Reports;
