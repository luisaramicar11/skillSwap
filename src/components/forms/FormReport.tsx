"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from "react-toastify";
import { createReport } from '../../lib/api/reports'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import {  getAllUsers } from '../../lib/api/users'; 

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 0;

  > * {
    font-size: 14px !important ;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  font-size: 1rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  font-size: 1rem;
  width: 100%;
  height: 150px;
  resize: none;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  width: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgGreen};
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  font-size: 1rem;
  width: 100%;
`;

interface IUser {
  id: number;
  name: string;
  lastName: string;
}

interface ReportFormProps {
  closeModal: () => void; // Función para cerrar el modal
}

const ReportForm: React.FC<ReportFormProps> = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [reportedUserId, setReportedUserId] = useState<number | null>(null);

  const idUser = parseInt(localStorage.getItem('userId') || '0', 10);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(); // Usa la nueva función
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (reportedUserId === null) {
      alert('Por favor selecciona un usuario para reportar.');
      return;
    }

    const reportData = {
      id: 0,
      titleReport: title,
      description: description,
      dateReport: new Date().toISOString().split('T')[0],
      actionTaken: 'no',
      idState: 0,
      idUser: idUser,
      idReportedUser: reportedUserId,
    };

    try {
      const response = await createReport(reportData);
      console.log(response) // Llama a la función para crear el reporte
      toast.success('Reporte enviado con éxito', { autoClose: 3000 });
      closeModal();
    } catch (error) {
      toast.error('Error al enviar el reporte', { autoClose: 3000 });
      console.error('Error al enviar el reporte:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título del reporte"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Select onChange={(e) => setReportedUserId(Number(e.target.value))} defaultValue="">
        <option value="" disabled>
          Selecciona un usuario
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.lastName}
          </option>
        ))}
      </Select>
      <TextArea
        placeholder="Descripción del comportamiento"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <SubmitButton type="submit">Enviar Reporte</SubmitButton>
    </FormContainer>
  );
};

export default ReportForm;

