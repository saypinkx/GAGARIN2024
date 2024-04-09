import styles from './Footer.module.css';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <footer className={styles.footer}>
            <span className={styles.divider} />
            <Htag tag='m' className={styles.footerText}>
                {setLocale(router.locale).gagarin_hack}
            </Htag>
        </footer>
    );
};