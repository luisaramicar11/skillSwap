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

const TableHeaderUser: React.FC = () => {
  return (
    <thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Apellido</Th>
        <Th>Habilidades</Th>
        <Th>Comunidad</Th>
        <Th>ID Estado</Th>
        <Th>ID Rol</Th>
        <Th>Fecha de Suspensión</Th>
        <Th>Fecha de Reactivación</Th>
        <Th>Acciones</Th>
      </Tr>
    </thead>
  );
};

export default TableHeaderUser;

