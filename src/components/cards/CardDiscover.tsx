import React from 'react';
import styled from 'styled-components';

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
  height: 20rem;
  max-width: 500px;
  overflow: hidden;
`;

// Estilo para la columna de la imagen
const ImageColumn = styled.div`
  width: 60%;
 
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }
`;

// Estilo para la columna de la información
const InfoColumn = styled.div`
  width: 40%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Estilo para el nombre
const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

// Estilo para el contenedor de estrellas
const StarsContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

// Estilo para las habilidades
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

// Estilo para cada habilidad
const Skill = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 0.9rem;
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
              {index < rating ? '★' : '☆'} {/* Muestra estrellas llenas o vacías */}
            </Star>
          ))}
        </StarsContainer>
        <Skills>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
      </InfoColumn>
    </CardContainer>
  );
};

export default Card;
