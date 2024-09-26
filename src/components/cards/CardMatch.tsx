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
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 1rem 2rem 1rem;

  > * {
    width: 100% !important;
  }
`;

const DivCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 60% !important;
  }

  > :nth-child(2){
    border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary} !important;
  }

  > :nth-child(3){
    border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary} !important;
  }
`;

const Connections = styled.div`
  text-align: end;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: end;

    & p{ 
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

const RatingSection = styled.div`
  padding: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  text-align: start;
  flex-direction: column;
  font-size: 0.6rem !important;
  color: ${({ theme }) => theme.colors.textSecondary};

  article{
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  div {
    font-size: 1rem;
    display: flex;
    gap: 0.3rem;
  }
`;

const RatingStars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.2rem;

  & span {
      font-style: normal;
    }
`;

const Description = styled.div`
  text-align: end;
  padding: 0;
  margin-bottom: 0.5rem;
  padding-bottom: 2rem;
`;

const SkillsSection = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
`;

const SubTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
  padding-left: 1rem;
  margin-bottom: 0.3rem;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 300;
  font-style: italic;
  padding: 0;
  padding-left: 1rem;
  margin: 0;
`;

interface CardProps {
  description: string;
  rating: number;
  countMatches: number;
  skills: string[];
}

const MatchCard: React.FC<CardProps> = ({ description, skills, rating, countMatches }) => {
  return (
    <CardContainer>
      <DivCardContent>
        <Connections>
          <div>Conexiones</div>
          <div><p>↺</p>{countMatches}</div>
        </Connections>

        <RatingSection>
          <div>Calificación</div>
          <article>
            <div>{rating}</div>
            <RatingStars>
              {[...Array(5)].map((_, index) => {
                const ratingStars = Math.floor(rating); // Redondea hacia abajo
                return (
                  <span key={index}>
                    {index < ratingStars ? "★" : "☆"}
                  </span>
                );
              })}
            </RatingStars>

          </article>
        </RatingSection>

        <Description>
          <SubTitle>Descripción</SubTitle>
          <P><strong>+</strong> {description}</P>
        </Description>

        <SkillsSection>
          <SubTitle>Skills</SubTitle>
          <SkillTag skillsArray={skills} />
        </SkillsSection>
      </DivCardContent>
    </CardContainer>
  );
};

export default MatchCard;
