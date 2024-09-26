"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { IReportGet, IReport } from "../../models/admin.reports.model";
import styled from "styled-components";

const Form = styled.form`
  padding: 30px;
  width: 100%;
  max-width: 600px; /* Máxima anchura para el formulario */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%; /* Ocupa todo el ancho disponible */
  border-radius: 10px;
  border: 1px #ccc solid;
  padding: 7px;
  font-size: small;
  color: black;
`;

const DivInfo = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 1px grey solid;
  color: black;
  cursor: pointer;
  background: none;
  padding: 5px 10px;

  &:hover {
    background-color: orange;
    color: white;
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p`
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-size: 16px;
  font-weight: 500;
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
    <main>
      <Title>{dataToEdit ? "Editar Reporte" : "Editar Reporte"}</Title>
      <DivInfo>La acción tomada debe ser cualquiera de las siguientes: suspender, habilitar o deshabilitar </DivInfo>
      <DivInfo>Los códigos de los estados de los usuarios son: 1. Activo, 2. Inactivo, 3. Suspendido </DivInfo>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Div>
            <label htmlFor="title">Nombre del reporte</label>
            <Input
              type="text"
              name="title"
              id="title"  // Añadido para asociar con el label
              placeholder="Nombre del reporte"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.titleReport}
              required
            />
          </Div>
          <Div>
            <label htmlFor="description">Descripción del reporte</label>
            <Input
              type="text"
              name="description"
              id="description"  // Añadido para asociar con el label
              placeholder="Descripción del reporte"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.description}
              required
            />
          </Div>
          <Div>
            <label htmlFor="dateReport">Fecha del reporte</label>
            <Input
              type="date"
              name="dateReport"
              id="dateReport"  // Añadido para asociar con el label
              onBlur={handleChange}
              onChange={handleChange}
              value={form.dateReport ? formatDate(form.dateReport) : ""}
              required
            />
          </Div>
          <Div>
            <label htmlFor="actionTaken">Acción tomada</label>
            <Input
              type="text"
              name="actionTaken"
              id="actionTaken"  // Añadido para asociar con el label
              placeholder="Acción tomada"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.actionTaken}
              required
            />
          </Div>
          <Div>
            <label htmlFor="idState">ID del Estado</label>
            <Input
              type="number"
              name="idState"
              id="idState"  // Añadido para asociar con el label
              placeholder="Id del Estado"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.idState}
              required
            />
          </Div>
          <Div>
            <label htmlFor="idUser">ID del Usuario</label>
            <Input
              type="number"
              name="idUser"
              id="idUser"  // Añadido para asociar con el label
              placeholder="Id del User"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.idUser}
              required
            />
          </Div>
          <Div>
            <label htmlFor="idReportedUser">ID del usuario reportado</label>
            <Input
              type="number"
              name="idReportedUser"
              id="idReportedUser"  // Añadido para asociar con el label
              placeholder="Id del usuario reportado"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.idReportedUser}
              required
            />
          </Div>
          <Div>
            <label htmlFor="state">Estado</label>
            <Input
              type="text"
              name="state"
              id="state"  // Añadido para asociar con el label
              placeholder="Estado"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.state}
              required
            />
          </Div>
          <Div>
            <label htmlFor="user">Usuario quien reporta</label>
            <Input
              type="text"
              name="user"
              id="user"  // Añadido para asociar con el label
              placeholder="Usuario quien reporta"
              onBlur={handleChange}
              onChange={handleChange}
              value={form.user}
              required
            />
          </Div>
          <Div>
            <label htmlFor="reportedUser">Usuario reportado</label>
            <Input
              type="text"
              name="reportedUser"
              id="reportedUser"  // Añadido para asociar con el label
              placeholder="Usuario reportado"
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
      </Div>
    </main>
  );
};

export default CreateReportForm;
