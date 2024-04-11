import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { CheckAuthInterface, PasswordType } from '../../../interfaces/check_auth_interface';


export interface LoginBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    username: string,
    password: string,
    pswdType: PasswordType,
    error: CheckAuthInterface,
    setUsername: (e: any) => void,
    setPassword: (e: any) => void,
    setPswdType: (e: any) => void,
}
