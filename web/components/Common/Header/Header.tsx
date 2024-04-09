import styles from './Header.module.css';
import { LocaleChange } from '../LocaleChange/LocaleChange';


export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <LocaleChange />
        </header>
    );
};