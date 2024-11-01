"use client";
import { IUser } from '@/src/models/user.model';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface UserProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

interface IPostPreview {
  user: IUser;
}

const P = styled.p`
color: #e2e2e2;  
font-style: italic;
padding: 20px;

small {
  color: #d6d6d6;
}
`;

const PreviewContainer = styled.div`
  background-color: #2C2C2C;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const UserName = styled.h2`
  font-size: 16px;
  margin: 0;
  color: #dedede;
`;

const UserStats = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #e4e4e4;
`;

const ProfileLink = styled.a`
  color: #cfcfcf;
  text-decoration: none !important;

  &:hover {
    text-decoration: underline;
  }
`;

const PostPreview: React.FC<IPostPreview> = ({ user }) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const responseDetail = await fetch(
          `https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUserById/${user.id}`,
          { method: "GET", headers: { accept: "*/*" } }
        );

        if (!responseDetail.ok) {
          throw new Error('Error al obtener los detalles del usuario');
        }

        const userDetail = await responseDetail.json();
        const urlGithub = userDetail?.data?.response?.urlGithub;

        if (!urlGithub) {
          throw new Error('No se encontró la URL de GitHub');
        }

        const response = await fetch('/api/github-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ urlGithub }),
        });

        if (!response.ok) {
          throw new Error('Error al obtener el perfil de GitHub');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error al obtener el perfil de GitHub:', error);
        setError(`Error al obtener el perfil de GitHub :(`);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, [user.id]);

  if (loading) {
    return <P>Loading...</P>;
  }

  if (error) {
    return <P>{error} <br/><small> ⌦ Para intentar de nuevo recarga la página.</small></P>;
  }

  if (!userData) {
    return <P>No se encontraron datos del perfil de GitHub</P>;
  }

  return (
    <PreviewContainer>
      <UserInfo>
        <Avatar src={userData.avatar_url} alt="GitHub Avatar" />
        <UserName>{userData.login}</UserName>
      </UserInfo>
      <UserStats>
        Repositorios públicos: {userData.public_repos} | Seguidores: {userData.followers}
      </UserStats>
      <ProfileLink href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Ver Perfil en GitHub
      </ProfileLink>
    </PreviewContainer>
  );
};

export default PostPreview;
