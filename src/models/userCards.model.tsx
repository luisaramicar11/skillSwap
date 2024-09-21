export interface IUserCardProps {
    id: number;
    fullName: string;
    jobTitle: string;
    qualification: number;
    countMatches: number;
    description: string;
    abilities: string;
    imageUrl: string;
}

export interface IProfileFixedCardProps extends IProfileCardProps {
    ultimaAceptada: string
    ultimaPendiente: string
    ultimaCancelada: string
    // ultimaRecibida: string
    conteoAceptadas: number
    conteoPendientes: number
    conteoCanceladas: number
    // conteoRecibidas: number
}

export interface IAllUsersCardsProps {
users: IUserCardProps[]
}

export interface IProfileCardProps {
    fullName: string;
    userSkills: IUserCardProps;
}

export interface IRequestCardProps {
    idUsuario: number
    nombreUsuario: string
    solicitudes: {
        ultimaAceptada: string
        ultimaPendiente: string
        ultimaCancelada: string
        // ultimaRecibida: string
        conteoAceptadas: number
        conteoPendientes: number
        conteoCanceladas: number
        // conteoRecibidas: number
    }
}