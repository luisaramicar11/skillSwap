"use client"
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  margin-top: 54px;
  margin-bottom: 54px;
  gap: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Strong = styled.strong`
  color: #000;
`;

const Legal = () => {
  return (
    <Container>
      <Title>Información Legal</Title>

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
          Cualquier disputa que surja en relación con el uso de Skillswap será resuelta conforme a las leyes aplicables en [jurisdicción ficticia] Ciudad Tech, Mundo Digital.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>¿Por qué y Para Qué Skillswap?</SectionTitle>
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

      <Section>
        <SectionTitle>Correo de Contacto</SectionTitle>
        <Paragraph><Strong>Email:</Strong> skillswap4@gmail.com</Paragraph>
      </Section>
    </Container>
  );
};

export default Legal;