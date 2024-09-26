"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import UserProfileNoDetail from "@/src/components/cards/CardDetailUserNoMatch";
import UserProfileDetail from "@/src/components/cards/CardDetailUserMatch";
import { Div, DivProfile } from "./DetailStyling";
import { IRequestCardProps, IUserCardProps } from "@/src/models/userCards.model";
import { IUser } from "@/src/models/user.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import {getUserById, getUsersForImages} from "../../../lib/api/users"
import {getRequestById, checkUserConnection} from "../../../lib/api/requests";

const DetailAboutUser = () => {
  const [userDetail, setUserDetail] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserCardProps[]>([]);
  const [checkConnection, setConnectionInfo] = useState<boolean | null>(null); // Ahora será booleano
  const [userMetrics, setUserMetrics] = useState<IRequestCardProps | null>(null);

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
        const detailUser = await getUserById(idNumberCurrentUser)
        setUserDetail(detailUser);

        const metricsResponse = await getRequestById(idNumberCurrentUser);
        console.log(metricsResponse.data.response)
        setUserMetrics(metricsResponse.data.response );

        // Petición para verificar la conexión
        const isConnected = await checkUserConnection(idNumberCurrentUser, idNumberClickedUser);
        setConnectionInfo(isConnected);

        // Petición para obtener métricas de otros usuarios
        const userDataResponse = await getUsersForImages();
        setUserData(userDataResponse);

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
        </DivProfile>
        <UserProfileNoDetail userData={userData[userClickedIndex]} />
      </Div>
    );
  }
};

export default DetailAboutUser;
