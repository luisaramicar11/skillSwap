'use client';
import React from 'react';
import { ILinkProps } from '@/src/models/link.model';
import Link from 'next/link';
import styled from 'styled-components';
import { handlePageChange } from '@/src/lib/utils/handlePageTheme';

const CardUserLinkComponent = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: 0.4s ease-in-out;
    }
`;

const CardUserLink: React.FC<ILinkProps> = ({ href, label, onClick, id, children }) => {
    return (
        <CardUserLinkComponent
            href={href}
            onClick={() => {
                // Almacenar el clickedUserId en localStorage si existe
                if (id) {
                    localStorage.setItem('clickedUserId', id);
                }

                // Ejecutar la lógica de cambio de página
                if (label) {
                    handlePageChange(label);
                    if (onClick) onClick(label);
                }
            }}
        >
            {children || label}
        </CardUserLinkComponent>
    );
};

export default CardUserLink;