"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from "react-toastify";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
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
    background-color: ${({ theme }) => theme.colors.bgPink};
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
        const response = await fetch('https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersAll');
        const data = await response.json();
        setUsers(data.data.response);
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
      const response = await fetch('https://skillswapriwi.azurewebsites.net/api/ReportsPost/PostReportCreate', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        toast.success('Reporte enviado con éxito', { autoClose: 3000 }); // Muestra un solicitud de éxito al enviar el reporte
        console.log('Reporte enviado con éxito');
        closeModal(); // Llama a la función closeModal después de enviar el reporte
      } else {
        toast.error('Error al enviar el reporte', { autoClose: 3000 }); // Muestra un solicitud de error al enviar el reporte
        console.error('Error al enviar el reporte');
      }
    } catch (error) {
      console.error('Error al enviar el reporte:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Reportar Usuario</h2>
      
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
