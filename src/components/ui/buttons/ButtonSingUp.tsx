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
  padding: 15px;
  color: ${({ theme }) => theme.colors.textOrange};
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.textWhite};
  border: none; // Ajusta el color de fondo si es necesario
`;

const ButtonSingUp: React.FC<ButtonProps> = ({ type = 'button', disabled = false, onClick, children }) => {
  return (
    <StyledButtonSingUp type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButtonSingUp>
  );
};

export default ButtonSingUp;
