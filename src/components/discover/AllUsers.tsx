"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../cards/CardDiscover";
import { IUserCardProps, IAllUsersCardsProps } from "../../models/discover.model";

const CardListContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 70%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

// Estilos para los botones de paginación
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const DivContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const AllUsers: React.FC<IAllUsersCardsProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10; // Número de tarjetas por página

  // Calcular las tarjetas que se deben mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <DivContainer>
      <CardListContainer>
        {currentCards.map((user, index) => {
          // Nueva constante que convierte abilities de string a array
          const abilitiesArray = typeof user.abilities === 'string'
            ? user.abilities.split(',').map((ability: string) => ability.trim())
            : [];

          return (
            <div key={index}>
              <Card
                id={user.id}
                fullName={user.fullName}
                jobTitle={user.jobTitle}
                qualification={user.qualification}
                abilities={abilitiesArray}
                imageUrl={user.imageUrl}
              />
            </div>
          );
        })}
      </CardListContainer>

      <PaginationContainer>
        <PaginationButton
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ANTERIOR
        </PaginationButton>
        <PaginationButton
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / cardsPerPage)}
        >
          SIGUIENTE
        </PaginationButton>
      </PaginationContainer>
    </DivContainer>
  );
};

export default AllUsers;
