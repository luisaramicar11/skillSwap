import React, { ReactNode } from 'react';

export interface ILinkProps {
    href: string;
    label?: string;  // Mantén esto opcional en caso de usar solo children
    target?: string;
    icon?: ReactNode;
    onClick?: (label: string) => string;
    children?: ReactNode;  // Nuevo, para aceptar children
}
