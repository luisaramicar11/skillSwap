import React from 'react';
import styled from 'styled-components';

interface CardProps {
  angle: number; // Definimos la prop 'angle' como número
  imgsrc: string; // URL de la imagen para la tarjeta
}

// Contenedor principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({ theme }) => theme.colors.textSecondary};
  flex-direction: column;
  padding: 150px 0;
  margin: 0; 
  width: 100vw;
  height: auto;
`;

// Título principal
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
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
  color: ${({ theme }) => theme.colors.textPrimary};
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
  
  background-color: #c4c4c4;
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-image: url(${props => props.imgsrc});
  background-size: cover;
  background-position: center;
  width: 150px; // Valor predeterminado
  height: 200px; // Valor predeterminado
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
      <Title>MATCH<span> con tu skill ideal</span></Title>
      <Subtitle>“A VECES NI SABEMOS QUE LO<br></br>NECESITAMOS, HASTA QUE LO VEMOS.”</Subtitle>
      <CardsContainer>
        <Card angle={-10}imgsrc="https://img.freepik.com/fotos-premium/concepto-personas-felicidad-adolescente-sonriente-sobre-fondo-blanco_380164-63917.jpg"/>
        <Card angle={-5}imgsrc="https://st.depositphotos.com/1024381/2148/i/450/depositphotos_21484663-stock-photo-happy-teen-girl-beautiful-young.jpg"/>
        <Card angle={0} imgsrc="https://img.freepik.com/foto-gratis/hombre-sonriendo-brazos-cruzados_1149-1711.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid"/>
        <Card angle={0} imgsrc="https://media.istockphoto.com/id/494711330/es/foto/hombre-joven-latina-en-un-estudio.jpg?s=612x612&w=0&k=20&c=Ye9u097upgUhpcVttIB5i39Dj8XOPheoL4HB6SHC9iA="/>
        <Card angle={0} imgsrc="https://st.depositphotos.com/1003989/3636/i/450/depositphotos_36365377-stock-photo-woman-with-phone.jpg"/>
        <Card angle={5} imgsrc="https://st.depositphotos.com/1269204/1219/i/950/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"/>
        <Card angle={10}imgsrc="https://media.istockphoto.com/id/1348560795/es/foto/mujer-de-negocios-segura-de-s%C3%AD-misma-con-anteojos-sonriendo-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=yX6ro57Rg3IxvS-GFi0KtuRPm1RW8qndB5dc_tZbUb4="/>
      </CardsContainer>
    </Container>
  );
};

export default Carousel;
