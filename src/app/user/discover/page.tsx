"use client";
import React, { useState } from "react";
import Carousel from "../../../components/carousels/CarouseDiscover";
import AllUsers from "../../../components/AllUsers";
import Search from "@/src/components/searchs/search";
import { H2, DivContainer } from "./DiscoverStyling";
import { users } from "../../../components/AllUsers";

const Discover = () => {
  

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter((user) =>
      user.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
  };

  return (
    <DivContainer>
      <Search label="Buscar" onSearch={handleSearch} />
      <div>
        <H2>Usuarios más recientes</H2>
        <Carousel />
      </div>
      <div>
        <H2>Todos los usuarios</H2>
        <AllUsers users={filteredUsers} />
      </div>
    </DivContainer>
  );
};

export default Discover;
