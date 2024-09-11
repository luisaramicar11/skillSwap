'use client'
import styled from "styled-components";

export const DivUserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bgSecondary}; 
  font-size: 16px;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

export const DivUserInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary}; 
  font-size: 1rem;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

export const DivUserTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 450px;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

export const TitleUserData = styled.h1`
  color: ${({ theme }) => theme.colors.textBlueLight}; 
  font-size: 2rem;
  padding: 1rem;
`;

