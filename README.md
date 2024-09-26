![Logotype](./public/img/skillswap-logotype.png)

__SkillSwap__ es una plataforma moderna diseñada para facilitar el intercambio de habilidades, conectando a personas del entorno digital que deseen aprender con aquellas dispuestas a compartir sus conocimientos. 

## ¿Por qué SkillSwap?

En un entorno digital en constante evolución, actualizar y fortalecer habilidades es crucial. SkillSwap aborda los desafíos del aprendizaje colaborativo, ofreciendo una experiencia digital fluida y efectiva para el intercambio de conocimientos.

## Objetivo

Facilitar el aprendizaje continuo y la enseñanza colaborativa, creando una comunidad vibrante donde los usuarios puedan explorar sus intereses y dirigir su desarrollo personal y profesional.

## Tecnologías Utilizadas

- *Frontend*:
   -    Next.js, TypeScript, Redux Toolkit, Styled Components
- *Backend*:
   -    C#, .NET, Swagger

## Estrutura del Proyecto

```bash
├── public
│   ├── img
│   └── svg
├── src
│   ├── app
│   │   ├── (cuenta)
│   │   │   └── auth
│   │   ├── admin
│   │   │   ├── legal
│   │   │   ├── posts
│   │   │   ├── reports
│   │   │   ├── users
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   └── github-profile
│   │   ├── legal
│   │   ├── recoverPassword
│   │   ├── redux
│   │   │   ├── slices
│   │   │   └── store.ts
│   │   ├── user
│   │   │   ├── detailUser
│   │   │   ├── discover
│   │   │   ├── legal
│   │   │   ├── match
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── (settings)
│   │   │       ├── info
│   │   │       ├── profile
│   │   │       ├── metrics
│   │   │       ├── skills
│   │   │       └── social
│   │   ├── layout.tsx
│   │   ├── providers.tsx
│   │   ├── rootHandler.tsx
│   │   └── globalStyling.tsx
│   ├── components
│   │   └── ui
│   ├── hooks
│   ├── lib
│   │   ├── api
│   │   ├── services
│   │   └── utils
│   ├── models
│   └─── middleware.ts
└─── .env.local (OPCIONAL)
```

## Recursos

1. En este link podrás ver la Documentación de nuestro proyecto: 
    - https://plum-pig-ed5.notion.site/SKILLSWAP-8fa0afeb7d144278894d643549d1e669

2. En este link podrás ver la Gestión de Tareas y Sprints de nuestro proyecto: 
    -   https://msgamesje.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNTFhZDYxYjI1NTU0NGZjMmFlMjVkMWRjNTM5ODk3YzkiLCJwIjoiaiJ9

3. En este link podrás ver la realización del MockUp y Diseño de nuestro proyectos: 
    - https://www.figma.com/design/FEDH5WgaGXBLSr2xBBA8OV/rutaAvanzada.ts-Mockup?node-id=0-1&t=nLtB2dIrePCKwWu2-1

## Equipo Frontend

- David Francisco Blandón Mena
    - franccoina

- Luisa Fernanda Ramírez Cardona
    - luisaramicar11

- Joan Sebastian Zapata Caro
    - JoanZapata05

## Equipo Backend

- Arlex Mauricio Zapata Mesa
    - Arlexz96

- Jonathan Escobar Molina
    - JEscobar07

- David Steven Medina Urrego
    - medi77na

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/luisaramicar11/skillSwap.git
```

2. Correr el proyecto:

```bash
npm run dev
```

3. Crea archivo con el nombre __".env.local"__ en la raíz del proyecto:

   -    Este archivo contiene un token de GITHUB que te permite observar una preview del perfil del GitHub de nuestros usuarios.
   -    No obstante, debido al __".gitignore"__, es posible que no tengas este archivo al clonar este proyecto o que se borre al intentar transferirlo.
   -    Se recomienda crearlo manualmente, pero no te preocupes, esto no afectará tu experiencia.
  
```bash
.env.local
```

4. Escribe el siguiente código en el archivo previamente creado, para mantener el token en tu proyecto:

```bash
GITHUB_TOKEN=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
```

5. Abre [http://localhost:3000](http://localhost:3000) con tu navegador y podrás ver nuestro proyecto.

<br>

--------------------------------------------------------------------------------------------------------

<br>
<div align="center">
     <em>Muchas Gracias por aventurarte a visualizar nuestro proyecto.</strong></em><br>
        <em>Un saludo de todo el <strong>Equipo SkillSwap.</strong></em>
</div>
<br>

--------------------------------------------------------------------------------------------------------

<br>

<div align="center">
  <img src="./public/img/skillswap-isotype.png" alt="Skillswap-Isotype" width="300" />
</div>

<div align="center">
    <em>
      <strong>2024 SkillSwap, Inc. Looking for Skill.</strong><br>
      © Todos los derechos reservados.
       </em>
</div>
