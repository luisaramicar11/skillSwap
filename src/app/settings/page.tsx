'use client'
import UserProfile from "@/src/components/settings/Profile/Profile";
import UserSkills from "@/src/components/settings/skills/Skills";
import UserInfo from "@/src/components/settings/Info/Info";
import styled from "styled-components";
import React from "react";

const SettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const UserSettings = () => {
    return (
        <SettingsContainer>
            <UserProfile />
            <UserSkills />
            <UserInfo />
        </SettingsContainer>
    )
}

export default UserSettings;