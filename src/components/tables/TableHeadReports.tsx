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
          <Th>Título</Th>
          <Th>Descripción</Th>
          <Th>Fecha de Creación</Th> 
          <Th>Acción tomada</Th>
          <Th>ID Estado</Th> 
          <Th>ID Informante</Th> 
          <Th>ID Reportado</Th> 
          <Th>Estado</Th> 
          <Th>Nombre del Informante</Th> 
          <Th>Nombre del Reportado</Th> 
          <Th>Acciones</Th>
        </Tr>
      </thead>
    );
};

export default TableHeaderReport;
