'use client'
import React from "react";
import styled from "styled-components";

// Creación de la interface del elemento input
interface InputProps {
  label: string,
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

const InputSignUp = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 10px;
  font-size: 16px;
  width: 450px;
  height: 60px;
  box-sizing: border-box;

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
    <InputSignUp type={type}
    placeholder={label}
    value={value}
    onChange={onChange}
    className={className}
    disabled={disabled}
    aria-label={ariaLabel}
    name={name}
    required={required} >
    </InputSignUp>
  );
};

export default Input;






