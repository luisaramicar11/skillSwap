"use client";
import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousels/CarouseDiscover";
import Search from "@/src/components/searchs/search";
import { H2, DivContainer } from "./DiscoverStyling";
import AllUsers from "../../../components/discover/AllUsers";
import { IUserCardProps, IAllUsersCardsProps } from "../../../models/userCards.model";

const Discover = () => {
  // Estados para manejar a todos los usuarios, loading y errores
  const [allUsersData, setAllUsersData] = useState<IUserCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Estado para manejar los usuarios filtrados
  const [filteredUsers, setFilteredUsers] = useState<IUserCardProps[]>([]);

  // Función de búsqueda
  const handleSearch = (query: string | null): boolean => {
    if (!query) {
      // Si no hay búsqueda, muestra todos los usuarios
      setFilteredUsers(allUsersData);
      return false;
    }

    const lowercasedQuery = query.toLowerCase().trim();

    // Filtra por fullName y abilities
    const filtered: IUserCardProps[] = allUsersData.filter((user) =>
      // Verifica si el nombre completo incluye el query
      user.fullName.toLowerCase().includes(lowercasedQuery) ||
      // Verifica si alguna de las habilidades incluye el query
      user.abilities.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredUsers(filtered);
    return true;
  };

  // Fetch de los usuarios
  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const response = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/ForImages",
          {
            method: "GET",
            headers: {
              "accept" : "*/*",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener datos de los usuarios.");
        }

        const responseData = await response.json();

        // Guarda todos los usuarios en el estado
        setAllUsersData(responseData.data.response);

        // Por defecto, todos los usuarios son los "filtrados" hasta que se realice una búsqueda
        setFilteredUsers(responseData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllUsersData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <DivContainer>
      {/* Componente de búsqueda */}
      <Search label="Buscar" onSearch={handleSearch} />

      {/* Sección del carrusel */}
      <div>
        <H2>Usuarios más recientes</H2>
        <Carousel />
      </div>

      {/* Sección de todos los usuarios o usuarios filtrados por búsqueda */}
      <div>
        <H2>Todos los usuarios</H2>
        {/* Se pasa el estado filteredUsers que puede ser todos o los filtrados */}
        <AllUsers users={filteredUsers} />
      </div>
    </DivContainer>
  );
};

export default Discover;
