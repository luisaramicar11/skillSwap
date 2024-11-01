import React from "react";
import styled from "styled-components";
import LinkProfile from "../ui/links/NavLinks";
import {
  IProfileCardProps,
} from "@/src/models/userCards.model";

const ProfileHeader = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
  padding-left: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const Avatar = styled.div<{ urlImage: string }>`
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  background-image: url(${(props) => props.urlImage}); 
  background-size: cover;
  background-position: center;
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
`;

const ProfileName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.textDark};
`;

const Skills = styled.div`
  opacity: 0.5;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  text-align: center;
  margin-top: 20px;

  & h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  & p {
    text-align: center;
    width: 100%;
    font-size: 1rem !important;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    text-align: center;
    width: 100%;
    font-size: 0.7rem;
  }
`;

const RatingStars = styled.div`
  opacity: 0.7;
  gap: 5px;
  display: flex;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 16px;
  font-style: normal;
`;

const CardProfileLink: React.FC<IProfileCardProps> = ({
  userData,
}) => {
  const abilitiesArray =
  userData?.abilities
      ?.split(",")
      .map((ability: string) => ability.trim()) || [];

  return (
    <LinkProfile href="/user/settings" label="CONFIGURA">
      <ProfileHeader>
        <Avatar urlImage={userData?.urlImage} />
        <div>
          <ProfileName>{userData?.fullName}</ProfileName>
          {abilitiesArray.length > 0 ? (
            <Skills>
              {abilitiesArray.slice(0, 3).map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </Skills>
          ) : (
            <p>No se encontraron habilidades.</p>
          )}
        </div>
      </ProfileHeader>
      <RatingSection>
        <h1>{userData?.qualification}</h1>
        <DivRate>
          <p>Calificación</p>
          <RatingStars>
            {[...Array(5)].map((_, index) => {
              const rating = Math.floor(userData?.qualification);
              return (
                <Star key={index}>
                  {index < rating ? "★" : "☆"}
                </Star>
              );
            })}
          </RatingStars>
        </DivRate>
      </RatingSection>
    </LinkProfile>
  );
};
export default CardProfileLink;