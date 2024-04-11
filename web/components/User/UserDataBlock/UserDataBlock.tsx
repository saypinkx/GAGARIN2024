import styles from './UserDataBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { AuthButton } from '../../Auth/AuthButton/AuthButton';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Input } from '../../Common/Input/Input';
import { ToastError } from '../../Common/Toast/Toast';
import { deleteUser } from '../../../helpers/auth.helper';
import { Htag } from '../../Common/Htag/Htag';


export const UserDataBlock = (): JSX.Element => {
    const router = useRouter();

    const user = useSelector((state: AppState) => state.user.user);

    // const [username, setUsername] = useState<string>('');
    // const [errUsername, setErrUsername] = useState<boolean>(false);

    const [loading1, setLoading1] = useState<boolean>(false);
    const [loading2, setLoading2] = useState<boolean>(false);

    return (
        <div className={styles.userDataBlock}>
            <Htag tag="m">
                {user._id}
            </Htag>
            <AuthButton loading={loading1} text={setLocale(router.locale).delete_account}
                onClick={() => {
                    deleteUser(user._id);
                    ToastError(setLocale(router.locale).account_deleted);
                    setLoading1(true);
                    localStorage.clear();

                    router.push('/');
                }} />
            <AuthButton loading={loading2} text={setLocale(router.locale).log_out}
                onClick={() => {
                    setLoading2(true);
                    localStorage.clear();

                    router.push('/');
                }} />
        </div>
    );
};