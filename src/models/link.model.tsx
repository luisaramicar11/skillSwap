import React, { ReactNode } from 'react';
export interface ILinkProps {
    id?: string;
    clickedUserId?: (id: string) => void;
    href: string;
    label?: string; 
    target?: string;
    icon?: ReactNode;
    onClick?: (label: string) => string;
    children?: ReactNode;
}
