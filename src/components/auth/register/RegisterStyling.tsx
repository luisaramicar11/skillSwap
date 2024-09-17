'use client'
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center!important;
`;

export const DivUserData = styled.div`
  border-right: none; 
  width:100%;
  height: inherit;
  text-align: start;
  justify-content: center;
  align-items: center;
  border-radius: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const DivUserInput = styled.div`
  & sub{
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;

export const DivUserTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const DivButtonSingUp = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  gap: 20px;
  border: none;
`;


