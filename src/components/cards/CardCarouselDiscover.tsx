import React from "react";
import styled from "styled-components";

// Interfaz para los props de la Card
interface CardProps {
  title: string;
  urlImage: string;
  rating: number; // Añadido para las estrellas
}

// Estilos para el Card
const CardContainer = styled.div`
  margin-top: 2rem;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background: #fff; /* Fondo blanco para la tarjeta */
`;

const CardImage = styled.img`
  width: 10rem; /* Tamaño fijo para una imagen circular */
  height: 10rem; /* Debe ser igual al ancho para mantener la forma circular */
  object-fit: cover; /* Asegura que la imagen cubra el área del contenedor */
  border-radius: 50%; /* Redondea la imagen en forma de círculo */
  display: block; /* Asegura que la imagen se comporte como un bloque */
  margin: 0 auto; /* Centra la imagen dentro del contenedor */
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center; /* Centra el texto */
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0 auto;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

const Card: React.FC<CardProps> = ({ title, urlImage, rating }) => {
  return (
    <CardContainer>
      <CardImage src={urlImage} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <StarsContainer>
          {[...Array(5)].map((_, index) => (
            <Star key={index}>
              {index < rating ? "★" : "☆"}{" "}
              {/* Muestra estrellas llenas o vacías */}
            </Star>
          ))}
        </StarsContainer>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
