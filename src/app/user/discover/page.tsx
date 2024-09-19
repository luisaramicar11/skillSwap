"use client";
import Carousel from "../../../components/carousels/CarouseDiscover";
import AllUsers from "../../../components/AllUsers";
import Search from "../../../components/searchs/search";
import { H2, DivContainer, DivRecentUsers } from "./DiscoverStyling";

const handleSearch = () => {
  console.log("");
};
const Discover = () => {
  return (
    <DivContainer>
      <Search label="Buscar" onSearch={handleSearch} />
      <div>
        <H2>usuarios más recientes</H2>
        <Carousel />
      </div>
      <div>
        <H2>todos los usuarios</H2>
        <AllUsers />
      </div>
    </DivContainer>
  );
};

export default Discover;
