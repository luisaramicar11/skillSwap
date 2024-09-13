// NavLink.tsx
import React from 'react';
import { ILinkProps } from '@/src/models/link.model';
import Link from 'next/link';
import styled from "styled-components";
import { handlePageChange } from "@/src/utils/handlePageTheme";

const NavLinkComponent = styled(Link)`
  text-decoration: none;
  padding: 15px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: bold;

  &:hover {
      font-weight: 900;
  }
`;

const StyledNavLink: React.FC<ILinkProps> = ({ href, label, icon, onClick }) => {
    return (
        <NavLinkComponent
            href={href}
            onClick={() => {
                handlePageChange(label);
                if (onClick) onClick(label); // Call the provided onClick function if any
            }}
        >
            {label}
        </NavLinkComponent>
    );
};

export default StyledNavLink;
