"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import LoginPage from "../../../components/auth/login/Login";
import RegisterPage from "../../../components/auth/register/Register";
import StyledNavLink from "@/src/components/ui/links/NavLinks";

const TextWrapper = styled.div`
  position: absolute;
  right: 31%;
  bottom:61%;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 100;
`;

const SwapText = styled(motion.h1)`
  font-size: 5rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Gradiente o color similar al de la imagen */
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
`;

const SkillSwapText = styled(motion.h1)`
  font-size: 5rem;
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
  width: 100; 
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
  border-top: 1px solid ${({ theme }) => theme.colors.textYellow};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textYellow};
  border-right: 1px solid ${({ theme }) => theme.colors.textYellow};
  background: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: none;
  border-bottom-right-radius:15px ;
  border-top-right-radius:15px ;
  padding: 50px;
  width: 100%;
  height: 500px;
  text-align: start;
  justify-content: center;
  align-items: center;  
  margin: 0;`

const H1 = styled.h1`
  display: flex;
  justify-content: end;
  align-items: end;
  height: 100%;
  padding-bottom: 20px;

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
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    width: 100% !important;
    height: 100% !important;
    color: ${({ theme }) => theme.colors.textOrange};
  }

  &:hover {
    background:${({ theme }) => theme.colors.gradientPrimary};
    border: none;

    & a:hover {
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
        transition={{ duration: 0.6 }}
        style={{
          width: "200%", // Aseguramos que los formularios ocupen el 100% cada uno
          display: "flex",
        }}
      >
        {/* Formulario de Iniciar Sesión */}
        <MotionDiv
          initial={false}
          animate={isSignUp ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ width: "50%" }}
        >
          <LoginPage />
        </MotionDiv>

        {/* Formulario de Registrarse */}
        <motion.div
          initial={false}
          animate={isSignUp ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "50%" }}
        >
          <RegisterPage />
        </motion.div>
      </motion.div>

      {/* Overlay Panel */}
      <OverlayContainer>
        <TextWrapper>
          <SwapText
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            SWAP
          </SwapText>
          <SwapText
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            ← SWAP
          </SwapText>
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
              <>
              <H1>
                <SwitchButton
                  onClick={() => setIsSignUp(false)}
                >
                  <StyledNavLink href="/auth" label="INICIAR SESIÓN"></StyledNavLink>
                </SwitchButton>
              </H1>
              </>
            ) : (
              <>
                <H1>
                  <SwitchButton onClick={() => setIsSignUp(true)}>
                    <StyledNavLink href="/auth" label="REGISTRO"></StyledNavLink>
                  </SwitchButton>
                </H1>
              </>
            )}
          </Div>

        </OverlayPanel>
      </OverlayContainer>
    </Container>
  );
}
