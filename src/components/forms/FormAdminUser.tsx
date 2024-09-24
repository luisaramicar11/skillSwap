"use client";
import React, { useEffect, useState } from "react";
import { IUserUpdateAdmin } from "../../models/user.model";
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
        // Crea el objeto a actualizar filtrando las propiedades innecesarias
        // Función para formatear la fecha
        const formatDate = (date: Date | null): string | null => {
          if (!date) return null;
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Asegura que el mes tenga dos dígitos
          const day = String(date.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
          return `${year}-${month}-${day}`;
      };

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
            name="abilities"
            placeholder="Habilidades"
            onChange={handleChange}
            value={form.abilities}
            required
          />
          <Input
            type="text"
            name="category"
            placeholder="Categoría"
            onChange={handleChange}
            value={form.category}
            required
          />
          <Input
            type="number"
            name="idStateUser"
            placeholder="idStateUser"
            onChange={handleChange}
            value={form.idStateUser}
            required
          />
          <Input
            type="number"
            name="idRoleUser"
            placeholder="idRoleUser"
            onChange={handleChange}
            value={form.idRoleUser}
            required
          />
          <Input
            type="date"
            name="suspensionDate"
            onChange={handleChange}
            value={form.suspensionDate || ""}
          />
          <Input
            type="date"
            name="reactivationDate"
            onChange={handleChange}
            value={form.reactivationDate || ""}
          />
          <Div>
            <Button type="submit">Actualizar</Button>
            <Button type="button" onClick={handleReset}>
              Limpiar
            </Button>
          </Div>
        </Form>
      </Div>
    </main>
  );
};

export default FormUsers;






