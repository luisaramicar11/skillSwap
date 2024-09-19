"use client"
import React from "react";
import { usePathname } from 'next/navigation';
import ClientLayout from './ClientLayout';

const RouteHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
};

export default RouteHandler;
