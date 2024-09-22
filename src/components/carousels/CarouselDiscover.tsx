"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa el CSS principal de Swiper
import "swiper/css/navigation"; // Importa el CSS de navegación
import "swiper/css/pagination"; // Importa el CSS de paginación
import { Navigation, Pagination } from "swiper/modules"; // Importa los módulos de Swiper
import Card from "../cards/CardCarouselDiscover"; // Ajusta la ruta según tu estructura de carpetas
import styled from "styled-components";

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
  const users = [
    {
      title: "John Doe",
      urlImage: "",  
      rating: 4,
    },
    {
      title: "Jane Smith",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 5,
    },
    {
      title: "Carlos Ruiz",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    {
      title: "Carlos Ruiz",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    {
      title: "Carlos Ruiz",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    {
      title: "Carlos Ruiz",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    {
      title: "Carlos Ruiz",
      urlImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    // ... más usuarios
  ];

  return (
    <CustomSwiper
      modules={[Navigation, Pagination]} // Registra los módulos de navegación y paginación
      navigation
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1, // Muestra solo 1 slide a la vez en pantallas pequeñas
          spaceBetween: 5, // Espacio reducido entre slides
        },
        // Cuando la pantalla sea menor de 640px
        640: {
          slidesPerView: 2, // Muestra solo 1 slide a la vez en pantallas pequeñas
          spaceBetween: 5, // Espacio reducido entre slides
        },
        // Cuando la pantalla sea menor de 768px
        768: {
          slidesPerView: 3, // Muestra 2 slides en pantallas medianas
          spaceBetween: 5,
        },
        // Cuando la pantalla sea mayor de 1024px
        1024: {
          slidesPerView: 4, // Muestra 4 slides en pantallas grandes
          spaceBetween: 5,
        },
      }}
    >
      {users.map((user, index) => (
        <SwiperSlide key={index}>
          <Card
            title={user.title}
            urlImage={user.urlImage}
            rating={user.rating}
          />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Carousel;
