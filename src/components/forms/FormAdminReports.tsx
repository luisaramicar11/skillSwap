"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { IReportGet, IReport } from "../../models/admin.reports.model";
import styled from "styled-components";

const Form = styled.form`

`;

const BoxForm = styled.form`
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  display: flex;
  gap: 20px;
  background-color:  ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange}; ;
  color: #fff;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: 20px;
`;
const Message = styled.div`
  padding: 5px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 70%;
  font-weight: bolder;
  display: flex;
  text-align: center;
  gap: 20px;
  background-color:  ${({ theme }) => theme.colors.bgPrimay};
  border: 1px solid  ${({ theme }) => theme.colors.bgSecondary };
  color: #fff;
  margin: 0 auto;
`;
const H2 = styled.h2`
  font-size: 16px;
`;

const P = styled.p`
  font-size: 16px;
  color:  ${({ theme }) => theme.colors.bgSecondary};
`;

const Input = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height:40px;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textWhite};
  border-color: ${({ theme }) => theme.colors.bgSecondary};;
  border-radius: 10px;
  
  &::placeholder {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textWhite}!important;// Ajusta la opacidad si es necesario
  }
  
  &:focus {
    border-color: #f39c12;
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.gradientText};;
  color: ${({ theme }) => theme.colors.textPrimary};;
  font-size: 16px;
  cursor: pointer;

`;


const Div1 = styled.div`
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color:  ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange}; ;
  color: #fff;
  margin: 0 auto;
  display: flex;
`;
const Div2 = styled.div`
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color:  ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange}; ;
  color: #fff;
  margin: 0 auto;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
`;

interface CreateReportFormProps {
  createData: (user: Omit<IReport, "id">) => void;
  updateData: (user: IReport) => void;
  dataToEdit: IReport | null;
  setDataToEdit: (data: IReport | null) => void;
}

const initialForm: IReport = {
  id: 0,
  titleReport: "",
  description: "",
  dateReport: new Date(),
  actionTaken: "",
  idState: 0,
  idUser: 0,
  idReportedUser: 0,
};



const CreateReportForm: React.FC<CreateReportFormProps> = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState<IReportGet>(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.id || form.id === 0) {
      const { id, ...userWithoutId } = form;
      createData(userWithoutId as Omit<IReport, "id">);
    } else {
      updateData(form);
    }
    handleReset(e);
  };

  const handleReset = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setForm(initialForm);
    setDataToEdit(null);
  };

  const formatDate = (date: Date | string) => {
    if (typeof date === 'string') {
      return date;
    }
    return date.toISOString().split('T')[0];
  };

  return (
    <main>
      <Title>{dataToEdit ? "Editar Reporte" : "Agregar Reporte"}</Title>
        <Form onSubmit={handleSubmit}>
        <Message>
         <H2>En la accion tomada se debe escribir una de esas opciones </H2> 
         <P>1 = SUSPENDER </P>
         <P>2 = HABILITAR</P>
         <P>3 = DESABILITAR </P>
        </Message>
          <BoxForm>
            <Div1>

            
          <Input
            type="text"
            name="title"
            placeholder="Nombre del reporte"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.titleReport}
            required
          />
          <Input
            type="text"
            name="description"
            placeholder="Descripción del reporte"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.description}
            required
          />
          <Input
            type="date"
            name="dateReport"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.dateReport ? formatDate(form.dateReport) : ""}
            required
          />
          <Input

            type="text"
            name="actionTaken"
            placeholder="Acción tomada"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.actionTaken}
            required
          />
         
          <Input
            type="number"
            name="idState"
            placeholder="Id del Estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idState}
            required
            />
            </Div1>

          <Div2>
          <Input
            type="number"
            name="idUser"
            placeholder="Id del User"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idUser}
            required
          />
          <Input
            type="number"
            name="idReportedUser"
            placeholder="Id del usuario reportado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idReportedUser}
            required
          />
          <Input
            type="text"
            name="state"
            placeholder="Estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.state}
            required
          />
          <Input
            type="text"
            name="user"
            placeholder="Usuario quien reporta"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.user}
            required
          />
          <Input
            type="text"
            name="reportedUser"
            placeholder="Usuario reportado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.reportedUser}
            required
          />
          </Div2>
        </BoxForm>
          <ButtonContainer>
            <Button type="submit">Enviar</Button>
            <Button type="button" onClick={handleReset}>Limpiar</Button>
          </ButtonContainer>
        </Form>
    </main>
  );
};

export default CreateReportForm;
