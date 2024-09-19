"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/cards/CardDiscover";

interface User {
  title: string;
  imageUrl: string;
  rating: number;
  skills: string[];
}

interface AllUsersProps {
  users: User[];
}

export const users = [
  {
    title: "John Doe",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
    rating: 4,
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    title: "Jane Smith",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
    rating: 5,
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Carlos Ruiz",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
    rating: 3,
    skills: ["Angular", "TypeScript", "Node.js"],
  },
  {
    title: "Ana López",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
    rating: 4,
    skills: ["Python", "Django", "Flask"],
  },
  // Agrega más usuarios...
];

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

const AllUsers: React.FC<AllUsersProps> = ({ users }) => {
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
        {currentCards.map((user, index) => (
          <Card
            key={index}
            title={user.title}
            imageUrl={user.imageUrl}
            rating={user.rating}
            skills={user.skills}
          />
        ))}
      </CardListContainer>

      <PaginationContainer>
        <PaginationButton
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        <PaginationButton
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / cardsPerPage)}
        >
          Siguiente
        </PaginationButton>
      </PaginationContainer>
    </DivContainer>
  );
};

export default AllUsers; // Exporta solo AllUsers