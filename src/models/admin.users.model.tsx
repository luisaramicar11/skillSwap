export interface IUser {
    id: number;
    name: string;
    lastName: string;
    jobTitle: string;
    description: string;
    dateBirthday: Date;
    urlImage: string;
    email: string;
    category: string;
    skills: string[];
    phoneNumber: string;
    urlLinkedin: string;
    urlBehance: string;
    urlGithub: string;
    role: string; 
    idState: number; 
    stateName?: string;
}

export interface IUsers {
    users: IUser[];
}

export interface TableDataUsers {
    data : IUser[],
    setDataToEdit: (user: IUser) => void;
    deleteData: (userId: number) => void;
}