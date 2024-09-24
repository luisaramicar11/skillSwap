export interface IUserLoginRequest {
    email: string;
    password: string;
  }

export interface IUserLoginResponse {
    message: string;
    data:{
      response:{
        id: number;
        role: number;
        email: string;
        token: string;
      }
      
    }
    
  }
  
  export interface AuthState {  
    user: IUserLoginResponse | null; // es la respuesta del login
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }