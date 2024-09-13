import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const ProfileCardContainer = styled.div`
  width: 25%;
  height: 95%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  padding-top: 3rem;
  overflow: hidden;
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
  gap:0.5rem;
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
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RatingSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap:1rem;
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
    margin:0;
    color: ${({ theme }) => theme.colors.textOrange};
  }
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.5rem;
  margin:0;
`;

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 10px;
  gap: 1.5rem;
  border-left: 4px solid ${({ theme }) => theme.colors.textDark};
  padding-left: 2rem;

  .status-item {
    display: flex;
    flex-direction: column;
  }

  .status-content {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
  }

  .rejected {
    color: ${({ theme }) => theme.colors.textRed};
  }

  .accepted {
    color: ${({ theme }) => theme.colors.textBlueDark};
  }

  .pending {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .inbox{
    color: ${({ theme }) => theme.colors.textYellow};
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction:column;

`;

const H2StatusSection = styled.h2`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.1rem;
`;

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

      <StatusSection>
        <div className="status-item rejected">
          <H2StatusSection>Rejected</H2StatusSection>
          <div className="status-content">
            <FaTimes className="icon" />
            <span>{rejected.length}: {rejected.join(', ')}</span>
          </div>
        </div>
        <div className="status-item accepted">
          <H2StatusSection>Accepted</H2StatusSection>
          <div className="status-content">
            <FaCheck className="icon" />
            <span>{accepted.length}: {accepted.join(', ')}</span>
          </div>
        </div>
        <div className="status-item pending">
          <H2StatusSection>Pending</H2StatusSection>
          <div className="status-content">
            <FaClock className="icon" />
            <span>{pending.length}: {pending.join(', ')}</span>
          </div>
        </div>
        <div className="status-item inbox">
          <H2StatusSection>Inbox</H2StatusSection>
          <div className="status-content">
            <FaClock className="icon" />
            <span>{pending.length}: {pending.join(', ')}</span>
          </div>
        </div>
      </StatusSection>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

