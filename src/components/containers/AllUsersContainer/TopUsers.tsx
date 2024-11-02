"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../cards/CardDiscover";
import { ITopUsersCardsProps } from "../../../models/userCards.model";
import DivLink from "../../ui/links/CardUserLink";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";

const CardListContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  & article {
    height: 6rem;
  }

  & div{
    height: 8rem;
  }
`;

// Estilos para los botones de paginación
const PaginationContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
  gap: 10px;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: ${({ theme }) => theme.colors.textDark} 1px solid;
  padding: 10px 20px;
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
    translate: -5px;
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

const TopUsers: React.FC<ITopUsersCardsProps> = ({ users }) => {
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
          return (
            <DivLink key={index} href="/user/detailUser" label="DETALLE" id={user.id.toString()} >
              <Card
                id={user.id}
                fullName={user.name}
                jobTitle={user.category}
                qualification={-1}
                abilities={[]}
                urlImage={user.urlImage}
                createdAt={user.createdAt}
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

export default TopUsers;
