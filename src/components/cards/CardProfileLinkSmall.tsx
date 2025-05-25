import React from "react";
import styled from "styled-components";
import LinkProfile from "../ui/links/NavLinks";
import {IShortProfileCardProps} from "@/src/models/userCards.model";

// Estilos para el header del perfil
const ProfileHeader = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

// Estilos para el avatar
const Avatar = styled.div<{ urlImage: string }>`
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  background-image: url(${(props) => props.urlImage});
  background-size: cover;
  background-position: center;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
`;

// Nombre del perfil
const ProfileName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.textDark};
`;

// Categoría del perfil en vez del arroba
const JobTitle = styled.div`
  opacity: 0.7;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// Componente principal
const CardProfileLinkSmall: React.FC<IShortProfileCardProps> = ({
    userData
}) => {
    return (
        <LinkProfile href="/user/profile" label="PERFIL">
            <ProfileHeader>
                <Avatar urlImage={userData.urlImage} />
                <div>
                    <ProfileName>{userData.name} {userData.lastName}</ProfileName>
                    <JobTitle>{userData.jobTitle}</JobTitle>
                </div>
            </ProfileHeader>
        </LinkProfile>
    );
};

export default CardProfileLinkSmall;
