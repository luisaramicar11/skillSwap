import React from "react";
import styled from "styled-components";

// Interfaz para los datos de la persona
// Interfaz para los props de la Card
interface CardProps {
  title: string;
  imageUrl: string;
  rating: number;
  skills: string[]; // Añadido para las habilidades
}

// Contenedor de la tarjeta
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 13rem;
  max-width: 500px;
  overflow: hidden;
`;

// Estilo para la columna de la imagen
const ImageColumn = styled.div`
  width: 40%;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
`;

// Estilo para la columna de la información
const InfoColumn = styled.div`
  width: 60%;
  height: auto;
  padding: 0;
  padding-left: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Estilo para el nombre
const Name = styled.h3`
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 4px;
`;

// Estilo para el contenedor de estrellas
const StarsContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 3px;
  padding-bottom: 0rem;
`;

const SkillButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPurple};
  border: 1px solid ${({ theme }) => theme.colors.textPurple};
  padding: 5px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Card: React.FC<CardProps> = ({ imageUrl, title, rating, skills }) => {
  // Función para renderizar las estrellas según la calificación
  return (
    <CardContainer>
      <ImageColumn>
        <img src={imageUrl} alt={title} />
      </ImageColumn>
      <InfoColumn>
        <Name>{title}</Name>
        <StarsContainer>
          {[...Array(5)].map((_, index) => (
            <Star key={index}>
              {index < rating ? "★" : "☆"}{" "}
              {/* Muestra estrellas llenas o vacías */}
            </Star>
          ))}
        </StarsContainer>
        <Skills>
          {skills.map((skill, index) => (
            <SkillButton key={index}>{skill}</SkillButton>
          ))}
        </Skills>
      </InfoColumn>
    </CardContainer>
  );
};

export default Card;
