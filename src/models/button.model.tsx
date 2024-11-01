import React, { MouseEventHandler }from "react";

export interface ButtonProps {
    type: "submit" | "button" | "reset";
    label?: string;   
    value?: string;         
    onClick?: MouseEventHandler<HTMLButtonElement>; 
    className?: string; 
    disabled?: boolean; 
    children?: React.ReactNode;
  }