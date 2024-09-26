"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { IReportGet, IReport } from "../../models/admin.reports.model";
import styled from "styled-components";

const Form = styled.form`
  padding: 30px;
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px #ccc solid;
  padding: 7px;
  font-size: small;
  color: black;
`;

const Button = styled.button`
  margin-top: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 1px green solid;
  color: green;
  cursor: pointer;
  background: none;
  padding: 5px 10px;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const Div = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <Div>
        <Form onSubmit={handleSubmit}>
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
          <Div>
            <Button type="submit">Enviar</Button>
            <Button type="button" onClick={handleReset}>Limpiar</Button>
          </Div>
        </Form>
      </Div>
    </main>
  );
};

export default CreateReportForm;