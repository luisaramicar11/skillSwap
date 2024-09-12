'use client';
import React from "react";
import styled from "styled-components";

// Creación de la interface para el componente Label
interface LabelProps {
  text: string;
  htmlFor: string;
  className?: string;
}

const LabelAuth = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.bgPrimary};
  margin-bottom: 8px;
  display: block;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <LabelAuth htmlFor={htmlFor} className={className}>
      {text}
    </LabelAuth>
  );
};

export default Label;
