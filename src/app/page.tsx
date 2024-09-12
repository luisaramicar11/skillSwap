"use client";
import styled from "styled-components";


// Estilos para el contenedor principal
const HomeContainer = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

// Estilos para la barra de navegación


// Estilos para el logo y el botón
const Logo = styled.h1`
  background: ${({ theme }) => theme.colors.gradientText};
  font-size: 6rem;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;   
  span {
    color: #e74c3c;
    font-weight: normal;
  }

`;

const Button = styled.button`
  background: linear-gradient(90deg, #f39c12 0%, #e74c3c 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;
  margin-bottom: 50px;

  &:hover {
    background: linear-gradient(90deg, #e74c3c 0%, #f39c12 100%);
  }
`;

// Estilos para el texto principal
const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: transparent;
  
`;

// Estilos para cada cuadro de texto
const Text = styled.div`
  flex: 1;
  text-align: center;
  padding: 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.bgPrimary};
  font-size: 24px;
  width: 50%;
  border: 1px solid #e74c3c;

  &:first-child {
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  &:last-child {
    border-left: 1px solid transparent;
  }
`;
const Text2 = styled.div`
  flex: 1;
  text-align: center;
  padding: 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.bgPrimary};
  font-size: 24px;
  border: 1px solid #f39c12;
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:first-child {
    border-right: 1px solid transparent;
  }

  &:last-child {
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
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

    hr {
      width: 100%;
      height: 6px;
      border: 1px solid #f39c12;
      margin-top: 10px;
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
        SKILL<span>swap</span>
      </Logo>
      <Button>Iniciar Sesión</Button>
      <MainText>
        <Text>
          <h2>Looking for Skill</h2>
        </Text>
        <Text2>
          <h2 className="right-text">Para los amantes del entorno digital</h2>
        </Text2>
      </MainText>
      <Footer>
        <div>
          <a href="#">HOME</a>
          <a href="#">MATCH</a>
          <a href="#">DISCOVER</a>
          <a href="#">USER</a>
          <a href="#">LEGAL</a>
        </div>

        <Box>
          <p>© 2024 SkillSwap, Inc. Todos los derechos reservados.</p>

          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Box>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
