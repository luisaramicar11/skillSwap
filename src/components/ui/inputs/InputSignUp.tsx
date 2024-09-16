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
    color: ${({ theme }) => theme.colors.textWhite}!important;// Ajusta la opacidad si es necesario
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






