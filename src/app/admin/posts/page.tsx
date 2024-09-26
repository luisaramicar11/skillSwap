"use client";
import React, { useState, useEffect } from 'react';
import PostPreview from "../../../components/posts/PostPreview";
import { OurAlertsText } from '@/src/lib/utils/ourAlertsText';
import { IUser } from '@/src/models/user.model';
import styled from 'styled-components';

const SliderContainer = styled.div`
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const PagePosts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar el contenido horizontalmente */

  & h1 {
    padding-left: 1.7rem;
    margin: 0;
    font-size: 50px;
    width: 50vw;
    border-bottom: solid 5px ${({ theme }) => theme.colors.textOrange};
    background: ${({ theme }) => theme.colors.gradientSecondary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const PostSlider = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  background-color: #2c2f33;
  border-radius: 8px;
  overflow: hidden;
`;

const DefaultCard = styled(PostSlider)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Posts = () => {
  const [usersData, setAllUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseAllUsers = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersAll`, 
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        if (!responseAllUsers.ok) {
          throw new Error('Error al obtener la lista de usuarios');
        }

        const allUsersData = await responseAllUsers.json();
        const usersArray = allUsersData.data.response;

        if (!Array.isArray(usersArray)) {
          throw new Error("Los datos de usuarios no son un array.");
        }

        const successfulUsers = await Promise.all(usersArray.map(async (user) => {
          try {
            if (user.urlGithub) {
              return user; // Si tiene urlGithub, lo consideramos exitoso
            }
          } catch (error) {
            console.error(`Error al procesar el usuario ${user.id}:`, error);
          }
          return null; // Si no es exitoso, retornamos null
        }));

        const filteredUsers = successfulUsers.filter(user => user !== null);
        setAllUsers(filteredUsers);

        if (filteredUsers.length === 0) {
          console.warn('No se encontraron usuarios válidos con perfil de GitHub.');
        }

      } catch (error) {
        console.error('Error en la carga de datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  return (
    <PagePosts>
      <h1>Posts de GitHub</h1>
      <SliderContainer>
        {usersData.length > 0 ? (
          usersData.map((user) => (
            <PostSlider key={user.id}>
              <PostPreview user={user} />
            </PostSlider>
          ))
        ) : (
          <DefaultCard>
            <OurAlertsText>No se encontraron usuarios.</OurAlertsText>
          </DefaultCard>
        )}
      </SliderContainer>
    </PagePosts>
  );
};

export default Posts;
