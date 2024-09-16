import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  margin: 0;
`;

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.borderAuth};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderAuth};
  border-left: 1px solid ${({ theme }) => theme.colors.borderAuth};
  border-radius: none;
  border-bottom-left-radius:15px ;
  border-top-left-radius:15px ;
  padding: 50px;
  width: 60%;
  height: 500px;
  text-align: start;
  justify-content: center;
  align-items: center;  
  margin: 0;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 2rem;
  background: transparent;
  font-weight: 400;

`;

export const DivButtonLogin = styled.div`
  position: absolute;
  bottom: 7rem;
  display: flex;
  gap: 20px;
  border: none;
`;
