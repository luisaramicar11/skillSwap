import { IUser } from "./user.model";

export interface IUserCardProps {
    id: number;
    fullName: string;
    jobTitle: string;
    qualification: number;
    countMatches: number;
    description: string;
    abilities: string;
    urlImage: string;
}

export interface IUserCarouselProps {
    id: number;
    name: string;
    urlImage: string;
    category: string;
    createdAt: string;
}

export interface IUserProfileProps extends IUserCardProps, IUserSolicitudes {
}

export interface IAllUsersCardsProps {
users: IUserCardProps[]
}

export interface ITopUsersCardsProps {
    users: IUserCarouselProps[]
    }

export interface IProfileCardProps {
    userData: IUserCardProps;
}

export interface IShortProfileCardProps {
    userData: IUser;
}

export interface IRequestCardProps {
    idUsuario: number
    nombreUsuario: string
    solicitudes: IUserSolicitudes
}

export interface IUserSolicitudes {
    conteoCanceladas: number;
    ultimaCancelada: string | null;
    conteoAceptadas: number;
    ultimaAceptada: string | null;
    conteoEnviadas: number;
    ultimoEnviado: string | null;
    conteoPendientes: number;
    ultimaPendiente: string | null;
    conteoConexiones: string;
}