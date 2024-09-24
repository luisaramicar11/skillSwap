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
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const CardContent = styled.div`
  padding: 10px;
  text-align: center;
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
