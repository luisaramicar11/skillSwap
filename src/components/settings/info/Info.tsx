"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import WidgetContainer from '../../WidgetContainer/WidgetContainer';

//Container for the whole page.tsx
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
      translate: 0 30px;
      font-size: 100px;
      opacity: 0.3;
    }

  & h2 {
      margin: 0;
      width: 100%;
      font-size: 40px;
    }

  & h3 {
      margin: 0;
      padding: 10px 30px;
      width: 100% !important;
      font-size: 25px;
      border-bottom: 1px solid  ${({ theme }) => theme.colors.bgSecondary};
    }

  & h4 {
      margin: 0;
      width: 100%;
      font-size: 25px;
    }

  & p{
      margin: 0;
      width: 100%;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

//Container for page.tsx content
const PageContentContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

//Containers for banner
const Banner = styled.article`
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  height:200px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgBanner};
`;

const BannerBody = styled.div`
    width: 1000px !important;
    display: flex;
    justify-content: space-between;
`

//Container for INFO content
const InfoPageContainer = styled.div`
  padding-top: 200px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//Containers for Widgets and Aside
const WidgetBody = styled.div`
  padding: 20px 30px;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const UserInfo = () => {
  const [accountState, setAccountState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccountState = async () => {
      const idString = localStorage.getItem('userId');
      const idNumber = idString ? parseInt(idString, 10) : null;

      if (!idNumber) {
        setError('ID de usuario no encontrado');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://skillswapriwi.azurewebsites.net/state/${idNumber}`, {
          method: 'GET',
          headers: {
            'accept': '*/*',
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        const data = await response.json();
        setAccountState(data.data.obj.stateName);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchAccountState();
  }, []);

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Info</h1>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <InfoPageContainer>
          <PageContent>
            <PageBody>
              <WidgetContainer>
                <WidgetBody>
                  <h4>Estado de Cuenta</h4>
                  {loading ? (
                    <p>Cargando...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    <p>{accountState === "activo" ? "Activo" : "Inactivo"}</p>
                  )}
                </WidgetBody>
              </WidgetContainer>
            </PageBody>
          </PageContent>
        </InfoPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserInfo;