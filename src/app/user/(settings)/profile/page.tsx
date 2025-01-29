"use client";
import styled from "styled-components";
import WidgetContainer from '../../../../components/containers/WidgetContainer/WidgetContainer';
import React, { useEffect, useState } from "react";
import { IUser } from "../../../../models/user.model";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { getUserById } from "../../../api/users";
import { FooterMain } from '@/src/components/footer/FooterMain';

// Container for the whole page.tsx
const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  & h1 {
      margin: 0;
      height: min-content;
      translate: 0 1rem;
      font-size: 70px;
      opacity: 0.15;
      padding-left: 1rem;
    }

  & h2 {
      margin: 0;
      width: 100%;
      font-size: 20px;
      background: ${({ theme }) => theme.colors.gradientSecondary};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  & h3 {
      margin: 0;
      padding: 10px 30px;
      width: 100% !important;
      font-size: 20px;
      background: ${({ theme }) => theme.colors.gradientSecondary};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      border-bottom: 1px solid  ${({ theme }) => theme.colors.textBlack};
    }

  & h4 {
      margin: 0;
      width: 100%;
      font-size: 20px;
    }

  & p{
      margin: 0;
      width: 100%;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

// Container for page.tsx content
const PageContentContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px !important;
  padding: 20px;
`;

// Containers for banner
const Banner = styled.article`
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgBanner};
`;

const BannerBody = styled.div`
    width: 1000px !important;
    display: flex;
    justify-content: space-between;
`;

const BannerImageDiv = styled.div<{ urlImage: string }>`
  background-image: url(${(props) => props.urlImage}); 
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  translate: 0 30px;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.textBlack};

  @media (max-width: 1050px) {
    display: none;
  }
`;

// Container for INFO content
const ProfilePageContainer = styled.div`
  padding-top: 130px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1050px) {
    justify-content: center;
    flex-wrap: wrap;
    }
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobilePofilePic = styled.div<{ urlImage: string }>`
display: none;
  background-image: url(${(props) => props.urlImage}); 
  background-size: cover;
  background-position: center;
  width: 80px !important;
  height: 80px !important;
  border: solid 1px ${({ theme }) => theme.colors.textBlack};
  border-radius: 10px;

  @media (max-width: 1050px) {
    display: flex;
  }
`;

// Containers for Widgets and Aside
const WidgetContent = styled.div`
  padding: 20px 30px;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1050px) {
      width: 100%;
    }
`;

const WidgetBody = styled.div`
  padding: 20px 30px;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const WidgetBodyHorizontal = styled.div`
  padding: 20px 30px;
  gap: 20px;
  width: 100%;
  min-width: 220px;
  display: flex;
`;

const PageAside = styled.aside`
  width: max-content;
  padding: 0;
  margin: 0;
  margin-top: 80px;

  & div {
    width: 200px;
  }

  @media (max-width: 1050px) {
    margin: 0;
    width: 100%;

      & div {
        width: 100%;
      }
    }
`;

const Container = styled.div`
  margin: 54px 0;
  flex-direction: column;
  display: flex;
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

  // Muestra loading, error o los datos del usuario
  if (loading) {
    return <OurAlertsText>Cargando...</OurAlertsText>;
  }

  if (error) {
    return <OurAlertsText>Error: {error}</OurAlertsText>;
  }

  return (
    <Container>
      <PageContainer>
        <Banner>
          <BannerBody>
            <h1>Perfil</h1>
            <BannerImageDiv urlImage={userData!.urlImage}></BannerImageDiv>
          </BannerBody>
        </Banner>
        <PageContentContainer>
          <ProfilePageContainer>
            <PageContent>
              <PageAside>
                <WidgetContainer>
                  <h3>User Data</h3>
                  <WidgetBody>
                    <p><strong> Rol:</strong> {userData?.roleName}</p>
                    <p><strong>Email: </strong>{userData?.email}</p>
                    <p><strong>Teléfono: </strong> {userData?.phoneNumber}</p>
                  </WidgetBody>
                </WidgetContainer>
              </PageAside>
              <PageBody>
                <WidgetContainer>
                  <WidgetBodyHorizontal>
                    <MobilePofilePic urlImage={userData!.urlImage}></MobilePofilePic>
                    <div>
                      <h2>{userData?.name} {userData?.lastName}</h2>
                      <p>{userData?.jobTitle}</p>
                    </div>
                  </WidgetBodyHorizontal>
                </WidgetContainer>
                <WidgetContainer>
                  <WidgetBody>
                    <h4>Descripción</h4>
                    <p>{userData?.description}</p>
                  </WidgetBody>
                </WidgetContainer>
                <WidgetContainer>
                  <h3>Enlaces Externos</h3>
                  <WidgetContent>
                    <WidgetContainer>
                      <WidgetBody>
                        <h4>LinkedIn</h4>
                        <p>{userData?.urlLinkedin}</p>
                      </WidgetBody>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetBody>
                        <h4>GitHub</h4>
                        <p>{userData?.urlGithub}</p>
                      </WidgetBody>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetBody>
                        <h4>Behance</h4>
                        <p>{userData?.urlBehance}</p>
                      </WidgetBody>
                    </WidgetContainer>
                  </WidgetContent>
                </WidgetContainer>
              </PageBody>
            </PageContent>
          </ProfilePageContainer>
        </PageContentContainer>
      </PageContainer>
      <FooterMain />
    </Container >
  );
};

export default UserProfile;