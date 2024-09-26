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
}

// Contenedor de la tarjeta
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 16rem;
  max-height: 19rem;
  max-width: 500px;
  overflow: hidden;
  gap: 1rem;
`;

// Estilo para la columna de la imagen
const ImageColumn = styled.div`
  width: 40%;
  min-height: 16rem;
  max-height: 19rem;
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

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;


// Estilo para el nombre
const ImageCard = styled.div<{ urlImage?: string }>`
  background-image: url(${(props) => props.urlImage || 'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg'});
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

// Estilo para el contenedor de estrellas
const StarsContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
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
  padding-bottom: 0rem;
`;

const Card: React.FC<IDiscoverCardProps> = ({
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
        <ImageCard urlImage={urlImage} />
      </ImageColumn>
      <InfoColumn>
        <Name>{fullName}</Name>
        <p>{jobTitle}</p>
        <StarsContainer>
          {[...Array(5)].map((_, index) => {
            const rating = Math.floor(qualification); // Redondea hacia abajo
            return (
              <Star key={index}>
                {index < rating ? "★" : "☆"}{" "}
                {/* Muestra estrellas llenas o vacías */}
              </Star>
            );
          })}
        </StarsContainer>

        <Skills>
          <SkillTagTiny skillsArray={abilities} />
        </Skills>
      </InfoColumn>
    </CardContainer>
  );
};

export default Card;
