"use client";
import styled from "styled-components";
import WidgetContainer from '../../WidgetContainer/WidgetContainer';
import React, { useEffect, useState } from "react";
import { IUser } from "../../../models/user.model";

interface BannerImageDivProps {
  urlImage: string;
}

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

// Container for page.tsx content
const PageContentContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

// Containers for banner
const Banner = styled.article`
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  height: 200px;
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
  border: solid 1px ${({ theme }) => theme.colors.textDark};
`;

// Container for INFO content
const ProfilePageContainer = styled.div`
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

// Containers for Widgets and Aside
const WidgetContent = styled.div`
  padding: 20px 30px;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WidgetBody = styled.div`
  padding: 20px 30px;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const PageAside = styled.aside`
  width: max-content;
  padding: 0;
  margin: 0;
  margin-top: 50px;

  & div {
    width: 200px !important;
  }
`;

const UserProfile = ({ id, name, lastName, urlImage, jobTitle, description, birthdate, email, phoneNumber, category, abilities, urlLinkedin, urlGithub, urlBehance, roleName }:IUser) => {
  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Perfil</h1>
          <BannerImageDiv urlImage={urlImage}></BannerImageDiv>
        </BannerBody>
      </Banner>
      <PageContentContainer>
        <ProfilePageContainer>
          <PageContent>
            <PageBody>
              <WidgetContainer>
                <WidgetBody>
                  <h2>{name} {lastName}</h2>
                  <p>{jobTitle}</p>
                </WidgetBody>
              </WidgetContainer>
              <WidgetContainer>
                <WidgetBody>
                  <h4>Descripción</h4>
                  <p>{description}</p>
                </WidgetBody>
              </WidgetContainer>
              <WidgetContainer>
                <h3>Enlaces</h3>
                <WidgetContent>
                  <WidgetContainer>
                    <WidgetBody>
                      <h4>LinkedIn</h4>
                      <p>{urlLinkedin}</p>
                    </WidgetBody>
                  </WidgetContainer>
                  <WidgetContainer>
                    <WidgetBody>
                      <h4>GitHub</h4>
                      <p>{urlGithub}</p>
                    </WidgetBody>
                  </WidgetContainer>
                </WidgetContent>
              </WidgetContainer>
            </PageBody>
            <PageAside>
              <WidgetContainer>
                <h3>User Data</h3>
                <WidgetBody>
                  <p>Rol: {roleName}</p>
                  <p>Email: {email}</p>
                  <p>Teléfono: {phoneNumber}</p>
                </WidgetBody>
              </WidgetContainer>
            </PageAside>
          </PageContent>
        </ProfilePageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserProfile;
