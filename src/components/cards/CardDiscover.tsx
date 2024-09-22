import React from "react";
import styled from "styled-components";
import SkillTag from "../ui/skillTag/skillTag";


// Interfaz para los props de la Card
interface CardProps {
  id: number;
  fullName: string;
  jobTitle: string;
  qualification: number;
  abilities: string[];
  urlImage: string;
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

const Card: React.FC<CardProps> = ({ 
  id, 
  fullName,
  jobTitle,
  qualification,
  abilities,
  urlImage
}) => {
  // Función para renderizar las estrellas según la calificación
  return (
    <CardContainer>
      <ImageColumn>
        <img src={urlImage} alt={fullName} />
      </ImageColumn>
      <InfoColumn>
        <Name>{fullName}</Name>
        <p>{jobTitle}</p>
        <StarsContainer>
          {[...Array(5)].map((_, index) => (
            <Star key={index}>
              {index < qualification ? "★" : "☆"}{" "}
              {/* Muestra estrellas llenas o vacías */}
            </Star>
          ))}
        </StarsContainer>
        <Skills>
          <SkillTag skillsArray={abilities} />
        </Skills>
      </InfoColumn>
    </CardContainer>
  );
};

export default Card;
