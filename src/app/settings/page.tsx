'use client'
import UserProfile from "@/src/components/settings/profile/Profile";
import UserSkills from "@/src/components/settings/skills/Skills";
import UserInfo from "@/src/components/settings/info/Info";
import styled from "styled-components";
import React from "react";

const SettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 54px 0;
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