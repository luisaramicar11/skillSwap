import React from "react";
import styled from "styled-components";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";
import LinkProfileCard  from "./CardProfile"

const ProfileCardContainer = styled.div`
  width: 300px !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  overflow: hidden;
  border-right: 0.5px solid ${({ theme }) => theme.colors.textTertiary};

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

const ProfileStatus = styled.div`
  color: ${({ theme }) => theme.colors.textBlueLight};
  font-size: 12px;
  display: flex;
  align-items: center;

  &::after {
    content: "";
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
  gap: 1rem;
  text-align: center;
  margin-bottom: 10px;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: bold;
  }

  p {
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

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 10px;
  gap: 1.5rem;
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
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textRed};

    & p{
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textRed};
    }
  }

  .accepted {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textBlueDark};

    & p{
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textBlueDark};
    }
  }

  .pending {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textSecondary};

    & p{
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  .inbox {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textYellow};

    & p{
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textYellow};
    }
  }
`;

const DivRate = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2StatusSection = styled.h2`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.1rem;
  font-size: 1rem;
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
    <LinkProfileCard name={name} skills={skills} rating={rating}/>
      <StatusSection>
        <div className="status-item rejected">
          <H2StatusSection>Rejected</H2StatusSection>
          <div className="status-content">
            <FaTimes className="icon" />
            <p>
              {rejected.length}: {rejected.join(", ")}
            </p>
          </div>
        </div>
        <div className="status-item accepted">
          <H2StatusSection>Accepted</H2StatusSection>
          <div className="status-content">
            <FaCheck className="icon" />
            <p>
              {accepted.length}: {accepted.join(", ")}
            </p>
          </div>
        </div>
        <div className="status-item pending">
          <H2StatusSection>Pending</H2StatusSection>
          <div className="status-content">
            <FaClock className="icon" />
            <p>
              {pending.length}: {pending.join(", ")}
            </p>
          </div>
        </div>
        <div className="status-item inbox">
          <H2StatusSection>Inbox</H2StatusSection>
          <div className="status-content">
            <FaClock className="icon" />
            <p>
              {pending.length}: {pending.join(", ")}
            </p>
          </div>
        </div>
      </StatusSection>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
