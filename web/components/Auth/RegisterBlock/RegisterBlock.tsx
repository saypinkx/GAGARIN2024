import { RegisterBlockProps } from './RegisterBlock.props';
import { useRouter } from 'next/router';
import { Input } from '../../Common/Input/Input';
import { InputWithEye } from '../../Common/InputWithEye/InputWithEye';
import { setLocale } from '../../../helpers/locale.helper';


export const RegisterBlock = ({ username, password, confirmPassword, pswdType, confPswdType, error, setUsername,
    setPassword, setConfirmPassword, setPswdType, setConfPswdType}: RegisterBlockProps): JSX.Element => {
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
            <InputWithEye onMouseEnter={() => setConfPswdType('text')}
                onMouseLeave={() => setConfPswdType('password')}>
                <Input type={confPswdType} text={setLocale(router.locale).confirm_password}
                    value={confirmPassword} error={error.errConfirmPassword} eye={true}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </InputWithEye>
        </>
    );
};