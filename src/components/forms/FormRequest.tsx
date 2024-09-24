"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from "react-toastify";

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  resize: none;
`;

const SendButton = styled.button`
  background: none;
  width: 50%;
  border: none;
  padding: 0.3rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 800;
`;

interface IConnectionRequestFormProps {
  idReceivingUser: number;
  onClose: () => void;  // Añadimos onClose como prop
}

const ConnectionRequestForm: React.FC<IConnectionRequestFormProps> = ({ idReceivingUser, onClose }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const idRequestingUser = parseInt(localStorage.getItem("userId") as string, 10);

    const requestBody = {
      disponibilitySchedule: "string",
      description: message,
      idReceivingUser,
      idRequestingUser,
    };

    try {
      const response = await fetch('https://skillswapriwi.azurewebsites.net/api/RequestsPost/PostRequestCreate', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      setMessage('');
      toast.success("Solicitud enviada con éxito");

      // Cierra el modal después de enviar con éxito
      onClose();

    } catch (err) {
      toast.error("Error al enviar la solicitud");
      setError("Error al enviar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <TextArea 
        placeholder="Type here the content for your connection request..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        disabled={loading}
      />
      <SendButton type="submit" disabled={loading}>
        {loading ? "Enviando..." : "ENVIAR"}
      </SendButton>
    </FormContainer>
  );
};

export default ConnectionRequestForm;
