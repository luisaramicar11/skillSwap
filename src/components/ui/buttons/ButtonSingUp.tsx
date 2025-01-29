import React from 'react';
import styled from 'styled-components';

type SignUpButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset'; 
  disabled?: boolean;
  onClick?: () => void; 
  children: React.ReactNode; 
};

const StyledButtonSingUp = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.textOrange};
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  width: 120px;
  background-color: ${({ theme }) => theme.colors.textWhite};
  border: none;

  > * {
    color: ${({ theme }) => theme.colors.textOrange};
  }
`;

const ButtonSingUp: React.FC<SignUpButtonProps> = ({ type = 'button', className, disabled = false, onClick, children }) => {
  return (
    <StyledButtonSingUp className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButtonSingUp>
  );
};

export default ButtonSingUp;
