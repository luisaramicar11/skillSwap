"use client"; 
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules"; 
import Card from "../cards/CardCarouselDiscover"; 
import styled from "styled-components";
import { IUserCarouselProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import DivLink from "../ui/links/CardUserLink";
import { getAllUsersSorted } from "../../app/api/users"; 

const CustomSwiper = styled(Swiper)`
display: inline;
  width: 80%;
  --swiper-theme-color: ${({ theme }) => theme.colors.textOrange + "66"} !important; 

  /* Estilos para los arrows */
  .swiper-button-next,
  .swiper-button-prev {
    transform: scale(0.8);
    color: ${({ theme }) => theme.colors.textWhite} !important;
    opacity: 0.2;
  }

  .swiper-pagination-bullet {
    color: ${({ theme }) => theme.colors.textWhite} !important;
    background-color: ${({ theme }) => theme.colors.textWhite};
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  & a{
    width: auto !important;
    height: auto !important;
  }
`;

const Carousel = () => {
  // Estados para manejar a todos los usuarios, loading y errores
  const [allUsersData, setAllUsersData] = useState<IUserCarouselProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Número máximo de usuarios a mostrar
  const maxUsersToShow = 6;

  // Fetch de los usuarios
  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const responseData = await getAllUsersSorted();
        console.log(responseData)
        // Guarda todos los usuarios en el estado
        setAllUsersData(responseData);
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

  console.log(allUsersData);

  return (
    <CustomSwiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={2}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      {allUsersData.slice(0, maxUsersToShow).map((user, index) => (
        <SwiperSlide key={user.id}>
          <DivLink key={index} href="/user/detailUser" label="DETALLE" id={user.id.toString()} >
            <Card
              name={user.name}
              urlImage={user.urlImage}
              category={user.category}
            />
          </DivLink>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Carousel;
