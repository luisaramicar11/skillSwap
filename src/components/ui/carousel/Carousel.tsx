import React from 'react';
import styled from 'styled-components';

interface CardProps {
  angle: number;
  imgsrc: string;
}

// Contenedor principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:${({ theme }) => theme.colors.bgGrey};
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 150px;
  margin: 0; 
  width: 100vw;
  height: auto;
`;

// Título principal
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textWhite};
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
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 14px;
  opacity: 0.5;
  font-style: normal;
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
  align-items: center;
  padding: 10px;
  width: 100vw;

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    overflow: hidden;
  }
`;

// Tarjetas con diferentes anchos y rotaciones


const Card = styled.div<CardProps>`
  filter: grayscale();
  background-color: #c4c4c4;
  margin: 5px;
  border-radius: 15px;
  background-image: url(${props => props.imgsrc});
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 200px;
  transform: perspective(500px) rotateY(${props => props.angle}deg);
  overflow: hidden;

  &:nth-child(1) {
    width: 150px;
    transform: perspective(500px) rotateY(-10deg);
    height: 200px;
  }
  &:nth-child(2),
  &:nth-child(6) {
    width: 150px;
    height: 230px;
    transform: perspective(500px) rotateY(-5deg);
  }
  &:nth-child(3),
  &:nth-child(5) {
    width: 180px;
    height: 260px;
  }
  &:nth-child(4) {
    width: 218px;
    height: 300px;
    transform: perspective(500px) rotateY(0deg);
  }
  &:nth-child(7) {
    width: 150px;
    height: 200px;
    transform: perspective(500px) rotateY(5deg);
  }

  @media (max-width: 768px) {
    &:nth-child(n+6) {
      display: none; 
    }
  }

  @media (max-width: 480px) {
    &:nth-child(n+4) {
      display: none;
    }

    width: 80px;
    height: 120px;
    margin: 10px;
  }
`;

// Componente principal del carrusel
const Carousel: React.FC = () => {

  return (
    <Container>
      <Title>MATCH<span> con tu skill ideal</span></Title>
      <Subtitle>“A VECES NI SABEMOS QUE LO<br></br>NECESITAMOS, HASTA QUE LO VEMOS.”</Subtitle>
      <CardsContainer>
        <Card angle={-10}imgsrc="https://images.pexels.com/photos/17612180/pexels-photo-17612180/free-photo-of-blanco-y-negro-mujer-cara-enfrentarse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={-5}imgsrc="https://images.pexels.com/photos/15169306/pexels-photo-15169306/free-photo-of-blanco-y-negro-mujer-joven-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={0} imgsrc="https://images.pexels.com/photos/13944737/pexels-photo-13944737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={0} imgsrc="https://images.pexels.com/photos/16557436/pexels-photo-16557436/free-photo-of-retrato-para-mi-prima.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={0} imgsrc="https://images.pexels.com/photos/24017554/pexels-photo-24017554/free-photo-of-cara-de-nino-en-blanco-y-negro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={5} imgsrc="https://images.pexels.com/photos/2558823/pexels-photo-2558823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        <Card angle={10}imgsrc="https://images.pexels.com/photos/8727669/pexels-photo-8727669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </CardsContainer>
    </Container>
  );
};

export default Carousel;
