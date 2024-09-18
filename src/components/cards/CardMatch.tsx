import styled from "styled-components";
import SkillTag from "../ui/skillTag/skillTag";

// Estilos para el contenedor general de la tarjeta
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 1rem 2rem 1rem;

  @media (max-width: 1024px) {
    width: 80%; /* Ocupa el 80% en pantallas pequeñas */
    height: auto;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    width: 20%; /* Mantén el tamaño fijo en pantallas grandes */
  }

  @media (max-width: 797px) {
    margin: 0rem;
    margin-bottom: 2rem;
    width: 20%; /* Mantén el tamaño fijo en pantallas grandes */
  }
`;

const DivCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 200px; /* Mantén el tamaño fijo en pantallas grandes */
  }

  @media (min-width: 1440px) {
    width: 300px; /* Mantén el tamaño fijo en pantallas grandes */
  }
`;

// Estilo para el título
const Title = styled.h3`
  display: flex;
  text-align: start;
  font-size: 1.3rem;
  color: orange;
  padding: 0;
  margin: 0.5rem;
  padding-left: 0.5rem;
`;

// Sección de conexiones
const Connections = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const RatingStars = styled.div`
  color: #f5c518;
  font-size: 1.2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const SkillsSection = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
`;

const SubTitle = styled.h4`
  font-size: 1.1rem; // Reducido el tamaño de la fuente
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  padding-left: 1rem;
  margin-bottom: 0.3rem; // Añadido un pequeño margen inferior
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem; // Reducido el tamaño de la fuente
  font-weight: 300;
  font-style: italic;
  padding: 0;
  padding-left: 1rem;
  margin: 0;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};

  @media (min-width: 1440px) {
    & div{
      width: 300px !important; /* Mantén el tamaño fijo en pantallas grandes */
    }
  }

  @media (min-width: 320px) {
    & div{
      width: 200px; /* Mantén el tamaño fijo en pantallas grandes */
    }
  }
`;

const DivConnections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
`;

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Hr = styled.hr`
  width: 80%;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;
interface CardProps {
  description: string;
  rating: number;
  skills: string[]; // Añadido para las habilidades
}
const MatchCard: React.FC<CardProps> = ({ description, skills, rating }) => {
  return (
    <CardContainer>
      <DivTitle>
        <div>
          <Title>Match</Title>
        </div>
      </DivTitle>

      <DivCardContent>
        <DivConnections>
          <Connections>
            <div>Connections</div>
            <div>🔗 30</div>
          </Connections>

          <RatingSection>
            <div>Rating</div>
            <DivRating>
              <div>{rating}</div>
              <RatingStars>
                {[...Array(5)].map((_, index) => (
                  <Star key={index}>
                    {index < rating ? "★" : "☆"}{" "}
                    {/* Muestra estrellas llenas o vacías */}
                  </Star>
                ))}
              </RatingStars>
            </DivRating>
          </RatingSection>
          <Hr />
        </DivConnections>

        <DivDescription>
          <Description>
            <SubTitle>Description</SubTitle>
            <P>{description}</P>
          </Description>

          <SkillsSection>
            <SubTitle>Skills</SubTitle>
            <P>Here you will see my skills!</P>
            <SkillTag skillsArray={skills} />
          </SkillsSection>
        </DivDescription>
      </DivCardContent>
    </CardContainer>
  );
};

export default MatchCard;
