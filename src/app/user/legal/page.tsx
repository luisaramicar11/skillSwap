"use client"
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import skillswap_isotype from "@/public/img/skillswap-isotype.webp"
import StyledNavLink from '@/src/components/ui/links/NavLinks';
import { handlePageChange } from '@/src/lib/utils/handlePageTheme';
import { FooterMain } from '@/src/components/footer/FooterMain';

const LegalContainer = styled.article`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  margin-bottom: 54px;
`;

const Container = styled.div`
  padding: 25px;
  max-width: 800px;
  margin: auto;
  gap: 1rem;

  & hr{
    height: 2px;
    background: ${({ theme }) => theme.colors.gradientText};
    border: none;
    margin: 5px;
    opacity: 0.1;
    border-radius: 50%;
    margin-bottom: 40px;    
  }
`;

const Title = styled.h1`
  text-align: start;
  margin: 0;
  background: ${({ theme }) => theme.colors.gradientText};
  font-size: 2.5rem;
  font-weight: normal;
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0.5;
  -webkit-text-fill-color: transparent;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Arrow = styled.span`
  margin-right: 8px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: scaleX(0.5);
`;

const BackLink = styled.div` 
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  gap:5px;
  margin: 0;
  padding-bottom: 15px;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 0 !important;
    margin: 0 !important;
  }
`;

const Legal = () => {
  return (
    <LegalContainer>
      <Container>
        <BackLink onClick={() => handlePageChange("INICIO")}>
          <Arrow>&lt;</Arrow> VOLVER A <StyledNavLink href="/user" label="INICIO"></StyledNavLink><Arrow>&gt;</Arrow>
        </BackLink>
        <Title>Información Legal</Title>
        <hr />

        <Section>
          <SectionTitle><Image src={skillswap_isotype} alt="skillswap-isotype" width={25} height={25}></Image> Skillswap, Inc</SectionTitle>
          <Paragraph>Looking for Skill</Paragraph>
        </Section>

        <Section>
          <SectionTitle>Correo de Contacto</SectionTitle>
          <Paragraph><Strong>Email:</Strong> skillswap4@gmail.com</Paragraph>
        </Section>

        <Section>
          <SectionTitle>Política de Privacidad</SectionTitle>
          <Paragraph>
            En Skillswap, nos tomamos muy en serio la protección de tu privacidad. Recolectamos información personal únicamente para ofrecer un mejor servicio y mejorar tu experiencia en nuestra plataforma. Los datos que recopilamos incluyen, pero no se limitan a, nombre, correo electrónico y las habilidades que desees compartir o aprender. Esta información se usa exclusivamente para conectar a los usuarios dentro de la plataforma y no será compartida con terceros sin tu consentimiento.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Términos de Uso</SectionTitle>
          <Paragraph>
            Al utilizar Skillswap, aceptas que la plataforma es un espacio de intercambio de conocimientos, y que el uso indebido, la falta de respeto o cualquier comportamiento perjudicial hacia otros usuarios puede resultar en la cancelación de tu cuenta. Nos reservamos el derecho de modificar estos términos en cualquier momento.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Política de Cookies</SectionTitle>
          <Paragraph>
            Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Estas cookies nos permiten personalizar el contenido que ves, ofrecer recomendaciones y recopilar datos de uso para mejorar continuamente la plataforma.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Propiedad Intelectual</SectionTitle>
          <Paragraph>
            Todos los contenidos publicados en Skillswap, incluidas las imágenes, textos y logotipos, son propiedad de Skillswap o de los respectivos titulares de derechos. Queda prohibido el uso de cualquier material sin el consentimiento explícito del propietario.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Limitación de Responsabilidad</SectionTitle>
          <Paragraph>
            Skillswap es una plataforma que facilita la conexión entre usuarios para el intercambio de conocimientos. No somos responsables de la calidad de la información intercambiada entre los usuarios ni de las interacciones fuera de la plataforma. Skillswap no asume ninguna responsabilidad por daños directos o indirectos derivados del uso del sitio web.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Jurisdicción</SectionTitle>
          <Paragraph>
            Cualquier disputa que surja en relación con el uso de Skillswap será resuelta conforme a las leyes de la República de Colombia, y cualquier conflicto relacionado con los mismos se someterá a los tribunales competentes del país.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>¿Por qué Skillswap?</SectionTitle>
          <Paragraph>
            En el dinámico entorno digital de hoy, la necesidad de actualizar y fortalecer habilidades es crucial para mantener la competitividad. Skillswap ha sido creada para abordar estos desafíos con una solución moderna e innovadora. Nuestra plataforma simplifica el intercambio de conocimientos al conectar a personas que buscan aprender nuevas habilidades con aquellas dispuestas a compartir su experiencia. Creemos firmemente en el poder del aprendizaje colaborativo como motor de crecimiento personal y profesional.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>¿Para Quién?</SectionTitle>
          <Paragraph>
            Skillswap está diseñada para todos en el entorno digital, desde creativos hasta desarrolladores, estudiantes y profesionales que buscan nuevas competencias. Al unirte a nuestra comunidad, disfrutas de un entorno fresco y estimulante que facilita la enseñanza y el aprendizaje colaborativo de una manera moderna y eficiente.
          </Paragraph>
        </Section>
      </Container>
      <FooterMain />
    </LegalContainer>
  );
};

export default Legal;