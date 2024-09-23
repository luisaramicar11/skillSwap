import React from 'react';
import { ILinkProps } from '@/src/models/link.model';
import Link from 'next/link';
import styled from 'styled-components';
import { handlePageChange } from '@/src/utils/handlePageTheme';

const DivLinkComponent = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const DivLink: React.FC<ILinkProps> = ({ href, label, onClick, clickedUserId, id, children }) => {
    return (
        <DivLinkComponent
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
            {children || label} {/* Si `children` existe, lo renderiza, de lo contrario usa `label` */}
        </DivLinkComponent>
    );
};

export default DivLink;
