"use client";
import styled from "styled-components";
import Carousel from "../components/ui/carousel/Carousel";
import { useRouter } from "next/navigation";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
});

// Estilos para el contenedor principal
const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

`;

// Estilos para la barra de navegación


// Estilos para el logo y el botón
const Logo = styled.h1`
  background: ${({ theme }) => theme.colors.gradientText};
  font-size: 12vw;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 

`;

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textOrange};
  border: ${({ theme }) => theme.colors.textOrange} 1px solid;
  padding: 15px 85px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s;
  margin-bottom: 50px;

  &:hover {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    color: #fff;
    border: none;
    transition: 0.5s;
  }
`;

// Estilos para el texto principal
const MainText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2.5vw;
  background: transparent;
  padding-bottom: 100px;
  align-items: end;
  padding: 50px;
  width: 100% !important;
  
`;

// Estilos para cada cuadro de texto
const Text = styled.div`
  display: flex;
  flex: 1;
  text-align: start;
  padding: 45px;
  background: transparent;
  background: ${({ theme }) => theme.colors.gradientText};
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;   
  width: 50%;
  border: 5px solid ${({ theme }) => theme.colors.textYellow};
  align-items: end;

  &:first-child {
    border-right: 1px solid transparent ;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &:last-child {
    border-left: px solid transparent;
  }

  & h2 {
    font-size: 4vw;
  }
`;
const Text2 = styled.div`
  flex: 1;
  text-align: center;
  padding: 50px;
  background: transparent;
  font-size: 27px;
  width: 50%;
  border: 5px solid ${({ theme }) => theme.colors.textSecondary};
  text-align: end;

  &:first-child {
    border-right: 1px solid transparent;
  }

  &:last-child {
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  & h2 {
    font-size: 4vw;
    color:${({ theme }) => theme.colors.textSecondary};
  }

  & span{
    font-family: ${baskervville.style.fontFamily};
    font-style: italic;
  }
`;


//3page

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  justify-content: flex-end;
  width: 100%;
  background-color:${({ theme }) => theme.colors.bgPrimary};;
  padding: 100px 50px 0px 100px;
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  
  
`;
const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.textOrange2};

  @media (max-width: 1070px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const Section3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 70px;
  border-radius: 10px;  
  
`;

const BoxTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: end;
  width: 25%;
  margin-right: 100px;

  @media (max-width: 1070px) {
    width: 100%;
    margin-right: 0;
    text-align: center;
    justify-content: center;
  }
`;
const Title = styled.h1`
  background: ${({ theme }) => theme.colors.gradientText};
  font-size: 2.5rem;
  font-weight: lighter;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1070px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 10px 100px 10px 50px;
  border-radius: 8px;
  text-align: start;
  align-items: start;
  justify-content: flex-start;
`;
const ProfileBox2 = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.textOrange2};
  padding: 10px 100px 10px 50px;
  border-radius: 8px;
  text-align: start;
  align-items: start;
  justify-content: flex-start;
  width: 50%;

  @media (max-width: 1070px) {
    width: 100%;
    padding: 10px;
  }
`;


const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Message1 = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.bgSecondary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color:${({ theme }) => theme.colors.bgSecondary};;


`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const TagButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

//page 4

const ContainerDiscover = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-family: Arial, sans-serif;
  padding-top: 200px;
`;


const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid${({ theme }) => theme.colors.textYellow};;
  padding-left: 50px;
`;

const RightSection = styled.div`
  text-align: right;
  justify-content: center;
  padding: 20px;
  margin-top: 100px;
`;

const SwapText = styled.h1`
  font-size: 12rem;
  background: ${({ theme }) => theme.colors.gradientText};
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  color: transparent;
  margin: 0;
`;

const SubText = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textOrange};
  margin: 10px 0 30px;
`;

const ButtonDiscover = styled.button`
  background: none;
  border: 2px solid #e45b00;
  color: #e45b00;
  padding: 10px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e45b00;
    color: #fff;
  }
`;

const DiscoverButton = styled(Button)`
  align-self: flex-start;
  align-items: end;
  margin-top: 200px;
`;

const RightTextLine1 = styled.div`
  padding-right: 50px;
  font-size: 7rem;
  font-weight: 0;
`;
const RightTextLine2 = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.textSecondary};
  padding-right: 50px;
  font-size: 7rem;
  font-weight: 600;
`;
const RightTextLine3 = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.textSecondary};
  padding-right: 50px;
  font-size: 7rem;
  font-weight: 800;
`;



// Componente principal de la página de inicio
const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth')
  }
  return (
    <HomeContainer>
      <Logo>
        SkillSwap
      </Logo>
      <Button onClick={handleClick}>Inicar Sesion</Button>
      <MainText>
        <Text>
          <h2>LOOKING FOR <br></br>SKILL</h2>
        </Text>
        <Text2>
          <h2 className="right-text">EXCHANGE YOUR <br></br> <span>expertise</span>  AND <br></br><span>knowledges</span> </h2>
        </Text2>
      </MainText>

      <Carousel>
      </Carousel>


      <Container>

        {/* Profile Section 1 */}
        <Section1>
          <ProfileBox>
            <Name>Diane Ressler</Name>
            <Message>¡Hola Jorge! ¿Podrías enseñarme un poco sobre CSS?</Message>
            <ButtonGroup>
              <TagButton>Digital Art</TagButton>
              <TagButton>Adobe</TagButton>
              <TagButton>Design</TagButton>
            </ButtonGroup>
          </ProfileBox>
        </Section1>

        <Section2>
          <BoxTitle>
            <Title>ALL ACCORDING TO YOUR NEEDS AND INTERESTS</Title>
          </BoxTitle>
          <ProfileBox2>
            <Name>Jorge Torres</Name>
            <Message1>¡Claro! Y luego podrías ayudarme a mejorar en Diseño y Redes.</Message1>
            <ButtonGroup>
              <TagButton>Coding</TagButton>
              <TagButton>HTML</TagButton>
              <TagButton>CSS</TagButton>
              <TagButton>JavaScript</TagButton>
            </ButtonGroup>
          </ProfileBox2>

        </Section2>

        <Section3>
          <ProfileBox>
            <Name>Sara Castillo</Name>
            <Message>Hey, soy creadora de contenido. Me gustaría aprender Coding contigo.</Message>
            <ButtonGroup>
              <TagButton>Entertainment</TagButton>
              <TagButton>Audiovisual</TagButton>
              <TagButton>Manejo Redes</TagButton>
              <TagButton>Edición</TagButton>
            </ButtonGroup>
          </ProfileBox>
        </Section3>
      </Container>


      <ContainerDiscover>
        {/* Left Section */}
        <LeftSection>
          <SwapText>Swap?</SwapText>
          <SubText>Yeah, why not.</SubText>
          <DiscoverButton>DISCOVER</DiscoverButton>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <RightTextLine1>FOR</RightTextLine1>
          <RightTextLine1>THOSE</RightTextLine1>
          <RightTextLine2>WHO</RightTextLine2>
          <RightTextLine2>LOVE</RightTextLine2>
          <RightTextLine3>DIGITAL</RightTextLine3>
          <RightTextLine3>MEDIA</RightTextLine3>
        </RightSection>
      </ContainerDiscover>
    </HomeContainer>
  );
};

export default Home;
