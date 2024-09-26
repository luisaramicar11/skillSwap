export interface IUserRegister {
    email: string;  
    password: string;  
    name: string;           
    lastName: string;
    birthdate: Date | null; 
    description: string;  
    jobTitle: string;   
    urlLinkedin: string | null;  
    urlGithub: string | null;  
    urlBehance?: string | null; 
    urlImage: string;   
    phoneNumber: string | null;    
    category: string ;  
    abilities: string ;         
  }

export interface IUserRegisterResponse {
    message: string;
    details: {
      "text": string;
    }
}