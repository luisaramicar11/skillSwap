"use client"; 
import React, { useState, useEffect } from "react";
import SliderCard from "../../../components/sliders/slide";
import MatchCard from "../../../components/cards/CardMatch";
import { DivMatch } from "./MatchStyling";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import { IUserCardProps, IRequestCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/utils/ourAlertsText";

const Match = () => {
  const [userData, setUserData] = useState<IRequestCardProps[]>([]);
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

        console.log(response)

        const dataUser = await response.json();
        setUserData(dataUser.data.obj);

        console.log(dataUser)

        const skillsResponse = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/ForImages"
        );
        const skillsData = await skillsResponse.json();
        setUserSkills(skillsData);

        setLoading(false);
      } catch (err) {
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

  if (!userData) {
    return <p>No se encontraron usuarios.</p>;
  }

  const userIndex = findUserIndex(getIdUser()); // Obtiene el índice del usuario

  const handlePass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % userSkills.length);
  };
  
  return (
    <DivMatch>
        <ProfileCard
          fullName={userSkills[userIndex].fullName}
          userSkills={userSkills[userIndex]}
          ultimaAceptada={userData[userIndex]?.solicitudes.ultimaAceptada}
          ultimaPendiente={userData[userIndex]?.solicitudes.ultimaPendiente}
          ultimaCancelada={userData[userIndex]?.solicitudes.ultimaCancelada}
          conteoAceptadas={userData[userIndex]?.solicitudes.conteoAceptadas}
          conteoPendientes={userData[userIndex]?.solicitudes.conteoPendientes} 
          conteoCanceladas={userData[userIndex]?.solicitudes.conteoCanceladas}
        />
      <SliderCard person={userSkills[currentIndex]} onPass={() => {handlePass}} />
      <MatchCard
        description={userSkills[currentIndex]?.description}
        skills={userSkills[currentIndex].abilities.split(',')}
        rating={userSkills[currentIndex]?.qualification}
      />
    </DivMatch>
  );
};

export default Match;
