export interface CheckAuthInterface {
    errPassword: boolean,
    errConfirmPassword?: boolean,
    errUsername: boolean,
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
