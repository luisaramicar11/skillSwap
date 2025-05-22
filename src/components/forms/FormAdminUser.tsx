"use client";
import React, { useEffect, useState } from "react";
import { IUserUpdateAdmin } from "../../models/user.model";
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

const UserImage = styled.div<{urlImage: string}>`
  width: 100%;
  height: 450px;
  background-image: url(${(props) => props.urlImage});
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  padding: 20px;
`;

const UserName = styled.h2`
  font-size: 1.5em;
  margin: 0;
  color: #222;
`;

const JobTitle = styled.h4`
  font-size: 1.2em;
  margin: 10px 0;
  color: #777;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #555;
  line-height: 1.4;
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
        suspensionDate: userWithoutId.suspensionDate ?? null,
        reactivationDate: userWithoutId.reactivationDate ?? null,
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
        id: dataToEdit.id, 
        name: form.name,
        lastName: form.lastName,
        urlImage: form.urlImage,
        jobTitle: form.jobTitle,
        description: form.description,
        birthdate: form.birthdate, 
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
    <DivContent>
      <Form onSubmit={handleSubmit}>
        <article>
          <Title>★ EDITAR USUARIO</Title>
          <DivInfo>Aquí podrás revisar la información de los usuarios de la plataforma y</DivInfo>
          <DivInfo>realizar modificaciones en sus estados de cuenta según los T&C de <strong>SkillSwap</strong>.</DivInfo>
          <DivInfo>Los códigos de los estados de los usuarios son: <strong>1. Activo, 2. Inactivo, 3. Suspendido</strong></DivInfo>
        </article>
        <Div>
          <label htmlFor="name"><p>★</p>Nombre del Usuario</label>
          <Input
            type="text"
            name="name"
            id="name" 
            placeholder="Nombre del Usuario"
            onChange={handleChange}
            value={form.name}
            required
          />
        </Div>
        <Div>
          <label htmlFor="lastName"><p>★</p>Apellidos del Usuario</label>
          <Input
            type="text"
            name="lastName"
            id="lastName" 
            placeholder="Apellidos del Usuario"
            onChange={handleChange}
            value={form.lastName}
            required
          />
        </Div>
        <Div>
          <label htmlFor="abilities"><p>★</p>Habilidades</label>
          <Input
            type="text"
            name="abilities"
            id="abilities"  
            placeholder="Habilidades"
            onChange={handleChange}
            value={form.abilities}
            required
          />
        </Div>
        <Div>
          <label htmlFor="category"><p>★</p>Comunidad</label>
          <Input
            type="text"
            name="category"
            id="category" 
            placeholder="Comunidad"
            onChange={handleChange}
            value={form.category}
            required
          />
        </Div>
        <Div>
          <label htmlFor="idStateUser"><p>★</p>ID del Estado de Usuario</label>
          <Input
            type="number"
            name="idStateUser"
            id="idStateUser"  
            placeholder="idStateUser"
            onChange={handleChange}
            value={form.idStateUser}
            required
          />
        </Div>
        <Div>
          <label htmlFor="idRoleUser"><p>★</p>ID del Rol de Usuario</label>
          <Input
            type="number"
            name="idRoleUser"
            id="idRoleUser" 
            placeholder="idRoleUser"
            onChange={handleChange}
            value={form.idRoleUser}
            required
          />
        </Div>
        <Div>
          <label htmlFor="suspensionDate"><p>★</p>Fecha de Suspensión</label>
          <Input
            type="date"
            name="suspensionDate"
            id="suspensionDate" 
            onChange={handleChange}
            value={form.suspensionDate ?? ""}
          />
        </Div>
        <Div>
          <label htmlFor="reactivationDate"><p>★</p>Fecha de Reactivación</label>
          <Input
            type="date"
            name="reactivationDate"
            id="reactivationDate" 
            onChange={handleChange}
            value={form.reactivationDate ?? ""}
          />
        </Div>
        <DivButton>
          <Button type="submit">Actualizar</Button>
          <Button type="button" onClick={handleReset}>
            Limpiar
          </Button>
        </DivButton>
      </Form>
      <Card>
      <UserImage urlImage={form.urlImage ? form.urlImage : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"} />
      <UserInfo>
        <UserName>{form.name}{form.lastName}</UserName>
        <JobTitle>{form.jobTitle}</JobTitle>
        <Description>
          {form.description}
        </Description>
      </UserInfo>
    </Card>
    </DivContent>
  );
};

export default FormUsers;







