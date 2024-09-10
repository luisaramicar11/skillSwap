import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset'; // Define el tipo aquí
  };

const StyledButtonSingUp = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 10px;
  font-size: 16px;
  width: 120px;
  height: 50px;

`;

const ButtonSingUp: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <StyledButtonSingUp onClick={onClick} type={type}>
      {label}
    </StyledButtonSingUp>
  );
};
export default ButtonSingUp;