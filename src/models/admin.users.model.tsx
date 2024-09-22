export interface IUser {
    id: number;
    name: string;
    lastName: string;
    jobTitle: string;
    description: string;
    dateBirthday: Date; // Asegúrate de convertir este campo de string a Date
    urlImage: string;
    email: string;
    category: string;
    skills: string[]; // Considera cómo manejar este campo
    phoneNumber: string;
    urlLinkedin: string;
    urlBehance: string;
    urlGithub: string;
    role: string; // Puede ser un string que mapeas de idRol
    idState: number; // Cambiar a number
    stateName?: string; // Opcional si no se proporciona en la API
}

export interface IUsers {
    users: IUser[];
}

export interface TableDataUsers {
    data : IUser[],
    setDataToEdit: (user: IUser) => void;
    deleteData: (userId: number) => void;
}