import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { Providers } from './Providers';
import RouteHandler from './RootHandler';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "SkillSwap · Looking for Skill",
  description: "Intercambia habilidades del entorno digital, aprende nuevas destrezas y conecta con otros creativos en SkillSwap. La comunidad donde el saber se comparte.",
  authors: [
    { name: "David Francisco Blandón Mena, Luisa Fernanda Ramírez Cardona, Jonathan Escobar Molina, Arlex Mauricio Zapata Mesa, Joan Sebastián Zapata Caro" }
  ],
  creator: "SkillSwap Team",
  publisher: "SkillSwap Team",
  category: 'Digital Networking',
  verification: {
    google: '-OmKz-uTTgsQHQVsVnofFirPo8N0j7r9WWoO7--SUOc',
  },
  keywords: [
    "Skill", "Habilidades", "Abilities", "Learning", "Digital", "Tech", "Development", "Software", "Entertainment", "Request", "Communication", "Fortalecer",
    "Community", "Improve", "Marketing", "Virtual", "Online", "Code", "Design", "Art", "Media", "Strenghts", "Medellín", "Trabajo", "Colombia", "TypeScript",
    "Multimedia", "Content", "Creator", "Desarrollo", "Backend", "Frontend", "Diseño", "Entretenimiento", "Mercadeo", "Proyectos", "Riwi", "Redes", "Practicar",
    "Comunicación", "Tecnologías", "Aprender", "Estudio", "Intercambio", "Exchange", "Luisa", "Fernanda", "Ramírez", "Cardona", "Jonathan", "Escobar", "Conocer",
    "Arlex", "Zapata", "Stiven", "David", "Molina", "Mesa", "Medina", "Joan", "Sebastián", "Caro", "David", "Francisco", "Blandón", "Mena", "franccoina", "Laboral",
    "frn", "Vercel", "Destrezas", "Knowledges", "Conocimientos", "Descubrir", "Intercambiar", "Social", "Creativos", "Comunidad", "Cultura", "Github", "Experiencia",
    "Behance", "Linkedin", "Jobs", "Web", "UX", "UI", "Nextjs", "Match", "Conectar", "Connect", "Discover", "New", "Nuevo", "Saberes", "Ideas", "Solicitud", "Colaborar",
    "Solicitar", "Mensajes", "Message", "Compartir", "Share", "DevOps", "Frontend", "Backend", ".NET", "csharp", "C#", "Azure", "Repository", "Repositorio", "Profesional"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://skill-swap-ten.vercel.app/favicon.ico',
    shortcut: 'https://skill-swap-ten.vercel.app/favicon.ico',
    apple: 'https://skill-swap-ten.vercel.app/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillSwap · Looking for Skill',
    creator: '@franccoina',
    creatorId: '1664752708694208515',
    siteId: '1664752708694208515',
    description: 'Aventúrate a intercambiar habilidades con SkillSwap.',
    images: ['https://skill-swap-ten.vercel.app/img/skillswap-opengraph.png'],
  },
  openGraph: {
    title: "SkillSwap · Looking for Skill",
    description: "Aventúrate a intercambiar habilidades con SkillSwap.",
    url: "https://skill-swap-ten.vercel.app/",
    siteName: "SkillSwap",
    images: [
      {
        url: "https://skill-swap-ten.vercel.app/img/skillswap-opengraph.png",
        width: 1200,
        height: 630,
        alt: "SkillSwap",
      },
    ],
  },
  metadataBase: new URL("https://skill-swap-ten.vercel.app"),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="sitedomain" content="https://skill-swap-ten.vercel.app/" />
        <meta name="organization" content="skillswap, frn!, riwi" />
        <meta name="designer" content="David Francisco Blandón Mena, Luisa Fernanda Ramírez Cardona, Joan Sebastián Zapata Caro" />
        <meta name="copyright" content="© 2024 SkillSwap. Todos los derechos reservados." />
        <meta name="revisit-after" content="15days" />
      </head>
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
