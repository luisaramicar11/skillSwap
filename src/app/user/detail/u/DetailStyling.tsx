import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 54px 0;
  flex-direction: column;
  display: flex;
`;

export const DivProfile = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  display: flex;
  max-width: 600px;
  height: 100%;

  @media (max-width: 950px) {
    padding: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;