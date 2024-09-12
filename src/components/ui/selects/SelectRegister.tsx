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
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 10px;
  font-size: 16px;
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
      <option value="" disabled>
        -- Selecciona una opción --
      </option>
      <option value="desarrollo">Desarrollo</option>
      <option value="marketing">Marketing y Branding</option>
    </SelectStyled>
  );
};

export default Select;
