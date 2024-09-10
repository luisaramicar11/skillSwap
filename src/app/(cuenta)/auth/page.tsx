'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import LoginPage from '../../../components/Login';
import RegisterPage from '../../../components/Register';

// Contenedor principal
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 20px;
`;

// Contenedor de la capa superpuesta
const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

// Panel dentro de la capa superpuesta
const OverlayPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 40px;
  text-align: center;
`;

// Botones para alternar entre vistas
const SwitchButton = styled.button`
  padding: 12px 45px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
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
        <OverlayPanel>
          {isSignUp ? (
            <>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <SwitchButton onClick={() => setIsSignUp(false)}>Sign In</SwitchButton>
            </>
          ) : (
            <>
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <SwitchButton onClick={() => setIsSignUp(true)}>Sign Up</SwitchButton>
            </>
          )}
        </OverlayPanel>
      </OverlayContainer>
    </Container>
  );
}




