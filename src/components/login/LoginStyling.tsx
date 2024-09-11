import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: flex-end !important;
  flex-direction: row;
`;

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: none;
  border-bottom-left-radius:15px ;
  border-top-left-radius:15px ;
  padding: 40px;
  width: 500px;
  /* height: 443px; */
  text-align: start;
  justify-content: center;
  align-items: center;  
  margin-right: 0;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  background: transparent;
  font-weight: 400;

`;

export const DivButton = styled.div`
  margin-top: 50px;
`;
