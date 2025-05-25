"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardAdsDiscover from "@/src/components/cards/CardAdsDiscover";
import ButtonAside from "@/src/components/ui/buttons/ButtonAside";
import ButtonBelow from "@/src/components/ui/buttons/ButtonBelow";
import Search from "@/src/components/searchs/search";
import AllUsers from "../../../components/containers/AllUsersContainer/AllUsers";
import CarouselNewUsers from "../../../components/carousels/CarouselNewUsers";
import { IUserCardProps } from "../../../models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { FooterMain } from "@/src/components/footer/FooterMain";
import { getUsersForImages } from '../../api/users';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaArrowDownAZ } from "react-icons/fa6";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";

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
    padding: 0.5rem 0;

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

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const DivCarousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;

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
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 !important;

  & span {
    display: none;
  }

  @media (max-width: 1000px) {
    align-self: center;
    width: 95%;
    padding-top: 0.5rem !important;

    & span {
      align-self: center;
      display: block;
      height: 1px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
      width: 98%;
      padding-top: 0.5rem;
    }
  }
`;

const Bottombar = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    height: auto;
    gap: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem 0 !important;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 80%;
  padding: 1rem;
  overflow-x: hidden;
`;

const Sidebar = styled.div`
  padding: 1rem;
  width: inherit;
  height: 100%;
  gap: 2rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const SidebarContainer = styled.div`
  min-width: 100px !important;
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

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
  };

  // Filtrar por top usuarios
  const handleShowTopUsers = () => {
    const sortedUsers = [...allUsersData].sort((a, b) => b.qualification - a.qualification);
    setFilteredUsers(sortedUsers);
  };

  // Filtrar por orden alfabético
  const handleShowAlphabeticalOrder = () => {
    const sortedUsers = [...allUsersData].sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
    setFilteredUsers(sortedUsers);
  };

  // Fetch de los usuarios
  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const responseData = await getUsersForImages();
        setAllUsersData(responseData);
        setFilteredUsers(responseData);

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
            <ButtonAside type={"button"} label={"Default"} onClick={handleFilterReset}>
              <RiArrowGoBackFill />
            </ButtonAside>
            <ButtonAside type={"button"} label={"Trabajos"} onClick={handleShowAlphabeticalOrder}>
              <FaArrowDownAZ />
            </ButtonAside>
            <ButtonAside type={"button"} label={"Top"} onClick={handleShowTopUsers}>
              <MdOutlineAlignHorizontalLeft />
            </ButtonAside>
          </Sidebar>
        </SidebarContainer>
        <Content>
          <DivContainer>
            <SearchContainer>
              <Search label="⌕" onSearch={handleSearch} />
              <Bottombar>
                <ButtonBelow type={"button"} label={"Default"} onClick={handleFilterReset}>
                </ButtonBelow>
                <ButtonBelow type={"button"} label={"Trabajos"} onClick={handleShowAlphabeticalOrder}>
                </ButtonBelow>
                <ButtonBelow type={"button"} label={"Top"} onClick={handleShowTopUsers}>
                </ButtonBelow>
              </Bottombar>
              <span></span>
            </SearchContainer>
            <UsersContainer>
              <DivCarousel>
                <CarouselNewUsers />
              </DivCarousel>
              <AllUsers users={filteredUsers} />
            </UsersContainer>
          </DivContainer>
          <LateralContainer>
            <CardAdsDiscover />
          </LateralContainer>
        </Content>
      </Container>
      <FooterMain />
    </DiscoverPage>
  );
};

export default Discover;
