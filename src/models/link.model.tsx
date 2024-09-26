import { ReactNode } from 'react';

export interface ILinkProps {
    id?: string;
    clickedUserId?: (id: string) => void;
    href: string;
    label?: string; 
    target?: '_blank' | '_self'; // Agregado para especificar el tipo de target
    icon?: ReactNode;
    onClick?: ((label: string) => string) | (() => void);
    children?: ReactNode;
}
