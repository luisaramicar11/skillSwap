import React from 'react';

export interface ILinkProps {
    id?: string;
    clickedUserId?: (id: string) => void;
    href: string;
    label?: string; 
    target?: '_blank' | '_self'; 
    icon?:  React.ReactNode;
    onClick?: ((label: string) => string) | (() => void);
    children?:  React.ReactNode;
}
