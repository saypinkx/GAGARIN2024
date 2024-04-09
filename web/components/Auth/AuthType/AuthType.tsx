import { AuthTypeProps } from './AuthType.props';
import styles from './AuthType.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const AuthType = ({ type, setType }: AuthTypeProps): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.authType}>
            <div className={cn(styles.typeChangeBtn, {
                [styles.active]: type === 'login',
            })} onClick={() => setType('login')}>
                <Htag tag='m' className={cn(styles.typeChangeText, {
                    [styles.activeText]: type === 'login',
                })}>
                    {setLocale(router.locale).login}
                </Htag>
            </div>
            <div className={cn(styles.typeChangeBtn, {
                [styles.active]: type === 'registration',
            })} onClick={() => setType('registration')}>
                <Htag tag='m' className={cn(styles.typeChangeText, {
                    [styles.activeText]: type === 'registration',
                })}>
                    {setLocale(router.locale).register}
                </Htag>
            </div>
        </div>
    );
};