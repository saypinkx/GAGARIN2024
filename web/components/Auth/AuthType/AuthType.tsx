import { AuthTypeProps } from './AuthType.props';
import styles from './AuthType.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { CheckAuthInterface } from '../../../interfaces/check_auth_interface';
import cn from 'classnames';


export const AuthType = ({ type, setType, setError }: AuthTypeProps): JSX.Element => {
    const router = useRouter();

    const errType: CheckAuthInterface = {
		errUsername: false,
		errPassword: false,
		errConfirmPassword: false,
	};
    
    return (
        <div className={styles.authType}>
            <div className={cn(styles.typeChangeBtn, {
                [styles.active]: type === 'login',
            })} onClick={() => {
                setType('login');
                setError(errType);
            }}>
                <Htag tag='m' className={cn(styles.typeChangeText, {
                    [styles.activeText]: type === 'login',
                })}>
                    {setLocale(router.locale).login}
                </Htag>
            </div>
            <div className={cn(styles.typeChangeBtn, {
                [styles.active]: type === 'registration',
            })} onClick={() => {
                setType('registration');
                setError(errType);
            }}>
                <Htag tag='m' className={cn(styles.typeChangeText, {
                    [styles.activeText]: type === 'registration',
                })}>
                    {setLocale(router.locale).register}
                </Htag>
            </div>
        </div>
    );
};