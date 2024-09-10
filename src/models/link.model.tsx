export interface ILinkProps {
    href: string;
    label: string;
    target?: string;
    onClick?: (label: string) => string;
}