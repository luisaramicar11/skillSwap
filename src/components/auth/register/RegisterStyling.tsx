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
  
`;

export const DivUserTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

export const TitleUserData = styled.h1`
  color: ${({ theme }) => theme.colors.bgPrimary}; 
  font-size: 2rem;
`;

