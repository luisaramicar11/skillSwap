'use client';
import React from 'react';
import { ButtonProps } from '@/src/models/button.model';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  cursor: pointer;
  transition: 0.4s;
  border-radius: 5px;

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.bgBanner};
  }

  & svg{
    width: 18px;
    height: 18px;
    fill: #222;
  }

  & small{
    font-size: 10px;
  }
`;


const ButtonBelow: React.FC<ButtonProps> = ({ children, onClick, className, type, label, disabled }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
      <small>{label}</small>
    </StyledButton>
  );
};

export default ButtonBelow;