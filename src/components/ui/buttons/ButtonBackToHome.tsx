// components/BackButton.js
import styled from 'styled-components';
import StyledNavLink from '../links/NavLinks';
import { handlePageChange } from "@/src/utils/handlePageTheme";

const BackButton = () => {
  return (
      <StyledButton onClick={() => handlePageChange('INICIO')}>
        <Arrow>&larr;</Arrow> BACK <br/> HOME 
        <StyledNavLink href="/home" label="INICIO"></StyledNavLink>
      </StyledButton>
  );
};

export default BackButton;

const StyledButton = styled.a`
  position: fixed;
  top:4rem;
  left: 25rem;
  align-items: start;
  justify-content: start;
  background-color: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

const Arrow = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
