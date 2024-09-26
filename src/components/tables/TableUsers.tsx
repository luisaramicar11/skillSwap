import React from "react";
import TableRowUser from "./TableRowUsers"; // Asegúrate de que la ruta sea correcta
import { IUser, IUserUpdateAdmin } from "../../models/user.model"; // Asegúrate de actualizar la ruta si es necesario
import styled from "styled-components";
import TableHeaderUser from "./TableHeadUsers"; // Asegúrate de que la ruta sea correcta

const TableContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: auto !important; /* Agregamos desplazamiento en X */
`;

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px; /* Opcional: define un ancho mínimo para forzar el scroll horizontal si hay muchas columnas */
`;

const Title = styled.h2`
text-align: center;
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

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

interface TableUserProps {
  data: IUserUpdateAdmin[];
  setDataToEdit: (user: IUserUpdateAdmin) => void;
  deleteData: (userId: number) => void;
}

const TableUser: React.FC<TableUserProps> = ({
  data,
  setDataToEdit,
  deleteData,
}) => {
  return (
    <TableContainer>
      <Title>Tabla de usuarios</Title>
      <TableStyle>
        <TableHeaderUser />
        <tbody>
          {data.length ? (
            data.map((user) => (
              <TableRowUser
                key={user.id}
                user={user}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan={8}>Sin datos</Td> {/* Cambia el valor de colSpan según el número de columnas en tu tabla */}
            </Tr>
          )}
        </tbody>
      </TableStyle>
    </TableContainer>
  );
};

export default TableUser;


