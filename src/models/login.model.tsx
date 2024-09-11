export interface IUserLoginRequest {
    email: string;
    password: string;
  }

export interface IUserLoginResponse {
    id: number;
    email: string;
    token: string;
  }
  
  export interface AuthState {
    user: IUserLoginResponse | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }

 