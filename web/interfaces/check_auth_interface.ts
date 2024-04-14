export interface CheckAuthInterface {
    errUsername: boolean,
    errPassword: boolean,
    errConfirmPassword?: boolean,
}

export interface AuthDataInterface {
    username: string,
    password: string,
    confirmPassword?: string,
}

export interface GetUserInterface {
    login?: string,
    detail?: string,
}

export type AuthFormType = 'login' | 'registration' | 'forgot';
export type PasswordType = 'password' | 'text';
