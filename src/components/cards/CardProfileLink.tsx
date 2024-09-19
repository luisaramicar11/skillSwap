import React from "react";
import styled from "styled-components";
import LinkProfile from "../ui/links/NavLinks";

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

const Avatar = styled.img`
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
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  text-align: center;
  margin: 20px 0;

  h1 {
    font-size: 2.2rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  p {
    opacity: 0.5;
    text-align: start;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.textOrange};
  }
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 0.9rem;
  margin: 0;
`;

const DivRate = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ProfileCardProps {
  name: string;
  skills: string[];
  rating: number;
}

const CardProfileLink: React.FC<ProfileCardProps> = ({ name, skills, rating }) => {
  return (
    <LinkProfile href="/settings" label="CONFIGURACION">
        <ProfileHeader>
          <Avatar
            src="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/09/Alicia-Keys-69194_SP1_200107_AK_MZ_SHOT_01_074_a.jpg"
            alt="profile picture"
          />
          <div>
            <ProfileName>{name}</ProfileName>
            <Skills>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </Skills>
            {/* ponerle un href con link*/}
          </div>
        </ProfileHeader>
        <RatingSection>
          <h1>{rating}</h1>
          <DivRate>
            <p>Your Rate</p>
            <Stars>★★★★☆</Stars>
          </DivRate>
        </RatingSection>
    </LinkProfile>
  );
};

export default CardProfileLink;
