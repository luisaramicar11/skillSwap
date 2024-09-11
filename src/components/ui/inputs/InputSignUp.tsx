'use client'
import React from "react";
import styled from "styled-components";

// Creación de la interface del elemento input
interface InputProps {
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; 
  name: string;
  required?: boolean; 
}

const StyledInputSignUp = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background: transparent;
  
  // Estiliza el placeholder en blanco
  ::placeholder {
    color: #ffffff;
    opacity: 0.7; // Ajusta la opacidad si es necesario
  }

  // Cambia el color cuando el input esté en foco (seleccionado)
  &:focus {
    outline: none; // Elimina el borde de enfoque por defecto
    border-color: ${({ theme }) => theme.colors.gradientPrimary}; // Cambia el borde a blanco
    color: ${({ theme }) => theme.colors.gradientPrimary} ; // Cambia el color del texto a blanco
  }
`;

const InputSingUp: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required = false,
}) => {
  return (
    <StyledInputSignUp type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    name={name}
    required={required} >
    </StyledInputSignUp>
  );
};

export default InputSingUp;






