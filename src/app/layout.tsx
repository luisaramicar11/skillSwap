import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { Providers } from './Providers';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import RouteHandler from './RootHandler';

const urbanist = Urbanist({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
