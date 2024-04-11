import styles from './AuthBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Common/Input/Input';
import { useState } from 'react';
import { InputWithEye } from '../../Common/InputWithEye/InputWithEye';
import { AuthFormType, CheckAuthInterface, PasswordType } from '../../../interfaces/check_auth_interface';
import { AuthButton } from '../AuthButton/AuthButton';
import { Htag } from '../../Common/Htag/Htag';
import { AuthType } from '../AuthType/AuthType';
import { checkAuth } from '../../../helpers/check_auth.helper';
import { LoginBlock } from '../LoginBlock/LoginBlock';
import { RegisterBlock } from '../RegisterBlock/RegisterBlock';
import { ForgotBlock } from '../ForgotBlock/ForgotBlock';


export const AuthBlock = (): JSX.Element => {
    const router = useRouter();

    const [type, setType] = useState<AuthFormType>('login');
	const [pswdType, setPswdType] = useState<PasswordType>('password');
    const [confPswdType, setConfPswdType] = useState<PasswordType>('password');
    
    const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const errType: CheckAuthInterface = {
		errUsername: false,
		errPassword: false,
		errConfirmPassword: false,
	};
    
    const [error, setError] = useState<CheckAuthInterface>(errType);
    const [loading, setLoading] = useState<boolean>(false);

	if (type === 'login') {
        return (
            <div className={styles.authBlock}>
                <AuthType type={type} setType={setType} setError={setError} />
                <LoginBlock username={username} password={password} pswdType={pswdType} error={error}
                    setUsername={setUsername} setPassword={setPassword} setPswdType={setPswdType} />
                <Htag tag="s" className={styles.forgotPassword} onClick={() => {
                    setType('forgot');
                    setError(errType);
                }}>
                    {setLocale(router.locale).forgot_password}
                </Htag>
                <AuthButton loading={loading} text={setLocale(router.locale).login}
                    onClick={() => checkAuth({
                        username: username,
                        password: password,
                    }, router, setError, type, setLoading, setType)} />
            </div>
        );
    } else if (type === 'registration') {
        return (
            <div className={styles.authBlock}>
                <AuthType type={type} setType={setType} setError={setError} />
                <RegisterBlock username={username} password={password} confirmPassword={confirmPassword}
                    pswdType={pswdType} confPswdType={confPswdType} error={error} setUsername={setUsername}
                    setPassword={setPassword} setConfirmPassword={setConfirmPassword} setPswdType={setPswdType}
                    setConfPswdType={setConfPswdType} />
                <AuthButton loading={loading} text={setLocale(router.locale).register}
                    onClick={() => checkAuth({
                        username: username,
                        password: password,
                        confirmPassword: confirmPassword,
                    }, router, setError, type, setLoading, setType)} />
            </div>
        );
    } else {
        return (
            <div className={styles.authBlock}>
                <AuthType type={type} setType={setType} setError={setError} />
                <ForgotBlock username={username} newPassword={newPassword} confirmNewPassword={confirmNewPassword}
                    pswdType={pswdType} confPswdType={confPswdType} error={error} setUsername={setUsername}
                    setNewPassword={setNewPassword} setConfirmNewPassword={setConfirmNewPassword} setPswdType={setPswdType}
                    setConfPswdType={setConfPswdType} />
                <AuthButton loading={loading} text={setLocale(router.locale).change_password}
                    onClick={() => checkAuth({
                        username: username,
                        password: newPassword,
                        confirmPassword: confirmNewPassword,
                    }, router, setError, type, setLoading, setType)} />
            </div>
        );
    }
};
