'use client'
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  margin: 0;
  border: none;
`;

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.borderAuthLeft};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderAuthLeft};
  border-left: 1px solid ${({ theme }) => theme.colors.borderAuthLeft};
  border-bottom-left-radius:15px ;
  transition: 1s ease-in-out;
  border-top-left-radius:15px ;
  padding: 50px;
  width: 60%;
  height: 450px;
  text-align: start;
  justify-content: center;
  align-items: center;  
  margin: 0;
  position: relative;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 2rem;
  background: transparent;
  font-weight: 400;
  padding-bottom: 20px;
  margin: 0;

`;

export const DivButtonLogin = styled.div`
  position: absolute;
  bottom: 3.2rem;
  display: flex;
  gap: 20px;
  border: none;
`;
