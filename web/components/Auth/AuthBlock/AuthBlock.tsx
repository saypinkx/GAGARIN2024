import styles from './AuthBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Common/Input/Input';
import { useState } from 'react';
import { InputWithEye } from '../../Common/InputWithEye/InputWithEye';
import { CheckAuthInterface } from '../../../interfaces/check_auth_interface';
import { AuthButton } from '../AuthButton/AuthButton';
import { Htag } from '../../Common/Htag/Htag';
import { AuthType } from '../AuthType/AuthType';
import { checkAuth } from '../../../helpers/check_auth.helper';


export const AuthBlock = (): JSX.Element => {
    const router = useRouter();

    const [type, setType] = useState<'login' | 'registration'>('login');
	const [pswdType, setPswdType] = useState<'password' | 'text'>('password');
    const [confPswdType, setConfPswdType] = useState<'password' | 'text'>('password');
    

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const errType: CheckAuthInterface = {
		errUsername: false,
		errEmail: false,
		errPassword: false,
		errConfirmPassword: false,
	};
    
    const [error, setError] = useState<CheckAuthInterface>(errType);
    const [loading, setLoading] = useState<boolean>(false);

	if (type === 'login') {
        return (
            <div className={styles.authBlock}>
                <AuthType type={type} setType={setType} />
                <Input type='email' text={setLocale(router.locale).email}
                    value={email} error={error.errEmail} eye={false}
                    onChange={(e) => setEmail(e.target.value)} />
                <InputWithEye onMouseEnter={() => setPswdType('text')}
                    onMouseLeave={() => setPswdType('password')}>
                    <Input type={pswdType} text={setLocale(router.locale).password}
                        value={password} error={error.errPassword} eye={true}
                        onChange={(e) => setPassword(e.target.value)} />
                </InputWithEye>
                <AuthButton loading={loading} text={setLocale(router.locale).login}
                    onClick={() => checkAuth({
                        email: email,
                        password: password,
                    }, router.locale, setError, type, setLoading)} />
            </div>
        );
    } else {
        return (
            <div className={styles.authBlock}>
                <AuthType type={type} setType={setType} />
                <Input type='text' text={setLocale(router.locale).username}
                    value={username} error={error.errUsername} eye={false}
                    onChange={(e) => setUsername(e.target.value)} />
                <Input type='email' text={setLocale(router.locale).email}
                    value={email} error={error.errEmail} eye={false}
                    onChange={(e) => setEmail(e.target.value)} />
                <InputWithEye onMouseEnter={() => setPswdType('text')}
                    onMouseLeave={() => setPswdType('password')}>
                    <Input type={pswdType} text={setLocale(router.locale).password}
                        value={password} error={error.errPassword} eye={true}
                        onChange={(e) => setPassword(e.target.value)} />
                </InputWithEye>
                <InputWithEye onMouseEnter={() => setConfPswdType('text')}
                    onMouseLeave={() => setConfPswdType('password')}>
                    <Input type={confPswdType} text={setLocale(router.locale).confirm_password}
                        value={confirmPassword} error={error.errConfirmPassword} eye={true}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </InputWithEye>
                <AuthButton loading={loading} text={setLocale(router.locale).register}
                    onClick={() => checkAuth({
                        username: username,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword,
                    }, router.locale, setError, type, setLoading)} />
            </div>
        );
    }
};