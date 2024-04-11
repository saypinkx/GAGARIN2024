import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { CheckAuthInterface, PasswordType } from '../../../interfaces/check_auth_interface';


export interface RegisterBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    username: string,
    password: string,
    confirmPassword: string,
    pswdType: PasswordType,
    confPswdType: PasswordType,
    error: CheckAuthInterface,
    setUsername: (e: any) => void,
    setPassword: (e: any) => void,
    setConfirmPassword: (e: any) => void,
    setPswdType: (e: any) => void,
    setConfPswdType: (e: any) => void,
}
