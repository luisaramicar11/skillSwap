'use client';
import React from "react";
import styled from "styled-components";

// Creación de la interfaz para el componente TextArea
interface TextAreaProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number; 
}

// Estilos para el textarea usando styled-components
const TextAreaStyled = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textWhite};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 10px;
  font-size: 16px;
  width: 350px;
  height: 100px; 
  box-sizing: border-box;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textWhite}!important;// Ajusta la opacidad si es necesario
  } 
`;

// Componente TextArea
const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  className,
  disabled,
  ariaLabel,
  name,
  placeholder,
  required = false,
  maxLength = 200, 
}) => {
  return (
    <TextAreaStyled
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      name={name}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength} 
    />
  );
};

export default TextArea;
