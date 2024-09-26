export interface IResponseUsers {
    message: string;
    details: Details;
    data:    Data;
}

export interface Data {
    response: IUser[];
}

export interface IUser {
    id?:              number;
    name?:            string;
    lastName?:        string;
    urlImage:        string;
    jobTitle?:        string;
    description?:     string;
    birthdate?:       string;
    email?:           string;
    phoneNumber?:     string;
    category?:        string;
    abilities?:       string;
    urlLinkedin?:     URL;
    urlGithub?:       URL;
    urlBehance?:      URL;
    idStateUser?:      number;
    idRoleUser?:       number;
    suspensionDate?:   string | null,
    reactivationDate?: string | null,
    nameStateUser?:    string,
    roleName?:        RoleName;
}

export interface IUserUpdateAdmin {
    id?:              number;
    name?:            string;
    lastName?:        string;
    urlImage:        string;
    jobTitle?:        string;
    description?:     string;
    birthdate?:       string;
    email?:           string;
    phoneNumber?:     string;
    category?:        string;
    abilities?:       string;
    urlLinkedin?:     URL;
    urlGithub?:       URL;
    urlBehance?:      URL;
    idStateUser?:      number;
    idRoleUser?:       number;
    suspensionDate?:   string | null,
    reactivationDate?: string | null,
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
