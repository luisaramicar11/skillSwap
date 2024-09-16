import React from "react";
import styled from "styled-components";
import LinkProfile from "../../components/ui/links/NavLinks";

const ProfileHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 8%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.textDark};
`;

const Skills = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  text-align: center;
  margin-bottom: 10px;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.colors.textOrange};
  }
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.5rem;
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

const ProfileCard: React.FC<ProfileCardProps> = ({ name, skills, rating }) => {
  return (
    <LinkProfile href="/user" label="USUARIO">
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
            <span>Your Rate</span>
            <Stars>★★★★☆</Stars>
          </DivRate>
        </RatingSection>
    </LinkProfile>
  );
};

export default ProfileCard;
