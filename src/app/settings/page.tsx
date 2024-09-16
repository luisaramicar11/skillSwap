'use client'
import UserInfo from "@/src/components/settings/info/Info";
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
        </SettingsContainer>
    )
}

export default UserSettings;