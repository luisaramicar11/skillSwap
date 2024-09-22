import React from "react";
import TableRow from "./TableRowUsers"
import {TableDataUsers } from "../../models/admin.users.model"; 
import styled from "styled-components";
import TableHeader from "./TableHeadUsers"

const TableContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  max-height: 400px;
  overflow-y: auto;
`;

const Title = styled.h3`
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TableStyle = styled.table`
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  border-collapse: collapse;
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

const TableUser: React.FC<TableDataUsers> = ({ data, setDataToEdit, deleteData }) => {

  return (
    <TableContainer>
            <Title>Tabla de usuarios</Title>
            <TableStyle>
            <TableHeader/>
                <tbody>
                    {data.length > 0 ? (
                        data.map((user) => (
                          <TableRow
                          key={user.id}
                          user={user}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                        />
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={5}>Sin datos</Td>
                        </Tr>
                    )}
                </tbody>
            </TableStyle>
        </TableContainer>
  );
};

export default TableUser;