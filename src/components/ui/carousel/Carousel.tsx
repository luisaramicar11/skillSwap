import React from 'react';
import styled from 'styled-components';

interface CardProps {
  angle: number; // Definimos la prop 'angle' como número
}

// Contenedor principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({ theme }) => theme.colors.textSecondary};
  flex-direction: column;
  padding: 200px 0;
  margin: 0; 
  width: 100vw;
  height: auto;
`;

// Título principal
const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  & span{
    font-weight:normal;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

// Subtítulo
const Subtitle = styled.span`
  color: #b3b3b3;
  font-size: 14px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 30px;
  }
`;

// Contenedor de tarjetas
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 100px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    overflow: hidden;
  }
`;

// Tarjetas con diferentes anchos y rotaciones
const Card = styled.div<CardProps>`
  height: 180px;
  background-color: #c4c4c4;
  margin: 0 10px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: perspective(500px) rotateY(${props => props.angle}deg);

  &:nth-child(1) {
    width: 100px;
    transform: perspective(500px) rotateY(-10deg);
  }
  &:nth-child(2),
  &:nth-child(6) {
    width: 120px;
    transform: perspective(500px) rotateY(-5deg);
  }
  &:nth-child(3),
  &:nth-child(5) {
    width: 110px;
  }
  &:nth-child(4) {
    width: 130px;
    transform: perspective(500px) rotateY(0deg);
  }
  &:nth-child(7) {
    width: 100px;
    transform: perspective(500px) rotateY(5deg);
  }

  @media (max-width: 768px) {
    &:nth-child(n+6) {
      display: none; // Oculta las tarjetas 6 y 7 en pantallas medianas
    }
  }

  @media (max-width: 480px) {
    &:nth-child(n+4) {
      display: none; // Oculta las tarjetas 4 y siguientes en móviles
    }

    width: 80px; // Ajustamos el ancho en móviles
    height: 120px; // Ajustamos la altura en móviles
    margin: 10px;
  }
`;

// Componente principal del carrusel
const Carousel: React.FC = () => {
  return (
    <Container>
      <Title>MATCH THE <span>ideal skill for you</span></Title>
      <Subtitle>“SOMETIMES YOU DON&apos;T EVEN KNOW YOU<br></br>NEED, UNTIL YOU SEE IT”</Subtitle>
      <CardsContainer>
        <Card angle={-10} />
        <Card angle={-5} />
        <Card angle={0} />
        <Card angle={0} />
        <Card angle={0} />
        <Card angle={5} />
        <Card angle={10} />
      </CardsContainer>
    </Container>
  );
};

export default Carousel;
