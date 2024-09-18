import styled from "styled-components";

export const H2 = styled.h2`
  display: inline;
  font-size: 3rem;
  padding-left: 1rem;
  padding-right: 10rem;
  margin-left: 0;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textOrange};
  border-bottom: 3px solid ${({ theme }) => theme.colors.textOrange};
  font-weight: bold;

  @media (min-width: 760px) {
    padding-left: 5rem;
  }
`;
export const DivRecentUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
