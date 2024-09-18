"use client";
import styled from "styled-components";
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
      width: 30vw;
      min-width: 300px !important;
      border-bottom: solid 5px black;
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
      border-bottom: 1px solid  ${({ theme }) => theme.colors.bgSecondary};
    }

  & h4 {
      width: 100%;
      margin: 0;
      font-size: 25px;
    }

  & p{
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
  height:200px;
  display: flex;
  justify-content: center;
`;

const BannerBody = styled.div`
    width: 1000px !important;
    display: flex;
    justify-content: space-between;
`

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

//Containers for Aside Background Image

const PageAside = styled.aside`
  width: 200px;
  padding: 0;
  margin: 0;
  margin-top: 50px;
`;

const BgImageDiv = styled.div`
  top:0 ;
  position: absolute;
  background-image: url("https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-3d-dna-illustration-design-in-red-and-blue-colors-png-image_6223384.png");
  background-size: contain;
  filter: grayscale();
  opacity: 0.1;
  width: 200px;
  height: 100%;
`;

// Componente principal de la página de inicio
const UserSkills = () => {
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
            </PageBody>
            <PageAside>
              <BgImageDiv />
            </PageAside>
          </PageContent>
        </SkillsPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserSkills;
