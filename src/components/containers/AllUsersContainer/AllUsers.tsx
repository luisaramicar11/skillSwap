"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../cards/CardDiscover";
import { IAllUsersCardsProps } from "../../../models/userCards.model";
import DivLink from "../../ui/links/CardUserLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";

const CardListContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 80%;
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
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: ${({ theme }) => theme.colors.textDark} 1px solid;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 5px;

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    color: white;
  }

  &:disabled {
    transition: 0.4s;
    transform: scale(0.9);
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const DivContainer = styled.article`
  padding-top: 0;
  margin-top: 0;
  width: 100%;
  height: max-content;
`;

const AllUsers: React.FC<IAllUsersCardsProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // Número de tarjetas por página

  // Calcular las tarjetas que se deben mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Array.isArray(users) ? users.slice(indexOfFirstCard, indexOfLastCard) : [];

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <DivContainer>
      <CardListContainer onClick={() => handlePageChange('DETALLE')} >
        {currentCards.map((user, index) => {
          // Nueva constante que convierte abilities de string a array
          const abilitiesArray = typeof user.abilities === 'string'
            ? user.abilities.split(',').map((ability: string) => ability.trim())
            : [];

          return (
            <DivLink key={index} href="/user/detailUser" label="DETALLE" id={user.id.toString()} >
              <Card
                id={user.id}
                fullName={user.fullName}
                jobTitle={user.jobTitle}
                qualification={user.qualification}
                abilities={abilitiesArray}
                urlImage={user.urlImage}
              />
            </DivLink>
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
