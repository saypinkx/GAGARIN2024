import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { AuthFormType } from '../../../interfaces/check_auth_interface';


export interface AuthTypeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: AuthFormType,
	setType: (e: any) => void,
	setError: (e: any) => void,
}
