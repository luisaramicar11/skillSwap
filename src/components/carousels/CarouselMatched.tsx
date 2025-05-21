"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { checkUserConnection } from "@/src/app/api/requests";
import { IUserCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUsersForImages } from "../../app/api/users";
import { IoFlowerOutline } from "react-icons/io5";
import { Urbanist } from "next/font/google";
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
  padding: 1rem !important;
`;

const CustomSwiper = styled(Swiper)`
width: 100%;
  padding: 0 !important;

  .swiper-button-next,
  .swiper-button-prev {
    translate:0 -22px;
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
    width: 100%;
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

const Job = styled.p`
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

const P = styled.p`
  text-align: start;
  padding: 0.6rem 1rem;
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;

const Match = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-family: ${urbanist.style.fontFamily};
  color: ${({ theme }) => theme.colors.textOrange};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  font-size: 8px;
  font-weight: bold;
  font-style: normal;
  margin-top: 4px;
`;

interface IProfileCardProps {
  userId: number | undefined
}

const CarouselMatched: React.FC<IProfileCardProps> = ({ userId }) => {
  const [allUsersData, setAllUsersData] = useState<IUserCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const maxUsersToShow = 15;

  useEffect(() => {
    const fetchCheckMatch = async (data: IUserCardProps[], currentUser: number): Promise<IUserCardProps[]> => {
      const matchedUsers: IUserCardProps[] = [];

      for (const user of data) {
        const isConnected = await checkUserConnection(currentUser, user.id);
        if (isConnected) {
          matchedUsers.push(user);
        }
      }

      return matchedUsers;
    };

    const fetchAllUsersData = async () => {

      if (!userId) {
        setError("No se pudo obtener el ID del usuario.");
        setLoading(false);
        return;
      }

      try {
        const responseData = await getUsersForImages();
        const matchedUsers = await fetchCheckMatch(responseData, userId);
        setAllUsersData(matchedUsers);
      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar los usuarios.");
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchAllUsersData();
    }
  }, [userId]);

  if (loading) return <OurAlertsText>Cargando...</OurAlertsText>;
  if (error) return <OurAlertsText>{error}</OurAlertsText>;

  if (allUsersData.length == 0) return <P>Aún no tienes conexiones. Conecta con alguien en la sección de<strong> Discover</strong></P>;

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
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {allUsersData.slice(0, maxUsersToShow).map((user) => (
          <SwiperSlide key={user.id}>
            <Link href={`/user/detailUser?id=${user.id}`}>
              <UserCard>
                <AvatarWrapper>
                  <Image
                    src={user.urlImage || "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"}
                    alt={user.fullName}
                    width={60}
                    height={60}
                  />
                </AvatarWrapper>
                <Username>{user.fullName}</Username>
                <Job>{user.jobTitle}</Job>
                <Match><IoFlowerOutline />Match</Match>
              </UserCard>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </CarouselWrapper>
  );
};

export default CarouselMatched;