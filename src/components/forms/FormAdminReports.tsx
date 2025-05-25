"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { IReportGet, IReport } from "../../models/admin.reports.model";
import styled from "styled-components";

//Formulario
const Form = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & article{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%; 
  border-radius: 10px;
  border: 1px #ccc solid;
  padding: 7px;
  font-size: small;
  color: black;

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

const Button = styled.button`
  margin-top: 5px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 1px grey solid;
  color: black;
  cursor: pointer;
  background: none;
  padding: 5px 10px;

  &:hover {
    background-color: grey;
    color: white;
    border: none
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & label{
    align-self: start;
    display: flex;
    align-items: center;

    & p{
      margin-right: 5px;
      font-style: normal;
      color: rgb(0, 0, 0, 0.2)
    }
  }
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  color: orange;
  font-size: 20px;
  font-weight: 500;
`;

const DivInfo = styled.div`
  font-size: 0.8rem;
`;

const DivButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: end;
`;

//Contenedor global
const DivContent = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content : center;
  gap: 50px;
`;

//Card para el Formulario
const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 540px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  text-align: center;
`;

const ReportImage = styled.div<{ urlImage: string }>`
  width: 100%;
  height: 450px;
  background-image: url(${(props) => props.urlImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale() contrast(1.9) opacity(0.6) brightness(1.3);
`;

const ReportInfo = styled.div`
  padding: 20px;
`;

const ReportTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
  color: #222;
`;

const ReportDate = styled.h4`
  font-size: 1.2em;
  margin: 10px 0;
  color: #777;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #555;
  line-height: 1.4;
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
      console.log(id);
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
    <DivContent>
      <Form onSubmit={handleSubmit}>
        <article>
          <Title>★ EDITAR REPORTE</Title>
          <DivInfo>Aquí podrás resolver y tomar acción de los reportes realizados por usuarios de la plataforma.</DivInfo>
          <DivInfo>La acción tomada debe ser cualquiera de las siguientes: <strong>suspender, habilitar</strong> o <strong>deshabilitar</strong>.</DivInfo>
          <DivInfo>Los códigos de los estados de los usuarios son: <strong> 1. Activo, 2. Inactivo, 3. Suspendido</strong>.</DivInfo>
        </article>
        <Div>
          <label htmlFor="title"><p>★</p>Título del Reporte</label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Título del Reporte"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.titleReport}
            required
          />
        </Div>
        <Div>
          <label htmlFor="description"><p>★</p>Descripción del Reporte</label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Descripción del Reporte"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.description}
            required
          />
        </Div>
        <Div>
          <label htmlFor="dateReport"><p>★</p>Fecha del Reporte</label>
          <Input
            type="date"
            name="dateReport"
            id="dateReport"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.dateReport ? formatDate(form.dateReport) : ""}
            required
          />
        </Div>
        <Div>
          <label htmlFor="actionTaken"><p>★</p>Acción tomada</label>
          <Input
            type="text"
            name="actionTaken"
            id="actionTaken"
            placeholder="Acción tomada"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.actionTaken}
            required
          />
        </Div>
        <Div>
          <label htmlFor="idState"><p>★</p>ID del Estado</label>
          <Input
            type="number"
            name="idState"
            id="idState"
            placeholder="Id del Estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idState}
            required
          />
        </Div>
        <Div>
          <label htmlFor="idUser"><p>★</p>ID del Informante</label>
          <Input
            type="number"
            name="idUser"
            id="idUser"
            placeholder="ID del Informante"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idUser}
            required
          />
        </Div>
        <Div>
          <label htmlFor="idReportedUser"><p>★</p>ID del Reportado</label>
          <Input
            type="number"
            name="idReportedUser"
            id="idReportedUser"
            placeholder="ID del Reportado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idReportedUser}
            required
          />
        </Div>
        <Div>
          <label htmlFor="state"><p>★</p>Estado</label>
          <Input
            type="text"
            name="state"
            id="state"
            placeholder="Estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.state}
            required
          />
        </Div>
        <Div>
          <label htmlFor="user"><p>★</p>Usuario Informante</label>
          <Input
            type="text"
            name="user"
            id="user"
            placeholder="Usuario Informante"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.user}
            required
          />
        </Div>
        <Div>
          <label htmlFor="reportedUser"><p>★</p>Usuario Reportado</label>
          <Input
            type="text"
            name="reportedUser"
            id="reportedUser"
            placeholder="Usuario Reportado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.reportedUser}
            required
          />
        </Div>
        <DivButton>
          <Button type="submit">Enviar</Button>
          <Button type="button" onClick={handleReset}>Limpiar</Button>
        </DivButton>
      </Form>
      <Card>
        <ReportImage urlImage="https://cdn-icons-png.flaticon.com/512/567/567903.png" />
        <ReportInfo>
          <ReportTitle>{form.titleReport}</ReportTitle>
          <ReportDate>{form.dateReport ? formatDate(form.dateReport) : ""}</ReportDate>
          <Description>
            {form.description}
          </Description>
        </ReportInfo>
      </Card>
    </DivContent>
  );
};

export default CreateReportForm;
