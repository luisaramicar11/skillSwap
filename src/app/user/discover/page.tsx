"use client";
import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousels/CarouselDiscover";
import Search from "@/src/components/searchs/search";
import { LineTitles, DivContainer } from "./DiscoverStyling";
import AllUsers from "../../../components/containers/AllUsersContainer/AllUsers";
import { IUserCardProps } from "../../../models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";

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
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersForImages",
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
        setFilteredUsers(responseData.data.response);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAllUsersData();
  }, []);

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  return (
    <DivContainer>
      {/* Componente de búsqueda */}
      <Search label="⌕" onSearch={handleSearch} />
      {/* Sección del carrusel */}
      <div>
        <LineTitles>¡Nuevos Talentos!</LineTitles>
        <hr />
        <Carousel />
        <hr />
        <LineTitles></LineTitles>
      </div>
      {/* Sección de todos los usuarios o usuarios filtrados por búsqueda */}
      <article>
        {/* Se pasa el estado filteredUsers que puede ser todos o los filtrados */}
        <AllUsers users={filteredUsers} />
      </article>
    </DivContainer>
  );
};

export default Discover;
