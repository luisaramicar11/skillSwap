export interface IResponseUsers {
    message: string;
    details: Details;
    data:    Data;
}

export interface Data {
    obj: IUser[];
}

export interface IUser {
    id?:              number;
    name?:            string;
    lastName?:        string;
    urlImage:        string;
    jobTitle?:        string;
    description?:     string;
    birthdate?:       Date;
    email?:           string;
    phoneNumber?:     string;
    category?:        string;
    abilities?:       string[];
    abilityCategory?: string;
    urlLinkedin?:     URL;
    urlGithub?:       URL;
    urlBehance?:      URL;
    roleName?:        RoleName;
}

export enum RoleName {
    Administrador = "Administrador",
    Usuario = "Usuario",
}

export enum URL {
    Building = "Building",
    Gdgd = "gdgd",
    Ggg = "ggg",
    NoHayAun = "no hay aun",
    String = "string",
}

export interface Details {
    text: string;
}
