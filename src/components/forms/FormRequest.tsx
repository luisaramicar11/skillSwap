import React, { useState } from 'react';
import styled from 'styled-components';

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

const ConnectionRequestForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar la solicitud de conexión
    console.log({ message });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextArea 
        placeholder="Type here the content for your connection request..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <SendButton type="submit">ENVIAR</SendButton>
    </FormContainer>
  );
};

export default ConnectionRequestForm;
