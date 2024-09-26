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
  justify-content: space-around;
  gap: 1rem;
  text-align: center;
  margin: 20px 0;

  & h1 {
    font-size: 2.2rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  & p {
    opacity: 0.7;
    text-align: start;
    font-size: 1rem !important;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.textYellow};
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 0.7rem;
  }
`;
const RatingStars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  opacity: 0.7;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 16px;
  margin: 0 2px;
  font-style: normal;
`;
const CardProfileLink: React.FC<IProfileCardProps> = ({
  fullName,
  userMetrics,
}) => {
  const abilitiesArray =
    userMetrics?.abilities
      ?.split(",")
      .map((ability: string) => ability.trim()) || [];

  return (
    <LinkProfile href="/user/settings" label="CONFIGURA">
      <ProfileHeader>
        <Avatar urlImage={userMetrics.urlImage} />
        <div>
          <ProfileName>{fullName}</ProfileName>
          {abilitiesArray.length > 0 ? (
            <Skills>
              {abilitiesArray.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </Skills>
          ) : (
            <p>No se encontraron habilidades.</p>
          )}
        </div>
      </ProfileHeader>
      <RatingSection>
        <h1>{userMetrics?.qualification}</h1>
        <DivRate>
          <p>Calificación</p>
          <RatingStars>
            {[...Array(5)].map((_, index) => {
              const rating = Math.floor(userMetrics?.qualification); // Redondea hacia abajo
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