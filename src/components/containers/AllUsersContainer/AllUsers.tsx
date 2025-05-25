"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../cards/CardDiscover";
import { IAllUsersCardsProps } from "../../../models/userCards.model";
import CardUserLink from "../../ui/links/CardUserLink";
import { handlePageTheme } from "@/src/lib/utils/ourPageThemeHandler";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CardListContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
`;

// Estilos para los botones de paginación
const PaginationContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 25px;
  padding-bottom: 0 !important;
  gap: 10px;

  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
  }

  .first-button, .last-button {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const PaginationDots = styled.span`
  padding: 6px 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  padding: 6px 14px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.bgBanner};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.bgBanner};
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

  // Número de tarjetas por página
  const cardsPerPage = 8;

  // Calcular las tarjetas que se deben mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Array.isArray(users) ? users.slice(indexOfFirstCard, indexOfLastCard) : [];
  const totalPages = Math.ceil(users.length / cardsPerPage);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <DivContainer>
      <CardListContainer onClick={() => handlePageTheme('DETALLE')} >
        {currentCards.map((user, index) => {
          // Constante que convierte abilities de string a array
          const abilitiesArray = typeof user.abilities === 'string'
            ? user.abilities.split(',').map((ability: string) => ability.trim())
            : [];

          return (
            <CardUserLink key={index} href={`/user/detail/u?id=${user.id}`} label="DETALLE" id={user.id.toString()} >
              <Card
                id={user.id}
                fullName={user.fullName}
                jobTitle={user.jobTitle}
                qualification={user.qualification}
                abilities={abilitiesArray}
                urlImage={user.urlImage}
              />
            </CardUserLink>
          );
        })}
      </CardListContainer>

      <PaginationContainer>
        <PaginationButton
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="first-button"
          title="Página Anterior"
        >
          <FaAngleLeft />
        </PaginationButton>

        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter((number) => {
            return (
              number === 1 ||
              number === totalPages ||
              Math.abs(number - currentPage) <= 1
            );
          })
          .reduce((acc: (number | string)[], number, index, array) => {
            if (index > 0 && number - (array[index - 1] as number) > 1) {
              acc.push("...");
            }
            acc.push(number);
            return acc;
          }, [])
          .map((item, index) =>
            typeof item === "number" ? (
              <PaginationButton
                key={index}
                onClick={() => paginate(item)}
                className={item === currentPage ? "active" : ""}
                title={`Ir a página ${item}`}
              >
                {item}
              </PaginationButton>
            ) : (
              <PaginationDots key={index}>...</PaginationDots>
            )
          )}

        <PaginationButton
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="last-button"
          title="Página Siguiente"
        >
          <FaAngleRight />
        </PaginationButton>
      </PaginationContainer>
    </DivContainer>
  );
};

export default AllUsers;
