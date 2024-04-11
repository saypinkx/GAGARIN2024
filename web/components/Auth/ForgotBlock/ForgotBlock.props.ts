import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { CheckAuthInterface, PasswordType } from '../../../interfaces/check_auth_interface';


export interface ForgotBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    username: string,
    newPassword: string,
    confirmNewPassword: string,
    pswdType: PasswordType,
    confPswdType: PasswordType,
    error: CheckAuthInterface,
    setUsername: (e: any) => void,
    setNewPassword: (e: any) => void,
    setConfirmNewPassword: (e: any) => void,
    setPswdType: (e: any) => void,
    setConfPswdType: (e: any) => void,
}
