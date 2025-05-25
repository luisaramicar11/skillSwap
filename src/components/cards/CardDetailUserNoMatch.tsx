"use client"
import { useState, useEffect } from "react";
import { IUser } from "@/src/models/user.model";
import styled from "styled-components";
import ModalRequest from "../modals/ModalMatch"
import { IRequestOnDetailUserCardProps } from "@/src/models/detailUser.model";
import SkillTag from "../ui/skillTag/skillTag";
import { Urbanist } from "next/font/google";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUserById } from "@/src/app/api/users";
import { getCommunityDescription } from "@/src/lib/utils/ourCommunityDescription";
import { FaArrowRight } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";

const urbanist = Urbanist({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

const ProfileContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-right: 1rem;

  & span{
    font-style: normal;
    font-family: ${urbanist.style.fontFamily};
    
    & p{
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  @media (max-width: 950px) {
      width: 100%;
    }
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  padding: 1rem 1rem 0 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;

  @media (max-width: 900px) {
      flex-wrap: wrap;
    }
`;

const UserName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0;
`;

const UserTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 400;
  margin-top: 0;
  
  @media (max-width: 400px) {
      flex-direction: column;
      align-items: start;
    }
`;

const ProfileImage = styled.div<{ urlImage: string }>`
  background-image: url(${(props) => props.urlImage != " " ? props.urlImage : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"}); 
  background-size: cover;
  background-position: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};

  @media (max-width: 769px) {
      display: none;
    }
`;

const ProfileImageMobile = styled.div<{ urlImage: string }>`
  display: none;
  background-image: url(${(props) => props.urlImage != " " ? props.urlImage : "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"}); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 14.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  margin-bottom: 1rem;

  @media (max-width: 769px) {
      display: block;
    }
`;

const ConnectionsRating = styled.div`
  display: flex;
  gap: 6rem;
  margin: 0;
  padding-bottom: 0;

  @media (max-width: 400px) {
      flex-wrap: wrap;
      gap: 1rem;
    }
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
  align-items: start;
  align-self: end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 1rem;

  & div{
    padding: 0;
  }

  & p{
    color: ${({ theme }) => theme.colors.textDark};
    border: 1px solid ${({ theme }) => theme.colors.textBlack};
  }
`;

const UserDescription = styled.div`
  min-width: 14rem;
  max-width: 14rem;
  padding-bottom: 0.5rem;
  min-height: 13.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  gap: 1rem;

  @media (max-width: 600px) {
      max-width: 100%;
    }
`;

const H3 = styled.h3`
    text-align: start;
    padding: 1rem;
    padding-bottom: 0;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
`;

const P = styled.p`
  text-align: start;
  padding: 0.6rem 1rem;
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;

const RatingSection = styled.div`
  padding-right: 1rem;
  padding-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const RatingStars = styled.div`
  font-size: 1.2rem;
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
      gap: 1.2rem
    }
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 20px;
`;

const DivUserDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
`;

const DivContent = styled.div`
    display: flex;
    align-items: start;
    height: 100%;
    min-height: 13.5rem;
    width: 100%;
    gap: 1rem;
    padding-top: 1rem;

    & section{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & span{
    display: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    & section{
      align-items: center;
    }

    & span {
      display: block;
      width: 50%;
      height: 1px;
      border-top: 1px solid ${({ theme }) => theme.colors.textDark};
      margin: 1rem 5px;
      opacity: 0.5;
    }
  }
`;

const Unknown = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-family: ${urbanist.style.fontFamily};
  color: ${({ theme }) => theme.colors.textDark};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  font-size: 8px;
  font-weight: bold;
  font-style: normal;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textDark};
  padding: 14px 24px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  gap: 10px;

  &:hover{
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    width: 90%;
    }
`;

const ButtonText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
`;

const MediaContent = styled.div`
  width: 100%;
  height: 9rem !important;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  gap: 1rem;

  @media (max-width: 600px) {
    height: 12rem !important;
    }
`;

const UserProfileNoDetail: React.FC<IRequestOnDetailUserCardProps> = ({ userData }) => {
  const [userDetail, setUserDetail] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const detailUser = await getUserById(userData.id);
        setUserDetail(detailUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos del usuario.");
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [userData.id, userData]);

  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  if (!userDetail) {
    return <OurAlertsText>No se encontraron detalles del usuario.</OurAlertsText>;
  }

  const abilitiesArray = typeof userData.abilities === 'string'
    ? userData.abilities.split(',').map((ability: string) => ability.trim())
    : [];
  return (
    <ProfileContainer>
      <ProfileImageMobile urlImage={userDetail.urlImage} />
      <Header>
        <UserInfo>
          <MainInfo>
            <ProfileImage urlImage={userDetail.urlImage} />
            <div>
              <UserName>{userData.fullName}</UserName>
              <UserTitle>
                {userDetail.jobTitle}
                <Unknown><MdQuestionMark />Unknown</Unknown>
              </UserTitle>
            </div>
          </MainInfo>
          <ConnectionsRating>
            <Connections>
              <span>Conexiones</span>
              <span># {userData.countMatches}</span>
            </Connections>
            <RatingSection>
              <div>Calificación</div>
              <DivRating>
                <div>{userData.qualification}</div>
                <RatingStars>
                  {[...Array(5)].map((_, index) => {
                    const rating = Math.floor(userData.qualification);
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
      </Header>
      <DivUserDetails>
        <DivContent>
          <section>
            <MediaContent>
              <H3>Cultura</H3>
              <P>{getCommunityDescription(userDetail.category)}</P>
            </MediaContent>
            <span></span>
            <SendButton onClick={openModal}>
              <ButtonText>ENVIAR SOLICITUD</ButtonText><FaArrowRight />
            </SendButton>
            <span></span>
          </section>
          <UserDescription>
            <H3>Descripción</H3>
            <P>{userDetail.description}</P>
          </UserDescription>
        </DivContent>
        <Skills>
          <SkillTag skillsArray={abilitiesArray} />
        </Skills>
      </DivUserDetails>
      <ModalRequest userToRequest={userData} isOpen={isModalOpen} onClose={closeModal} />
    </ProfileContainer>
  );
};

export default UserProfileNoDetail;
