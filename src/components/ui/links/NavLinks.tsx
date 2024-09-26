import React from 'react';
import { ILinkProps } from '@/src/models/link.model';
import Link from 'next/link';
import styled from 'styled-components';
import { handlePageChange } from '../../../lib/utils/handlePageTheme';

const NavLinkComponent = styled(Link)`
  text-decoration: none;
  padding: 15px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: 400;
  transition: 0.4s;

  &:hover {
    font-weight: 700;
    transition: 0.4s;
  }
`;

const StyledNavLink: React.FC<ILinkProps> = ({ href, label, onClick, children }) => {
  return (
    <NavLinkComponent
      href={href}
      onClick={() => {
        if (label) {
          handlePageChange(label);
          if (onClick) onClick(label);
        }
      }}
    >
      {children || label} {/* Si `children` existe, lo renderiza, de lo contrario usa `label` */}
    </NavLinkComponent>
  );
};

export default StyledNavLink;

