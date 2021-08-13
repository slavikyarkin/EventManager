export interface LoginData {
    email : string;
    password : string;
}

export interface TokenData {
    access_token : string;
    email : string;
}

export interface LoginGoogleData {
    idToken: string;  
}

export interface LoginFacebookData {
    idToken: string;  
}