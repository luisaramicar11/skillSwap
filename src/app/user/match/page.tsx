"use client";
import React, { useState, useEffect } from "react";
import SliderCard from "../../../components/sliders/slide";
import MatchCard from "../../../components/cards/CardMatch";
import { DivMatch } from "./MatchStyling";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import { IUserCardProps, IRequestCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import {getRequestById} from "../../../lib/api/requests";
import {getUsersForImages} from "../../../lib/api/users"

const Match = () => {
  const [userData, setUserData] =  useState<IUserCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [userMetrics, setUserMetrics] = useState<IRequestCardProps | null>(null);

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
      const idNumber = getIdUser();

      try {
        const dataUser = await getUsersForImages();
        setUserData(dataUser);
        const metricsResponse = await getRequestById(idNumber);
        console.log(metricsResponse)
        setUserMetrics(metricsResponse.data.response );
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
    <DivMatch>
      {userIndex !== -1 && (
        <ProfileCard
          fullName={userData[userIndex]?.fullName}
          userMetrics={userData[userIndex]}
          ultimaAceptada={userMetrics!.solicitudes?.ultimaAceptada}
          ultimaPendiente={userMetrics!.solicitudes?.ultimaPendiente}
          ultimaCancelada={userMetrics!.solicitudes?.ultimaCancelada}
          ultimoEnviado={userMetrics!.solicitudes?.ultimoEnviado}
          conteoConexiones={userMetrics!.solicitudes?.conteoConexiones}
          conteoPendientes={userMetrics!.solicitudes?.conteoPendientes}
          conteoCanceladas={userMetrics!.solicitudes?.conteoCanceladas}
          conteoEnviadas={userMetrics!.solicitudes?.conteoEnviadas}
          conteoAceptadas={userMetrics!.solicitudes?.conteoAceptadas}
        />
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
  );
};

export default Match;
