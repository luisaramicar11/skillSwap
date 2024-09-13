import { ReactNode } from "react";

export interface ILinkProps {
    href: string;
    label: string;
    target?: string;
    icon?: ReactNode;
    onClick?: (label: string) => string;
}