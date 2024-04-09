import styles from './LocaleChange.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';


export const LocaleChange = (): JSX.Element => {
    const router = useRouter();

    return (
        <Link href={router.asPath} locale={router.locale === 'en' ? 'ru' : 'en'}>
            <Htag tag='m' className={styles.lang}>
                {setLocale(router.locale).language}
            </Htag>
        </Link>
    );
};