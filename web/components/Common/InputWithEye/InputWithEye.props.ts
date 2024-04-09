import { ReactNode } from 'react';

export interface InputWithEyeProps {
	children: ReactNode,
	onMouseEnter: (e: any) => void,
	onMouseLeave: (e: any) => void,
}