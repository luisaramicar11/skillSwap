'use client'
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px; /* Añadido para asegurar margen en móviles */
  
  @media (max-width: 768px) {
    height: auto; /* Ajustar la altura para pantallas pequeñas */
    padding: 20px;
    border-radius: 0; 
  }
`;

export const DivUserData = styled.div`
  width: 100%;
  height: inherit;
  text-align: start;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const DivUserInput = styled.div`
  sub {
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
  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce el tamaño del texto en móviles */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.3rem; /* Reducir el espacio entre elementos en móviles */
  }
`;

export const DivButtonSingUp = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  gap: 20px;

  @media (max-width: 1200px) {
    position: static; /* Hace que el botón no sea fijo en móviles */
    display: flex;
    justify-content: center; /* Centrar el botón */
    gap: 10px; /* Reducir el espacio entre botones en móviles */
    margin-top: 20px;
  }
`;