// components/ReportForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

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
    background-color:${({ theme }) => theme.colors.bgPink};
  }
`;

const ReportForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [reportedUser, setReportedUser] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el reporte
    console.log({ title, reportedUser, description });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Título del reporte..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <Input 
        type="text" 
        placeholder="Nombre de la persona a reportar..." 
        value={reportedUser} 
        onChange={(e) => setReportedUser(e.target.value)} 
      />
      <TextArea 
        placeholder="Escribe aquí la descripción de tu reporte..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <SubmitButton type="submit">ENVIAR</SubmitButton>
    </FormContainer>
  );
};

export default ReportForm;
