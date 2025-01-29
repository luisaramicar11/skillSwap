"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "@/src/components/cards/CardMatchProfile";
import UserProfileNoDetail from "@/src/components/cards/CardDetailUserNoMatch";
import UserProfileDetail from "@/src/components/cards/CardDetailUserMatch";
import { Div, DivProfile, Container } from "./DetailStyling";
import { IUserCardProps } from "@/src/models/userCards.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUsersForImages } from "../../api/users";
import { checkUserConnection } from "../../api/requests";
import { FooterMain } from '@/src/components/footer/FooterMain';

const DetailAboutUser = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserCardProps | null>(null);
  const [checkConnection, setConnectionInfo] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchPeople = async () => {
        // Función para obtener el ID del usuario del localStorage
        const getCurrentIdUser = (): number | null => {
          const idString = localStorage.getItem("userId");
          return idString ? parseInt(idString, 10) : null;
        };

        const getClickedIdUser = (): number | null => {
          const idString = localStorage.getItem("clickedUserId");
          return idString ? parseInt(idString, 10) : null;
        };

        const idNumberCurrentUser = getCurrentIdUser();
        const idNumberClickedUser = getClickedIdUser();

        if (!idNumberCurrentUser || !idNumberClickedUser) {
          setError("No se pudo obtener el ID del usuario.");
          setLoading(false);
          return;
        }

        try {
          // Petición para verificar la conexión
          const isConnected = await checkUserConnection(idNumberCurrentUser, idNumberClickedUser);

          // Petición para obtener métricas de otros usuarios
          const userDataResponse = await getUsersForImages();

          if (userDataResponse) {
            setConnectionInfo(isConnected);
            const matchedUser = userDataResponse.find((user) => user.id === idNumberClickedUser);
            setUserData(matchedUser!);
          } else {
            setError('Error al cargar los datos');
          }

          setLoading(false);
        } catch (error) {
          console.log(error);
          setError("Error al cargar los datos");
          setLoading(false);
        }
      };

      fetchPeople();
    }
  }, []);

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  if (userData == null) {
    return <OurAlertsText>No se encontró el usuario.</OurAlertsText>;
  }

  // Renderizado basado en si hay conexión (checkConnection === true) o no (checkConnection === false)
  return (
    <Container>
      <Div>
        <DivProfile>
          <ProfileCard />
        </DivProfile>
        {checkConnection ? (
          <UserProfileDetail userData={userData} />
        ) : (
          <UserProfileNoDetail userData={userData} />
        )}
      </Div>
      <FooterMain />
    </Container>
  );
};

export default DetailAboutUser;
