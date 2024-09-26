import React from "react";
import TableRow from "./TableRowReports";
import { TableDataReports } from "../../models/admin.reports.model"; 
import styled from "styled-components";
import TableHeader from "./TableHeadReports";

const TableContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 54px;
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

const TableStyle = styled.table`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  border-collapse: collapse;

  & caption{
    margin-bottom: 20px;
  }
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

const TableReports: React.FC<TableDataReports> = ({ data, setDataToEdit, deleteData }) => {
  return (
    <TableContainer>
      <Title>Tabla de reportes</Title>
      <TableStyle>

        <TableHeader />
        <tbody>
          {data.length > 0 ? (
            data.map((report) => (
              <TableRow
                key={report.id}
                report={report}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan={7}>Sin datos</Td> {/* Asegúrate de que colSpan coincida con el número de columnas */}
            </Tr>
          )}
        </tbody>
      </TableStyle>
    </TableContainer>
  );
};

export default TableReports;
