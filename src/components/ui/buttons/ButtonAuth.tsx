'use client';
import React from 'react';
import { MouseEventHandler } from "react";

interface AuthButtonProps {
  type: "submit" | "button" | "reset";
  label: string;      
  onClick: MouseEventHandler<HTMLButtonElement>; 
  className?: string; 
  disabled?: boolean; 
}

const Button: React.FC<AuthButtonProps> = ({ label, onClick, className, type, disabled }) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;