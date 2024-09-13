import styled from 'styled-components';

// Estilos para el contenedor general de la tarjeta
const CardContainer = styled.div`
  width: 25%;
  height: 95%;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 80%; /* Ocupa el 80% en pantallas pequeñas */
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 20%; /* Mantén el tamaño fijo en pantallas grandes */
  }
`;

// Estilo para el título
const Title = styled.h3`
  font-size: 1.3rem;
  color: orange;
  padding: 0;
  margin:0.5rem;
  padding-left: 1rem;
`;

// Sección de conexiones
const Connections = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color:${({ theme }) => theme.colors.textSecondary};

  div {
    font-size:1rem
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color:${({ theme }) => theme.colors.textSecondary};

  div {
    font-size:1rem
  }
`;

const RatingStars = styled.div`
  color: #f5c518;
  font-size: 1.2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // Reducido el espacio entre elementos
  justify-content: start;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const SkillsSection = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
`;

const SkillTag = styled.span`
  display: inline-block;
  width: 80%;
  text-align: center;
  margin: 5px 5px 0 0;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.textPurple};
  border: 1px solid ${({ theme }) => theme.colors.textPurple};
  font-size: 0.7rem; // Reducido el tamaño de la fuente
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
 gap: 2rem;
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

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  padding-left: 1rem; // Añadido padding izquierdo para alinear con el texto
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

const DivTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap:0;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};`

const DivConnections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap:0;

`;  

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // Reducido el espacio entre secciones
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  margin-left: 3rem;
  margin-right:3rem;
`;
interface CardProps {
    description: string;
    rating: number;
    skills: string[]; // Añadido para las habilidades
  }
const MatchCard: React.FC<CardProps> = ({
    description,
    skills,
    rating
  }) => {
  return (
    <CardContainer>
      <DivTitle>
      <Title>Match</Title>
      </DivTitle>
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
              {index < rating ? '★' : '☆'} {/* Muestra estrellas llenas o vacías */}
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
        <Skills>
            {skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Skills>
      </SkillsSection>
      </DivDescription>
      
    </CardContainer>
  );
};

export default MatchCard;
