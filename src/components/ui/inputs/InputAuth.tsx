'use client'
import React from "react";
import styled from "styled-components";

// Creación de la interface del elemento input
interface InputProps {
  type: string;
  id:string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; 
  name: string;
  required?: boolean; 
  autoComplete?: string;
}

const StyledInputSignUp = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height:40px;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  
  &::placeholder {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textWhite}!important;// Ajusta la opacidad si es necesario
  }
`;

const InputSingUp: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required = false,
  autoComplete
}) => {
  return (
    <StyledInputSignUp type={type}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    name={name}
    required={required} 
    autoComplete= {autoComplete}>
    </StyledInputSignUp>
    
  );
};

export default InputSingUp;






