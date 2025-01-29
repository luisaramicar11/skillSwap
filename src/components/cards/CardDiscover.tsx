import React from "react";
import styled from "styled-components";
import SkillTagTiny from "../ui/skillTag/skillTagTiny";

// Interfaz para los props de la Card
interface IDiscoverCardProps {
  id: number;
  fullName: string;
  jobTitle: string;
  qualification: number;
  abilities: string[];
  urlImage: string;
  createdAt?: string;
}

// Contenedor de la tarjeta
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 16rem;
  max-width: 500px;
  overflow: hidden;
  gap: 1rem;
`;

// Estilo para la columna de la imagen
const ImageColumn = styled.div`
  min-width: 40%;
  min-height: 14rem;
  max-height: 16rem;
`;

// Estilo para la columna de la información
const InfoColumn = styled.div`
  width: 50%;
  height: auto;
  padding: 0;
  padding-left: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


// Estilo para el nombre
const ImageCard = styled.article<{ urlImage?: string }>`
  background-image: url(${(props) => props.urlImage || 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.bgBanner};
`;

// Estilo para el nombre
const Name = styled.h3`
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 4px;
`;

const JobTitle = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Estilo para el contenedor de estrellas
const StarsContainer = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textYellow};;
  font-size: 16px;
  margin: 0 2px;
  font-style: normal;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 3px;
  padding-bottom: 0 !important;
`;

const Card: React.FC<IDiscoverCardProps> = ({
  fullName,
  jobTitle,
  qualification,
  abilities,
  urlImage,
  createdAt
}) => {
  // Función para renderizar las estrellas según la calificación
  return (
    <CardContainer>
      <ImageColumn>
        <ImageCard urlImage={urlImage} />
      </ImageColumn>
      <InfoColumn>
        <Name>{fullName}</Name>
        <JobTitle>{createdAt ? `${createdAt.slice(0,7)} · ${jobTitle}` : jobTitle}</JobTitle>
        <StarsContainer>
          {qualification !== -1 ?
            [...Array(5)].map((_, index) => {
              const rating = Math.floor(qualification);
              return (
                <Star key={index}>
                  {index < rating ? "★" : "☆"}{" "}
                  {/* Muestra estrellas llenas o vacías */}
                </Star>
              );
            }) :
            <></>}
        </StarsContainer>

        <Skills>
          <SkillTagTiny skillsArray={abilities.slice(0, 3)} />
        </Skills>
      </InfoColumn>
    </CardContainer>
  );
};

export default Card;
