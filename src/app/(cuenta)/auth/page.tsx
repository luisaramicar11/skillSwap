"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import LoginPage from "../../../components/auth/login/Login";
import RegisterPage from "../../../components/auth/register/Register";
import StyledNavLink from "@/src/components/ui/links/NavLinks";

const TextWrapper = styled.div`
  width: max-content;
  position: absolute;
  right: 15vw;
  bottom: 55%;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 100;
`;

const SkillSwapText = styled(motion.h1)`
  font-size: clamp(2.8rem,4.2vw,6rem);
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
`;

// Contenedor principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 500px;
  width: 100%;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Contenedor de la capa superpuesta
const OverlayContainer = styled.div`
  position: absolute;
  left: 50%;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// Panel dentro de la capa superpuesta
const OverlayPanel = styled.div`
  border: none;
  width: 60%;  
  justify-content: start;
  align-items: center;
`;
const Div = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderAuthRight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderAuthRight};
  border-right: 1px solid ${({ theme }) => theme.colors.borderAuthRight};
  background: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: none;
  border-bottom-right-radius:15px ;
  border-top-right-radius:15px ;
  padding: 50px;
  width: 100%;
  height: 450px;
  text-align: start;
  justify-content: center;
  align-items: center;  
  margin: 0;`

const H1 = styled.h1`
  display: flex;
  justify-content: end;
  align-items: end;
  height: 100%;
  margin: 0;

  h1{
    font-size: 2rem;
  }

  p{
    font-size :1rem;
    color: black;
  }
 `
// Botones para alternar entre vistas
const SwitchButton = styled.button`
  padding: 0 !important;
  border-radius: 20px;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  background-color: transparent; 
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    width: 100% !important;
    height: 100% !important;
    transition: 0.6s ease-in-out;
    color: ${({ theme }) => theme.colors.textOrange};
  }

  &:hover {
    background:${({ theme }) => theme.colors.gradientPrimary};
    border: none;

    & a:hover {
      transition: 0.6s ease-in-out;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const P = styled.p`
  color:${({ theme }) => theme.colors.textTertiary};
  font-weight: bold;
  font-size: 1rem;
`;

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container>
      {/* Framer Motion wrapper for form animations */}
      <motion.div
        initial={false}
        animate={isSignUp ? { x: "-50%" } : { x: "0%" }}
        transition={{ duration: 1 }}
        style={{
          width: "200%", 
          display: "flex"
        }}
      >
        {/* Formulario de Iniciar Sesión */}
        <MotionDiv
          initial={false}
          animate={isSignUp ? { x:"200%" } : {x: "0%" }}
          transition={{ duration: 1 }}
          style={{ width: "50%" }}
        >
          <LoginPage />
        </MotionDiv>

        {/* Formulario de Registrarse */}
        <motion.div
          initial={false}
          animate={isSignUp ? { x: "0%" } : { x: "200%" }}
          transition={{ duration: 1 }}
          style={{ width: "50%" }}
        >
          <RegisterPage />
        </motion.div>
      </motion.div>

      {/* Overlay Panel */}
      <OverlayContainer>
        <TextWrapper>
          <SkillSwapText
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            SWAP
          </SkillSwapText>
          <SkillSwapText
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            ← SWAP
          </SkillSwapText>
          <SkillSwapText
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            SKILL SWAP
          </SkillSwapText>
        </TextWrapper>
        <OverlayPanel>
          <Div>
            {isSignUp ? (
              <H1>
                <SwitchButton
                  onClick={() => setIsSignUp(false)}
                >
                  <StyledNavLink href="/auth" label="INICIAR SESIÓN"></StyledNavLink>
                </SwitchButton>
              </H1>
            ) : (
                <H1>
                  <SwitchButton onClick={() => setIsSignUp(true)}>
                    <StyledNavLink href="/auth" label="REGISTRO"></StyledNavLink>
                  </SwitchButton>
                </H1>
            )}
          </Div>
        </OverlayPanel>
      </OverlayContainer>
    </Container>
  );
}