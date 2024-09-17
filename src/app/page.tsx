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

// ---------------------- Estilos para el contenedor principal ---------------------
const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

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
  padding: 15px 70px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  margin-bottom: 50px;

  &:hover {
    background: ${({ theme }) => theme.colors.gradientPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
    transition: 0.5s ease-in-out;
  }
`;

// Estilos para el texto principal
const MainText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10vw;
  background: transparent;
  align-items: end;
  padding: 50px;
  padding-bottom: 5vw;
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
`;

// Estilos para el footer
const Footer = styled.footer`
  width: 100%;
  background-color: #121212;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #f39c12;
    }
  }

  .social-icons {
    display: flex;
    gap: 10px;

    span {
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 1px solid #f39c12;
  padding-top: 60px;
  width: 80%;
`;

//--------------------- el carrusel será la section 2 ---------------------

//--------------------- estilos para section 3 ---------------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color:${({ theme }) => theme.colors.bgPrimary};;
  padding: 10vw 100px;
  gap: 50px;
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  border-radius: 10px;
`;

const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  border-radius: 10px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.textOrange2};

  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;
const Section3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
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
  font-weight: normal;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1424px) {
    font-size: 2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  padding: 30px 100px 30px 50px;
  border-radius: 8px;
  text-align: start;
  align-items: start;
  justify-content: flex-start;
  transition: 1s;
  width:50%;

  &:hover{
    transition: 1s;
    transform: scale(1.05);
  }
`;

const ProfileBox2 = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.textOrange2};
  padding: 30px 100px 30px 50px;
  border-radius: 8px;
  text-align: start;
  align-items: start;
  justify-content: flex-start;
  transition: 1s;
  width: 50%;

  &:hover{
    transition: 1s;
    transform: scale(1.05);
  }

  @media (max-width: 1070px) {
    width: 100%;
  }
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Message2 = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.bgSecondary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color:${({ theme }) => theme.colors.bgSecondary};;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const TagButton = styled.button`
  background-color: transparent;
  padding: 10px 15px;
  border: 1px dashed ${({ theme }) => theme.colors.bgBanner};
  border-radius: 5px;
  font-size: 0.9rem;
  transition: 1s;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.bgBanner};
    border: none;
    transition: 1s;
  }
`;

//--------------------- estilos para section 4 ---------------------

const ContainerDiscover = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  padding: 10vw 50px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-left: 5px solid${({ theme }) => theme.colors.textYellow};;
  padding-left: 50px;
`;

const RightSection = styled.div`
  text-align: right;
  justify-content: center;
`;

const SwapText = styled.h1`
  font-size: clamp(2rem, 10vw, 12rem);
  background: ${({ theme }) => theme.colors.gradientText};
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  color: transparent;
  margin: 0;
`;

const SubText = styled.p`
  font-size: clamp(10px, 2vw, 2rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textYellow};
  margin: 10px 0 30px;
`;

const DiscoverButton = styled(Button)`
  display:flex;
  justify-content:center;
  align-items: center;
  margin-bottom: 10px;
  width: 20%;
`;

const RightTextLine1 = styled.div`
  padding-right: 50px;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 100;
`;

const RightTextLine2 = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.textSecondary};
  padding-right: 50px;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 400;
`;

const RightTextLine3 = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.textSecondary};
  padding-right: 50px;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 800;
`;

//--------------------- Componente principal de la página de inicio ---------------------

const Home = () => {
  const router = useRouter();
  const handleClick=() =>  {
    router.push('/auth')
  }
  return (
    <HomeContainer>
      <Logo>
        SkillSwap
      </Logo>
      <Button onClick={handleClick}>INICIAR SESIÓN</Button>
      <MainText>
        <Text>
          <h2>LOOKING FOR <br></br>SKILL</h2>
        </Text>
        <Text2>
          <h2 className="right-text">INTERCAMBIA <br></br> <span>experiencias</span>  & <br></br><span>destrezas</span> </h2>
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
              <TagButton>Design</TagButton>
              <TagButton>Adobe</TagButton>
              <TagButton>Branding</TagButton>
            </ButtonGroup>
          </ProfileBox>
        </Section1>
        <Section2>
          <BoxTitle>
            <Title>TODO SEGÚN TUS NECESIDADES E INTERESES</Title>
          </BoxTitle>
          <ProfileBox2>
          <Name>Jorge Torres</Name>
          <Message2>¡Claro! Y luego podrías ayudarme a mejorar en Diseño y Redes.</Message2>
            <ButtonGroup>
              <TagButton>Coding</TagButton>
              <TagButton>HTML</TagButton>
              <TagButton>JavaScript</TagButton>
            </ButtonGroup>
          </ProfileBox2>
        </Section2>
        <Section3>
          <ProfileBox>
            <Name>Sara Castillo</Name>
            <Message>Hey, soy creadora de contenido. Me gustaría aprender Coding contigo.</Message>
            <ButtonGroup>
              <TagButton>Entretenimiento</TagButton>
              <TagButton>Manejo Redes</TagButton>
            </ButtonGroup>
          </ProfileBox>
        </Section3>
      </Container>
      <ContainerDiscover>
        {/* Left Section */}
        <LeftSection>
          <div>
            <SwapText>Swap.</SwapText>
            <SubText><span>simple. dinámico. libre.</span></SubText>
          </div>
          <DiscoverButton>DESCUBRE</DiscoverButton>
        </LeftSection>
        {/* Right Section */}
        <RightSection>
          <RightTextLine1>PARA</RightTextLine1>
          <RightTextLine1>LOS</RightTextLine1>
          <RightTextLine2>QUE</RightTextLine2>
          <RightTextLine2>VIVEN</RightTextLine2>
          <RightTextLine3>DIGITAL</RightTextLine3>
          <RightTextLine3>MENTE</RightTextLine3>
        </RightSection>
      </ContainerDiscover>
    </HomeContainer>
  );
};

export default Home;
