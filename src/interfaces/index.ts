export interface ILogin {
    username: string; 
    password: string; 
}

export interface IAuthResponsive{
    access_token?: string; 
    expires_in?: number; 
    refresh_token?: string;
    scope?: string;
    token_type?: string;
    error?: string,
    error_description?: string;
}

