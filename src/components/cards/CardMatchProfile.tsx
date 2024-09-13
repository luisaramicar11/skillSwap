import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const ProfileCardContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 30px;
  margin: 1rem;
  padding-top: 3rem;
  overflow-x: hidden;
  border-right: 1px solid ${({ theme }) => theme.colors.textTertiary};

  @media (max-width: 1024px) {
    width: 80%; /* Ocupa más espacio en pantallas medianas */
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa todo el ancho en pantallas pequeñas */
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  gap:1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom:2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ProfileStatus = styled.div`
  color: ${({ theme }) => theme.colors.textBlueLight};
  font-size: 12px;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textBlueLight};
    margin-left: 5px;
  }
`;

const Skills = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap:1rem;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 4rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textBlack};
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textOrange};
  }
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.5rem;
`;

const StatusSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-size: 14px;
margin-bottom: 10px;
gap:1rem;
border-left: 4px solid ${({ theme }) => theme.colors.textTertiary};
padding: 1rem;

  .status-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .icon {
    margin-right: 8px;
  }

  .rejected {
    color: ${({ theme }) => theme.colors.textYellow};
  }

  .accepted {
    color: ${({ theme }) => theme.colors.textBlueDark};
  }

  .pending {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction:column;
  gap: 5px;
`;

const H2StatusSection = styled.h2`
  color: ${({ theme }) => theme.colors.textTertiary};
`

interface ProfileCardProps {
  name: string;
  skills: string[];
  rating: number;
  rejected: string[];
  accepted: string[];
  pending: string[];
  inbox: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  skills,
  rating,
  rejected,
  accepted,
  pending,
}) => {
  return (
    <ProfileCardContainer>
      <ProfileHeader>
        <Avatar src="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/09/Alicia-Keys-69194_SP1_200107_AK_MZ_SHOT_01_074_a.jpg" alt="profile picture" />
        <div>
          <ProfileName>{name}</ProfileName>
          <ProfileStatus>Active</ProfileStatus>
          <Skills>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </Skills>
        </div>
      </ProfileHeader>

      <RatingSection>
        <h1>{rating}</h1>
        <DivRate>
        <span>Your Rate</span>
        <Stars>★★★★☆</Stars>
        </DivRate>  
      </RatingSection>

      <StatusSection>
        <div className="status-item rejected">
          <H2StatusSection> Rejected</H2StatusSection> 
          <FaTimes className="icon" /> {rejected.length}: {rejected.join(', ')}
        </div>
        <div className="status-item accepted">
        <H2StatusSection>Accepted</H2StatusSection>
          <FaCheck className="icon" /> {accepted.length} : {accepted.join(', ')}
        </div>
        <div className="status-item pending">
        <H2StatusSection>Pending</H2StatusSection>
          <FaClock className="icon" /> {pending.length} : {pending.join(', ')}
        </div>
      </StatusSection>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

