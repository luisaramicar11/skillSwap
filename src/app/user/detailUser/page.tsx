"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import UserProfileNoDetail from "@/src/components/cards/CardDetailUserNoMatch";
import UserProfileDetail from "@/src/components/cards/CardDetailUserMatch";
import { Div, DivProfile } from "./DetailStyling";
import { IUserProfileProps } from "@/src/models/userCards.model";
import { IUser } from "@/src/models/user.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";

const DetailAboutUser = () => {
  const [userDetail, setUserDetail] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserProfileProps[]>([]);
  const [checkConnection, setConnectionInfo] = useState<boolean | null>(null); // Ahora será booleano

  // Función para obtener el ID del usuario del localStorage
  const getCurrentIdUser = (): number | null => {
    const idString = localStorage.getItem("userId");
    return idString ? parseInt(idString, 10) : null;
  };

  const getClickedIdUser = (): number | null => {
    const idString = localStorage.getItem("clickedUserId");
    return idString ? parseInt(idString, 10) : null;
  };

  // Función para encontrar el índice del usuario
  const findUserIndex = (id: number): number => {
    return userData.findIndex((user) => user.id === id);
  };

  useEffect(() => {
    const fetchPeople = async () => {
      const idNumberCurrentUser = getCurrentIdUser();
      const idNumberClickedUser = getClickedIdUser();

      if (!idNumberCurrentUser || !idNumberClickedUser) {
        setError("No se pudo obtener el ID del usuario.");
        setLoading(false);
        return;
      }

      try {
        // Petición para obtener detalles del usuario
        const responseDetail = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUserById/${idNumberCurrentUser}`,
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        const detailUser = await responseDetail.json();
        setUserDetail(detailUser.data.response);

        // Petición para verificar la conexión
        const responseCheckConnection = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/RequestsGet/GetRequestViewDetails?currectId=${idNumberCurrentUser}&requestId=${idNumberClickedUser}`,
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        const checkConnectionData = await responseCheckConnection.json();
        setConnectionInfo(checkConnectionData.data.response); // Ahora devuelve true o false

        // Petición para obtener métricas de otros usuarios
        const userDataResponse = await fetch(
          "https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersForImages",
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );
        const dataUser = await userDataResponse.json();
        setUserData(dataUser.data.response);

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

  if (!userDetail || userData.length === 0) {
    return <OurAlertsText>No se encontraron usuarios.</OurAlertsText>;
  }

  const userClickedIndex = findUserIndex(getClickedIdUser()!); 
  const userCurrentIndex = findUserIndex(getCurrentIdUser()!); 

  // Renderizado basado en si hay conexión (checkConnection === true) o no (checkConnection === false)
  if (checkConnection) {
    return (
      <Div>
        <DivProfile>
        <ProfileCard
          fullName={userData[userCurrentIndex].fullName}
          userMetrics={userData[userCurrentIndex]}
          ultimaAceptada={userData[userCurrentIndex].ultimaAceptada}
          ultimaPendiente={userData[userCurrentIndex].ultimaPendiente}
          ultimaCancelada={userData[userCurrentIndex].ultimaCancelada}
          ultimoEnviado={userData[userCurrentIndex].ultimoEnviado}
          conteoAceptadas={userData[userCurrentIndex].conteoAceptadas}
          conteoConexiones={userData[userCurrentIndex].conteoConexiones}
          conteoPendientes={userData[userCurrentIndex].conteoPendientes}
          conteoCanceladas={userData[userCurrentIndex].conteoCanceladas}
          conteoEnviadas={userData[userCurrentIndex].conteoEnviadas}
        />
        </DivProfile>
        <UserProfileDetail userData={userData[userClickedIndex]} userDetail={userDetail!} />
      </Div>
    );
  } else {
    return (
      <Div>
        <DivProfile>
        <ProfileCard
          fullName={userData[userCurrentIndex].fullName}
          userMetrics={userData[userCurrentIndex]}
          ultimaAceptada={userData[userCurrentIndex].ultimaAceptada}
          ultimaPendiente={userData[userCurrentIndex].ultimaPendiente}
          ultimaCancelada={userData[userCurrentIndex].ultimaCancelada}
          ultimoEnviado={userData[userCurrentIndex].ultimoEnviado}
          conteoAceptadas={userData[userCurrentIndex].conteoAceptadas}
          conteoConexiones={userData[userCurrentIndex].conteoConexiones}
          conteoPendientes={userData[userCurrentIndex].conteoPendientes}
          conteoCanceladas={userData[userCurrentIndex].conteoCanceladas}
          conteoEnviadas={userData[userCurrentIndex].conteoEnviadas}
        />
        </DivProfile>
        <UserProfileNoDetail userData={userData[userClickedIndex]} />
      </Div>
    );
  }
};

export default DetailAboutUser;
