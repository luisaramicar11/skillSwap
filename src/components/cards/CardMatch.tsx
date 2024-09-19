import styled from "styled-components";
import SkillTag from "../ui/skillTag/skillTag";

// Estilos para el contenedor general de la tarjeta
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 1rem 2rem 1rem;

  @media (min-width: 565px) and (max-width: 1024px) {
    margin-top: 2.5rem;
  }

  @media (min-width: 548px) and (max-width: 564px) {
    margin: 0 !important;
    margin-right: 1rem !important;
    margin-top: 1rem !important;
  }

  @media (max-width: 547.5px) {
    margin: 0 !important;
    margin-bottom: 2rem !important;
    margin-right: 1rem !important;
    width: 100%; /* Ancho completo en pantallas pequeñas */
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

// Sección de conexiones
const Connections = styled.div`
  text-align: end;
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
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;
  padding: 0;
  margin-bottom: 1rem;
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
  color: ${({ theme }) => theme.colors.textYellow};;
  font-size: 20px;
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
