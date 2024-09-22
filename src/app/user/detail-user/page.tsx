"use client";
import React from "react";
import { useEffect, useState } from "react";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import UserProfileNoDetail from "@/src/components/cards/CardDetailUserNoMatch";
import UserProfileDetail from "@/src/components/cards/CardDetailUserMatch";
import { Div } from "./DetailStyling";
import { IRequestCardProps, IUserProfileProps } from "@/src/models/userCards.model";
import { IUser } from "@/src/models/user.model";
import { OurAlertsText } from "@/src/utils/ourAlertsText";

//Detail User

const DetailAboutUser = () => {
  const [userDetail, setUserData] = useState<IUser | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [userData, setUserMetrics] = useState<IUserProfileProps[]>([]);

  const getIdUser = (): number => {
    const idString = localStorage.getItem("userId");
    return parseInt(idString as string, 10);
  };

  const findUserIndex = (id: number): number => {
    return userData.findIndex((user) => user.id === id);
  };

  useEffect(() => {
    const fetchPeople = async () => {
      const idNumber = getIdUser();

      try {
        const responseDetail = await fetch(
          `https://skillswapriwi.azurewebsites.net/${idNumber}`,
          {
            method: "GET",
            headers: {
              "accept" : "*/*"
            },
          }
        );

        const detailUser = await responseDetail.json();
        setUserData(detailUser.data.response);

        const userDataResponse = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/ForImages",
          {
            method: "GET",
            headers: {
              "accept" : "*/*",
            },
          }
        );
        const dataUser = await userDataResponse.json();
        setUserMetrics(dataUser.data.response);

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

  if (!userData) {
    return <OurAlertsText>No se encontraron usuarios.</OurAlertsText>;
  }

  const userIndex = findUserIndex(getIdUser()); // Obtiene el índice del usuario

  console.log(userIndex);
  console.log(userDetail);

  return (
    <Div>
      <ProfileCard
        fullName={userData[userIndex].fullName}
        userMetrics={userData[userIndex]}
        ultimaAceptada={userData[userIndex].ultimaAceptada}
        ultimaPendiente={userData[userIndex].ultimaPendiente}
        ultimaCancelada={userData[userIndex].ultimaCancelada}
        ultimoEnviado={userData[userIndex].ultimoEnviado}
        conteoAceptadas={userData[userIndex].conteoAceptadas}
        conteoConexiones={userData[userIndex].conteoConexiones}
        conteoPendientes={userData[userIndex].conteoPendientes}
        conteoCanceladas={userData[userIndex].conteoCanceladas}
        conteoEnviadas={userData[userIndex].conteoEnviadas}
      />
      <UserProfileDetail userData={userData[userIndex]} userDetail={userDetail!} />
      <UserProfileNoDetail userData={userData[userIndex]} />
    </Div>
  );
};

export default DetailAboutUser;
