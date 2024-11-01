import styled from "styled-components";
import SkillTag from "../ui/skillTag/skillTag";
import ScrollContainer from "../scroll/Scroll";

// Estilos para el contenedor general de la tarjeta
const CardContainer = styled.div`
  width: 100%;
  height: 27rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding: 0.8rem 0;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  border-radius: 0.5rem;
  overflow: hidden;

  > * {
    width: 100% !important;
  }
`;

const DivCardContent = styled.div`
  height: 100%;
  overflow-y: auto;
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
  display: flex;
  justify-content: start;
  gap: 2rem;
  text-align: center;
  padding-bottom: 1rem;

  & h1 {
    width: 70px;
    filter: grayscale() brightness(0.95);
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
  }

  & p {
    text-align: center;
    width: 100%;
    font-size: 1rem !important;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const DivConnection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    width: 100%;
    font-size: 0.7rem;
  }

  :last-child {
    font-style: normal;
    font-weight: bold;
    text-align: start;
    width: 100%;
    font-size: 0.7rem;
  }
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: start;
  gap: 2rem;
  text-align: center;
  padding-bottom: 1rem;

  & h1 {
    width: 70px;
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  & p {
    text-align: center;
    width: 100%;
    font-size: 1rem !important;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    width: 100%;
    font-size: 0.7rem;
  }
`;

const RatingStars = styled.div`
  opacity: 0.7;
  gap: 5px;
  display: flex;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 16px;
  font-style: normal;
`;

const Description = styled.div`
  text-align: end;
  padding: 0;
  padding-bottom: 1rem;
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
  margin-top: 1rem;
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
      <ScrollContainer overflowY="auto" overflowX='auto' marginY="5px" style={{ maxHeight: '100%' }}>
        <DivCardContent>
          <Connections>
            <h1>🌐</h1>
            <DivConnection>
              <p>Conexiones</p>
              <p># {countMatches}</p>
            </DivConnection>
          </Connections>

          <RatingSection>
            <h1>{rating}</h1>
            <DivRate>
              <p>Calificación</p>
              <RatingStars>
                {[...Array(5)].map((_, index) => {
                  const stars = Math.floor(rating);
                  return (
                    <Star key={index}>
                      {index < stars ? "★" : "☆"}
                    </Star>
                  );
                })}
              </RatingStars>
            </DivRate>
          </RatingSection>

          <Description>
            <SubTitle>Descripción</SubTitle>
            <P>{description}</P>
          </Description>

          <SkillsSection>
            <SubTitle>Skills</SubTitle>
            <SkillTag skillsArray={skills} />
          </SkillsSection>
        </DivCardContent>
      </ScrollContainer>
    </CardContainer>
  );
};

export default MatchCard;
