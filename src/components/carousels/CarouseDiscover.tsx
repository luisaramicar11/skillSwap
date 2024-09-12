"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa el CSS principal de Swiper
import 'swiper/css/navigation'; // Importa el CSS de navegación
import 'swiper/css/pagination'; // Importa el CSS de paginación
import { Navigation, Pagination } from 'swiper/modules'; // Importa los módulos de Swiper
import Card from "../cards/CardCarouselDiscover"; // Ajusta la ruta según tu estructura de carpetas
import styled from 'styled-components';

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: black; /* Cambia el color al que prefieras */
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    color: #ccc; /* Cambia el color de los botones deshabilitados */
  }
`;

const Carousel = () => {
  const users = [
    {
      title: "John Doe",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 4,
    },
    {
      title: "Jane Smith",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 5,
    },
    {
      title: "Carlos Ruiz",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
      rating: 3,
    },
    {
        title: "Carlos Ruiz",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
        rating: 3,
      },
      {
        title: "Carlos Ruiz",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
        rating: 3,
      },
      {
        title: "Carlos Ruiz",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
        rating: 3,
      },
      {
        title: "Carlos Ruiz",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro6dZi4xjThJaEVMEh4F5EgzGNJPvCNLFbg&s",
        rating: 3,
      },
    // ... más usuarios
  ];

  return (
    <CustomSwiper
      modules={[Navigation, Pagination]} // Registra los módulos de navegación y paginación
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={4}
    >
      {users.map((user, index) => (
        <SwiperSlide key={index}>
          <Card
            title={user.title}
            imageUrl={user.imageUrl}
            rating={user.rating}
          />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Carousel;
