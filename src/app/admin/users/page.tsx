"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, createUser, deleteUser, updateUser } from "../../redux/slices/usersSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { IUser } from "../../../models/user.model"; 
import CreateForm from "../../../components/forms/FormAdminUser";
import Table from "../../../components/tables/TableUsers";
import styled from "styled-components";
import { toast } from "react-toastify";

const Title = styled.h2`
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-weight: bold;
  font-size: 15pt;
`;

const Div= styled.div`
  margin: 54px 0;
`

const Users: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [editedUser, setEditedUser] = useState<IUser | null>(null);

  // Llamar a la acción asíncrona para obtener usuarios
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Función para obtener el token
  const getToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token no disponible. Inicia sesión.");
      throw new Error("Token no disponible");
    }
    return token;
  };

  // Crear usuario
  const handleCreateUser = async (newUser: Omit<IUser, 'id'>) => {
    try {
      const token = getToken(); // Obtener token
      const response = await fetch("https://skillswapriwi.azurewebsites.net/api/UsersPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Usar token
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating user:", errorData);
        toast.error(`Error al crear el usuario: ${errorData.message}`);
        return;
      }

      const createdUser: IUser = await response.json();
      dispatch(createUser(createdUser));
      toast.success("Usuario creado exitosamente!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error al crear el usuario.");
    }
  };

  // Actualizar usuario
  const handleUpdateUser = async (updatedUser: IUser) => {
    try {
      console.log("Datos que se están enviando:", updatedUser); // Añade esto para depurar
      const token = getToken();
      const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/UsersPut/PutUserByUserAdmin?id=${updatedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "accept": "*/*",
        },
        body: JSON.stringify(updatedUser),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating user:", errorData);
        toast.error("Error al actualizar el usuario.");
        return;
      }
      dispatch(updateUser(updatedUser));
      setEditedUser(null);
      toast.success("Usuario actualizado exitosamente!");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error al actualizar el usuario.");
    }
  };
  

  // Eliminar usuario
  const handleDeleteUser = async (userId: number) => {
    try {
      const token = getToken(); // Obtener token
      const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/UsersDelete/DeleteUserById?id=${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`, // Usar token
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error deleting user:", errorData);
        toast.error("Error al eliminar el usuario.");
        return;
      }

      dispatch(deleteUser(userId));
      toast.success("Usuario eliminado exitosamente!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error al eliminar el usuario.");
    }
  };

  return (
    <Div>
      <Title>Formulario Usuarios</Title>

      <CreateForm
        createData={handleCreateUser}
        updateData={handleUpdateUser}
        dataToEdit={editedUser}
        setDataToEdit={setEditedUser}
      />
      <Table 
        data={users}
        setDataToEdit={setEditedUser}
        deleteData={handleDeleteUser} 
      />
    </Div>
  );
};

export default Users;

