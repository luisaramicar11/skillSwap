"use client";
import React, { useState, useEffect } from "react";
import SliderCard from "../../../components/sliders/slide";
import MatchCard from "../../../components/cards/CardMatch";
import { DivMatch, Container } from "./MatchStyling";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import { IUserCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUsersForImages } from "../../api/users"
import { FooterMain } from '@/src/components/footer/FooterMain';

const Match = () => {
  const [userData, setUserData] = useState<IUserCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getIdUser = (): number => {
    const idString = localStorage.getItem("userId");
    return parseInt(idString as string, 10);
  };

  const findUserIndex = (id: number): number => {
    // Verificar que userMetrics es un array antes de llamar a findIndex
    if (Array.isArray(userData)) {
      return userData.findIndex((user) => user.id == id);
    }
    return -1; // Si no es un array o no encuentra coincidencia, retorna -1
  };

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const dataUser = await getUsersForImages();
        setUserData(dataUser);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  if (!userData || userData.length === 0) {
    return <OurAlertsText>No se encontraron usuarios.</OurAlertsText>;
  }

  const userIndex = findUserIndex(getIdUser()); // Obtiene el índice del usuario

  const handlePass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userData.length);
  };

  const idCurrentUser = getIdUser()
  console.log(userIndex);
  console.log(userData);
  console.log(idCurrentUser);



  return (
    <Container>
      <DivMatch>
        {userIndex !== -1 && (
          <ProfileCard/>
        )}
        <SliderCard user={userData[currentIndex]} onPass={handlePass} />
        <MatchCard
          description={userData[currentIndex]?.description}
          skills={
            userData[currentIndex]?.abilities
              ? userData[currentIndex].abilities.split(',').map((ability: string) => ability.trim())
              : []
          }
          rating={userData[currentIndex]?.qualification}
          countMatches={userData[currentIndex]?.countMatches}
        />
      </DivMatch>
      <FooterMain />
    </Container>
  );
};

export default Match;
