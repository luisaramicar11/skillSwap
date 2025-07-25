'use client'
import styled from 'styled-components';

export const Arrow = styled.span`
  margin-right: 8px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: scaleX(0.5);
`;

export const BackLink = styled.div` 
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  border: none;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textWhite};
  text-decoration: none;
  gap:4px;
  margin: 0;
  padding-bottom: 5px;

  a {
    padding: 0 !important;
    margin: 0 !important;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  margin: 0;
  border: none !important;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
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
  margin: 0;
  position: relative;

  @media (max-width: 1070px) {
    border-radius: none;
    border-radius: 15px; 
    border: 0;
    width: 300px;
    height: 460px !important;

    & form{
        display: flex;
        flex-direction: column;

        & :nth-child(5){
        display: flex;
        align-self: center !important;
      }
    }
  }
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

  @media (max-width: 1070px) { 
    width: inherit;
    display: flex;
    justify-content: center;
  }
`;