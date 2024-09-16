'use client'
import UserInfo from "@/src/components/settings/info/Info";
import UserSkills from "@/src/components/settings/skills/Skills";
import styled from "styled-components";
import React from "react";

const SettingsContainer = styled.div`
background-color: blue;
  width: 100%;
  height: 100%;
  padding: 2px;
`;

const UserSettings = () => {
    return (
        <SettingsContainer>
            <UserInfo />
            <UserSkills />
        </SettingsContainer>
    )
}

export default UserSettings;