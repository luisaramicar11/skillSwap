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
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: 5px;
  display: block;
  margin-top: 10px;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <LabelAuth htmlFor={htmlFor} className={className}>
      {text}
    </LabelAuth>
  );
};

export default Label;