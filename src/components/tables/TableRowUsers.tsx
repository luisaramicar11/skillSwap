import React from "react";
import { IUserUpdateAdmin } from "../../models/user.model"; // Asegúrate de actualizar la ruta si es necesario
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
  user: IUserUpdateAdmin;
  setDataToEdit: (user: IUserUpdateAdmin) => void;
  deleteData: (userId: number) => void;
}

const TableRowUser: React.FC<TableRowProps> = ({
  user,
  setDataToEdit,
  deleteData,
}) => {
  
  const {
    name,
    lastName,
    abilities,
    category,
    idStateUser,
    idRoleUser,
    suspensionDate,
    reactivationDate,
  } = user;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{lastName}</Td>
      <Td>{abilities}</Td>
      <Td>{category}</Td>
      <Td>{idStateUser}</Td>
      <Td>{idRoleUser}</Td>
      <Td>{suspensionDate || "N/A"}</Td>
      <Td>{reactivationDate || "N/A"}</Td>
      <Td>
        <EditButton onClick={() => setDataToEdit(user)}>Editar</EditButton>
        <DeleteButton onClick={() => deleteData(user.id!)}>Eliminar</DeleteButton>
      </Td>
    </Tr>
  );
};

export default TableRowUser;


