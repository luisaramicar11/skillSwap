// components/ButtonSingUp.tsx
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'; // Define el tipo aquí
  disabled?: boolean;
  onClick?: () => void; // Agrega onClick si lo necesitas
  children: React.ReactNode; // Para pasar el texto del botón
};

const StyledButtonSingUp = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 10px;
  font-size: 16px;
  width: 120px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.buttonBackground}; // Ajusta el color de fondo si es necesario
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const ButtonSingUp: React.FC<ButtonProps> = ({ type = 'button', disabled = false, onClick, children }) => {
  return (
    <StyledButtonSingUp type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButtonSingUp>
  );
};

export default ButtonSingUp;
