"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css"; // Importa el CSS principal de Swiper
import "swiper/css/navigation"; // Importa el CSS de navegación
import "swiper/css/pagination"; // Importa el CSS de paginación
import { Navigation, Pagination } from "swiper/modules"; // Importa los módulos de Swiper
import Card from "../cards/CardCarouselDiscover"; // Ajusta la ruta según tu estructura de carpetas
import styled from "styled-components";
import { IUserCarouselProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/utils/ourAlertsText";

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

  .swiper-slide{
    display: flex;
    justify-content: center
  }
`;


const Carousel = () => {
  // Estados para manejar a todos los usuarios, loading y errores
  const [allUsersData, setAllUsersData] = useState<IUserCarouselProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch de los usuarios
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
      setLoading(false);  // Importante para dejar de mostrar el loading cuando los datos se cargan
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

  console.log(allUsersData)

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
        // Cuando la pantalla sea menor de 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        // Cuando la pantalla sea menor de 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        // Cuando la pantalla sea mayor de 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      }}
    >
      {allUsersData.map((user) => (
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
