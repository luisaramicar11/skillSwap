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

const CustomSwiper = styled(Swiper)`
  width: 80%;
  --swiper-theme-color: ${({ theme }) => theme.colors.textSecondary} !important; 

  /* Estilos para los arrows */
  .swiper-button-next,
  .swiper-button-prev {
    transform: scale(0.8);
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.2;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

const Carousel = () => {
  // Estados para manejar a todos los usuarios, loading y errores
  const [allUsersData, setAllUsersData] = useState<IUserCarouselProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Número máximo de usuarios a mostrar
  const maxUsersToShow = 5;

  // Fetch de los usuarios
  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const response = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUserSortedCreated",
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener datos de los usuarios.");
        }

        const responseData: IUserCarouselProps[] = await response.json();

        // Guarda todos los usuarios en el estado
        setAllUsersData(responseData);
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

  console.log(allUsersData);

  return (
    <CustomSwiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      }}
    >
      {allUsersData.slice(0, maxUsersToShow).map((user) => (
        <SwiperSlide key={user.id}>
          <Card
            name={user.name}
            urlImage={user.urlImage}
            category={user.category}
          />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Carousel;
