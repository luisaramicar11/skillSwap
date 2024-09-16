'use client';
import React from "react";
import styled from "styled-components";

// Creación de la interfaz para el componente Select
interface SelectProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  name: string;
  required?: boolean;
}

// Estilos para el elemento select usando styled-components
const SelectStyled = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 10px;
  font-size: 16px;
  width: 350px;
  height: 50px;
  box-sizing: border-box;
`;
const Option = styled.option`
  padding: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 10px;
  font-size: 15px;
  width: 450px;
  height: 60px;
  box-sizing: border-box;
`;

// Componente Select
const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  className,
  disabled,
  ariaLabel,
  name,
  required = false,
}) => {
  return (
    <SelectStyled
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      name={name}
      required={required}
    >
      <Option value="" disabled>
        -- Selecciona una opción --
      </Option>
      <Option value="desarrollo">Desarrollo</Option>
      <option value="marketing">Marketing y Branding</option>
    </SelectStyled>
  );
};

export default Select;
