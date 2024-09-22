import React from "react";
import styled from "styled-components";

const Th = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const TableHeaderReport: React.FC = () => {
    return (
      <thead>
        <Tr>
          <Th>Título del reporte</Th> {/* Cambiado de "Nombre del reporte" a "Título del reporte" para reflejar mejor IReport */}
          <Th>Descripción</Th> {/* "Descripción" ya estaba bien */}
          <Th>Fecha de creación</Th> {/* "Fecha del reporte" puede ser más claro como "Fecha de creación" */}
          <Th>Acción tomada</Th> {/* No hay cambios aquí */}
          <Th>Estado</Th> {/* Cambiado a simplemente "Estado" */}
          <Th>Nombre del usuario</Th> {/* Ajuste del nombre para mayor claridad */}
          <Th>Nombre del reportado</Th> {/* No hay cambios aquí */}
          <Th>Actions</Th>
        </Tr>
      </thead>
    );
};

export default TableHeaderReport;
