import styled from 'styled-components';

export const DivMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
  gap: 1rem; // Añadimos un pequeño espacio entre los componentes

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between; // Distribuye el espacio uniformemente
    gap: 0.5rem; // Reduce el espacio entre componentes en pantallas más grandes
  }

  @media (min-width: 1024px) {
    justify-content: space-between; // Mantiene la distribución uniforme
    padding: 0 2rem; // Añade un poco de padding en los lados para evitar que los componentes toquen los bordes
  }

  > * {
    flex: 1; // Hace que cada componente hijo ocupe el mismo espacio
    max-width: 33%; // Limita el ancho máximo de cada componente
    min-width: 250px; // Establece un ancho mínimo para evitar que los componentes se hagan demasiado pequeños
  }
`;