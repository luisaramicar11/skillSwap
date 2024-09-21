"use client"; 
import React, { useState, useEffect } from "react";
import SliderCard from "../../../components/sliders/slide";
import MatchCard from "../../../components/cards/CardMatch";
import { DivMatch } from "./MatchStyling";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import { IUserCardProps, IRequestCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/utils/ourAlertsText";

const Match = () => {
  const [userData, setUserData] = useState<IRequestCardProps | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userSkills, setUserSkills] = useState<IUserCardProps[]>([]);

  const getIdUser = (): number => {
    const idString = localStorage.getItem("userId");
    return parseInt(idString as string, 10);
  };

  const findUserIndex = (id: number): number => {
    return userSkills.findIndex((user) => user.id === id);
  };

  useEffect(() => {
    const fetchPeople = async () => {
      const idNumber = getIdUser();

      try {
        const response = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/RequestsGet/requests/${idNumber}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        );

        const dataUser = await response.json();
        setUserData(dataUser.data.obj);

        const skillsResponse = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/ForImages",
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        );
        const skillsData = await skillsResponse.json();
        setUserSkills(skillsData);

        setLoading(false);
      } catch (error) {
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

  if (!userSkills) {
    return <OurAlertsText>No se encontraron usuarios.</OurAlertsText>;
  }

  const userIndex = findUserIndex(getIdUser()); // Obtiene el índice del usuario

  const handlePass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userSkills.length);
  };

  console.log(userIndex);
  console.log(userData);
  
  return (
    <DivMatch>
        <ProfileCard
          fullName={userSkills[userIndex].fullName}
          userSkills={userSkills[userIndex]}
          ultimaAceptada={userData!.solicitudes.ultimaAceptada}
          ultimaPendiente={userData!.solicitudes.ultimaPendiente}
          ultimaCancelada={userData!.solicitudes.ultimaCancelada}
          // ultimaRecibida={userData!.solicitudes.ultimaRecibida}
          conteoAceptadas={userData!.solicitudes.conteoAceptadas}
          conteoPendientes={userData!.solicitudes.conteoPendientes} 
          conteoCanceladas={userData!.solicitudes.conteoCanceladas}
          // conteoRecibidas={userData!.solicitudes.conteoRecibidas}
        />
      <SliderCard person={userSkills[currentIndex]} onPass={handlePass} />
      <MatchCard
        description={userSkills[currentIndex]?.description}
        skills={
                userSkills[currentIndex].abilities.split(',').map(
                  (ability: string) => ability.trim()
                ) || []
              }
        rating={userSkills[currentIndex]?.qualification}
      />
    </DivMatch>
  );
};

export default Match;
