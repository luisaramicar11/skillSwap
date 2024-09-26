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

const Match = styled.span`
  color: ${({ theme }) => theme.colors.textOrange};
  padding: 1px 15px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.textOrange};
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
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 2rem;
`;
const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22rem;
  align-items: flex-start;
  width: 70%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 1rem;

  h3 {
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }

  span {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    padding-bottom: 0.5rem;
  }
`;

const MediaContainer = styled.div`
  width: 80%;
  margin: 20px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  border-radius: 10px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0;
  padding-left: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
  margin-bottom: 20px;

  & h3{
    margin:10px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 1rem;
`;

const SocialButtonLinkedin = styled.div`
  color: ${({ theme }) => theme.colors.textBlueDark};
  border-radius: 1rem;
  padding: 0.3rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.textBlueDark};
  font-weight: bold;
`;

const SocialButtonGithub = styled.div`
  color: ${({ theme }) => theme.colors.textPurple};
  border-radius: 1rem;
  padding: 0.3rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.textPurple};
  font-weight: bold;
`;

const SocialButtonBehance = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  border-radius: 1rem;
  padding: 0.3rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;

const UserProfileDetail: React.FC<IRequestOnDetailUserCardProps> = ({ userData, userDetail }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(openModal())
  const abilitiesArray = typeof userData.abilities === 'string'
    ? userData.abilities.split(',').map((ability: string) => ability.trim())
    : [];
  return (
    <>
      <ProfileContainer>
        <Header>
          <UserInfo>
            <UserName>{userData.fullName}</UserName>
            <UserTitle>{userDetail!.jobTitle}</UserTitle>
            <VerificationStatus>
              <Match>❀ Match</Match>
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
          <ProfileImage
            urlImage={userDetail!.urlImage}
          />
        </Header>

        <Skills>
          <SkillTag skillsArray={abilitiesArray} />
        </Skills>
        <DivUserDescription>
          <UserDescription>
            <H3>Descripción</H3>
            <P>{userDetail!.description}</P>
            <ContactInfo>
              <h3>Email</h3>
              <span>{userDetail!.email}</span>
            </ContactInfo>
            <ContactInfo>
              <h3>Teléfono</h3>
              <span>{userDetail!.phoneNumber}</span>
            </ContactInfo>
          </UserDescription>
        </DivUserDescription>

        <RequestContainer>
          <MediaContainer>
            <SectionTitle>
              <h3>Enlaces Externos</h3>
            </SectionTitle>

            <SocialButtons>
              <SocialButtonLinkedin>{userDetail!.urlLinkedin}</SocialButtonLinkedin>
              <SocialButtonGithub>{userDetail!.urlGithub}</SocialButtonGithub>
              <SocialButtonBehance>{userDetail!.urlBehance}</SocialButtonBehance>
            </SocialButtons>
          </MediaContainer>
        </RequestContainer>
        <ModalRequest userToRequest={userData} isOpen={isModalOpen} onClose={closeModal} />
      </ProfileContainer>
    </>
  );
};

export default UserProfileDetail;
