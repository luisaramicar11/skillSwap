import React from "react";
import styled from "styled-components";
import ConnectionRequestForm from "../forms/FormRequest";
import { IUserCardProps } from "@/src/models/userCards.model";
import ScrollContainer from "../scroll/Scroll";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  userToRequest: IUserCardProps;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin: 0;
  padding: 0;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: 70%;
  height: 75%;
  max-height: 416px;
  padding: 20px;
  position: relative;
  margin: 0;
  border-radius: 10px;
  padding: 0;
  border: none;

  @media (max-width: 600px) {
    height: 65%;
    max-height: 335px;
  }
`;

const ModalHeader = styled.div`
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  color: #fff;
  padding: 0.5rem;
  padding-left: 1rem;
  font-weight: bold;
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

const ModalCloseButton = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const UserInfo = styled.div`
  min-width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};

  @media (max-width: 600px) {
        display: none;
    }
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colors.textTertiary};
  text-align: end;
  border-bottom-right-radius: 10px;
  width: 100%;
  padding: 1rem;
`;

const UserName = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin: 0;
  gap: 5px;

  div {
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    color: #000;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const DivRoute = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  padding-left: 1rem;
  font-size: 14px;
  margin: 0.8rem;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const DivRequest = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;

    & textarea{
      min-height: 100px;
  }
  }

  & textarea{
    max-height: 200px;
    border-radius: 10px;
  }

  & button{
    border-radius: 10px;
  }
`;

const Div = styled.div`
  display: flex;
  border-radius: 10px;
  margin: 0.8rem;
  max-height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const DivConnections = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  margin: 0;
  padding: 1rem;
`;

const Connections = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 16px;
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 16px;
  }
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RatingStars = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.2rem;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 16px;
  margin: 0 2px;
  font-style: normal;
`;

const Unknown = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  font-size: 8px;
  font-weight: bold;
`;

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  userToRequest: IUserCardProps;
}

const Modal: React.FC<IModalProps> = ({ userToRequest, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ScrollContainer overflowY="auto" overflowX='auto' marginY="16px" style={{ maxHeight: '100%' }}>
          <ModalHeader>
            Conectar
            <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
          </ModalHeader>
          <DivRoute>C:\ User\ Documents\ SkillSwap</DivRoute>
          <Div>
            <DivRequest>
              {/* Pasamos onClose al formulario */}
              <ConnectionRequestForm idReceivingUser={userToRequest.id} onClose={onClose} />
            </DivRequest>
            <UserInfo>
              <DivConnections>
                {/* Información del usuario */}
                <Connections>
                  <div>Conexiones</div>
                  <div># {userToRequest.countMatches}</div>
                </Connections>
                <RatingSection>
                  <div>Calificación</div>
                  <DivRating>
                    <div>{userToRequest.qualification}</div>
                    <RatingStars>
                      {[...Array(5)].map((_, index) => {
                        const rating = Math.floor(userToRequest?.qualification);
                        return (
                          <Star key={0}>
                            {index < rating ? "★" : "☆"}
                          </Star>
                        );
                      })}
                    </RatingStars>
                  </DivRating>
                </RatingSection>
              </DivConnections>
              <UserDetail>
                <UserName>
                  <div>{userToRequest.fullName}</div>
                  <p>{userToRequest.jobTitle}</p>
                  <Unknown>？Unknown</Unknown>
                </UserName>
              </UserDetail>
            </UserInfo>
          </Div>
        </ScrollContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
