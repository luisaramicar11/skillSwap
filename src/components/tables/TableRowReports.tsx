import React from "react";
import { IReport } from "../../models/admin.reports.model"; // Asegúrate de actualizar la ruta si es necesario
import styled from "styled-components";

const Td = styled.td`
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const EditButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid orange;
  margin: 5px;
  color: orange;
  border-radius: 10px;
  padding: 5px 10px;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid red;
  margin: 5px;
  color: red;
  border-radius: 10px;
  padding: 5px 10px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const Tr = styled.tr`
  text-align: center;
`;

interface TableRowProps {
  report: IReportGet;
  setDataToEdit: (report: IReportGet) => void;
  deleteData: (reportId: number) => void;
}

// IReportGet extiende IReport y añade propiedades adicionales
export interface IReportGet extends IReport {
  state?:        string;
  user?:         string;
  reportedUser?: string;
}


const TableRowReport: React.FC<TableRowProps> = ({ report, setDataToEdit, deleteData }) => {
  const formatDate = (date: Date | string) => {
    if (typeof date === 'string') {
      return date; // Suponiendo que ya está en formato correcto
    }
    return date.toISOString().split('T')[0]; // Extrae solo la parte de la fecha
  };
  
  const { id, titleReport, description, dateReport, actionTaken, state, user, reportedUser, idReportedUser, idState, idUser } = report;

  return (
    <Tr>
      <Td>{titleReport}</Td>
      <Td>{description}</Td>
      <Td>{dateReport ? formatDate(dateReport) : ""}</Td> {/* Asegúrate de manejar casos de fecha nula */}
      <Td>{actionTaken}</Td>
      <Td>{idState}</Td> {/* Ajustado: "idState" hace referencia al estado del reporte */}
      <Td>{idUser}</Td> {/* Ajustado: "idUser" hace referencia al usuario que reporta */}
      <Td>{idReportedUser}</Td> {/* Ajustado: "idReportedUser" hace referencia al usuario reportado */}
      <Td>{state}</Td>
      <Td>{user}</Td> {/* Ajustado: "user" hace referencia al usuario que reporta */}
      <Td>{reportedUser}</Td> {/* Ajustado: "reportedUser" hace referencia al usuario reportado */}
      <Td>
        <EditButton onClick={() => setDataToEdit(report)}>Editar</EditButton>
        <DeleteButton onClick={() => deleteData(id)}>Eliminar</DeleteButton>
      </Td>
    </Tr>
  );
};

export default TableRowReport;
