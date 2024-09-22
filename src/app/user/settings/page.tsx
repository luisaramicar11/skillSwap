'use client'
import UserProfile from "../../../components/settings/Profile/Profile";
import UserSkills from "@/src/components/settings/skills/Skills";
import UserInfo from "@/src/components/settings/info/Info";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { IUser } from "../../../models/user.model";


const SettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 54px 0;
    display: flex;
    flex-direction: column;
`;

const UserSettings = () => {
     // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const idString = localStorage.getItem('userId');
  const idNumber = idString ? parseInt(idString, 10) : null;
  console.log(idString);

  // Fetch para obtener datos de usuario
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://skillswapriwi.azurewebsites.net/${idString}`);

        if (!response.ok) {
          throw new Error("Error al obtener datos del usuario");
        }

        const data = await response.json();
        setUserData(data.data.obj); // Asumiendo que obj es un solo usuario
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [idString]);

  // Muestra loading, error o los datos del usuario
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
    return (
        <SettingsContainer>
        {userData && (
        <UserProfile 
          name={userData.name}
          lastName={userData.lastName}
          jobTitle={userData.jobTitle}
          description={userData.description}
          urlLinkedin={userData.urlLinkedin}
          urlGithub={userData.urlGithub}
          roleName={userData.roleName}
          email={userData.email}
          phoneNumber={userData.phoneNumber}
          urlImage="/path-to-default-image.jpg" // o podrías agregar la URL real de la imagen si está disponible
        />
      )}
            <UserSkills skills={["JavaScript", "HTML", "Adobe"]} />
            <UserInfo />
        </SettingsContainer>
    )
}

export default UserSettings;