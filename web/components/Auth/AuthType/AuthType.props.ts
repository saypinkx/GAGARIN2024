import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface AuthTypeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'login' | 'registration',
	setType: (e: any) => void,
}
