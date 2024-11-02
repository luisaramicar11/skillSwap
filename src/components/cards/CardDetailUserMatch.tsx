"use client"
import { useState, useEffect } from "react";
import { IUser } from "@/src/models/user.model";
import styled from "styled-components";
import { IRequestOnDetailUserCardProps } from "@/src/models/detailUser.model";
import SkillTag from "../ui/skillTag/skillTag";
import { Urbanist } from "next/font/google";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUserById } from "@/src/app/api/users";
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import StyledNavLink from "../ui/links/NavLinks";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

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
  padding-left: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
  padding-top: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 1rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textDark};
  font-style: italic;
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
  align-self: start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 1rem;
  padding-left: 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.textBlack};

  & div{
    padding: 0;
  }

  & p{
    color: ${({ theme }) => theme.colors.textDark};
    border: 1px solid ${({ theme }) => theme.colors.textBlack};
  }
`;

const UserDescription = styled.div`
  min-width: 12rem;
  max-width: 12rem;
  padding-bottom: 0.5rem;
  min-height: 14.5rem;
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
  font-size: 0.8rem;
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
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 20px;
`;

const DivUserDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const DivContent = styled.div`
    display: flex;
    align-items: start;
    height: 100%;
    min-height: 14.5rem;
    width: 100%;
    gap: 1rem;
    padding-top: 1rem;

    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
`;

const Match = styled.span`
  color: ${({ theme }) => theme.colors.textOrange};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  font-size: 8px;
  font-weight: bold;
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
  width: 100%;
  min-height: 14.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  gap: 1rem;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 1rem;
`;

const SocialButton = styled.div`
  border-radius: 5px;
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textDark};

  a {
    padding: 0;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const UserProfileDetail: React.FC<IRequestOnDetailUserCardProps> = ({ userData }) => {
  const [userDetail, setUserDetail] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, [userData.id]);

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
      <Header>
        <UserInfo>
          <MainInfo>
            <ProfileImage urlImage={userDetail.urlImage} />
            <div>
              <UserName>{userData.fullName}</UserName>
              <UserTitle>
                {userDetail.jobTitle}
                <Match>⚜ Match</Match>
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
          <UserDescription>
            <H3>Descripción</H3>
            <P>{userDetail.description}</P>
            <ContactInfo>
              <h3>Email</h3>
              <span>{userDetail.email}</span>
            </ContactInfo>
            <ContactInfo>
              <h3>Teléfono</h3>
              <span>{userDetail.phoneNumber}</span>
            </ContactInfo>
            <ContactInfo>
              <h3>Generación</h3>
              <span>{userDetail.birthdate!.slice(0, 4)}</span>
            </ContactInfo>
          </UserDescription>
          <MediaContainer>
            <H3>Enlaces Externos</H3>
            <SocialButtons>
              <SocialButton>
                <FaLinkedin />
                <StyledNavLink target="_blank" href={userDetail.urlLinkedin as string} label="LinkedIn" />
              </SocialButton>
              <SocialButton>
                <FaGithubSquare />
                <StyledNavLink target="_blank" href={userDetail.urlGithub as string} label="GitHub" />
              </SocialButton>
              <SocialButton>
                <FaBehanceSquare />
                <StyledNavLink target="_blank" href={userDetail.urlBehance as string} label="Behance" />
              </SocialButton>
            </SocialButtons>
          </MediaContainer>
        </DivContent>
      </DivUserDetails>
      <Skills>
        <SkillTag skillsArray={abilitiesArray} />
      </Skills>
    </ProfileContainer>
  );
};

export default UserProfileDetail;
