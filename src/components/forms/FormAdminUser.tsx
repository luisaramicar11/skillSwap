"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { IUser } from "../../models/admin.users.model";
import styled from "styled-components";

const Form = styled.form`
  padding: 15px;
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
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

const Title = styled.h2`
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  font-size: 15pt;
`;

interface CreateUserFormProps {
  createData: (user: Omit<IUser, "id">) => void; // Cambia a Omit<User, 'id'>
  updateData: (user: IUser) => void;
  dataToEdit: IUser | null;
  setDataToEdit: (data: IUser | null) => void;
}

const initialForm: IUser = {
  id: 0, // Inicialmente tiene un ID por defecto, se actualizará cuando sea necesario
  name: "",
  lastName: "",
  jobTitle: "",
  description: "",
  dateBirthday: new Date(),
  urlImage: "",
  email: "",
  category: "",
  skills: [],
  phoneNumber: "",
  urlLinkedin: "",
  urlBehance: "",
  urlGithub: "",
  //createdAt: new Date().toISOString(),
  role: "",
  idState: "",
  stateName: "",
};

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState<IUser>(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:
        name === "skills"
          ? value.split(",").map((skill) => skill.trim())
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.id || form.id === 0) {
      const { id, ...userWithoutId } = form;
      createData(userWithoutId as Omit<IUser, "id">);
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

  // Convierte una fecha a formato YYYY-MM-DD
const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    return date; // Suponiendo que ya está en formato correcto
  }
  return date.toISOString().split('T')[0]; // Extrae solo la parte de la fecha
};


  return (
    <main>
      <Title>{dataToEdit ? "Editar Usuario" : "Agregar Usuario"}</Title>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nombre del usuario"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.name}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Apellidos del usuario"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.lastName}
            required
          />
          <Input
            type="text"
            name="jobTitle"
            placeholder="Cargo/profesión"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.jobTitle}
            required
          />
          <Input
            type="text"
            name="description"
            placeholder="Descripción"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.description}
            required
          />
          <Input
            type="date"
            name="dateBirthday"
            placeholder="Fecha de nacimiento"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.dateBirthday ? formatDate(form.dateBirthday) : ""}
            required
          />
          <Input
            type="text"
            name="urlImage"
            placeholder="Imagen"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.urlImage}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.email}
            required
          />
          <Input
            type="text"
            name="category"
            placeholder="Escribe la categoría"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.category}
            required
          />
          <Input
            type="text"
            name="skills"
            placeholder="Escribe las habilidades"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.skills}
            required
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Escribe el teléfono"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.phoneNumber}
            required
          />
          <Input
            type="text"
            name="urlLinkedin"
            placeholder="Escribe la url del Linkedin"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.urlLinkedin}
            required
          />
          <Input
            type="text"
            name="urlBehance"
            placeholder="Escribe la url del Behance"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.urlBehance}
            required
          />
          <Input
            type="text"
            name="urlGithub"
            placeholder="Escribe la url del Github"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.urlGithub}
            required
          />
          <Input
            type="text"
            name="role"
            placeholder="Rol del usuario"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.role}
            required
          />
          <Input
            type="text"
            name="idState"
            placeholder="Id del estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.idState}
          />
          <Input
            type="text"
            name="stateName"
            placeholder="Nombre del estado"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.stateName || ""}
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

export default CreateUserForm;
