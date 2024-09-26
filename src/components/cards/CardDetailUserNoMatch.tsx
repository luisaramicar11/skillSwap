"use client"
import { useState } from "react";
import styled from "styled-components";
import ModalRequest from "../modals/ModalMatch"
import { IRequestOnDetailUserCardProps } from "@/src/models/detailUser.model";
import SkillTag from "../ui/skillTag/skillTag";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ProfileContainer = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  margin-bottom: 1rem;
  padding-top: 1rem;

  & span{
    font-style: normal;
    font-family: ${urbanist.style.fontFamily};
    
    & p{
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  & h3{
    background: ${({ theme }) => theme.colors.gradientSecondary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  padding-left: 1.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 0rem;
`;

const UserTitle = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textDark};
  font-style: italic;
  font-weight: 400;
  margin-top: 0;
`;

const VerificationStatus = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.1rem;
`;

const Unknown = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  padding: 2px 15px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.textDark};
  font-size: 12px;
  font-weight: bold;
`;

const ProfileImage = styled.div<{ urlImage: string }>`
  background-image: url(${(props) => props.urlImage}); 
  background-size: cover;
  background-position: center;
  width: 12rem;
  height: 12rem;
  border-radius: 10px;
  position: absolute;
  top: 6rem;
  right: 3rem;
  margin-bottom: 0rem;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
`;

const ConnectionsRating = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  padding-bottom: 0;
`;

const Connections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-bottom: 0;
  padding-left: 0;

  span {
    font-size: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: start;

    & p{ 
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 20px;
  padding: 2rem;
  padding-bottom: 0rem;
`;

const UserDescription = styled.div`
  width: 12rem;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  margin-top: 0rem;
  gap: 1rem;
  margin-right: 3rem;
`;

const H3 = styled.h3`
  text-align: start;
  padding: 5px 1rem;
  margin: 0;
  font-size: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
  font-weight: bold;
`;
const P = styled.p`
  text-align: start;
  padding: 0.6rem 1rem;
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;

const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const RatingStars = styled.div`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 1.2rem;
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textYellow};
  font-size: 20px;
`;

const DivUserDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 2rem;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 15px 25px;
  width: 60%;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  border-radius: 5px;
  margin-right: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgBanner};
  }
`;

const ButtonText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Arrow = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

const UserProfileNoDetail: React.FC<IRequestOnDetailUserCardProps> = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const abilitiesArray = typeof userData.abilities === 'string'
    ? userData.abilities.split(',').map((ability: string) => ability.trim())
    : [];
  return (
    <>
      <ProfileContainer>
        <Header>
          <UserInfo>
            <UserName>{userData.fullName}</UserName>
            <UserTitle>{userData.jobTitle}</UserTitle>
            <VerificationStatus>
              <Unknown>？Unknown</Unknown>
            </VerificationStatus>
            <ConnectionsRating>
              <Connections>
                <span>Conexiones</span>
                <span><p>↺</p>{userData.countMatches}</span>
              </Connections>
              <RatingSection>
                <div>Calificación</div>
                <DivRating>
                  <div>{userData.qualification}</div>
                  <RatingStars>
                    {[...Array(5)].map((_, index) => {
                      const rating = Math.floor(userData?.qualification); // Redondea hacia abajo
                      return (
                        <Star key={index}>
                          {index < rating ? "★" : "☆"}{" "}
                          {/* Muestra estrellas llenas o vacías */}
                        </Star>
                      );
                    })}
                  </RatingStars>

                </DivRating>
              </RatingSection>
            </ConnectionsRating>
          </UserInfo>
          <ProfileImage urlImage={userData.urlImage} />
        </Header>

        <Skills>
          <SkillTag skillsArray={abilitiesArray} />
        </Skills>
        <DivUserDescription>
          <SendButton>
            <ButtonText>ENVIAR SOLICITUD</ButtonText>
            <Arrow onClick={openModal}>→</Arrow>
          </SendButton>
          <ModalRequest userToRequest={userData} isOpen={isModalOpen} onClose={closeModal} />
          <UserDescription>
            <H3>Descripción</H3>
            <P>{userData.description}</P>
          </UserDescription>
        </DivUserDescription>
      </ProfileContainer>
    </>
  );
};

export default UserProfileNoDetail;
