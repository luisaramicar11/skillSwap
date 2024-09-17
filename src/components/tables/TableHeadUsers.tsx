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

const TableHeaderUser: React.FC = () => {
    return (
      <thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Apellido</Th>
          <Th>Cargo/profesión</Th>
          <Th>Descripción del cargo/profesión</Th>
          <Th>Fecha de nacimiento</Th>
          <Th>Imagen</Th>
          <Th>Email</Th>
          <Th>Categoria</Th>
          <Th>Habilidades</Th>
          <Th>Teléfono</Th>
          <Th>LinkedIn</Th>
          <Th>Behance</Th>
          <Th>Github</Th>
          <Th>Rol</Th>
          <Th>Id Estado</Th>
          <Th>Estado</Th>
          <Th>Actions</Th>
        </Tr>
      </thead>
    );
};

export default TableHeaderUser;