import React from "react";
import TableRowUser from "./TableRowUsers";
import { IUserUpdateAdmin } from "../../models/user.model";
import styled from "styled-components";
import ScrollContainer from "../scroll/Scroll";
import TableHeaderUser from "./TableHeadUsers";

const TableContainer = styled.div`
  margin: 20px;
  margin-top: 2rem;
  background-color: white;
  min-height: auto;
  height: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
`;

const TableStyle = styled.table`
  width: 100%;
  height: 100%;
  overflow: auto;
  border-collapse: collapse;
  min-width: 1000px; 
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
      <ScrollContainer overflowY="auto" overflowX='auto' marginY="14px" style={{ maxHeight: '100%' }}>
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
                <Td colSpan={8}>Sin datos</Td>
              </Tr>
            )}
          </tbody>
        </TableStyle>
      </ScrollContainer>
    </TableContainer>
  );
};

export default TableUser;


