import React from "react";
import styled from "styled-components";
import ConnectionRequestForm from "../forms/FormRequest"
import { IUserCardProps } from "@/src/models/userCards.model";

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
  width: 50%;
  height: 75%;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 0;
  padding: 0;
`;

const ModalHeader = styled.div`
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  color: #fff;
  padding: 0.5rem;
  padding-left: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const ModalCloseButton = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 10px;
  text-align: end;
  padding: 1.5rem;
  padding-top:2rem;
`;

const UserName = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p{
    color: #000;
    font-size: 0.8rem;
    font-weight: 500;
    font-style: italic;
  }
`;

const VerifiedBadge = styled.span`
  color: ${({ theme }) => theme.colors.textBlueDark};
  border: 1px solid ${({ theme }) => theme.colors.textBlueDark};
  font-weight: bold;
  border-radius: 3rem;
  padding: 2px 20px;
  font-size: 1rem;
`;

const DivRoute = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  padding-left: 1rem;
  margin: 0.8rem;
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
`;

const Div = styled.div`
  display: flex;
  margin: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;
const DivConnections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  margin:0;
`;

const Connections = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

// Sección de rating
const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RatingStars = styled.div`
  color: #f5c518;
  font-size: 1.2rem;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

const Modal: React.FC<IModalProps> = ({ userToRequest, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          Request Connection
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <DivRoute>C:\ User\ RequestConnection</DivRoute>
        <Div>
          <DivRequest>
          <ConnectionRequestForm/>
          </DivRequest>
          <UserInfo>
            <DivConnections>
              <Connections>
                <div>Connections</div>
                <div>🔗 30</div>
              </Connections>

              <RatingSection>
                <div>Rating</div>
                <DivRating>
                  <div>4.5</div>
                  <RatingStars>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index}>
                        {index < 4.5 ? "★" : "☆"}{" "}
                        {/* Muestra estrellas llenas o vacías */}
                      </Star>
                    ))}
                  </RatingStars>
                </DivRating>
              </RatingSection>
            </DivConnections>
            <UserDetail>
              <UserName>
                <div>{userToRequest.fullName}</div>
                <p>{userToRequest.jobTitle}</p>
              </UserName>
              <VerifiedBadge>Verified</VerifiedBadge>
            </UserDetail>
          </UserInfo>
        </Div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

