"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// Styled Components para el formulario
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #e9a401;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #333;
  }
`;

function RecoverPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de verificación de contraseñas y petición al backend
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }  
    router.push("/auth");
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Nueva contraseña</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Crear contraseña</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">ENVIAR</SubmitButton>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}

export default RecoverPassword;
