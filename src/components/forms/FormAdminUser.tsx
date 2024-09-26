"use client";
import React, { useEffect, useState } from "react";
import { IUserUpdateAdmin } from "../../models/user.model";
import styled from "styled-components";

const Form = styled.form`
  padding: 30px;
  width: 100%; /* Cambiado a 100% para ser más responsivo */
  max-width: 600px; /* Añadido un ancho máximo */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%; /* Cambiado a 100% para ser responsivo */
  border-radius: 10px;
  border: 1px #ccc solid;
  padding: 7px;
  font-size: small;
  color: black;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Ajuste del tamaño de fuente en pantallas más pequeñas */
  }
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

const DivInfo = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

const DivButtton = styled.div`
  display: flex;
  justify-content: center;
`;

interface EditUserFormProps {
  updateData: (user: IUserUpdateAdmin) => void;
  dataToEdit: IUserUpdateAdmin | null;
  setDataToEdit: (data: IUserUpdateAdmin | null) => void;
}

const FormUsers: React.FC<EditUserFormProps> = ({
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const initialFormState: IUserUpdateAdmin = {
    name: "",
    lastName: "",
    abilities: "",
    category: "",
    idStateUser: 0,
    idRoleUser: 0,
    suspensionDate: null,
    reactivationDate: null,
    urlImage: "",
    birthdate: "",
  };

  const [form, setForm] = useState<IUserUpdateAdmin>(initialFormState);

  useEffect(() => {
    const initialFormState: IUserUpdateAdmin = {
      name: "",
      lastName: "",
      abilities: "",
      category: "",
      idStateUser: 0,
      idRoleUser: 0,
      suspensionDate: null,
      reactivationDate: null,
      urlImage: "",
      birthdate: "",
    };
    if (dataToEdit) {
      const { id, ...userWithoutId } = dataToEdit; // Excluir id
      console.log(id);
      setForm({
        ...userWithoutId,
        suspensionDate: userWithoutId.suspensionDate || null,
        reactivationDate: userWithoutId.reactivationDate || null,
      });
    } else {
      setForm(initialFormState);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "suspensionDate" || name === "reactivationDate" ? (value ? value : null) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataToEdit) {
      const userToUpdate = {
        id: dataToEdit.id, // Mantén el ID existente
        name: form.name,
        lastName: form.lastName,
        urlImage: form.urlImage,
        jobTitle: form.jobTitle,
        description: form.description,
        birthdate: form.birthdate, // Mantener el formato de string
        email: form.email,
        phoneNumber: form.phoneNumber,
        category: form.category,
        abilities: form.abilities,
        urlLinkedin: form.urlLinkedin,
        urlGithub: form.urlGithub,
        urlBehance: form.urlBehance,
        idStateUser: form.idStateUser,
        idRoleUser: form.idRoleUser,
        suspensionDate: form.suspensionDate,
        reactivationDate: form.reactivationDate,
      };

      // Envía solo las propiedades necesarias
      updateData(userToUpdate);
      handleReset();
    }
  };

  const handleReset = () => {
    setForm(initialFormState);
    setDataToEdit(null);
  };

  return (
    <main>
      <Title>Editar Usuario</Title>
      <DivInfo>Los códigos de los estados de los usuarios son: 1. Activo, 2. Inactivo, 3. Suspendido </DivInfo>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Div>
            <label htmlFor="name">Nombre del usuario</label>
            <Input
              type="text"
              name="name"
              id="name"  // Añadido para asociar con el label
              placeholder="Nombre del usuario"
              onChange={handleChange}
              value={form.name}
              required
            />
          </Div>
          <Div>
            <label htmlFor="lastName">Apellidos del usuario</label>
            <Input
              type="text"
              name="lastName"
              id="lastName"  // Añadido para asociar con el label
              placeholder="Apellidos del usuario"
              onChange={handleChange}
              value={form.lastName}
              required
            />
          </Div>
          <Div>
            <label htmlFor="abilities">Habilidades</label>
            <Input
              type="text"
              name="abilities"
              id="abilities"  // Añadido para asociar con el label
              placeholder="Habilidades"
              onChange={handleChange}
              value={form.abilities}
              required
            />
          </Div>
          <Div>
            <label htmlFor="category">Categoría</label>
            <Input
              type="text"
              name="category"
              id="category"  // Añadido para asociar con el label
              placeholder="Categoría"
              onChange={handleChange}
              value={form.category}
              required
            />
          </Div>
          <Div>
            <label htmlFor="idStateUser">ID del Estado de Usuario</label>
            <Input
              type="number"
              name="idStateUser"
              id="idStateUser"  // Añadido para asociar con el label
              placeholder="idStateUser"
              onChange={handleChange}
              value={form.idStateUser}
              required
            />
          </Div>
          <Div>
            <label htmlFor="idRoleUser">ID del Rol de Usuario</label>
            <Input
              type="number"
              name="idRoleUser"
              id="idRoleUser"  // Añadido para asociar con el label
              placeholder="idRoleUser"
              onChange={handleChange}
              value={form.idRoleUser}
              required
            />
          </Div>
          <Div>
            <label htmlFor="suspensionDate">Fecha de Suspensión</label>
            <Input
              type="date"
              name="suspensionDate"
              id="suspensionDate"  // Añadido para asociar con el label
              onChange={handleChange}
              value={form.suspensionDate || ""}
            />
          </Div>
          <Div>
            <label htmlFor="reactivationDate">Fecha de Reactivación</label>
            <Input
              type="date"
              name="reactivationDate"
              id="reactivationDate"  // Añadido para asociar con el label
              onChange={handleChange}
              value={form.reactivationDate || ""}
            />
          </Div>
          <DivButtton>
            <Button type="submit">Actualizar</Button>
            <Button type="button" onClick={handleReset}>
              Limpiar
            </Button>
          </DivButtton>
        </Form>
      </Div>
    </main>
  );
};

export default FormUsers;







