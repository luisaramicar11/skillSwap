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
  createData: (user: Omit<IUser, "id">) => void; // Cambia a Omit<IUser, 'id'>
  updateData: (user: IUser) => void;
  dataToEdit: IUser | null;
  setDataToEdit: (data: IUser | null) => void;
}

const initialForm: Omit<IUser, "id"> = {
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
  role: "",
  idState: 0,
};

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState<Omit<IUser, "id">>(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      const { id, ...userWithoutId } = dataToEdit; // Excluir id
      setForm(userWithoutId);
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

    if (!dataToEdit) {
      createData(form); // Crear nuevo usuario
    } else {
      updateData({ ...form, id: dataToEdit.id }); // Actualizar usuario existente
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
            onChange={handleChange}
            value={form.name}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Apellidos del usuario"
            onChange={handleChange}
            value={form.lastName}
            required
          />
          <Input
            type="text"
            name="jobTitle"
            placeholder="Cargo/profesión"
            onChange={handleChange}
            value={form.jobTitle}
            required
          />
          <Input
            type="text"
            name="description"
            placeholder="Descripción"
            onChange={handleChange}
            value={form.description}
            required
          />
          <Input
            type="date"
            name="dateBirthday"
            placeholder="Fecha de nacimiento"
            onChange={handleChange}
            value={formatDate(form.dateBirthday)}
            required
          />
          <Input
            type="text"
            name="urlImage"
            placeholder="Imagen"
            onChange={handleChange}
            value={form.urlImage}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <Input
            type="text"
            name="category"
            placeholder="Escribe la categoría"
            onChange={handleChange}
            value={form.category}
            required
          />
          <Input
            type="text"
            name="skills"
            placeholder="Escribe las habilidades (separadas por comas)"
            onChange={handleChange}
            value={form.skills.join(", ")} // Mostrar como cadena
            required
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Escribe el teléfono"
            onChange={handleChange}
            value={form.phoneNumber}
            required
          />
          <Input
            type="text"
            name="urlLinkedin"
            placeholder="Escribe la url del Linkedin"
            onChange={handleChange}
            value={form.urlLinkedin}
            required
          />
          <Input
            type="text"
            name="urlBehance"
            placeholder="Escribe la url del Behance"
            onChange={handleChange}
            value={form.urlBehance}
            required
          />
          <Input
            type="text"
            name="urlGithub"
            placeholder="Escribe la url del Github"
            onChange={handleChange}
            value={form.urlGithub}
            required
          />
          <Input
            type="text"
            name="role"
            placeholder="Rol del usuario"
            onChange={handleChange}
            value={form.role}
            required
          />
          <Input
            type="text"
            name="idState"
            placeholder="Id del estado"
            onChange={handleChange}
            value={form.idState}
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

export default CreateUserForm;

