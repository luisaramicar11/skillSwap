"use client";
import styled from "styled-components";
import Carousel from "../components/ui/carousel/Carousel";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
});

// Estilos para el contenedor principal
const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors. bgPrimary};
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
  margin-top: 15vw;
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
  padding: 50px;
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
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &:last-child {
    border-left: 1px solid transparent;
  }

  & h2 {
    font-size: 3vw;
  }
`;
const Text2 = styled.div`
  flex: 1;
  text-align: center;
  padding: 50px;
  background: transparent;
  font-size: 24px;
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
    font-size: 3vw;
    color:${({ theme }) => theme.colors.textSecondary};
  }

  & span{
    font-family: ${baskervville.style.fontFamily};
    font-style: italic;
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


// Componente principal de la página de inicio
const Home = () => {
  return (
    <HomeContainer>
      <Logo>
        SkillSwap
      </Logo>
      <Button>LOG IN</Button>
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
      
    </HomeContainer>
  );
};

export default Home;
