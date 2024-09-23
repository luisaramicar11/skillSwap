"use client"
import React from "react";
import styled from "styled-components";

// Interfaz para los props de la Card
interface ICardCarouselProps {
  name: string;
  urlImage: string;
  category: string;
}

// Estilos para el Card
const CardContainer = styled.div`
  padding-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  max-width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const CardImage = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.bgBanner};
  width: 5rem; /* Tamaño fijo para una imagen circular */
  height: 5rem; /* Debe ser igual al ancho para mantener la forma circular */
  object-fit: cover; /* Asegura que la imagen cubra el área del contenedor */
  border-radius: 50%; /* Redondea la imagen en forma de círculo */
  display: block; /* Asegura que la imagen se comporte como un bloque */
  margin: 0 auto; /* Centra la imagen dentro del contenedor */
`;

const CardContent = styled.div`
  padding: 10px;
  text-align: center; /* Centra el texto */
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  width: max-content;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  padding: 0;
`;

const CategoryContainer = styled.p`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Card: React.FC<ICardCarouselProps> = ({ name, urlImage, category }) => {
  return (
    <CardContainer>
      <CardImage src={urlImage} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CategoryContainer>
          {category}
        </CategoryContainer>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
