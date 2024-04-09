export interface CheckAuthInterface {
    errEmail: boolean,
    errPassword: boolean,
    errConfirmPassword?: boolean,
    errFirstName?: boolean,
    errLastName?: boolean,
    errUsername?: boolean,
}

export interface AuthDataInterface {
    username?: string,
    email: string,
    password: string,
    confirmPassword?: string,
}

export interface LoginResponseInterface {
    data?: [boolean],
    error?: string,
    code: number,
    message: string,
}
