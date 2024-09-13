"use client"
import React from 'react';
import styled from 'styled-components';

// Definir la paleta de colores
const colors = {
  bgTertiary: '#F5F5F5',
  textGray: '#555555',
  textYellow: '#F0AC27',
  textPurple: '#965AC6',
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContainerPersonalInformation = styled.div`
`

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 16px;
  margin: 0;
`;

const BadgeContainer = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 5px;
`;

const Badge = styled.span<{ verified?: boolean }>`
  background-color: ${(props) => (props.verified ? colors.textYellow : '#ccc')};
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
`;

const SkillsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const Skill = styled.span`
  background-color: ${({ theme }) => theme.colors.textPurple};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const Rating = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color:${({ theme }) => theme.colors.textYellow};
`;

const Description = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  padding: 10px;
  border-radius: 5px;
  color: ${colors.textGray};
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
`;

const DetailUser = () => {
  return (
    <Container>
      <ProfileImage src="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/09/Alicia-Keys-69194_SP1_200107_AK_MZ_SHOT_01_074_a.jpg" alt="Profile picture" />
      <Name>Alicia Keys</Name>
      <Role>Back-end Software Developer | Junior</Role>

      <BadgeContainer>
        <Badge verified>Verified</Badge>
        <Badge>Unknown</Badge>
      </BadgeContainer>

      <Rating>⭐ 4.5</Rating>

      <SkillsContainer>
        <Skill>HTML - Beginner</Skill>
        <Skill>Java - Beginner</Skill>
        <Skill>SpringBoot - Beginner</Skill>
      </SkillsContainer>

      <Description>
        Back-end Software Developer | Junior
      </Description>
    </Container>
  );
};

export default DetailUser;
