"use client";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import SkillTagList from "@/src/components/ui/skillTag/skillTag";
import StyledNavLink from "@/src/components/ui/links/NavLinks";
import CarouselMatched from "@/src/components/carousels/CarouselMatched";
import { IUser } from "../../../../models/user.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUserById } from "../../../api/users";
import { FooterMain } from '@/src/components/footer/FooterMain';
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { getMyCommunityDescription } from "@/src/lib/utils/ourCommunityDescription";
import { GrStatusGoodSmall } from "react-icons/gr";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const Container = styled.div`
  width: 100%;
  margin: 54px 0;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

// -------------------------------------------------------------------------------------------------

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px !important;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span{
    font-style: normal;
    font-family: ${urbanist.style.fontFamily};
    
    & p{
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
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

  @media (max-width: 768px) {
      display: block;
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
  min-width: 285px;
  max-width: 285px;
  padding-bottom: 0.5rem;
  min-height: 29rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  gap: 1rem;

  @media (max-width: 768px) {
      min-height: 15.5rem;
      max-width: 100%;
      width: 100%;
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

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
`;

const State = styled.span`
  color: ${({ theme }) => theme.colors.textOrange};
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  color: ${(props) => props.color};
  border: ${(props) => props.color} 1px solid;
  font-size: 8px;
  font-weight: bold;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-family: ${urbanist.style.fontFamily};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 1rem;

  h3 {
    font-size: 0.9rem;
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
  overflow: hidden;
  width: 100%;
  gap: 1rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
`;

const MediaContent = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
  width: 100%;
  min-height: 7.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};

  @media (max-width: 768px) {
    min-height: 10.5rem;
    }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
    font-size: 0.9rem
  }
`;

const UserProfile = () => {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState<number | null>(null);

  // Comprobamos si estamos en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const idString = localStorage.getItem('userId');
      const idNumber = idString ? parseInt(idString, 10) : null;
      setIdNumber(idNumber); // Establecemos el id en el estado
    }
  }, []);

  // Fetch para obtener datos de usuario
  useEffect(() => {
    const fetchUserData = async () => {
      if (!idNumber) return;

      try {
        const data = await getUserById(idNumber); // Usamos la función de users.ts
        setUserData(data); // Guardamos los datos del usuario
        setLoading(false);
      } catch (err) {
        setError(err as string); // Manejo de errores
        setLoading(false);
      }
    };

    if (idNumber) {
      fetchUserData();
    }
  }, [idNumber]);

  const stateBtnColor = (state: string) => {
    if (state === "Activo") return "#247755";
    else if (state === "Inactivo") return "#CF3B00";
    else return "#707070";
  }

  // Muestra loading, error o los datos del usuario
  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  const abilitiesArray = typeof userData!.abilities === 'string'
    ? userData!.abilities.split(',').map((ability: string) => ability.trim())
    : [];

  return (
    <Container>
      <PageContainer >
        <ProfileContainer>
          <ProfileImageMobile urlImage={userData!.urlImage} />
          <Header>
            <UserInfo>
              <MainInfo>
                <ProfileImage urlImage={userData!.urlImage} />
                <div>
                  <UserName>Tú, {userData!.name} {userData!.lastName}</UserName>
                  <UserTitle>
                    {userData!.jobTitle}
                    <State color={stateBtnColor(userData!.nameStateUser as string)}><GrStatusGoodSmall />{userData!.nameStateUser}</State>
                  </UserTitle>
                </div>
              </MainInfo>
            </UserInfo>
          </Header>
          <DivUserDetails>
            <DivContent>
              <MediaContainer>
                <MediaContent>
                  <H3>Enlaces Externos</H3>
                  <SocialButtons>
                    <SocialButton>
                      <FaLinkedin />
                      <StyledNavLink target="_blank" href={userData?.urlLinkedin as string} label="LinkedIn" />
                    </SocialButton>
                    <SocialButton>
                      <FaGithubSquare />
                      <StyledNavLink target="_blank" href={userData?.urlGithub as string} label="GitHub" />
                    </SocialButton>
                    <SocialButton>
                      <FaBehanceSquare />
                      <StyledNavLink target="_blank" href={userData?.urlBehance as string} label="Adobe Behance" />
                    </SocialButton>
                  </SocialButtons>
                </MediaContent>
                <MediaContent>
                  <H3>Cultura</H3>
                  <P>{getMyCommunityDescription(userData!.category)}</P>
                </MediaContent>
                <MediaContent>
                  <H3>Conexiones</H3>
                  <CarouselMatched userId={userData!.id} />
                </MediaContent>
              </MediaContainer>
              <UserDescription>
                <H3>Descripción</H3>
                <P>{userData!.description}</P>
                <ContactInfo>
                  <h3>Comunidad</h3>
                  <span>{userData!.category}</span>
                </ContactInfo>
                <ContactInfo>
                  <h3>Email</h3>
                  <span>{userData!.email}</span>
                </ContactInfo>
                <ContactInfo>
                  <h3>Teléfono</h3>
                  <span>{userData!.phoneNumber}</span>
                </ContactInfo>
                <ContactInfo>
                  <h3>Generación</h3>
                  <span>{userData!.birthdate!.slice(0, 4)}</span>
                </ContactInfo>
              </UserDescription>
            </DivContent>
          </DivUserDetails>
          <Skills>
            <SkillTagList skillsArray={abilitiesArray} />
          </Skills>
        </ProfileContainer>
      </PageContainer >
      <FooterMain />
    </Container >
  );
};

export default UserProfile;

