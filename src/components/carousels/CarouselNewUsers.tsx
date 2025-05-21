"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IUserCarouselProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getAllUsersSorted } from "../../app/api/users";
import { Urbanist } from "next/font/google";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const urbanist = Urbanist({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 !important;
`;

const CustomSwiper = styled(Swiper)`
  padding: 0 !important;

  .swiper-button-next,
  .swiper-button-prev {
    translate:0 -12px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.textBlack};
    transform: scale(0.75);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    transform: scale(0.5);
  }

  .swiper-wrapper {
    padding: 0;
    align-items: center;
  }

  & a{
    text-decoration: none;
  }
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center !important;
  gap: 0.1rem;
`;

const AvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border: 1px solid ${({ theme }) => theme.colors.textBlack};
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`;

const Community = styled.p`
  font-size: 0.6rem !important;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center !important;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 0.55rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.45rem !important;
  }
`;

const Username = styled.p`
  font-size: 0.85rem !important;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center !important;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 0.75rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem !important;
  }
`;

const New = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-family: ${urbanist.style.fontFamily};
  color: ${({ theme }) => theme.colors.textPurple};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textPurle};
  font-size: 8px;
  font-weight: bold;
  margin-top: 4px;
  font-style: normal;
`;

const CarouselNewUsers = () => {
  const [allUsersData, setAllUsersData] = useState<IUserCarouselProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const maxUsersToShow = 15;

  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const responseData = await getAllUsersSorted();
        setAllUsersData(responseData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar los usuarios.");
        setLoading(false);
      }
    };

    fetchAllUsersData();
  }, []);

  if (loading) return <OurAlertsText>Cargando...</OurAlertsText>;
  if (error) return <OurAlertsText>{error}</OurAlertsText>;

  return (
    <CarouselWrapper>
      <CustomSwiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={12}
        slidesPerView={7}
        breakpoints={{
          320: { slidesPerView: 4 },
          440: { slidesPerView: 5 },
          540: { slidesPerView: 6 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {allUsersData.slice(0, maxUsersToShow).map((user) => (
          <SwiperSlide key={user.id}>
            <Link href={`/user/detailUser?id=${user.id}`}>
              <UserCard>
                <AvatarWrapper>
                  <Image
                    src={user.urlImage || "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"}
                    alt={user.name}
                    width={60}
                    height={60}
                  />
                </AvatarWrapper>
                <Username>{user.name}</Username>
                <Community>{user.category}</Community>
                <New><MdOutlineWatchLater />New User</New>
              </UserCard>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </CarouselWrapper>
  );
};

export default CarouselNewUsers;

