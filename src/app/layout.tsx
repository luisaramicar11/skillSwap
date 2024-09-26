import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Providers } from './Providers';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import RouteHandler from './RootHandler';
import Head from 'next/head';

const urbanist = Urbanist({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

export const metadata: Metadata = {
  title: "SkillSwap | Looking for skill",
  description: "Aventúrate a intercambiar habilidades con SkillSwap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Atrévete a intercambiar y fortalecer tus habilidades en SkillSwap. La plataforma ideal 
          para aprender, donde los apasionados y curiosos del entorno digital se encuentran."
        />
        <meta
          name="keywords"
          content="Skill, Habilidad, Abilities, Learning, Digital, Tech, Development, Software, Entertainment, 
          Communication, Community, Improve, Marketing, Virtual, Online, Code, Design, Art, Media, Multimedia, 
          Content, Creator, Desarrollo, Backend, Frontend, Diseño, Entretenimiento, Mercadeo, Redes, Comunicación, 
          Tecnología, Aprender, Estudio, Intercambio, Exchange, Luisa, Fernanda, Ramírez, Cardona, Jonathan, Escobar,
          Arlex, Zapata, Stiven, David, Molina, Mesa, Medina, Joan, Sebastián, Caro, David, Francisco, Blandón, 
          Mena, Destreza, Conocimiento, Knowledge, franccoina"
        />
        <meta name="sitedomain" content="https://skill-swap-ten.vercel.app/" />
        <meta name="organization" content="skillswap, frn!, riwi" />
        <meta name="author" content=" David Francisco Blandón Mena, Luisa Fernanda Ramírez Cardona, Jonathan Escobar Molina, 
          David Stiven Medina Mesa, Arlex Mauricio Zapata Mesa, Joan Sebastián Zapata Caro" />
        <meta name="designer" content="David Francisco Blandón Mena, Luisa Fernanda Ramírez Cardona, Joan Sebastián Zapata Caro" />
        <meta name="copyright" content="© 2024 SkillSwap, Inc. Todos los derechos reservados." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="15days" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={urbanist.className}>
        <Providers>
          <RouteHandler>
            {children}
          </RouteHandler>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}