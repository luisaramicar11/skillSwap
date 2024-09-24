import styled from "styled-components";

export const DivMatch = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 54px 0;
  padding: 0;
  gap: 1rem;

  @media (min-width: 760px) {
    gap: 0;
  }

  @media (min-width: 1024px) {
    gap: 0;
    justify-content: space-around; // Mantiene la distribución uniforme
    padding: 20px; // Añade un poco de padding en los lados para evitar que los componentes toquen los bordes
  }

  // Estilos para el primer hijo
  > :first-child {
    flex: 1; // Hace que cada componente hijo ocupe el mismo espacio
    max-width: 33%; // Limita el ancho máximo de cada componente
    min-width: 200px; // Establece un ancho mínimo para evitar que los componentes se hagan demasiado pequeños
  }

  // Estilos para el primer hijo
  > :nth-child(2) {
    flex: 1; // Hace que cada componente hijo ocupe el mismo espacio
    max-width: 33%; // Limita el ancho máximo de cada componente
    min-width: 250px; // Establece un ancho mínimo para evitar que los componentes se hagan demasiado pequeños
  }

  // Estilos para el último hijo
  > :last-child {
    flex: 1; // Hace que cada componente hijo ocupe el mismo espacio
    max-width: 33%; // Limita el ancho máximo de cada componente
    min-width: 250px; // Establece un ancho mínimo para evitar que los componentes se hagan demasiado pequeños
  }
`;
