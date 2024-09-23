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

export interface IProfileFixedCardProps extends IProfileCardProps {
    ultimaAceptada: string
    ultimaPendiente: string
    ultimaCancelada: string
    ultimoEnviado: string
    conteoEnviadas: number
    conteoAceptadas: number
    conteoPendientes: number
    conteoCanceladas: number
    conteoConexiones: number
}

export interface IUserProfileProps extends IUserCardProps {
    ultimaAceptada: string
    ultimaPendiente: string
    ultimaCancelada: string
    ultimoEnviado: string
    conteoEnviadas: number
    conteoAceptadas: number
    conteoPendientes: number
    conteoCanceladas: number
    conteoConexiones: number
}

export interface IAllUsersCardsProps {
users: IUserCardProps[]
}

export interface IProfileCardProps {
    fullName: string;
    userMetrics: IUserCardProps;
}

export interface IRequestCardProps {
    idUsuario: number
    nombreUsuario: string
    solicitudes: {
        ultimaAceptada: string
        ultimaPendiente: string
        ultimaCancelada: string
        ultimoEnviado: string
        conteoEnviadas: number
        conteoAceptadas: number
        conteoPendientes: number
        conteoCanceladas: number
        conteoConexiones: number
    }
}