import styled from 'styled-components';

export const DivMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  padding: 1rem;
  margin: 0.5rem;
  flex-wrap: wrap; /* Hace que los elementos se apilen en pantallas pequeñas */
  overflow: hidden;
  margin: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column; /* Apila los elementos en una columna en pantallas menores a 1024px */
    height: auto; /* Ajusta la altura automáticamente en pantallas pequeñas */
  }

  @media (min-width: 1024px) {
    flex-direction: row; /* Mantén los elementos uno al lado del otro a partir de 1024px */
    flex-wrap: nowrap;
    height: 100vh; /* Mantén la altura total de la pantalla */
  }
`;