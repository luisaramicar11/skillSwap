import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset'; // Define el tipo aquí
  };

const StyledButtonAuth = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.radientPrimary};
  color: ${({ theme }) => theme.colors.bgPrimary} ;
  border-radius: 10px;
  font-size: 16px;
  width: 120px;
  height: 50px;

`;

const ButtonAuth: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <StyledButtonAuth onClick={onClick} type={type}>
      {label}
    </StyledButtonAuth>
  );
};
export default ButtonAuth;
