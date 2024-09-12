"use client";
import { useState } from "react";
import { color, motion } from "framer-motion";
import styled from "styled-components";
import LoginPage from "../../../components/login/Login";
import RegisterPage from "../../../components/register/Register";
import { FormWrapper } from "../../../components/login/LoginStyling";

const TextWrapper = styled.div`
  position: absolute;
  right: 18%;
  top: 2%;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 100;
`;

const SwapText = styled(motion.h1)`
  font-size: 6rem;
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
  font-size: 6rem;
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
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

// Contenedor de la capa superpuesta
const OverlayContainer = styled.div`
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.textimary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// Panel dentro de la capa superpuesta
const OverlayPanel = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  padding: 40px;
  border-left: none;
  width: 500px;
  /* height: 443px; */
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: none;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`;
const H1 = styled.h1`
  margin-top: 40%;

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
  padding: 12px 45px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: transparent;
  color: #f10909;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10%;
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
          {isSignUp ? (
            <>
              <H1>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us, please login with your personal info
                </p>
              </H1>
              <SwitchButton
                style={{ background: "red" }}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </SwitchButton>
            </>
          ) : (
            <>
              <H1>
                <h1>Hello, Friend!</h1>
                <p>Enter your details and start your journey with us</p>
                <SwitchButton onClick={() => setIsSignUp(true)}>
                  Sign Up
                </SwitchButton>
              </H1>
            </>
          )}
        </OverlayPanel>
      </OverlayContainer>
    </Container>
  );
}
