"use client";
import React, { useState, useEffect } from "react";
import Search from "@/src/components/searchs/search";
import AllUsers from "../../../components/containers/AllUsersContainer/AllUsers";
import TopUsers from "../../../components/containers/AllUsersContainer/TopUsers";
import { IUserCardProps, IUserCarouselProps } from "../../../models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { FooterMain } from "@/src/components/footer/FooterMain";
import { getAllUsersSorted, getUsersForImages } from '../../api/users';
import styled from "styled-components";
import CardUserDiscover from "@/src/components/cards/CardUserDiscover";
import Button from "@/src/components/ui/buttons/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { LuArrowUpAZ } from "react-icons/lu";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { GiNewShoot } from "react-icons/gi";

const DiscoverPage = styled.div`
  width: 100% !important;
  height: 100%;
  margin: 54px 0;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100% !important;
  height: 100%;
  display: flex;
  align-items: space-between;
`;

const LateralContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 40%;
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 800px;
  width: 60%;
  height: 100%;

  & div {
    padding: 1rem 0;

    & hr {
      padding: 0;
      margin: 0 400px !important;
      translate: 0 15px;
      border: none;
      height: 4px;
      opacity: 0.1;
      border-radius: 500px;
      background-color: ${({ theme }) => theme.colors.textOrange};
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const UsersContainer = styled.div`
  padding-top: 0 !important;
  margin-top: 0 !important;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 !important;
`;

const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 85%;
  height: 80%;
  padding: 1rem;

  @media (max-width: 460px) {
    width: 100%;
  }
`;

const Sidebar = styled.div`
  padding: 1rem;
  width: 150px;
  height: 100%;
  gap: 2rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const SidebarContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 460px) {
    display: none;
  }
`;

const Discover = () => {
  // Estados para manejar a todos los usuarios, loading y errores
  const [allUsersData, setAllUsersData] = useState<IUserCardProps[]>([]);
  const [newUsersData, setNewUsersData] = useState<IUserCarouselProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Estado para manejar los usuarios filtrados
  const [filteredUsers, setFilteredUsers] = useState<IUserCardProps[]>([]);
  const [showTopUsers, setShowTopUsers] = useState<boolean>(false); // Nuevo estado para manejar el botón "Top"

  // Función de búsqueda
  const handleSearch = (query: string | null): boolean => {
    if (!query) {
      setFilteredUsers(allUsersData);
      return false;
    }

    const lowercasedQuery = query.toLowerCase().trim();
    const filtered: IUserCardProps[] = allUsersData.filter((user) =>
      user.fullName.toLowerCase().includes(lowercasedQuery) ||
      user.abilities.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredUsers(filtered);
    return true;
  };

  // Reseteamos el filtrado por categorias
  const handleFilterReset = () => {
    setFilteredUsers(allUsersData);
    setShowTopUsers(true); // Reseteamos el estado del botón "Top"
  };

  // Filtrar por nuevos usuarios
  const handleShowNewUsers = () => {
    setNewUsersData(newUsersData);
    setShowTopUsers(false); // Reseteamos el estado del botón "Top"
  };

  // Filtrar por top usuarios
  const handleShowTopUsers = () => {
    setShowTopUsers(true); // Marcamos que estamos mostrando los top
    const sortedUsers = [...allUsersData].sort((a, b) => b.qualification - a.qualification);
    setFilteredUsers(sortedUsers);
  };

  // Filtrar por orden alfabético
  const handleShowAlphabeticalOrder = () => {
    const sortedUsers = [...allUsersData].sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
    setFilteredUsers(sortedUsers);
    setShowTopUsers(true); // Reseteamos el estado del botón "Top"
  };

  // Fetch de los usuarios
  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const responseData = await getUsersForImages();
        setAllUsersData(responseData);
        setFilteredUsers(responseData);

        const responseDataNew = await getAllUsersSorted();
        setNewUsersData(responseDataNew);

        setLoading(false);
      } catch (error) {
        setError(error as string);
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
    <DiscoverPage>
      <Container>
        <SidebarContainer>
          <Sidebar>
            <Button type={"button"} label={"Restaurar"} onClick={handleFilterReset}>
              <RiArrowGoBackFill />
            </Button>
            <Button type={"button"} label={"A-Z"} onClick={handleShowAlphabeticalOrder}>
              <LuArrowUpAZ />
            </Button>
            <Button type={"button"} label={"Top"} onClick={handleShowTopUsers}>
              <TbArrowBadgeUpFilled />
            </Button>
            <Button type={"button"} label={"Nuevos"} onClick={handleShowNewUsers}>
              <GiNewShoot />
            </Button>

          </Sidebar>
        </SidebarContainer>
        <Content>
          <DivContainer>
            <SearchContainer>
              <Search label="⌕" onSearch={handleSearch} />
            </SearchContainer>
            <UsersContainer>
              {showTopUsers ?               
              <AllUsers users={filteredUsers} /> :
              <TopUsers users={newUsersData} /> }
            </UsersContainer>
          </DivContainer>
          <LateralContainer>
            <CardUserDiscover />
          </LateralContainer>
        </Content>
      </Container>
      <FooterMain />
    </DiscoverPage>
  );
};

export default Discover;
