import React from "react";
import styled from "styled-components";
import { FaCheck, FaTimes, FaClock, FaArrowUp } from "react-icons/fa";
import CardProfileLink from "./CardProfileLink";
import { IProfileFixedCardProps } from "@/src/models/userCards.model";

const ProfileCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgSidebar};
  width: 100%;
  height: 95%;
  min-height: 450px !important;
  display: flex;
  margin: 1rem 0rem 2rem 1rem;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};

  @media (max-width: 768px) {
    display: none !important;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 2.5rem !important;
  }
`;

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 10px;
  gap: 1.5rem;
  padding-left: 1.5rem;

  .status-item {
    display: flex;
    flex-direction: column;
  }

  .status-content {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
  }

  .rejected {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.textRed};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textRed};
    }
  }

  .accepted {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.textBlueDark};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textBlueDark};
    }
  }

  .sent {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.textSecondary};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  .inbox {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.textOrange};

    & p {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textOrange};
    }
  }
`;

const H2StatusSection = styled.h2`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.1rem;
  font-size: 0.9rem;
`;

const ProfileCard: React.FC<IProfileFixedCardProps> = ({
  fullName,
  userMetrics,
  ultimaAceptada,
  ultimaPendiente,
  ultimaCancelada,
  ultimoEnviado,
  conteoPendientes,
  conteoCanceladas,
  conteoEnviadas,
  conteoAceptadas
}) => {
  return (
    <ProfileCardContainer>
      <CardProfileLink
          fullName={fullName}
          userMetrics={userMetrics}
        />
      <StatusSection>
        <div className="status-item rejected">
          <H2StatusSection>Rechazadas</H2StatusSection>
          <div className="status-content">
            <FaTimes className="icon" />
            <p>
              {conteoCanceladas}: {ultimaCancelada}
            </p>
          </div>
        </div>
        <div className="status-item accepted">
          <H2StatusSection>Aceptadas</H2StatusSection>
          <div className="status-content">
            <FaCheck className="icon" />
            <p>
              {conteoAceptadas}: {ultimaAceptada}
            </p>
          </div>
        </div>
        <div className="status-item sent">
          <H2StatusSection>Enviadas</H2StatusSection>
          <div className="status-content">
            <FaArrowUp className="icon" />
            <p>
              {conteoEnviadas}: {ultimoEnviado}
            </p>
          </div>
        </div>
        <div className="status-item inbox">
          <H2StatusSection>Recibidas</H2StatusSection>
          <div className="status-content">
            <FaClock className="icon" />
            <p>
              {conteoPendientes}: {ultimaPendiente}
            </p>
          </div>
        </div>
      </StatusSection>
    </ProfileCardContainer>
  );
};

export default ProfileCard;