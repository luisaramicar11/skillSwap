"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, updateUser } from "../../redux/slices/usersSlice";
import { AppDispatch, RootState } from "../../redux/store";
import {  IUserUpdateAdmin } from "../../../models/user.model"; 
import FormUsers from "../../../components/forms/FormAdminUser"; 
import Table from "../../../components/tables/TableUsers";
import styled from "styled-components";
import { toast } from "react-toastify";

const Title = styled.h2`
  text-align: center;
  margin-top: 0 !important;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 40px;
  background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  border-bottom: solid 5px ${({ theme }) => theme.colors.textOrange};
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  color: transparent;
`;

const Div = styled.div`
`;

const Users: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const [editedUser, setEditedUser] = useState<IUserUpdateAdmin | null>(null);

  // Llamar a la acción asíncrona para obtener usuarios
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  // Actualizar usuario
  const handleUpdateUser = async (updatedToUser: IUserUpdateAdmin) => {
    try {
      console.log("Datos que se están enviando:", updatedToUser); // Añade esto para depurar
      const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/UsersPut/PutUserByUserAdmin?id=${updatedToUser.id}`, {
        method: "PUT",
        headers: {
          'accept': '*/*',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedToUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating user:", errorData);
        toast.error("Error al actualizar el usuario.");
        return;
      }

      dispatch(updateUser(updatedToUser));
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
      const response = await fetch(`https://skillswapriwi.azurewebsites.net/api/UsersDelete/DeleteUserById?id=${userId}`, {
        method: "DELETE",
        headers: {
          'accept': '*/*'
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
      <Title>Formulario de Usuarios</Title>

      <FormUsers
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


