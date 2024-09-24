"use client";
import React, { useEffect, useState } from "react";
import { IUserUpdateAdmin } from "../../models/user.model";
import styled from "styled-components";

// Estilos del formulario y los elementos
const Form = styled.form`
  /* Aquí puedes agregar los estilos que necesites para el formulario */
`;

const BoxForm = styled.form`
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange};
  color: #fff;
  margin: 0 auto;
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
  background-color: ${({ theme }) => theme.colors.bgPrimay};
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  color: #fff;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-size: 16px;
`;

const P = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.bgSecondary};
`;

const Div1 = styled.div`
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange};
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
  background-color: ${({ theme }) => theme.colors.bgPrimay};
  border-color: ${({ theme }) => theme.colors.textOrange};
  color: #fff;
  margin: 0 auto;
  display: flex;
`;

const Input = styled.input`
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textWhite};
  border-color: ${({ theme }) => theme.colors.bgSecondary};

  &::placeholder {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textWhite}!important; /* Ajusta la opacidad si es necesario */
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
  background-color: ${({ theme }) => theme.colors.gradientText};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  cursor: pointer;
`;

const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  color: #000;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textOrange0};
  }
`;

const Div = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
`;

// Componente principal
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
      [name]:
        name === "suspensionDate" || name === "reactivationDate"
          ? value || null
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataToEdit) {
      const userToUpdate = {
        ...form,
      };
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
      <Subtitle>Editar Usuarios</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Message>
          <H2>Estos son valores de estados:</H2>
          <P>1 = ACTIVO</P>
          <P>2 = INACTIVO</P>
          <P>3 = SUSPENDIDO</P>
        </Message>
        <BoxForm>
          <Div1>
            <label htmlFor="name">Nombre del usuario</label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del usuario"
              onChange={handleChange}
              value={form.name}
              required
            />

            <label htmlFor="lastName">Apellidos del usuario</label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellidos del usuario"
              onChange={handleChange}
              value={form.lastName}
              required
            />

            <label htmlFor="abilities">Habilidades</label>
            <Input
              type="text"
              name="abilities"
              id="abilities"
              placeholder="Habilidades"
              onChange={handleChange}
              value={form.abilities}
              required
            />

            <label htmlFor="category">Categoría</label>
            <Input
              type="text"
              name="category"
              id="category"
              placeholder="Categoría"
              onChange={handleChange}
              value={form.category}
              required
            />
          </Div1>

          <Div2>
            <label htmlFor="idStateUser">Estado del usuario</label>
            <Input
              type="number"
              name="idStateUser"
              id="idStateUser"
              placeholder="Estado del usuario"
              onChange={handleChange}
              value={form.idStateUser}
              required
            />

            <label htmlFor="idRoleUser">Rol del usuario</label>
            <Input
              type="number"
              name="idRoleUser"
              id="idRoleUser"
              placeholder="Rol del usuario"
              onChange={handleChange}
              value={form.idRoleUser}
              required
            />

            <label htmlFor="suspensionDate">Fecha de suspensión</label>
            <Input
              type="date"
              name="suspensionDate"
              id="suspensionDate"
              onChange={handleChange}
              value={form.suspensionDate || ""}
            />

            <label htmlFor="reactivationDate">Fecha de reactivación</label>
            <Input
              type="date"
              name="reactivationDate"
              id="reactivationDate"
              onChange={handleChange}
              value={form.reactivationDate || ""}
            />
          </Div2>
        </BoxForm>
        <ButtonContainer>
          <ButtonSecondary type="button" onClick={handleReset}>
            Limpiar
          </ButtonSecondary>
          <Button type="submit">Actualizar</Button>
        </ButtonContainer>
      </Form>
    </main>
  );
};

export default FormUsers;
