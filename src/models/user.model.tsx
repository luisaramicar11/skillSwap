export interface Users {
    message: string;
    details: Details;
    data:    Data;
}

export interface Data {
    obj: Obj;
}

export interface Obj {
    id:              number;
    name:            string;
    lastName:        string;
    jobTitle:        string;
    description:     string;
    birthdate:       Date;
    email:           string;
    phoneNumber:     string;
    abilityCategory: string;
    urlLinkedin:     string;
    urlGithub:       string;
    urlBehance:      string;
    roleName:        string;
}

export interface Details {
    text: string;
}
