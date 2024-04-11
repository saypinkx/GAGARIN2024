import { LoginBlockProps } from './LoginBlock.props';
import { useRouter } from 'next/router';
import { Input } from '../../Common/Input/Input';
import { InputWithEye } from '../../Common/InputWithEye/InputWithEye';
import { setLocale } from '../../../helpers/locale.helper';


export const LoginBlock = ({ username, password, pswdType, error, setUsername,
    setPassword, setPswdType}: LoginBlockProps): JSX.Element => {
    const router = useRouter();
    
    return (
        <>
            <Input type='text' text={setLocale(router.locale).username}
                value={username} error={error.errUsername} eye={false}
                onChange={(e) => setUsername(e.target.value)} />
            <InputWithEye onMouseEnter={() => setPswdType('text')}
                onMouseLeave={() => setPswdType('password')}>
                <Input type={pswdType} text={setLocale(router.locale).password}
                    value={password} error={error.errPassword} eye={true}
                    onChange={(e) => setPassword(e.target.value)} />
            </InputWithEye>
        </>
    );
};