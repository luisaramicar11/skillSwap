'use client';
import styled, { keyframes } from 'styled-components';

// Animación para mover el texto de lado a lado de manera infinita
const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Estilos para la pantalla completa
const FullScreenLoader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;

  & section{
    width: 100vw;
  }

  & article{
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;

// Contenedor del texto que se desliza
const MovingText = styled.div`
  white-space: nowrap;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
  gap: 10rem;
  position: relative;
  width: 100%;
  animation: ${slideAnimation} 20s linear infinite;

  & p{
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

// Estilos para el mensaje adicional
const P = styled.p`
  color: black;
  font-weight: 200;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
`;

// Componente principal de la pantalla de "Página no encontrada"
const NotFoundScreen = () => {
  return (
    <FullScreenLoader>
      <div>
        <article>
          <MovingText><p>★</p><p>HTTP 404</p><p>★</p><p>HTTP 404</p><p>★</p><p>HTTP 404</p><p>★</p><p>HTTP 404</p><p>★</p><p>HTTP 404</p><p>★</p></MovingText>
        </article>

      </div>
      <section>
        <P>¡Oops! Parece que no se pudo encontrar el recurso solicitado.</P>
      </section>
    </FullScreenLoader>
  );
};

export default NotFoundScreen;
