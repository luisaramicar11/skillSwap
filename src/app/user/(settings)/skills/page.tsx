"use client";
import styled from "styled-components";
import SkillTag from "../../../../components/ui/skillTag/skillTag";
import { useState, useEffect } from "react";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { IUser } from "@/src/models/user.model";
import { getUserById } from '../../../../lib/api/users'; // Importa la función getUserById

//Container for the whole page.tsx
const PageContainer = styled.section`
  width: 100%;
  margin: 54px 0;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  & h1 {
    padding-left: 1.7rem;
    margin: 0;
    height: min-content;
    translate: 0 30px;
    font-size: 100px;
    width: 30vw;
    min-width: 300px !important;
    border-bottom: solid 5px ${({ theme }) => theme.colors.textYellow};
    background: ${({ theme }) => theme.colors.gradientSecondary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & h2 {
    width: 100%;
    margin: 0;
    font-size: 40px;
  }

  & h3 {
    padding: 10px 30px;
    width: 100% !important;
    margin: 0;
    font-size: 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  }

  & h4 {
    width: 100%;
    margin: 0;
    font-size: 25px;
  }

  & p {
    width: 100%;
    margin: 0;
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
  height: 200px;
  display: flex;
  justify-content: center;
`;

const BannerBody = styled.div`
  width: 1000px !important;
  display: flex;
  justify-content: space-between;
`;

//Container for INFO content
const SkillsPageContainer = styled.div`
  padding-top: 200px;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const PageContent = styled.div`
  width: 100%;
  height: 100%;
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

const UserSkills: React.FC = () => {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState<number | null>(null);

  // Verificar el id en localStorage solo en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const idString = localStorage.getItem('userId');
      const id = idString ? parseInt(idString, 10) : null;
      setIdNumber(id);
    }
  }, []);

  // Fetch para obtener datos de usuario
  useEffect(() => {
    const fetchUserData = async () => {
      if (!idNumber) {
        setError('ID de usuario no encontrado');
        setLoading(false);
        return;
      }

      try {
        const data = await getUserById(idNumber);  // Llama a la función getUserById
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err as string);
        setLoading(false);
      }
    };

    if (idNumber !== null) {
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

  const abilitiesArray = typeof userData!.abilities === 'string'
    ? userData!.abilities.split(',').map((ability: string) => ability.trim())
    : [];

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Skills</h1>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <SkillsPageContainer>
          <PageContent>
            <PageBody>
              <SkillTag skillsArray={abilitiesArray} />
            </PageBody>
          </PageContent>
        </SkillsPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserSkills;