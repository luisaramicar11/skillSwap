import styled from 'styled-components';

// Estilos para el contenedor general de la tarjeta
const CardContainer = styled.div`
  width: 20%;
  height: 95%;
  margin: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  border-radius: 2rem;
  overflow-x: hidden;

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
  padding: 0.5rem;
  font-size: 1.8rem;
  color: orange;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

// Sección de conexiones
const Connections = styled.div`
  padding: 1rem;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color:${({ theme }) => theme.colors.textSecondary};

  div {
    font-size:1rem
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 15px;
  font-size: 0.9rem;
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
padding: 1rem;
  margin: 15px 0;
  border-top: 1px solid #ddd;
  padding-top: 15px;
`;

const SkillsSection = styled.div`
color:${({ theme }) => theme.colors.textSecondary};
font-weight: bold;
padding: 1rem;
  margin-top: 10px;
`;

const SkillTag = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 5px 10px;
  border-radius: 20px;
  color: #6c63ff;
  border: 1px solid #6c63ff;
  font-size: 0.8rem;
`;

const SubTitle = styled.h4`
font-size: 1.8rem;
  color:${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  margin-bottom: 10px;
  font-style: italic;
`;

const DivRating = styled.div`
  display: flex;
 align-items: center;
 gap: 2rem;
`;

const P = styled.p`
color:${({ theme }) => theme.colors.textSecondary};
padding: 1rem;
font-size: 1rem;
font-weight: 300;
`;

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
      <Title>Match</Title>
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
    </CardContainer>
  );
};

export default MatchCard;
