
'use client';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardProfileLinkSmall from "./CardProfileLinkSmall";
import { getUserById } from "../../app/api/users";
import { OurAlertsText } from "@/src/lib/utils/ourAlertsText";
import { IUser } from "@/src/models/user.model";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const AdSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdTag = styled.div`
    align-self: start !important;
    padding: 0.2rem 0.5rem;
    background-color: #f0f0f0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem 1rem;
    font-size: 10px;
    color: #222;
`;

const Ad = styled.video`
  width: 100%;
  padding: 1rem;
  padding-top: 0;
  height: auto;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  object-fit: cover;
  background: transparent;
  border-radius: 8%;
`;

const CardAdsDiscover: React.FC = () => {
    const [userData, setUserData] = useState<IUser>({} as IUser);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (typeof window !== 'undefined') {
                const idString = localStorage.getItem('userId');
                const idNumber = idString ? parseInt(idString, 10) : null;

                if (!idNumber) {
                    setError('ID de usuario no encontrado');
                    setLoading(false);
                    return;
                }

                try {
                    // Aquí llamamos a la función getUserById con el idNumber
                    const userData = await getUserById(idNumber);

                    if (userData) {
                        setUserData(userData);
                    } else {
                        setError('Error al cargar los datos');
                    }
                } catch (err) {
                    setError('Hubo un problema con la solicitud');
                    console.log(err)
                } finally {
                    setLoading(false);
                }
            };
        }

        fetchUserData();
    }, []);

    console.log(error)

    if (loading) return <OurAlertsText>Cargando...</OurAlertsText>;

    return (
        <CardContainer>
            <AdSection>
                <CardProfileLinkSmall
                    userData={userData!}
                />
                <AdTag>#AD</AdTag>
                <Ad loop autoPlay muted playsInline>
                    <source src="/vid/skillswap-ad.mp4" type="video/mp4" />
                    Tu navegador no soporta el video HTML5.
                </Ad>
            </AdSection>
        </CardContainer>
    );
};

export default CardAdsDiscover;