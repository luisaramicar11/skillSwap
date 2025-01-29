import React from "react";
import styled from "styled-components";

const Th = styled.th`
  background-color: grey;
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
          <Th>Título del reporte</Th>
          <Th>Descripción</Th>
          <Th>Fecha de creación</Th> 
          <Th>Acción tomada</Th>
          <Th>Id del Estado</Th> 
          <Th>Id del Usuario</Th> 
          <Th>Id del Reportado</Th> 
          <Th>Estado</Th> 
          <Th>Nombre del usuario</Th> 
          <Th>Nombre del reportado</Th> 
          <Th>Actions</Th>
        </Tr>
      </thead>
    );
};

export default TableHeaderReport;
