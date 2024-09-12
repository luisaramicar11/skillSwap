'use client'
import React from "react";
import styled from "styled-components";

// Creación de la interface del elemento input
interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  name: string;
  required?: boolean;
}

const InputAuth = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin: 20px;

  ::placeholder {
    color: white !important; /* Forzar color blanco */
    opacity: 1 !important;    /* Asegúrate de que el color sea visible */
  }

  /* Para compatibilidad con navegadores WebKit (Chrome, Safari) */
  ::-webkit-input-placeholder {
    color: white !important; /* Forzar color blanco */
  }

  /* Para compatibilidad con Firefox */
  :-moz-placeholder {
    color: white !important; /* Forzar color blanco */
  }

  /* Para compatibilidad con Internet Explorer y Edge */
  ::-ms-input-placeholder {
    color: white !important; /* Forzar color blanco */
  }
`;

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  disabled,
  ariaLabel,
  name,
  required = false,
}) => {
  return (
    <InputAuth
      type={type}
      placeholder={placeholder} // Placeholder asignado correctamente
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      name={name}
      required={required}
    />
  );
};

export default Input;
