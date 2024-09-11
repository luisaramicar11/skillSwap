'use client';
import { useState } from 'react';
import { color, motion } from 'framer-motion';
import styled from 'styled-components';
import LoginPage from '../../../components/login/Login';
import RegisterPage from '../../../components/Register';
import { FormWrapper } from '@/src/components/login/LoginStyling'; 

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
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.textimary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
`;

// Panel dentro de la capa superpuesta
const OverlayPanel = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border:  1px solid ${({ theme }) => theme.colors.textPrimary};
  padding: 40px;
  border-left: none;
  width: 500px;
  /* height: 443px; */
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: none;
  border-bottom-right-radius:15px ;
  border-top-right-radius:15px ;
  
  
  
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
                <SwitchButton style={{ background:"red" }}onClick={() => setIsSignUp(false)}>Sign In</SwitchButton>
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




